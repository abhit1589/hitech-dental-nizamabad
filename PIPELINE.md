# Launch Path Studio — Automated Website Build Pipeline

**Target Time:** 10-15 minutes from intake to deployed site  
**Purpose:** Rapidly deploy dental clinic websites using the proven HiTech Dental template

---

## 📋 Overview

This pipeline transforms intake data → configured site → deployed on client server + custom domain.

**Core Principles:**
- ✅ **Config-driven:** One intake JSON controls everything
- ✅ **Real data only:** Google reviews pulled directly, no placeholders
- ✅ **Additive generator:** Safe to re-run on existing sites
- ✅ **Gold master:** HiTech Dental template is the reference implementation

---

## 🚀 Quick Start (10-Minute Path)

```bash
# 1. Clone template (30 sec)
git clone https://github.com/abhit1589/hitech-dental-nizamabad.git new-clinic-site
cd new-clinic-site

# 2. Fill intake JSON (5-7 min) — See template in examples/sample-intake.json
cp examples/sample-intake.json intake/clinic-name.json
# Edit clinic-name.json with client data

# 3. Extract logo colors (1-2 min) — See Color Extraction section
# Add brandColors to intake JSON

# 4. Pull Google reviews (2-3 min) — See Review Collection section
# Copy 5★ reviews to googleReviews.reviews array

# 5. Generate site (5 sec)
node scripts/generate-from-intake.mjs intake/clinic-name.json

# 6. Replace assets (1-2 min)
# Copy client logo to assets/logo.png
# Copy photos to assets/images/

# 7. Test locally (30 sec)
python3 -m http.server 8000
# Open http://localhost:8000

# 8. Deploy to client server (2-3 min) — See Deployment section
# SSH, rsync, or FTP upload + nginx/caddy config

# 9. Add to LPS portfolio (1 min) — Link only on launchpath-india
```

---

## 📝 Detailed Workflow

### Step 1: Receive Intake

**What You Need from Client:**

1. **Basic Info:**
   - Clinic name (full legal name + short name)
   - Tagline/slogan
   - Address (line1, line2, city, state, zip)
   - Phone, email, WhatsApp number
   - Operating hours (weekdays, Sat, Sun)

2. **People:**
   - Doctor names, degrees, specialties, bios (1-2 sentences each)
   - Doctor photos (headshots, optional)

3. **Services:**
   - List of services offered (9-12 typical)
   - Short description for each (1 sentence)

4. **Online Presence:**
   - Google Maps listing URL (CRITICAL for reviews + coords)
   - Custom domain name (e.g., `clinicname.com`)
   - Social media links (Facebook, Instagram - optional)

5. **Assets:**
   - Clinic logo (PNG with transparency preferred)
   - Clinic photos (exterior, interior, equipment - 5-10 images)
   - Service photos (optional, can use template defaults)

**Intake Checklist:**
```
□ Clinic name, tagline, location
□ Contact: phone, email, WhatsApp, address
□ Operating hours
□ 1-3 doctors with credentials
□ 9-12 services with descriptions
□ Google Maps URL (for reviews + coordinates)
□ Custom domain name
□ Logo file (PNG/JPG)
□ 5-10 clinic photos
```

---

### Step 2: Extract Logo Colors

**Goal:** Get primary, secondary, accent colors from the client's logo for consistent branding.

#### Option A: Manual Color Picking (Fastest — 1-2 min)

1. Open logo in image viewer or browser
2. Use color picker tool:
   - **macOS:** Digital Color Meter (built-in)
   - **Windows:** ColorPic or PowerToys Color Picker
   - **Linux:** gcolor2 or gpick
   - **Online:** https://imagecolorpicker.com/ (upload → click → copy hex)
3. Pick 3 colors:
   - **Primary:** Main brand color (often darkest)
   - **Secondary:** Accent/contrast color
   - **Accent:** Highlight color (for CTAs)
4. Add to intake JSON:
   ```json
   "brandColors": {
     "primaryColor": "#662D91",
     "secondaryColor": "#E31E24",
     "accentColor": "#00A651"
   }
   ```

#### Option B: Automated Color Extraction (Script Stub)

**Note:** Full automation requires ImageMagick or Python libraries. For now, use manual method above.

**Future Enhancement:** Create `scripts/extract-colors.sh`:
```bash
#!/bin/bash
# Extract dominant colors from logo using ImageMagick
convert logo.png -resize 1x1\! -format "%[pixel:u]" info:
# Parse output and suggest colors
```

