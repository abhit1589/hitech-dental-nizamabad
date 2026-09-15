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
  
  // === GOOGLE REVIEWS (Real 5-star reviews from Google Business Profile) ===
  // Source: https://www.google.com/maps/place/Hi-tech+dental+hospital/@18.6741521,78.1027688,17z
  // Note: rating and totalReviews fields are not displayed per template product rule
  // (startups may have few/no reviews; show individual 5★ cards only)
  googleReviews: {
    // rating: 4.8,  // Not displayed
    // totalReviews: 94,  // Not displayed
    googleMapsUrl: "https://www.google.com/maps/place/Hi-tech+dental+hospital/@18.6741521,78.1027688,17z/data=!4m8!3m7!1s0x3bcddb2e51a7c755:0xe88fdcc518d6a148!8m2!3d18.6741521!4d78.1027688!9m1!1b1!16s%2Fg%2F11b6gjhxgm",
    reviews: [
      {
        text: "I had a great experience at this dental hospital. The doctors were professional, patient, and explained the treatment clearly before starting. The staff was friendly and supportive, and the entire process was smooth and well organized. The clinic was clean, hygienic, and maintained high standards of care.",
        author: "Haritha Kommi",
        rating: 5
      },
      {
        text: "Great experience at Hi-Tech Dental Hospital. The ambience is clean, calm, and welcoming. The doctors are friendly and provide excellent treatment. Highly recommended!",
        author: "Akshari Gandla",
        rating: 5
      },
      {
        text: "I was really nervous before my visit, but the doctor made me feel calm and comfortable. The treatment was smooth and painless. Thank you for such great care!! Happy with the treatment.",
        author: "Gopu Sahitha",
        rating: 5
      },
      {
        text: "HI TECH dental is very good and I recommended to visit here if you have any dental problems.",
        author: "Anreddy a",
        rating: 5
      },
      {
        text: "My sister and I both had our orthodontic treatment at this hospital, and our experience was excellent. The entire staff was very kind, professional, and supportive throughout the treatment. Special thanks to Dr. Tirumala Naidu for his patience, clear explanations, and expertise.",
        author: "Lubna Shazi",
        rating: 5
      },
      {
        text: "I had an amazing experience at Hi-tech dental clinic. The doctors are very humble, kind, caring, and supportive. They explain everything properly and treat patients with great patience and respect.",
        author: "Amrita Mallavarapu",
        rating: 5
      },
      {
        text: "Excellent dental care with a friendly and professional team. The doctors explained everything clearly and made me feel comfortable throughout the treatment. Highly recommend!",
        author: "Jayashree M",
        rating: 5
      },
      {
        text: "Treatment was top notch. Throughout the treatment I felt very comfortable and confident. Very happy with the results. I'll forever be thankful to doctors and staff. I'll definitely recommend this hospital without any doubt.",
        author: "Anjali Reddy",
        rating: 5
      },
      {
        text: "I met with an accident with upper front teeth broken. Under the supervision of Sri K. Nanda Kumar Sir... Special thanks to Dr. Krishna Teja Sir, K. Naga Swetha Madam... Highly recommended from my bottom of my heart for anyone looking for quality dental care!",
        author: "A Shiva Kumar Yadav",
        rating: 5
      },
      {
        text: "A wonderful experience from start to finish. Clean ambience, friendly staff, and painless treatment. Thank you, Hi-Tech Dental Hospital!",
        author: "Sreeja Sunkara",
        rating: 5
      },
      {
        text: "I am very satisfied with doctors treatment and I feel very happy. Doctor Krishna Teja and doctor Naga Swetha suggestions are very good. Thank you Hi-tech Dental Hospital Dr. K Nandakumar.",
        author: "Sujatha Konda",
        rating: 5
      },
      {
        text: "Had a great experience with the team. Very satisfied with the treatment. The doctors are very friendly and you can share your problem without hesitation. I highly recommend the hospital for better dental care.",
        author: "Ummaji Srainitha",
        rating: 5
      }
    ]
  },
  
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
