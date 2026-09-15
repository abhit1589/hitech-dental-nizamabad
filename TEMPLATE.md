# Dental Clinic Website Template

This repository is a complete, production-ready website template for dental clinics. The **Hi-tech Dental Hospital** instance serves as the flagship demo.

---

## 🚀 **NEW: Automated Build Pipeline**

**For Launch Path Studio operators**, use the **automated pipeline** for 10-15 minute site generation:

📖 **Read:** [PIPELINE.md](PIPELINE.md) — Complete operator runbook  
🔧 **Tool:** `scripts/generate-from-intake.mjs` — Site generator script  
📋 **Schema:** `intake.schema.json` — Intake data specification  
📝 **Example:** `examples/sample-intake.json` — HiTech Dental intake template

**Quick start:**
```bash
# 1. Fill intake JSON (copy sample)
cp examples/sample-intake.json intake/new-clinic.json
# Edit with clinic data

# 2. Generate site
node scripts/generate-from-intake.mjs intake/new-clinic.json

# 3. Deploy to client server + custom domain
# See PIPELINE.md for complete deployment steps
```

**This automated workflow replaces manual config editing for production use.**

---

## 💡 Product Philosophy: Cheap, Near-Automatic Sites

**This is a repeatable, low-touch product.** Each new clinic site follows the same streamlined workflow:

### The 3-Step Process (Legacy Manual Method)
1. **LPS Intake** → Collect clinic details (name, address, phone, doctors, services)
2. **Fill `clinic-config.js`** → Update configuration file with clinic info (OR use generator script above)
3. **Attach Google 5★ reviews** → Copy real reviews from Google Maps URL (auto-scrolling carousel included)
4. **Deploy** → Push to client server + custom domain, done

**⚡ NEW: For faster builds, skip manual editing and use the generator script. See [PIPELINE.md](PIPELINE.md).**

### What Operators Should NOT Do
❌ **Hand-write testimonials** - Always use real Google reviews  
❌ **Re-fix layout bugs** - Template is production-ready; avoid customization bugs  
❌ **Rebuild features** - Use existing scrolling carousel, animations, components  
❌ **Manual styling** - `clinic-config.js` drives everything  

### What Makes This Cheap & Fast
✅ **Config-driven** - One file controls entire site  
✅ **Pre-built components** - Scrolling reviews, hero slider, FAQ accordions  
✅ **Real Google data** - No content creation needed  
✅ **Zero API keys** - Direct Google Maps links, no API required  
✅ **Static deployment** - Fast, cheap hosting (Vercel free tier)  

**Goal**: Launch a new clinic site in **under 2 hours** with minimal operator effort.

---

## 🎯 Overview

This template provides everything needed for a professional dental clinic website:

- ✅ 22+ pages (Home, About, Services hub, 9 service detail pages, Contact, 3 doctor profiles, 15 area/SEO pages)
- ✅ Dynamic features (auto-scrolling Google reviews, hero slider, FAQ accordions, scroll animations, stat counters)
- ✅ Mobile-responsive design
- ✅ SEO-optimized (meta tags, Open Graph, Schema.org)
- ✅ WhatsApp integration
- ✅ Static HTML/CSS/JS (deploy anywhere - Vercel, Netlify, GitHub Pages, traditional hosting)

---

## ⚠️ Critical Rules for New Clinic Builds

**Learn from our mistakes!** Follow these rules when launching a new clinic site to avoid common issues:

### 1. ✅ Real Google Reviews from Day One
**DO:** 
- Find the clinic's Google Business listing
- Copy 5-12 real 5-star reviews (patient name, review text, rating)
- Add them to `googleReviews` in `clinic-config.js`
- Link directly to the Google Maps listing
- **Display individual 5★ review cards only** (no aggregate rating/count badge)

**DON'T:**
- ❌ Use placeholder testimonials (fake names like "Ravi Kumar", "Priya Sharma")
- ❌ Attempt to use Google Places API (requires API key, unnecessary)
- ❌ Invent or paraphrase reviews
- ❌ Launch without verifying the Google Business listing exists
- ❌ **Display aggregate rating (e.g., "4.8/5") or total review count** (startups may have few/no reviews)

**Why no aggregate rating?** Some new clinic clients have very few or no Google reviews yet. The site should work beautifully whether they have 5 reviews or 500. Show individual 5★ review cards in the carousel, and link to Google for visitors to read more or leave a review.

