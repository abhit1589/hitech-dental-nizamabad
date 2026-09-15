#!/usr/bin/env node

/**
 * Launch Path Studio - Dental Clinic Site Generator
 * 
 * Reads intake JSON and generates/updates clinic-config.js + patches HTML where needed.
 * 
 * Usage:
 *   node scripts/generate-from-intake.mjs path/to/intake.json
 * 
 * This script is idempotent - safe to run multiple times.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, message) {
  log(`[${step}] ${message}`, 'blue');
}

function logSuccess(message) {
  log(`✓ ${message}`, 'green');
}

function logWarning(message) {
  log(`⚠ ${message}`, 'yellow');
}

function logError(message) {
  log(`✗ ${message}`, 'red');
}

// Validate intake against schema requirements
function validateIntake(intake) {
  const required = [
    'name', 'shortName', 'tagline', 'city', 'state', 'country',
    'contact', 'hours', 'domain', 'googleMapsUrl', 'logoPath',
    'doctors', 'services', 'googleReviews'
  ];

  const missing = required.filter(field => !intake[field]);
  
  if (missing.length > 0) {
    logError(`Missing required fields: ${missing.join(', ')}`);
    return false;
  }

  // Validate Google reviews
  if (!intake.googleReviews.reviews || intake.googleReviews.reviews.length < 8) {
    logError('Need at least 8 Google reviews (8-12 recommended)');
    return false;
  }

  // Validate all reviews are 5-star
  const non5star = intake.googleReviews.reviews.filter(r => r.rating !== 5);
  if (non5star.length > 0) {
    logError('All reviews must be 5-star only');
    return false;
  }

  // Validate doctors
  if (!intake.doctors || intake.doctors.length === 0) {
    logError('Need at least one doctor');
    return false;
  }

  // Validate services
  if (!intake.services || intake.services.length === 0) {
    logError('Need at least one service');
    return false;
  }

  return true;
}

// Generate clinic-config.js content from intake
function generateClinicConfig(intake) {
  // Calculate rating and total from reviews (always show individual reviews, not aggregate)
  const reviewCount = intake.googleReviews.reviews.length;
  
  // Build the config object structure
  const config = {
    name: intake.name,
    shortName: intake.shortName,
    tagline: intake.tagline,
    city: intake.city,
    state: intake.state,
    country: intake.country,
    contact: intake.contact,
    hours: intake.hours,
    brand: {
      primaryColor: intake.brandColors?.primaryColor || '#662D91',
      secondaryColor: intake.brandColors?.secondaryColor || '#E31E24',
      accentColor: intake.brandColors?.accentColor || '#00A651',
      logo: `assets/${intake.logoPath}`,
      favicon: 'assets/favicon.png'
    },
    social: {
      facebook: intake.social?.facebook || '#',
      instagram: intake.social?.instagram || '#',
      whatsappCTA: `https://wa.me/${intake.contact.whatsapp}?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment%20at%20${encodeURIComponent(intake.name)}.`
    },
    website: {
      url: `https://${intake.domain}`,
      domain: intake.domain
    },
    doctors: intake.doctors.map(doc => ({
      id: doc.id,
      name: doc.name,
      degree: doc.degree,
      specialty: doc.specialty,
      bio: doc.bio,
      image: doc.image ? `assets/images/${doc.image}` : null,
      profileUrl: `doctors/dr-${doc.id}.html`,
      specialties: doc.specialties
    })),
    services: intake.services.map(svc => ({
      slug: svc.slug,
      title: svc.title,
      shortDesc: svc.shortDesc,
      icon: svc.icon,
      image: `assets/images/${svc.image || svc.slug + '.jpg'}`,
      detailPage: `services/${svc.slug}.html`
    })),
    googleReviews: {
      rating: 5.0, // Display as perfect since we only show 5-star reviews
      totalReviews: reviewCount,
      googleMapsUrl: intake.googleMapsUrl,
      reviews: intake.googleReviews.reviews
    },
    stats: intake.stats || {
      yearsExperience: 10,
      happyPatients: '5,000+',
      specialists: intake.doctors.length,
      services: intake.services.length
    },
    areas: intake.areas || [],
    heroImages: [
      {
        url: 'assets/images/hero-clinic.jpg',
        alt: `${intake.shortName} interior`,
        caption: `Modern dental care in the heart of ${intake.city}`
      },
      {
        url: 'assets/images/about-clinic.jpg',
        alt: 'Dental clinic reception area',
        caption: 'Comfortable, welcoming environment for all patients'
      },
      {
        url: 'assets/images/about-dentist.jpg',
        alt: 'Experienced dental team',
        caption: 'Expert specialists dedicated to your smile'
      }
    ],
    cta: {
      primary: 'Book Appointment',
      whatsapp: 'WhatsApp Us',
      call: 'Call Now',
      defaultWhatsAppMessage: `Hello, I would like to book an appointment at ${intake.name}.`
    }
  };

  // Generate the JavaScript file content
  const fileContent = `/**
 * ${intake.name} - Clinic Configuration
 * 
 * This file contains all clinic-specific data. To rebrand for a new clinic:
 * 1. Update all values in this config
 * 2. Replace images in assets/images/ (keep filenames or update image paths here)
 * 3. Update domain in canonical URLs throughout HTML
 * 4. Deploy to your hosting
 * 
 * See TEMPLATE.md for complete rebranding instructions.
 */

