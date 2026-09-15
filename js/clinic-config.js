/**
 * Hi-tech Dental Hospital - Clinic Configuration
 * 
 * This file contains all clinic-specific data. To rebrand for a new clinic:
 * 1. Update all values in this config
 * 2. Replace images in assets/images/ (keep filenames or update image paths here)
 * 3. Update domain in canonical URLs throughout HTML
 * 4. Deploy to your hosting
 * 
 * See TEMPLATE.md for complete rebranding instructions.
 */

const CLINIC_CONFIG = {
  // === BASIC INFORMATION ===
  name: "Hi-tech Dental Hospital",
  shortName: "Hitech Dental Clinic",
  tagline: "Expert Dental Care in Nizamabad",
  city: "Nizamabad",
  state: "Telangana",
  country: "India",
  
  // === CONTACT INFORMATION ===
  contact: {
    phone: "84623 18437",
    phoneFormatted: "+91-84623-18437",
    phoneLink: "+918462318437",
    whatsapp: "918462318437",
    email: "info@hitechdentalnizamabad.com",
    address: {
      line1: "Opp. Rajiv Gandhi Auditorium",
      line2: "Tilak Gardens, Khaleelwadi",
      city: "Nizamabad",
      state: "Telangana",
      zip: "503001",
      country: "India"
    },
    coordinates: {
      lat: 18.6740226,
      lng: 78.1027477
    }
  },
  
  // === BUSINESS HOURS ===
  hours: {
    weekdays: "10:00 AM – 9:00 PM",
    saturday: "10:00 AM – 9:00 PM",
    sunday: "10:30 AM – 1:00 PM",
    displayShort: "Mon–Sat: 10 AM–9 PM • Sun: 10:30 AM–1 PM"
  },
  
  // === BRANDING ===
  brand: {
    primaryColor: "#662D91",    // Purple
    secondaryColor: "#E31E24",  // Red
    accentColor: "#00A651",     // Green
    logo: "assets/logo.png",
    favicon: "assets/favicon.png"
  },
  
  // === SOCIAL MEDIA ===
  social: {
    facebook: "#",  // Update with actual URL or remove
    instagram: "#", // Update with actual URL or remove
    whatsappCTA: "https://wa.me/918462318437?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Hi-tech%20Dental%20Hospital."
  },
  
  // === WEBSITE ===
  website: {
    url: "https://hitechdentalnizamabad.com",
    domain: "hitechdentalnizamabad.com"
  },
  
  // === DOCTORS/SPECIALISTS ===
  doctors: [
    {
      id: "nanda-kumar",
      name: "Dr. Nanda Kumar Kommineni",
      degree: "M.D.S — Conservative Dentistry & Endodontics",
      specialty: "Endodontist (Root Canal Specialist)",
      bio: "Gold Medallist • First M.D.S in Nizamabad District",
      image: null, // Icon placeholder
      profileUrl: "doctors/dr-nanda-kumar-kommineni.html",
      specialties: ["Root Canal Treatment", "Cosmetic Restorations", "Endodontics"]
    },
    {
      id: "krishna-teja",
      name: "Dr. Krishna Teja Kommineni",
      degree: "Oral & Maxillofacial Surgeon | Implantologist",
      specialty: "Oral Surgeon & Implantologist",
      bio: "Switzerland-trained in advanced implantology",
      image: "assets/images/dr-krishna-teja.jpg",
      profileUrl: "doctors/dr-krishna-teja-kommineni.html",
      specialties: ["Dental Implants", "Oral Surgery", "Wisdom Teeth Removal"]
    },
    {
      id: "naga-swetha",
      name: "Dr. Naga Swetha",
      degree: "M.D.S — Pediatric Dentistry",
      specialty: "Pediatric Dentist (Children's Dentist)",
      bio: "Gentle dental care for children and teens",
      image: null, // Icon placeholder
      profileUrl: "doctors/dr-naga-swetha.html",
      specialties: ["Children's Dentistry", "Preventive Care", "Fluoride Treatment"]
    }
  ],
  
  // === SERVICES ===
  services: [
    {
      slug: "teeth-cleaning",
      title: "Teeth Cleaning & Scaling",
      shortDesc: "Professional cleaning to remove plaque, tartar and stains for a brighter, healthier smile.",
      icon: "🦷",
      image: "assets/images/teeth-cleaning.jpg",
      detailPage: "services/teeth-cleaning.html"
    },
    {
      slug: "root-canal",
      title: "Root Canal Treatment",
      shortDesc: "Pain-free root canal therapy to save infected teeth and restore full function.",
      icon: "🔧",
      image: "assets/images/root-canal.jpg",
      detailPage: "services/root-canal.html"
    },
    {
      slug: "dental-implants",
      title: "Dental Implants",
      shortDesc: "Permanent tooth replacement solutions that look and feel like natural teeth.",
      icon: "⚙️",
      image: "assets/images/implants.jpg",
      detailPage: "services/dental-implants.html"
    },
    {
      slug: "braces-orthodontics",
      title: "Braces & Orthodontics",
      shortDesc: "Metal, ceramic and clear aligners to straighten teeth and correct bite issues.",
      icon: "📐",
      image: "assets/images/braces.jpg",
      detailPage: "services/braces-orthodontics.html"
    },
    {
      slug: "teeth-whitening",
      title: "Teeth Whitening",
      shortDesc: "Safe, effective whitening treatments for a noticeably brighter smile in one visit.",
      icon: "✨",
      image: "assets/images/whitening.jpg",
      detailPage: "services/teeth-whitening.html"
    },
    {
      slug: "crowns-bridges",
      title: "Crowns & Bridges",
      shortDesc: "Porcelain, zirconia and metal-ceramic crowns and bridges to restore damaged teeth.",
      icon: "👑",
      image: "assets/images/crowns.jpg",
      detailPage: "services/crowns-bridges.html"
    },
    {
      slug: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      shortDesc: "Child-friendly dental care including fluoride treatment, sealants, and habit counseling.",
      icon: "👶",
      image: "assets/images/pediatric.jpg",
      detailPage: "services/pediatric-dentistry.html"
    },
    {
      slug: "tooth-extraction",
      title: "Tooth Extraction & Surgery",
      shortDesc: "Simple and surgical extractions including wisdom teeth removal with minimal discomfort.",
      icon: "💉",
      image: "assets/images/extraction.jpg",
      detailPage: "services/tooth-extraction.html"
    },
    {
      slug: "gum-treatment",
      title: "Gum Treatment",
      shortDesc: "Treatment for gingivitis and periodontitis including deep cleaning and maintenance.",
      icon: "🌿",
      image: "assets/images/gum-treatment.jpg",
      detailPage: "services/gum-treatment.html"
    }
  ],
  
  // === TESTIMONIALS ===
  testimonials: [
    {
      text: "Best dental clinic in Nizamabad! The root canal was completely painless and the staff was very caring. Highly recommended.",
      author: "Ravi Kumar",
      location: "Nizamabad City",
      rating: 5
    },
    {
      text: "My kids love coming here. The pediatric dentist is so gentle and patient. Clean clinic with modern equipment.",
      author: "Priya Sharma",
      location: "Armoor",
      rating: 5
    },
    {
      text: "Got my braces done here and the results are amazing. Very reasonable pricing compared to other clinics in the district.",
      author: "Mohammed Ali",
      location: "Bodhan",
      rating: 5
    },
    {
      text: "Dr. Krishna Teja's dental implant work is excellent. My new teeth look and feel completely natural. Thank you!",
      author: "Lakshmi Devi",
      location: "Nizamabad",
      rating: 5
    }
  ],
  
  // === TRUST STATS ===
  stats: {
    yearsExperience: 15,
    happyPatients: "10,000+",
    specialists: 3,
    services: 20
  },
  
  // === LOCAL SEO AREAS ===
  areas: [
    { name: "Bodhan", distance: "35 km", slug: "bodhan" },
    { name: "Armoor", distance: "25 km", slug: "armoor" },
    { name: "Basar", distance: "35 km", slug: "basar" },
    { name: "Bheemgal", distance: "30 km", slug: "bheemgal" },
    { name: "Dichpally", distance: "28 km", slug: "dichpally" },
    { name: "Varni", distance: "45 km", slug: "varni" },
    { name: "Mortad", distance: "20 km", slug: "mortad" },
    { name: "Jakaram", distance: "32 km", slug: "jakaram" },
    { name: "Dharpally", distance: "38 km", slug: "dharpally" },
    { name: "Navipet", distance: "30 km", slug: "navipet" },
    { name: "Kammarpally", distance: "25 km", slug: "kammarpally" },
    { name: "Nandipet", distance: "28 km", slug: "nandipet" },
    { name: "Yellareddy", distance: "40 km", slug: "yellareddy" },
    { name: "Machareddy", distance: "33 km", slug: "machareddy" },
    { name: "Mupkal", distance: "27 km", slug: "mupkal" }
  ],
  
  // === HERO IMAGES (for slider/rotation) ===
  heroImages: [
    {
      url: "assets/images/hero-clinic.jpg",
      alt: "Hi-tech Dental Hospital interior",
      caption: "Modern dental care in the heart of Nizamabad"
    },
    {
      url: "assets/images/about-clinic.jpg",
      alt: "Dental clinic reception area",
      caption: "Comfortable, welcoming environment for all patients"
    },
    {
      url: "assets/images/about-dentist.jpg",
      alt: "Experienced dental team",
      caption: "Expert M.D.S specialists dedicated to your smile"
    }
  ],
  
  // === CTA MESSAGES ===
  cta: {
    primary: "Book Appointment",
    whatsapp: "WhatsApp Us",
    call: "Call Now",
    defaultWhatsAppMessage: "Hello, I would like to book an appointment at Hi-tech Dental Hospital."
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLINIC_CONFIG;
}