**Example structure in `clinic-config.js`:**
```javascript
googleReviews: {
  // rating: 4.8,  // Not displayed per product rule
  // totalReviews: 94,  // Not displayed per product rule
  googleMapsUrl: "https://www.google.com/maps/place/[verified-url]",
  reviews: [
    { text: "Real review text...", author: "Real Patient Name", rating: 5 }
  ]
}
```

### 2. ✅ No Opacity Animations on Large Sections
**DON'T:**
- ❌ Use `opacity: 0` on `.section` wrappers for scroll reveal animations
- ❌ Hide entire page sections waiting for JavaScript

**WHY:** Content becomes invisible if JavaScript fails/delays, hurting SEO and user experience.

**DO:**
- ✅ Animate individual cards/elements within sections
- ✅ Use `transform` instead of `opacity` for reveals
- ✅ Ensure content is always visible, even without JS

### 3. ✅ Book Appointment Button Positioning
**DO:**
- ✅ Position at true bottom of viewport (`bottom: 20px`)
- ✅ Clear spacing from WhatsApp widget (different position)
- ✅ Use absolute paths for nested pages (`href="/contact.html"`, not `../contact.html`)
- ✅ Test from service detail pages, doctor pages, area pages

**DON'T:**
- ❌ Overlap with WhatsApp button
- ❌ Use relative paths that break on nested pages
- ❌ Position too high (blocks content)

### 4. ✅ Full Service Pages from Launch
**DO:**
- ✅ Create complete service detail pages for all services
- ✅ Use `clinic-config.js` as single source of truth
- ✅ Include pricing guidance, FAQs, before/after info
- ✅ Link from services grid on homepage

**DON'T:**
- ❌ Launch with stub pages or TODO placeholders
- ❌ Hard-code service info in HTML (use config)

### 5. ✅ Deploy to Production Properly
**DO:**
- ✅ Merge to `master` branch for Vercel production deployment
- ✅ Verify all changes on preview URL before merging
- ✅ Test mobile responsiveness
- ✅ Check all internal links

**DON'T:**
- ❌ Leave changes on feature branches indefinitely
- ❌ Deploy to production without testing preview

---

## 🚀 Quick Start: Launch Your Clinic Website

**⏱️ Target Time: Under 2 hours from start to live site**

### The Streamlined Workflow
This is designed to be **fast and repeatable**. Follow these steps in order:

1. **Clone template** (2 min)
2. **Fill `clinic-config.js`** (20-30 min) - All clinic details in one file
3. **Find & copy Google 5★ reviews** (15 min) - From their Maps listing, no API
4. **Replace images** (20-30 min) - Logo, hero, service photos
5. **Deploy to Vercel** (5 min) - Push to GitHub, auto-deploy

**No hand-writing testimonials. No fixing layout bugs. Config-driven only.**

### Prerequisites
- Text editor (VS Code, Sublime Text, or any editor)
- Clinic information (name, address, phone, photos, doctor details)
- Clinic's Google Business listing URL (for real reviews)
- Optional: Git for version control

### Step 1: Get the Template

```bash
# Clone or download this repository
git clone https://github.com/your-repo/dental-clinic-template.git my-clinic-website
cd my-clinic-website

# Optional: Remove git history to start fresh
rm -rf .git
git init
```

### Step 2: Edit Clinic Configuration

**Open `js/clinic-config.js`** — This is the heart of your rebrand. Update all values:

