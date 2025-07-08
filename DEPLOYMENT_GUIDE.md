# Safe Hostinger Deployment Guide - Protecting Your Existing Website

## 🛡️ IMPORTANT: Protecting Your Existing Website

Since you already have a website hosted on your Hostinger plan, we'll deploy your portfolio to a **subdirectory** to avoid affecting your current site.

## Deployment Options (Choose One)

### Option 1: Subdirectory Deployment (Recommended)
Deploy to: `yourdomain.com/portfolio/`
- ✅ **Safe** - Won't affect your existing website
- ✅ **Easy** - Simple folder upload
- ✅ **Professional** - Clean URL structure

### Option 2: Subdomain Deployment
Deploy to: `portfolio.yourdomain.com`
- ✅ **Separate** - Completely independent
- ✅ **Professional** - Looks like a separate site
- ⚠️ **Requires** - Subdomain setup in Hostinger panel

## Step-by-Step Safe Deployment

### Step 1: Build Your Portfolio
```bash
# In your project folder
npm run build
```
This creates an `out` folder with all static files.

### Step 2: Choose Your Deployment Method

#### Method A: Subdirectory Deployment (Safest)

**2.1 Access Your Hosting**
- Login to Hostinger File Manager OR use FTP
- Navigate to `public_html` (where your current website lives)

**2.2 Create Portfolio Folder**
- In `public_html`, create a new folder called `portfolio`
- Your structure will be:
```
public_html/
├── index.html (your existing website)
├── [your existing files]
└── portfolio/ (new folder for your portfolio)
```

**2.3 Upload Portfolio Files**
- Upload ALL contents from the `out` folder INTO the `portfolio` folder
- Final structure:
```
public_html/
├── index.html (your existing site)
├── [your existing files]
└── portfolio/
    ├── index.html (portfolio home)
    ├── _next/
    ├── projects/
    ├── skills/
    ├── videos/
    └── [other portfolio files]
```

**2.4 Access Your Portfolio**
- Your existing website: `yourdomain.com`
- Your new portfolio: `yourdomain.com/portfolio/`

#### Method B: Subdomain Deployment

**2.1 Create Subdomain in Hostinger**
- Go to Hostinger control panel
- Find "Subdomains" section
- Create subdomain: `portfolio.yourdomain.com`
- Point it to a new folder (e.g., `portfolio_subdomain`)

**2.2 Upload Files**
- Upload `out` folder contents to the subdomain folder
- Access at: `portfolio.yourdomain.com`

### Step 3: Link to Your Portfolio (Optional)

Add a link to your portfolio from your existing website:

**Add to your existing website's HTML:**
```html
<a href="/portfolio/" target="_blank">View My Portfolio</a>
```

Or create a prominent button:
```html
<a href="/portfolio/" class="portfolio-btn" style="
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 8px;
  display: inline-block;
  margin: 20px 0;
">🚀 View My Space Portfolio</a>
```

## File Structure After Safe Deployment

### With Subdirectory Method:
```
public_html/
├── index.html                    (your existing website)
├── about.html                    (your existing pages)
├── contact.html                  (your existing pages)
├── css/                          (your existing assets)
├── js/                           (your existing assets)
├── images/                       (your existing assets)
└── portfolio/                    (NEW - your space portfolio)
    ├── index.html                (portfolio home)
    ├── _next/
    │   ├── static/
    │   │   ├── css/
    │   │   └── js/
    ├── projects/
    │   ├── project-1.webp
    │   ├── project-2.webp
    │   └── project-3.webp
    ├── skills/
    ├── videos/
    └── [other portfolio files]
```

## Testing Your Deployment

### 1. Test Your Existing Website
- Visit `yourdomain.com`
- ✅ Should work exactly as before
- ✅ All existing pages should load
- ✅ All existing functionality should work

### 2. Test Your New Portfolio
- Visit `yourdomain.com/portfolio/`
- ✅ Should show your space portfolio
- ✅ All animations should work
- ✅ All sections should be accessible

### 3. Test Both Sites
- Open both in different browser tabs
- Ensure no conflicts or interference

## Backup Strategy (Highly Recommended)

### Before Deployment:
1. **Download your existing website files**
   - Use FTP or File Manager
   - Download entire `public_html` folder
   - Store safely on your computer

2. **Create a backup folder on server**
   ```
   public_html/
   ├── backup_original_site/  (copy of your current site)
   ├── [your current files]
   └── portfolio/             (new portfolio)
   ```

## Troubleshooting

### Issue: Portfolio CSS/JS Not Loading
**Solution:** Check that the `_next` folder uploaded completely to the portfolio directory.

### Issue: Videos Not Playing in Portfolio
**Solution:** Ensure `videos` folder is inside the `portfolio` directory with correct permissions.

### Issue: Existing Website Affected
**Solution:** 
1. Restore from backup
2. Ensure portfolio files are ONLY in the `portfolio` subdirectory
3. Never overwrite existing files in `public_html` root

### Issue: Portfolio Links Not Working
**Solution:** The static export handles routing automatically. Ensure all files from `out` folder are uploaded.

## Performance Optimization

### Create .htaccess for Portfolio Only
Create `.htaccess` file inside the `portfolio` folder:

```apache
# Portfolio-specific optimizations
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
</IfModule>

<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType video/webm "access plus 1 month"
</IfModule>
```

## Updating Your Portfolio

### When you want to update the portfolio:
1. **Make changes locally**
2. **Run `npm run build`**
3. **Upload new `out` folder contents to `portfolio` directory**
4. **Your existing website remains untouched**

## URL Structure Summary

- **Your existing website:** `yourdomain.com`
- **Your space portfolio:** `yourdomain.com/portfolio/`
- **Portfolio sections:**
  - About: `yourdomain.com/portfolio/#about-me`
  - Skills: `yourdomain.com/portfolio/#skills`
  - Projects: `yourdomain.com/portfolio/#projects`

## Benefits of This Approach

✅ **100% Safe** - Your existing website is completely protected  
✅ **Professional** - Clean separation of sites  
✅ **Flexible** - Easy to update either site independently  
✅ **Cost-effective** - Uses your existing hosting plan  
✅ **SEO Friendly** - Both sites can be indexed separately  
✅ **Easy maintenance** - Simple file management  

## Quick Deployment Checklist

- [ ] Backup existing website files
- [ ] Run `npm run build` locally
- [ ] Create `portfolio` folder in `public_html`
- [ ] Upload `out` folder contents to `portfolio` folder
- [ ] Test existing website still works
- [ ] Test new portfolio at `yourdomain.com/portfolio/`
- [ ] Add link from existing site to portfolio (optional)

## Final Notes

This deployment method ensures:
1. **Your existing website remains completely unchanged**
2. **Your new portfolio gets its own space**
3. **Both sites work independently**
4. **Easy to maintain and update**
5. **Professional presentation**

Your space portfolio will be live at `yourdomain.com/portfolio/` while your existing website continues to work perfectly at `yourdomain.com`!

---

**🚀 Ready to Deploy Safely!**
1. Build: `npm run build`
2. Create: `portfolio` folder in `public_html`
3. Upload: `out` contents to `portfolio` folder
4. Visit: `yourdomain.com/portfolio/`