---

### Step 3: Pull Google Reviews (5-Star Only)

**CRITICAL:** Only use real Google reviews. Never write fake testimonials.

#### Manual Collection (2-3 minutes for 8-12 reviews)

1. **Find the clinic on Google Maps:**
   - Paste Google Maps URL from intake (or search: "Clinic Name + City")
   - Example: `https://www.google.com/maps/place/Clinic+Name/...`

2. **Navigate to reviews:**
   - Click on the clinic listing
   - Click "Reviews" tab
   - Sort by "Highest rating" (shows 5★ first)

3. **Copy reviews:**
   - Select reviews with **text content** (not just stars)
   - Aim for 8-12 reviews
   - Copy exactly:
     - **Full review text** (no edits, no paraphrasing)
     - **Reviewer name** (as shown on Google)
     - **Rating** (must be 5 stars)

4. **Add to intake JSON:**
   ```json
   "googleReviews": {
     "reviews": [
       {
         "text": "Exact review text from Google...",
         "author": "Real Patient Name",
         "rating": 5
       },
       {
         "text": "Another real review...",
         "author": "Another Patient",
         "rating": 5
       }
       // Add 8-12 total
     ]
   }
   ```

5. **Get coordinates from Maps URL:**
   - Google Maps URL format: `.../@18.6741521,78.1027688,17z`
   - Extract lat/lng: `18.6741521, 78.1027688`
   - Add to intake JSON:
     ```json
     "contact": {
       "coordinates": {
         "lat": 18.6741521,
         "lng": 78.1027688
       }
     }
     ```

#### No API Required

**We do NOT use Google Places API** because:
- ❌ Requires API key + billing setup
- ❌ Quota limits
- ❌ Complex OAuth for some features
- ✅ Direct Maps links work perfectly
- ✅ Manual copy is faster than API integration for 8-12 reviews

---

### Step 4: Run Generator

**Prerequisites:**
- Node.js 14+ installed (check: `node --version`)
- Intake JSON completed and validated

**Command:**
```bash
node scripts/generate-from-intake.mjs intake/your-clinic-name.json
```

**What It Does:**
1. Reads intake JSON
2. Validates required fields (fails fast with clear errors)
3. Generates `js/clinic-config.js` from intake data
4. Backs up existing config to `clinic-config.js.backup`
5. Updates HTML files with new domain (if changed)
6. Updates `js/main.js` with WhatsApp config

**Output:**
```
╔════════════════════════════════════════════╗
║  Launch Path Studio Site Generator        ║
╚════════════════════════════════════════════╝

[1] Reading intake file: your-clinic-name.json
✓ Intake file loaded successfully
[2] Validating intake data
✓ Intake validation passed
[3] Generating clinic-config.js
✓ Backed up existing config to clinic-config.js.backup
✓ Generated js/clinic-config.js
[4] Updating domain references: oldomain.com → newdomain.com
✓ Updated 31 HTML files with new domain
[5] Updating WhatsApp configuration in main.js
✓ Updated WhatsApp configuration

╔════════════════════════════════════════════╗
║  Generation Complete!                     ║
╚════════════════════════════════════════════╝

Generated files:
  ✓ js/clinic-config.js (clinic configuration)
  ✓ Updated HTML files with domain
  ✓ Updated main.js WhatsApp config

Next steps:
  1. Verify generated config: js/clinic-config.js
  2. Replace clinic logo: assets/logo.png
  3. Replace service/clinic images in assets/images/
  4. Test locally: python3 -m http.server 8000
  5. Deploy to production server

Clinic: Your Clinic Name
Domain: yourclinic.com
Doctors: 2
Services: 9
Reviews: 10 (5-star)

✨ Ready for deployment!
```

**Troubleshooting:**
- **Error: Missing required fields** → Check intake JSON against `intake.schema.json`
- **Error: Need at least 8 Google reviews** → Add more reviews to `googleReviews.reviews` array
- **Error: All reviews must be 5-star** → Remove any non-5-star reviews
- **Error: Intake file not found** → Check file path relative to project root

---

### Step 5: Replace Images

**Required Images:**

1. **Logo** (MUST REPLACE):
   ```bash
   cp /path/to/client-logo.png assets/logo.png
   # Also create favicon:
   convert assets/logo.png -resize 64x64 assets/favicon.png
   ```