```javascript
const CLINIC_CONFIG = {
  name: "Your Clinic Name",
  shortName: "Your Clinic",
  tagline: "Expert Dental Care in [Your City]",
  city: "YourCity",
  state: "YourState",
  
  contact: {
    phone: "XXXXXXXXXX",          // Display format
    phoneLink: "+91XXXXXXXXXX",   // For tel: links
    whatsapp: "91XXXXXXXXXX",     // Without + or spaces
    email: "info@yourclinic.com",
    address: {
      line1: "Your Address Line 1",
      line2: "Area, Landmark",
      city: "Your City",
      state: "Your State",
      zip: "XXXXXX"
    }
  },
  
  hours: {
    weekdays: "9:00 AM – 7:00 PM",
    saturday: "9:00 AM – 5:00 PM",
    sunday: "Closed",
    displayShort: "Mon–Fri: 9 AM–7 PM • Sat: 9 AM–5 PM"
  },
  
  // Update doctors array with your team
  doctors: [
    {
      id: "doctor-slug",
      name: "Dr. Your Name",
      degree: "BDS, MDS",
      specialty: "Endodontist",
      bio: "Brief one-line bio",
      image: "assets/images/dr-yourname.jpg", // or null for icon
      profileUrl: "doctors/dr-yourname.html",
      specialties: ["Root Canal", "Cosmetic Dentistry"]
    }
    // Add more doctors...
  ],
  
  // Update services if different
  services: [
    // Keep existing or customize
  ],
  
  // ═══════════════════════════════════════════════════════════════
  // CRITICAL: REAL GOOGLE REVIEWS ONLY (Auto-Scrolling Carousel)
  // ═══════════════════════════════════════════════════════════════
  // This is the FASTEST way to add testimonials. DO NOT hand-write!
  // 
  // WORKFLOW:
  // 1. Search "Clinic Name + City" on Google Maps
  // 2. Click on the business listing
  // 3. Click "Reviews" tab
  // 4. Filter/find 5-star reviews with text
  // 5. Copy reviewer name and review text exactly
  // 6. Copy the Google Maps URL
  // 
  // PRODUCT RULE: Do NOT display aggregate rating or total review count
  // (Some startup clients have few/no reviews; site must work without stats)
  // 
  // FEATURES INCLUDED:
  // ✅ Auto-scrolling carousel (smooth horizontal scroll)
  // ✅ Individual 5★ review cards displayed
  // ✅ Link to Google Maps for full reviews
  // ✅ Pauses on hover/touch/focus
  // ✅ Mobile swipe-friendly
  // ✅ Respects prefers-reduced-motion
  // ✅ No API key required!
  //
  googleReviews: {
    // rating: 4.8,  // NOT DISPLAYED per product rule
    // totalReviews: 94,  // NOT DISPLAYED per product rule
    googleMapsUrl: "https://www.google.com/maps/place/[full-clinic-maps-url]",
    reviews: [
      {
        text: "Real review text copied from Google Maps...",
        author: "Real Patient Name",  // Exactly as shown on Google
        rating: 5  // Only add 5-star reviews
      },
      {
        text: "Another real 5-star review...",
        author: "Another Real Patient",
        rating: 5
      }
      // Add 8-12 real 5-star reviews total
      // More reviews = better infinite scroll effect
      // If clinic has <5 reviews, use what's available + CTA to leave review
    ]
  },
  
  // Update trust stats honestly
  stats: {
    yearsExperience: 10,
    happyPatients: "5,000+",
    specialists: 2,
    services: 15
  },
  
  // Update local areas you serve
  areas: [
    { name: "AreaName", distance: "10 km", slug: "areaname" }
  ]
};
```

### Step 3: Replace Images

Replace placeholder images in `assets/images/` with your clinic photos. **Keep the same filenames** or update paths in `clinic-config.js`:

**Required images:**
- `logo.png` — Your clinic logo (transparent PNG recommended)
- `favicon.png` — Browser tab icon (32x32 or 64x64 px)
- `hero-clinic.jpg` — Main hero image (1920x1080 px recommended)
- `about-clinic.jpg` — Clinic interior/exterior
- `about-dentist.jpg` — Doctor/team photo

**Service images** (optional but recommended):
- `teeth-cleaning.jpg`
- `root-canal.jpg`
- `implants.jpg`
- `braces.jpg`
- `whitening.jpg`
- `crowns.jpg`
- `pediatric.jpg`
- `extraction.jpg`
- `gum-treatment.jpg`

**Doctor photos** (if available):
- `dr-[slug].jpg` — Individual doctor headshots

### Step 4: Update Domain References

**Find and replace** the domain throughout HTML files:

```bash
# Replace in all HTML files
find . -name "*.html" -type f -exec sed -i 's/hitechdentalnizamabad.com/yourclinic.com/g' {} +

# Or use your text editor's find-and-replace across files
# Find: hitechdentalnizamabad.com
# Replace: yourclinic.com
```

### Step 5: Update WhatsApp Number

In `js/main.js`, update the WhatsApp constants at the top:

```javascript
const WHATSAPP_NUMBER = '919876543210';  // Your WhatsApp number
const WHATSAPP_MESSAGE = 'Hello, I would like to book an appointment at [Your Clinic Name].';
```

### Step 6: Customize Doctor Pages (Optional)

If you have different doctors:

1. **Duplicate** an existing doctor HTML file in `doctors/`
2. **Rename** it (e.g., `dr-yourname.html`)
3. **Edit** the content with your doctor's information
4. **Update** `doctors` array in `clinic-config.js`
5. **Add** the doctor to `about.html` team section

