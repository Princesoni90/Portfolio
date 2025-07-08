# Hostinger Deployment Guide for Next.js Space Portfolio

## Overview
This guide will help you deploy your Next.js space portfolio to Hostinger Premium hosting plan with static export configuration.

## Your Hostinger Premium Plan Features
- ✅ 25 websites
- ✅ 25 GB SSD storage
- ✅ Free domain (₹749.00 value)
- ✅ Free SSL certificate
- ✅ CDN support
- ✅ Dedicated IP address
- ✅ Priority support

## Prerequisites
- Node.js 18+ installed on your local machine
- Git installed
- Access to your Hostinger hosting panel
- FTP/SFTP client (FileZilla recommended)

## Step 1: Prepare Your Project for Static Export

### 1.1 Update Configuration
The project has been configured for static export with the following changes:
- `next.config.js` updated with `output: 'export'`
- Images configured as `unoptimized: true`
- Build errors temporarily ignored for deployment

### 1.2 Build the Project Locally
```bash
# Install dependencies
npm install

# Build the project for production
npm run build

# This will create an 'out' folder with static files
```

## Step 2: Access Your Hostinger Control Panel

1. **Login to Hostinger**
   - Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - Login with your credentials

2. **Navigate to File Manager**
   - Click on "File Manager" in your hosting panel
   - Or use FTP/SFTP credentials provided by Hostinger

## Step 3: Upload Your Files

### Option A: Using Hostinger File Manager
1. Navigate to `public_html` folder (or your domain's folder)
2. Delete any existing files (like default index.html)
3. Upload all contents from the `out` folder to `public_html`
4. Ensure the file structure looks like:
   ```
   public_html/
   ├── _next/
   ├── projects/
   ├── skills/
   ├── videos/
   ├── index.html
   ├── about-me.html
   ├── skills.html
   ├── projects.html
   └── other files...
   ```

### Option B: Using FTP/SFTP
1. **Get FTP Credentials from Hostinger:**
   - Host: your-domain.com or IP address
   - Username: provided by Hostinger
   - Password: provided by Hostinger
   - Port: 21 (FTP) or 22 (SFTP)

2. **Upload using FileZilla:**
   - Connect to your server
   - Navigate to `public_html`
   - Upload all contents from the `out` folder

## Step 4: Configure Domain and SSL

### 4.1 Domain Setup
1. **If using a new domain (included in your plan):**
   - Go to "Domains" in your Hostinger panel
   - Add your domain and point it to your hosting account

2. **If using an existing domain:**
   - Update nameservers to Hostinger's:
     - ns1.dns-parking.com
     - ns2.dns-parking.com

### 4.2 SSL Certificate
1. Go to "SSL" in your Hostinger panel
2. Enable "Force HTTPS" for your domain
3. SSL certificate should be automatically installed (free with your plan)

## Step 5: Optimize for Performance

### 5.1 Enable CDN
1. In Hostinger panel, go to "Performance"
2. Enable CDN (included in your premium plan)
3. This will speed up your website globally

### 5.2 Configure Caching
1. Enable browser caching in your hosting settings
2. Set appropriate cache headers for static assets

## Step 6: Set Up Custom Error Pages (Optional)

Create custom error pages in your `public_html`:
```html
<!-- 404.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Page Not Found</title>
    <meta http-equiv="refresh" content="0; url=/">
</head>
<body>
    <script>window.location.href = "/";</script>
</body>
</html>
```

## Step 7: Configure .htaccess for Better Performance

Create a `.htaccess` file in your `public_html` folder:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType video/webm "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>

# Redirect to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Step 8: Test Your Deployment

1. **Check your website:**
   - Visit your domain
   - Test all navigation links
   - Verify images and videos load correctly
   - Test on mobile devices

2. **Performance Testing:**
   - Use Google PageSpeed Insights
   - Test loading speed
   - Verify CDN is working

## Step 9: Set Up Monitoring and Backups

### 9.1 Backups
- Hostinger provides weekly backups (included in your plan)
- You can also create manual backups from the control panel

### 9.2 Monitoring
- Set up uptime monitoring
- Monitor website performance
- Check SSL certificate expiry

## Troubleshooting Common Issues

### Issue 1: Videos Not Loading
- Ensure video files are uploaded correctly
- Check file permissions (should be 644)
- Verify video formats are supported

### Issue 2: Images Not Displaying
- Check image paths in the code
- Ensure images are in the correct folders
- Verify file permissions

### Issue 3: CSS/JS Not Loading
- Clear browser cache
- Check if files are uploaded correctly
- Verify .htaccess configuration

### Issue 4: 404 Errors
- Ensure all HTML files are in the root directory
- Check internal links
- Set up proper redirects

## Maintenance and Updates

### Regular Updates
1. **Content Updates:**
   - Modify source files locally
   - Run `npm run build`
   - Upload new `out` folder contents

2. **Dependency Updates:**
   ```bash
   npm update
   npm audit fix
   npm run build
   ```

### Performance Monitoring
- Monitor website speed monthly
- Check for broken links
- Update content regularly
- Monitor SSL certificate status

## Support and Resources

### Hostinger Support
- **Priority Support** (included in your premium plan)
- Live chat available 24/7
- Knowledge base: [support.hostinger.com](https://support.hostinger.com)

### Additional Resources
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Hostinger Tutorials](https://www.hostinger.com/tutorials)

## Security Best Practices

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm update
   ```

2. **Regular Backups**
   - Use Hostinger's backup feature
   - Keep local backups of your source code

3. **Monitor Security**
   - Enable security headers in .htaccess
   - Monitor for suspicious activity
   - Keep SSL certificates updated

## Conclusion

Your Next.js space portfolio is now successfully deployed on Hostinger! The static export approach ensures fast loading times and optimal performance. With your premium plan features like CDN, SSL, and dedicated IP, your portfolio will provide an excellent user experience.

Remember to regularly update your content and monitor performance to maintain a professional online presence.

---

**Need Help?** Contact Hostinger's priority support or refer to their comprehensive documentation for additional assistance.