2. **Hero/Clinic Images** (Recommended):
   - `assets/images/hero-clinic.jpg` — Main hero image (1920×1080)
   - `assets/images/about-clinic.jpg` — Clinic interior/exterior
   - `assets/images/about-dentist.jpg` — Doctor/team photo

3. **Service Images** (Optional — template has defaults):
   - `assets/images/teeth-cleaning.jpg`
   - `assets/images/root-canal.jpg`
   - `assets/images/implants.jpg`
   - `assets/images/braces.jpg`
   - `assets/images/whitening.jpg`
   - `assets/images/crowns.jpg`
   - `assets/images/pediatric.jpg`
   - `assets/images/extraction.jpg`
   - `assets/images/gum-treatment.jpg`

4. **Doctor Photos** (If provided):
   - `assets/images/dr-[doctor-id].jpg`
   - Example: `assets/images/dr-nanda-kumar.jpg`

**Quick Image Prep:**
```bash
# Resize hero images to optimal size
mogrify -resize 1920x1080^ -gravity center -extent 1920x1080 assets/images/hero-*.jpg

# Resize service images
mogrify -resize 800x600^ -gravity center -extent 800x600 assets/images/*.jpg

# Create favicon from logo
convert assets/logo.png -resize 64x64 assets/favicon.png
```

---

### Step 6: Test Locally

**Quick Server:**
```bash
# Python (built-in on most systems)
python3 -m http.server 8000

# Or Node.js
npx serve . -p 8000

# Or PHP
php -S localhost:8000
```

**Open:** http://localhost:8000

**Test Checklist:**
```
□ Homepage loads with correct clinic name
□ Services section shows all services
□ About page shows all doctors
□ Contact page has correct phone/address/map
□ WhatsApp widget works (click → opens WhatsApp)
□ Book Appointment button appears at bottom
□ Google reviews scroll correctly
□ All images load (no broken images)
□ Mobile menu works (test on small screen or DevTools)
□ All internal links work (nav, footer, service cards)
```

---

### Step 7: Deploy to Client Server + Custom Domain

**Target:** Client's VPS/shared hosting + their custom domain (NOT Vercel preview).

#### Deployment Methods

##### Option A: SSH + rsync (Fastest for VPS)

```bash
# 1. Package site
tar -czf clinic-site.tar.gz --exclude='.git' --exclude='node_modules' --exclude='intake' .

# 2. Upload to server
scp clinic-site.tar.gz user@server-ip:/var/www/

# 3. SSH to server
ssh user@server-ip

# 4. Extract
cd /var/www/
mkdir -p clinicname.com
tar -xzf clinic-site.tar.gz -C clinicname.com/
rm clinic-site.tar.gz

# 5. Set permissions
chown -R www-data:www-data clinicname.com/
chmod -R 755 clinicname.com/
```

##### Option B: FTP/SFTP Upload (cPanel, Shared Hosting)

1. **Connect via FileZilla or WinSCP:**
   - Host: `ftp.clientdomain.com` or server IP
   - Username/password from hosting provider
   - Port: 21 (FTP) or 22 (SFTP)

2. **Upload files:**
   - Navigate to `public_html/` or `htdocs/` or `www/`
   - Upload entire project folder (except `.git/`, `intake/`, `node_modules/`)

3. **Set permissions:**
   - Right-click → File Permissions
   - Folders: 755
   - Files: 644

##### Option C: Git Clone + Pull (For Git-Savvy Servers)

```bash
# On server:
cd /var/www/
git clone https://github.com/abhit1589/hitech-dental-nizamabad.git clinicname.com
cd clinicname.com
git checkout main  # or your branch
```

#### Web Server Configuration

##### Nginx (Recommended)