### Step 7: Customize Area Pages (Optional)

For local SEO pages serving nearby towns:

1. **Duplicate** an existing area HTML file in `areas/`
2. **Rename** it (e.g., `yourcity.html`)
3. **Update** content with your area information
4. **Add** to `areas` array in `clinic-config.js`
5. **Link** from `contact.html` and `index.html`

### Step 8: Test Locally

```bash
# Python 3 (built-in)
python3 -m http.server 8000

# Node.js (if you have it)
npx serve .

# Then open: http://localhost:8000
```

**Check:**
- [ ] All pages load without errors
- [ ] Links work (nav, footer, service cards)
- [ ] Phone numbers are clickable
- [ ] WhatsApp widget works
- [ ] Mobile menu functions
- [ ] Images display (or placeholders show correctly)
- [ ] Contact form shows thank-you message

### Step 9: Deploy

#### Option A: Vercel (Recommended - Free, Fast, Easy)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, then get your live URL
```

#### Option B: Netlify (Also Excellent)

1. Drag & drop your project folder to [netlify.com/drop](https://netlify.com/drop)
2. Or connect your Git repository for automatic deploys

#### Option C: GitHub Pages (Free)

1. Push code to GitHub
2. Go to Settings → Pages
3. Select branch to deploy
4. Get your `username.github.io/repo-name` URL

#### Option D: Traditional Hosting (cPanel, FTP)

1. Upload all files via FTP
2. Ensure `index.html` is in the root directory
3. Set permissions (755 for folders, 644 for files)

### Step 10: Configure Domain

1. **Purchase domain** (e.g., `yourclinic.com` from Namecheap, GoDaddy)
2. **Point DNS** to your hosting:
   - Vercel/Netlify: Add CNAME record as instructed
   - GitHub Pages: Add CNAME file with your domain
   - Traditional hosting: Point A record to server IP
3. **Enable HTTPS** (automatic with Vercel/Netlify/GitHub)
4. **Update canonical URLs** if you used a temporary domain during dev

---

## 📁 File Structure

```
/
├── index.html              # Homepage
├── about.html              # About clinic & team
├── services.html           # Services hub (links to detail pages)
├── contact.html            # Contact form & map
├── services/               # Individual service detail pages
│   ├── teeth-cleaning.html
│   ├── root-canal.html
│   ├── dental-implants.html
│   ├── braces-orthodontics.html
│   ├── teeth-whitening.html
│   ├── crowns-bridges.html
│   ├── pediatric-dentistry.html
│   ├── tooth-extraction.html
│   └── gum-treatment.html
├── doctors/                # Doctor profile pages
│   ├── dr-name1.html
│   ├── dr-name2.html
│   └── dr-name3.html
├── areas/                  # Local SEO pages
│   ├── area1.html
│   ├── area2.html
│   └── ...
├── assets/
│   ├── logo.png
│   ├── favicon.png
│   └── images/             # Clinic & service photos
├── css/
│   └── styles.css          # All styling (responsive)
├── js/
│   ├── clinic-config.js    # ⭐ MAIN CONFIG FILE
│   └── main.js             # Dynamic features
├── README.md               # Development & deployment guide
├── TEMPLATE.md             # ⭐ THIS FILE - Rebranding guide
└── OWNER-TODO.md           # Owner action items
```

---

## 🎨 Customization Guide

### Change Brand Colors

Edit `css/styles.css` at the top:

```css
:root {
  --red: #E31E24;      /* Change to your brand color */
  --purple: #662D91;   /* Change to your primary color */
  --green: #00A651;    /* Change to your accent color */
  /* ... */
}
```

### Add/Remove Services

1. **Add service** to `services` array in `clinic-config.js`
2. **Create detail page** by duplicating an existing one in `services/`
3. **Update** `services.html` to include the new service card
4. **Update footer** service links on all pages

### Modify Hero Slider

Edit `heroImages` array in `clinic-config.js`:

```javascript
heroImages: [
  {
    url: "assets/images/your-image.jpg",
    alt: "Description",
    caption: "Optional caption"
  }
]
```

### Change Testimonials

Update `testimonials` array in `clinic-config.js` with real patient reviews.

### Adjust Animation Speed

In `js/main.js`, modify timing:

```javascript
// Hero slider
setInterval(changeHeroImage, 5000);  // Change 5000 to your preference (milliseconds)

