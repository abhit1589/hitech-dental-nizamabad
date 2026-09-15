# Hi-tech Dental Hospital / Clinic Website

Official website for **Hi-tech Dental Hospital** in Nizamabad, Telangana, India.

## About

Hi-tech Dental Hospital is a leading dental practice in Nizamabad serving patients across Nizamabad district and surrounding areas. Our team of M.D.S specialists provides comprehensive oral healthcare for patients of all ages.

## Website Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Complete Information**: Services, doctor profiles, contact details, and area pages for local SEO
- **SEO Optimized**: Proper meta tags, structured data (Schema.org), Open Graph tags
- **WhatsApp Integration**: Floating WhatsApp button for easy appointment booking
- **Modern UI**: Clean, professional design with clinic brand colors

## Technology

- Static HTML/CSS/JavaScript site
- No build process required
- Can be hosted on any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Structure

```
/
├── index.html          # Homepage
├── about.html          # About the clinic and team
├── services.html       # Dental services offered
├── contact.html        # Contact form and location
├── doctors/            # Individual doctor profile pages
│   ├── dr-nanda-kumar-kommineni.html
│   ├── dr-krishna-teja-kommineni.html
│   └── dr-naga-swetha.html
├── areas/              # Local SEO pages for nearby towns
│   ├── bodhan.html
│   ├── armoor.html
│   └── ... (15 area pages total)
├── assets/
│   ├── logo.png
│   ├── favicon.png
│   └── images/         # Service and clinic photos
├── css/
│   └── styles.css      # All styles
└── js/
    └── main.js         # Mobile menu, form handling, WhatsApp widget
```

## Clinic Information

**Hi-tech Dental Hospital**  
Opp. Rajiv Gandhi Auditorium  
Tilak Gardens, Khaleelwadi  
Nizamabad, Telangana 503001

**Phone:** 84623 18437  
**Email:** info@hitechdentalnizamabad.com

**Hours:**  
- Monday – Saturday: 10:00 AM – 9:00 PM
- Sunday: 10:30 AM – 1:00 PM

## Our Team

- **Dr. Nanda Kumar Kommineni** — M.D.S Conservative Dentistry & Endodontics (Gold Medallist, First M.D.S in Nizamabad District)
- **Dr. Krishna Teja Kommineni** — Oral & Maxillofacial Surgeon | Implantologist
- **Dr. Naga Swetha** — M.D.S Pediatric Dentistry

## Services

- Teeth Cleaning & Scaling
- Root Canal Treatment (RCT)
- Dental Implants
- Braces & Orthodontics
- Teeth Whitening
- Crowns & Bridges
- Pediatric Dentistry
- Tooth Extraction & Surgery
- Gum Treatment

## Local Deployment

To run locally:

1. Clone the repository
2. Open `index.html` in any modern web browser
3. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with npx)
   npx serve .
   ```
4. Visit `http://localhost:8000` in your browser

## Customization Notes

### Contact Information
The WhatsApp number is configured in `/js/main.js`:
```javascript
const WHATSAPP_NUMBER = '918462318437';
```

### Social Media Links
Social media links in the footer are currently placeholders (`href="#"`). Update these in each page's footer with actual social media profile URLs when available.

### Images
All images are sourced from Wikimedia Commons and are properly attributed. Replace with actual clinic photos when available for a more personalized touch.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Hi-tech Dental Hospital, Nizamabad. All rights reserved.

---

**Need updates?** Contact the clinic administration or web developer.
