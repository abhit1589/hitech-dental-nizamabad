# Owner TODO List

This file lists items that the clinic owner should update to personalize and complete the website.

## High Priority

### 1. Replace Placeholder Images
**Status:** 🟡 Using stock/generic images

The website currently uses Wikimedia Commons dental stock photos. Replace these with actual photos of your clinic:

- `assets/images/hero-clinic.jpg` — Main hero image (clinic exterior or interior)
- `assets/images/about-clinic.jpg` — Clinic interior/reception
- `assets/images/about-dentist.jpg` — Team photo or clinic environment
- All service images (if you have clinic-specific photos)

### 2. Add Social Media Links
**Status:** 🟡 Placeholders in place

Update footer social media links in ALL pages (or remove if not using):

- **Facebook:** Currently `href="#"` — add your page URL
- **Instagram:** Currently `href="#"` — add your profile URL  
- **WhatsApp:** Already linked to clinic phone number ✅

Files to update: `index.html`, `about.html`, `services.html`, `contact.html`

### 3. Verify Contact Information
**Status:** 🟢 Using publicly listed info

Current information:
- **Phone:** 84623 18437
- **Email:** info@hitechdentalnizamabad.com
- **Address:** Opp. Rajiv Gandhi Auditorium, Tilak Gardens, Khaleelwadi, Nizamabad

**Action needed:** 
- Confirm the email address works (set up if needed)
- Add alternative phone number if desired (note: 8462224453 was mentioned in listings)
- Verify address details

## Medium Priority

### 4. Doctor Profile Photos
**Status:** 🟡 Partial

- ✅ Dr. Krishna Teja has a photo
- ❌ Dr. Nanda Kumar — uses icon placeholder
- ❌ Dr. Naga Swetha — uses icon placeholder

Add professional photos for all doctors to build trust with patients.

### 5. Customize Testimonials
**Status:** 🟢 Generic but realistic

Current testimonials use common patient names and towns. Consider:
- Adding real patient testimonials (with permission)
- Adding photos (optional)
- Getting Google reviews and showcasing them

### 6. Review Service Pricing
**Status:** ℹ️ Not displayed

The website mentions "affordable" and "transparent pricing" but doesn't show prices. Consider:
- Adding a pricing page
- Or noting "Contact for quote"
- Or stating "Starting from ₹XXX"

## Low Priority

### 7. Add More Content
**Optional enhancements:**

- Blog section for dental health tips
- Before/after galleries (with patient consent)
- FAQ page
- Online appointment booking system (requires backend)
- Patient testimonials page

### 8. Analytics & SEO
**Recommended:**

- Set up Google Analytics
- Submit sitemap to Google Search Console
- Set up Google Business Profile (if not already done)
- Get patient reviews on Google

### 9. Legal Pages
**Good to have:**

- Privacy Policy (especially if collecting patient data online)
- Terms of Service
- Disclaimer

## Technical Items

### 10. Domain & Hosting
**Current:** Not deployed

- Register domain: `hitechdentalnizamabad.com` (or preferred name)
- Set up hosting (GitHub Pages, Netlify, or traditional hosting)
- Configure SSL certificate (auto with modern hosts)

### 11. Form Integration
**Current:** Contact form shows thank-you message locally

The contact form currently just displays a confirmation message. To actually receive submissions:

Options:
1. **Simple:** Use Formspree, FormSubmit, or similar service (just add form action URL)
2. **Google Forms:** Embed Google Form
3. **Email service:** Integrate with email backend
4. **Full solution:** Backend with database (requires development)

**File to update:** `contact.html` form action and `js/main.js` form handler

---

## Quick Checklist

Before going live, ensure:

- [ ] All contact information is correct
- [ ] Email address is active and monitored
- [ ] At least one high-quality clinic photo is used
- [ ] Doctor photos added (if available)
- [ ] Social media links updated or removed
- [ ] Test contact form (if integrated with email)
- [ ] Test website on mobile devices
- [ ] Proofread all content for accuracy
- [ ] Set up Google Business Profile
- [ ] Domain purchased and DNS configured

---

**Questions?** Contact your web developer or technical support.