// Testimonials
setInterval(rotateTestimonials, 8000);  // Change 8000 to your preference
```

### Disable Animations

If a clinic prefers a static site:

In `js/main.js`, comment out or remove:
```javascript
// initHeroSlider();
// initTestimonialRotation();
// initScrollAnimations();
// initStatCounters();
```

---

## 🔍 SEO Checklist

After rebranding, optimize for search engines:

- [ ] Update all `<title>` tags with your clinic name and city
- [ ] Update all `<meta name="description">` tags
- [ ] Update `<link rel="canonical">` URLs with your domain
- [ ] Update Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`)
- [ ] Update Schema.org JSON-LD on `index.html` with your clinic data
- [ ] Create and submit `sitemap.xml` to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Get patient reviews on Google

### Generate Sitemap

Use an online sitemap generator or create manually:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://yourclinic.com/</loc><priority>1.0</priority></url>
  <url><loc>https://yourclinic.com/about.html</loc><priority>0.8</priority></url>
  <url><loc>https://yourclinic.com/services.html</loc><priority>0.9</priority></url>
  <!-- Add all pages -->
</urlset>
```

---

## 📊 Analytics Setup

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID (G-XXXXXXXXXX)
3. Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🛠️ Advanced: Contact Form Integration

The default form shows a thank-you message locally. For actual email delivery:

### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `contact.html`:

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <!-- Keep existing fields -->
</form>
```

### Option 2: FormSubmit

1. Visit [formsubmit.co](https://formsubmit.co)
2. Use your email as endpoint:

```html
<form action="https://formsubmit.co/your@email.com" method="POST">
  <!-- Keep existing fields -->
</form>
```

### Option 3: Backend Integration

For full control, integrate with:
- Netlify Forms (if using Netlify)
- Vercel Serverless Functions
- Your own backend API

---

## 💼 Selling This as a Service

If you're a developer/agency offering this as a product:

### Pricing Tiers

**Basic Package** — $500-1000
- Template setup with client config
- Logo & 5 clinic photos
- 1 round of revisions
- Basic deployment (GitHub Pages/Netlify)

**Standard Package** — $1500-2500
- Everything in Basic
- Custom photos of clinic (if in area) or sourced stock
- Doctor profile pages
- Local SEO area pages
- Google Business Profile setup
- Premium domain & hosting setup

**Premium Package** — $3000-5000
- Everything in Standard
- Monthly maintenance
- Content updates
- Blog setup
- Analytics & reporting
- Online booking integration (3rd party)
- Email marketing setup

### Client Deliverables

1. **Live website** on their domain
2. **Admin credentials** for hosting
3. **OWNER-TODO.md** with action items
4. **Brief video walkthrough** of how to make basic edits
5. **Support period** (e.g., 30 days)

---

## 🆘 Troubleshooting

### Images Not Showing

- Check file paths match `clinic-config.js`
- Ensure images are in `assets/images/`
- Verify filenames match exactly (case-sensitive on some servers)
- Clear browser cache

### WhatsApp Widget Not Working

- Verify `WHATSAPP_NUMBER` in `js/main.js` is correct
- Format: `919876543210` (country code + number, no + or spaces)
- Check `js/main.js` is loaded in HTML: `<script src="js/main.js"></script>`

### Mobile Menu Not Opening

- Ensure `js/main.js` is loaded
- Check browser console for JavaScript errors
- Test in different browsers

### Animations Not Working

- Check if `prefers-reduced-motion` is enabled in browser settings
- Verify `initScrollAnimations()` is not commented out in `main.js`
- Ensure CSS file is loaded

---

## 📞 Support

For issues specific to Hi-tech Dental Hospital, contact the clinic directly.

For template questions:
- Check existing GitHub Issues
- Review this documentation
- Open a new Issue with details

---

## 📄 License

This template is designed for commercial use by dental clinics. Each deployment requires customization for a specific clinic.

**What you CAN do:**
- Use for any dental clinic website
- Modify and customize freely
- Deploy multiple instances for different clinics
- Sell as a service to dental clinics

**What you should NOT do:**
- Copy Hi-tech Dental's specific content/branding for another clinic
- Use their photos, testimonials, or doctor credentials elsewhere
- Misrepresent yourself as affiliated with Hi-tech Dental Hospital

---

## 🎉 You're Ready!

With this template, you can launch a professional dental clinic website in **under 2 hours**. The Hi-tech Dental instance showcases the quality and completeness you can achieve.

**Questions?** Open an issue or refer to the detailed documentation in each section above.

**Good luck with your new clinic website!** 🦷✨