**Create site config:** `/etc/nginx/sites-available/clinicname.com`
```nginx
server {
    listen 80;
    server_name clinicname.com www.clinicname.com;
    
    root /var/www/clinicname.com;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

**Enable site:**
```bash
sudo ln -s /etc/nginx/sites-available/clinicname.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**Add SSL (Let's Encrypt):**
```bash
sudo certbot --nginx -d clinicname.com -d www.clinicname.com
```

##### Apache (.htaccess already works)

**VirtualHost config:** `/etc/apache2/sites-available/clinicname.com.conf`
```apache
<VirtualHost *:80>
    ServerName clinicname.com
    ServerAlias www.clinicname.com
    DocumentRoot /var/www/clinicname.com
    
    <Directory /var/www/clinicname.com>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/clinicname.com-error.log
    CustomLog ${APACHE_LOG_DIR}/clinicname.com-access.log combined
</VirtualHost>
```

**Enable site:**
```bash
sudo a2ensite clinicname.com.conf
sudo systemctl reload apache2
```

**Add SSL:**
```bash
sudo certbot --apache -d clinicname.com -d www.clinicname.com
```

##### Caddy (Simplest — Auto HTTPS)

**Caddyfile:**
```
clinicname.com www.clinicname.com {
    root * /var/www/clinicname.com
    file_server
    encode gzip
    
    header {
        X-Frame-Options SAMEORIGIN
        X-Content-Type-Options nosniff
        X-XSS-Protection "1; mode=block"
    }
}
```

**Reload:**
```bash
sudo systemctl reload caddy
```

#### DNS Configuration

**At Domain Registrar (Namecheap, GoDaddy, etc.):**

1. **For VPS with static IP:**
   ```
   Type  Name  Value             TTL
   A     @     123.45.67.89      3600
   A     www   123.45.67.89      3600
   ```

2. **For shared hosting with cPanel:**
   - Usually auto-configured when you add domain in cPanel
   - Or use hosting provider's nameservers

3. **For CDN/proxy (Cloudflare):**
   ```
   Type  Name  Value                     Proxy
   A     @     server-ip                 ✓ Proxied
   A     www   server-ip                 ✓ Proxied
   ```

**DNS Propagation:**
- Wait 5-60 minutes for DNS to propagate
- Check: `dig clinicname.com` or https://dnschecker.org/

---

### Step 8: Add to LPS Portfolio

**Launch Path Studio Showcase** (launchpath-india.com):

1. **Add portfolio entry:**
   ```json
   {
     "name": "Clinic Name",
     "location": "City, State",
     "domain": "clinicname.com",
     "thumbnail": "url-to-screenshot",
     "services": ["Dental"],
     "launchedDate": "2026-09-15",
     "featured": false
   }
   ```

2. **Take screenshot:**
   - Full homepage screenshot (1920×1080)
   - Upload to LPS media library

3. **Link from LPS site:**
   - Add to "Recent Launches" grid
   - Link to `https://clinicname.com` (external link)
   - **Do NOT deploy client site on Vercel preview** — LPS showcase only

---

## 🔄 Re-running Generator

**The generator is idempotent** — safe to run multiple times:

```bash
# Update intake JSON
vim intake/clinic-name.json

# Re-generate (backs up old config automatically)
node scripts/generate-from-intake.mjs intake/clinic-name.json

# Check diff
diff js/clinic-config.js js/clinic-config.js.backup

# Test + redeploy
python3 -m http.server 8000
# ... verify changes, then re-upload to server
```

**Use cases:**
- Client wants to add a new service
- Doctor information changes
- Need to update hours
- Add more Google reviews

---

## 📊 Quality Checklist (Before Final Delivery)

**Pre-Deploy:**
```
□ Generator ran successfully (no errors)
□ js/clinic-config.js has correct clinic data
□ All HTML files reference correct domain
□ Logo replaced (assets/logo.png)
□ Favicon generated (assets/favicon.png)
□ At least 5 clinic photos added
□ 8-12 real Google reviews (5-star only)
□ WhatsApp widget has correct number
□ Tested locally (all pages, links, mobile menu)
```

**Post-Deploy:**
```
□ Custom domain resolves to server
□ HTTPS enabled (green padlock in browser)
□ All pages load without 404s
□ Contact form works (test submission)
□ WhatsApp widget opens correct number
□ Google Maps embed shows correct location
□ Mobile responsive (test on phone or DevTools)
□ Page load speed < 3 seconds (test: PageSpeed Insights)
□ Google Search Console verification submitted
□ Google Analytics added (if client wants tracking)
```

**Client Handoff:**
```
□ Provide admin credentials (SSH, FTP, cPanel)
□ Share hosting details (server IP, domain registrar)
□ Send OWNER-TODO.md (action items for clinic)
□ Offer 30-day support window
□ Invoice sent
```

---

## 🛠️ Troubleshooting

### Generator Fails

**Problem:** `Error: Missing required fields`  
**Solution:** Check intake JSON against `intake.schema.json` — fill in all required fields

**Problem:** `Error: Need at least 8 Google reviews`  
**Solution:** Add more reviews to `googleReviews.reviews` array (aim for 10-12)

**Problem:** `Error: All reviews must be 5-star`  
**Solution:** Remove any reviews with `"rating": 4` or lower — only 5-star allowed

### Site Not Loading After Deploy

**Problem:** 404 errors  
**Solution:** 
- Check web server document root points to correct folder
- Verify `index.html` is in root (not nested)
- Check file permissions: folders 755, files 644

**Problem:** Domain doesn't resolve  
**Solution:**
- Wait for DNS propagation (5-60 min)
- Check DNS records: `dig yourclinic.com`
- Verify nameservers point to hosting

**Problem:** HTTPS not working  
**Solution:**
- Run `sudo certbot --nginx -d domain.com` (or `--apache`)
- Check firewall allows port 443
- Wait for certificate issuance (2-5 min)

### WhatsApp Widget Not Working

**Problem:** Clicks don't open WhatsApp  
**Solution:**
- Check `js/main.js` has correct `WHATSAPP_NUMBER`
- Format must be: `918462318437` (country code + number, no + or spaces)
- Test on mobile device (desktop may open web.whatsapp.com)

### Images Not Showing

**Problem:** Broken image icons  
**Solution:**
- Verify files exist in `assets/images/`
- Check filenames match `clinic-config.js` (case-sensitive on Linux servers)
- Confirm file permissions: `chmod 644 assets/images/*.jpg`

---

## 📈 Advanced: Scaling Pipeline

**For 10+ sites/month:**

1. **Pre-generate intake templates:**
   - Create intake JSON templates by specialty (dental, medical, salon)
   - Pre-fill common services, hours patterns

2. **Automate color extraction:**
   - Build `scripts/extract-colors.sh` using ImageMagick
   - Run on logo upload → suggest colors

3. **Review scraping tool:**
   - Build Chrome extension or Puppeteer script
   - Auto-extract Google reviews → JSON

4. **Batch deployment:**
   - Ansible/Terraform playbooks for multi-server deployments
   - Automate nginx config + SSL generation

5. **CI/CD pipeline:**
   - GitHub Actions on intake JSON commit
   - Auto-generate → test → deploy
   - Slack notification on completion

---

## 🎯 Success Metrics

**Target Metrics per Site:**
- ⏱️ **Build time:** 10-15 minutes (intake → deployed)
- 🎨 **Brand accuracy:** Colors match logo (manual or extracted)
- ⭐ **Reviews:** 8-12 real 5-star Google reviews
- 📱 **Mobile score:** >90 on Google PageSpeed Insights
- 🔒 **Security:** HTTPS enabled, A+ on SSL Labs
- 🚀 **Performance:** First Contentful Paint < 1.5s

**Business Metrics:**
- 💰 **Price per site:** ₹15,000 - ₹30,000 (~$180-360 USD)
- 📦 **Sites per week:** 5-10 (with optimized pipeline)
- 🔁 **Repeat clients:** 20-30% (for updates, new branches)

---

## 📞 Support & Escalation

**For technical issues:**
1. Check this PIPELINE.md
2. Review intake.schema.json for data requirements
3. Run generator in verbose mode: `node scripts/generate-from-intake.mjs intake.json 2>&1 | tee generator.log`
4. Check `js/clinic-config.js.backup` if generation broke something

**For template bugs:**
- Reference HiTech Dental (gold master) at https://github.com/abhit1589/hitech-dental-nizamabad
- Check git history for recent changes
- Test against sample intake: `examples/sample-intake.json`

---

## ✅ Pipeline Summary

**The 10-Minute Workflow:**
1. ⏰ **0:00-5:00** — Fill intake JSON (copy sample, edit fields)
2. ⏰ **5:00-6:00** — Extract logo colors (color picker)
3. ⏰ **6:00-8:00** — Copy 10 Google reviews (from Maps URL)
4. ⏰ **8:00-8:05** — Run generator script
5. ⏰ **8:05-9:00** — Replace logo + 3-5 images
6. ⏰ **9:00-9:30** — Test locally (quick check)
7. ⏰ **9:30-12:00** — Deploy to server (rsync/FTP)
8. ⏰ **12:00-14:00** — Configure DNS + HTTPS
9. ⏰ **14:00-15:00** — Final QA + add to LPS portfolio

**Total: ~15 minutes** (excluding DNS propagation wait time)

---

🎉 **You're now ready to build Launch Path Studio sites at scale!**

For questions or improvements to this pipeline, update this document and commit changes to the repo.