const CLINIC_CONFIG = ${JSON.stringify(config, null, 2)};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLINIC_CONFIG;
}
`;

  return fileContent;
}

// Find and replace domain in HTML files
function updateHTMLDomains(oldDomain, newDomain, projectRoot) {
  logStep('4', `Updating domain references: ${oldDomain} → ${newDomain}`);
  
  const htmlFiles = [];
  
  function findHTMLFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        findHTMLFiles(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        htmlFiles.push(fullPath);
      }
    }
  }
  
  findHTMLFiles(projectRoot);
  
  let updatedCount = 0;
  for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Replace all instances of old domain
    content = content.replace(new RegExp(oldDomain, 'g'), newDomain);
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      updatedCount++;
    }
  }
  
  logSuccess(`Updated ${updatedCount} HTML files with new domain`);
}

// Update main.js WhatsApp configuration
function updateMainJS(intake, projectRoot) {
  logStep('5', 'Updating WhatsApp configuration in main.js');
  
  const mainJSPath = path.join(projectRoot, 'js', 'main.js');
  
  if (!fs.existsSync(mainJSPath)) {
    logWarning('main.js not found, skipping WhatsApp config update');
    return;
  }
  
  let content = fs.readFileSync(mainJSPath, 'utf8');
  
  // Update WhatsApp number and message
  content = content.replace(
    /const WHATSAPP_NUMBER = ['"].*?['"];/,
    `const WHATSAPP_NUMBER = '${intake.contact.whatsapp}';`
  );
  
  content = content.replace(
    /const WHATSAPP_MESSAGE = ['"].*?['"];/,
    `const WHATSAPP_MESSAGE = 'Hello, I would like to book an appointment at ${intake.name}.';`
  );
  
  fs.writeFileSync(mainJSPath, content, 'utf8');
  logSuccess('Updated WhatsApp configuration');
}

// Main execution
async function main() {
  log('\n╔════════════════════════════════════════════╗', 'bright');
  log('║  Launch Path Studio Site Generator        ║', 'bright');
  log('╚════════════════════════════════════════════╝\n', 'bright');
  
  // Get intake file path from command line
  const intakeFilePath = process.argv[2];
  
  if (!intakeFilePath) {
    logError('Usage: node scripts/generate-from-intake.mjs path/to/intake.json');
    process.exit(1);
  }
  
  // Resolve paths
  const projectRoot = path.resolve(__dirname, '..');
  const intakePath = path.resolve(projectRoot, intakeFilePath);
  
  // Step 1: Read intake file
  logStep('1', `Reading intake file: ${path.basename(intakePath)}`);
  
  if (!fs.existsSync(intakePath)) {
    logError(`Intake file not found: ${intakePath}`);
    process.exit(1);
  }
  
  let intake;
  try {
    const intakeContent = fs.readFileSync(intakePath, 'utf8');
    intake = JSON.parse(intakeContent);
    logSuccess('Intake file loaded successfully');
  } catch (err) {
    logError(`Failed to parse intake JSON: ${err.message}`);
    process.exit(1);
  }
  
  // Step 2: Validate intake
  logStep('2', 'Validating intake data');
  if (!validateIntake(intake)) {
    logError('Intake validation failed');
    process.exit(1);
  }
  logSuccess('Intake validation passed');
  
  // Step 3: Generate clinic-config.js
  logStep('3', 'Generating clinic-config.js');
  const configContent = generateClinicConfig(intake);
  const configPath = path.join(projectRoot, 'js', 'clinic-config.js');
  
  // Backup existing config if it exists
  if (fs.existsSync(configPath)) {
    const backupPath = configPath + '.backup';
    fs.copyFileSync(configPath, backupPath);
    logSuccess(`Backed up existing config to clinic-config.js.backup`);
  }
  
  fs.writeFileSync(configPath, configContent, 'utf8');
  logSuccess('Generated js/clinic-config.js');
  
  // Step 4: Update HTML domain references (optional, only if domain changed)
  const oldDomain = 'hitechdentalnizamabad.com'; // Default/template domain
  if (intake.domain !== oldDomain) {
    updateHTMLDomains(oldDomain, intake.domain, projectRoot);
  } else {
    logStep('4', 'Domain unchanged, skipping HTML updates');
  }
  
  // Step 5: Update main.js WhatsApp config
  updateMainJS(intake, projectRoot);
  
  // Step 6: Summary and next steps
  log('\n╔════════════════════════════════════════════╗', 'bright');
  log('║  Generation Complete!                     ║', 'bright');
  log('╚════════════════════════════════════════════╝\n', 'bright');
  
  log('Generated files:', 'bright');
  log('  ✓ js/clinic-config.js (clinic configuration)');
  log('  ✓ Updated HTML files with domain');
  log('  ✓ Updated main.js WhatsApp config\n');
  
  log('Next steps:', 'yellow');
  log('  1. Verify generated config: js/clinic-config.js');
  log('  2. Replace clinic logo: assets/' + intake.logoPath);
  log('  3. Replace service/clinic images in assets/images/');
  log(`  4. Test locally: python3 -m http.server 8000`);
  log('  5. Deploy to production server\n');
  
  log(`Clinic: ${intake.name}`, 'green');
  log(`Domain: ${intake.domain}`, 'green');
  log(`Doctors: ${intake.doctors.length}`, 'green');
  log(`Services: ${intake.services.length}`, 'green');
  log(`Reviews: ${intake.googleReviews.reviews.length} (5-star)`, 'green');
  
  log('\n✨ Ready for deployment!\n', 'bright');
}

// Run the generator
main().catch(err => {
  logError(`Fatal error: ${err.message}`);
  console.error(err);
  process.exit(1);
});
