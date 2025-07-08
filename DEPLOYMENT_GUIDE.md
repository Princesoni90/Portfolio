# Hostinger Regular Plan Deployment Guide for Next.js Space Portfolio

## Overview
This guide will help you deploy your Next.js space portfolio to your regular Hostinger hosting plan. The project has been configured to export as static HTML, CSS, and JavaScript files that work perfectly on traditional web hosting.

## Your Hostinger Plan Compatibility
✅ **Perfect for static websites** - Your plan supports HTML, CSS, JavaScript  
✅ **No server-side requirements** - Everything runs in the browser  
✅ **Fast loading** - Static files load quickly  
✅ **SEO friendly** - Search engines can easily crawl static content  

## Prerequisites
- Node.js 18+ installed on your local machine
- Access to your Hostinger hosting panel or FTP credentials
- FTP client (FileZilla recommended) or use Hostinger's File Manager

## Step 1: Build Your Project Locally

### 1.1 Install Dependencies and Build
```bash
# Navigate to your project folder
cd your-project-folder

# Install dependencies (if not already done)
npm install

# Build the static version
npm run build
```

This creates an `out` folder containing all the static files (HTML, CSS, JS) that your Hostinger plan can host.

## Step 2: Access Your Hostinger Hosting

### Option A: Using Hostinger File Manager
1. Login to your Hostinger control panel
2. Go to "File Manager"
3. Navigate to `public_html` folder

### Option B: Using FTP (Recommended)
1. **Get your FTP credentials from Hostinger:**
   - Host: your-domain.com or provided IP
   - Username: your FTP username
   - Password: your FTP password
   - Port: 21

2. **Download FileZilla (free FTP client):**
   - Visit [filezilla-project.org](https://filezilla-project.org)
   - Download and install FileZilla Client

## Step 3: Upload Your Website Files

### 3.1 Prepare for Upload
1. Open the `out` folder created by the build process
2. You'll see files like:
   ```
   out/
   ├── _next/           (CSS and JS files)
   ├── projects/        (Project images)
   ├── skills/          (Skill icons)
   ├── videos/          (Background videos)
   ├── index.html       (Main page)
   ├── about-me.html    (About page)
   ├── skills.html      (Skills page)
   ├── projects.html    (Projects page)
   └── other files...
   ```

### 3.2 Upload Using FileZilla
1. **Connect to your server:**
   - Open FileZilla
   - Enter your FTP credentials
   - Click "Quickconnect"

2. **Upload files:**
   - In the right panel, navigate to `public_html`
   - Delete any existing files (like default index.html)
   - Select ALL files from your `out` folder
   - Drag and drop them to `public_html`
   - Wait for upload to complete

### 3.3 Upload Using Hostinger File Manager
1. Go to File Manager in your Hostinger panel
2. Navigate to `public_html`
3. Delete existing files
4. Click "Upload" and select all files from your `out` folder
5. Wait for upload to complete

## Step 4: Verify Your Website

### 4.1 Check Your Live Website
1. Visit your domain in a web browser
2. Test all navigation links:
   - About me section
   - Skills section
   - Projects section
3. Verify that:
   - Images load correctly
   - Videos play properly
   - Animations work smoothly
   - Mobile responsiveness works

### 4.2 Test Different Devices
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Tablet devices

## Step 5: Optimize Performance (Optional)

### 5.1 Create .htaccess File
Create a `.htaccess` file in your `public_html` folder to improve performance:

```apache
# Enable compression for faster loading
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE text/javascript
</IfModule>

# Set cache headers for better performance
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/webp "access plus 1 month"
    ExpiresByType video/webm "access plus 1 month"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options SAMEORIGIN
</IfModule>
```

### 5.2 Enable SSL (If Available)
- Check if your Hostinger plan includes SSL
- Enable it in your control panel for HTTPS

## Step 6: Update Your Portfolio Content

### 6.1 Making Changes
When you want to update your portfolio:

1. **Edit your source files locally**
2. **Rebuild the project:**
   ```bash
   npm run build
   ```
3. **Upload the new `out` folder contents** to replace the old files

### 6.2 Quick Content Updates
To update specific content:
- **Projects:** Edit `constants/index.ts` → PROJECTS array
- **Skills:** Edit `constants/index.ts` → SKILL_DATA arrays  
- **Personal info:** Edit `constants/index.ts` → SOCIALS, FOOTER_DATA
- **Hero section:** Edit `components/sub/hero-content.tsx`

## Troubleshooting Common Issues

### Issue 1: Website Shows "Index of /" or Directory Listing
**Solution:** Ensure `index.html` is in the root of `public_html`

### Issue 2: Images Not Loading
**Solutions:**
- Check that images are uploaded to correct folders (`projects/`, `skills/`)
- Verify file names match exactly (case-sensitive)
- Ensure file permissions are correct (644 for files, 755 for folders)

### Issue 3: Videos Not Playing
**Solutions:**
- Ensure video files are uploaded to `videos/` folder
- Check file sizes aren't too large for your hosting plan
- Verify video formats are web-compatible (.webm, .mp4)

### Issue 4: CSS/JavaScript Not Working
**Solutions:**
- Ensure `_next/` folder is uploaded completely
- Check that all files in `_next/static/` are present
- Clear browser cache and try again

### Issue 5: Navigation Links Not Working
**Solution:** The static export creates separate HTML files for each route, which should work automatically

## File Structure on Your Server

After successful upload, your `public_html` should look like:

```
public_html/
├── _next/
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── media/
├── projects/
│   ├── project-1.webp
│   ├── project-2.webp
│   └── project-3.webp
├── skills/
│   ├── html.png
│   ├── css.png
│   ├── js.png
│   └── [other skill icons]
├── videos/
│   ├── blackhole.webm
│   ├── encryption-bg.webm
│   └── skills-bg.webm
├── index.html
├── about-me.html
├── skills.html
├── projects.html
├── hero-bg.svg
├── lock-main.png
├── lock-top.png
├── logo.png
└── .htaccess (optional)
```

## Performance Tips

1. **Optimize Images:** Your images are already optimized, but you can compress them further if needed
2. **Monitor Loading Speed:** Use Google PageSpeed Insights to check performance
3. **Regular Updates:** Keep your content fresh and updated
4. **Backup:** Keep local backups of your source code

## Cost-Effective Benefits

✅ **No monthly server costs** - Just your regular hosting plan  
✅ **Fast loading** - Static files load quickly  
✅ **Low bandwidth usage** - Efficient for your hosting limits  
✅ **Easy maintenance** - Simple file uploads for updates  
✅ **SEO friendly** - Search engines love static sites  

## Support Resources

- **Hostinger Support:** Available through your control panel
- **FileZilla Help:** [filezilla-project.org/support.php](https://filezilla-project.org/support.php)
- **Web Development:** Basic HTML/CSS/JS knowledge helpful for customizations

## Conclusion

Your Next.js space portfolio is now perfectly configured for your regular Hostinger hosting plan! The static export approach means:

- ✅ **Compatible** with any HTML/CSS/JS hosting
- ✅ **Fast loading** times for visitors
- ✅ **Easy to maintain** with simple file uploads
- ✅ **Cost-effective** using your existing hosting plan
- ✅ **Professional** appearance and functionality

Your portfolio will work beautifully on your Hostinger plan and provide an excellent showcase for your skills and projects!

---

**Quick Start Summary:**
1. Run `npm run build` locally
2. Upload `out` folder contents to `public_html` via FTP
3. Visit your domain to see your live portfolio!