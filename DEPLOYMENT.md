# Deployment Guide for enricojohansson.com

## Files Ready for Deployment

Your Geographic Quiz is ready to deploy! Here are the files that need to be uploaded:

### Essential Files (Upload these to your web server):
```
index.html                 # Main entry point
css/
  └── styles.css          # All styling
js/
  ├── data.js             # Quiz questions
  ├── quiz.js             # Quiz logic
  └── app.js              # Main application
```

### Optional Files (for development reference):
```
README.md                 # Documentation
.github/
  └── copilot-instructions.md
```

## Deployment Steps

### Option 1: Manual Upload (FTP/cPanel)
1. **Access your hosting control panel** (cPanel, Plesk, etc.)
2. **Navigate to File Manager** or use FTP client (FileZilla, WinSCP)
3. **Go to your domain's root directory** (usually `public_html` or `www`)
4. **Upload these files**:
   - `index.html` (to root directory)
   - `css/styles.css` (create css folder)
   - `js/data.js`, `js/quiz.js`, `js/app.js` (create js folder)

### Option 2: Git Deployment (if supported)
```bash
# If your hosting supports Git deployment
git init
git add .
git commit -m "Initial deployment of Geographic Quiz"
git remote add origin [your-git-repo-url]
git push origin main
```

### Option 3: Using VS Code Extensions
1. Install "SFTP" or "FTP-Sync" extension in VS Code
2. Configure with your hosting credentials
3. Right-click project folder → "Upload to Server"

## Domain Configuration

### DNS Settings (if needed)
- Ensure your domain points to your hosting server
- A Record: enricojohansson.com → [your server IP]
- CNAME: www → enricojohansson.com

### SSL Certificate
- Enable HTTPS through your hosting provider
- The quiz works with both HTTP and HTTPS

## Testing After Deployment

1. **Visit** https://enricojohansson.com
2. **Test all features**:
   - Category selection
   - All difficulty levels
   - Timer functionality
   - Score tracking
   - High scores persistence
   - Responsive design on mobile

## Performance Optimization (Already Implemented)

✅ **Lightweight**: Total size < 50KB
✅ **No external dependencies**: Fully self-contained
✅ **Optimized CSS**: Efficient selectors and minimal reflow
✅ **Compressed structure**: Clean, semantic HTML

## Hosting Requirements

### Minimum Requirements:
- **Web Server**: Any (Apache, Nginx, IIS)
- **PHP**: Not required (static HTML/JS)
- **Database**: Not required (uses localStorage)
- **SSL**: Recommended but not required

### Recommended Hosting Features:
- **Gzip compression** (reduces file sizes)
- **Browser caching** (improves load times)
- **CDN support** (faster global access)

## Custom Domain Setup

If you want the quiz at a specific path:
- **Root domain**: Upload to `/public_html/`
- **Subdirectory**: Upload to `/public_html/quiz/`
- **Subdomain**: Create `quiz.enricojohansson.com`

## Backup Strategy

Keep a backup of your files:
1. Download current version before any changes
2. Use version control (Git)
3. Regular backups of hosting account

## Troubleshooting

### Common Issues:
1. **404 Error**: Check file paths and upload locations
2. **JavaScript not working**: Verify all .js files uploaded
3. **Styling missing**: Ensure css/styles.css is uploaded
4. **Mixed content errors**: Use HTTPS for all resources

### File Permissions:
- HTML/CSS/JS files: 644 or 755
- Directories: 755

## Next Steps

1. **Choose your deployment method** from options above
2. **Upload the files** to your hosting server
3. **Test the quiz** at enricojohansson.com
4. **Configure any additional features** (analytics, custom domain, etc.)

## Need Help?

If you encounter issues:
1. Check your hosting provider's documentation
2. Verify file upload locations
3. Test locally first (files should work in browser)
4. Contact your hosting support if needed

The quiz is fully self-contained and should work on any modern web hosting service!