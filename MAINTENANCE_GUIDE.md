# Maintenance Guide for Rosebourne Plumbing Website

This guide outlines the key maintenance tasks needed to ensure the website remains in good working order.

## 1. Google Places API Key Renewal

The current Google Places API key is not working with the error: "This API project is not authorized to use this API."

### Steps to Fix:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to "APIs & Services" > "Library"
4. Search for "Places API" and enable it
5. Go to "APIs & Services" > "Credentials"
6. Either edit your existing API key or create a new one
7. Set appropriate restrictions:
   - HTTP referrers: Add your domain (e.g., `*.rosebourneplumbing.com/*`)
   - API restrictions: Restrict to Places API

8. Update the `.env` file with the new API key:
   ```
   GOOGLE_PLACES_API_KEY=your_new_api_key_here
   ```

9. Test the API key:
   ```
   npm run test-google-places
   ```

## 2. Cloudinary Image Migration

We've improved the image handling to better support external URLs, but for optimal performance, all images should be uploaded to Cloudinary.

### Steps to Upload Images:

1. Create a Cloudinary account if you don't have one
2. Add your Cloudinary credentials to `.env`:
   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   ```

3. Upload images to Cloudinary:
   ```
   npm run upload-images
   ```

4. Update image mappings:
   ```
   npm run update-mappings
   ```

5. Replace Next.js Image with AppImage:
   ```
   npm run replace-imports
   ```

6. Or run all migration steps at once:
   ```
   npm run migrate-images
   ```

## 3. Testing the Website

Use the generated checklist to systematically test all aspects of the website.

### Steps:

1. Generate the testing checklist:
   ```
   npm run generate-checklist
   ```

2. Go through each item in the checklist (`testing-checklist.md`)

3. Focus on:
   - Image loading and optimization
   - Form submissions
   - Google Places integration
   - Mobile responsiveness
   - Performance metrics

4. Use tools like:
   - Chrome DevTools for console errors and performance
   - Lighthouse for SEO, accessibility, and performance
   - Mobile devices or responsive design mode for mobile testing

## 4. Performance Optimization

Ensure the website is performing optimally:

1. Check Core Web Vitals in Google Search Console
2. Run Lighthouse audits and address any issues
3. Optimize image sizes and formats through Cloudinary
4. Minimize JavaScript bundles
5. Consider implementing caching strategies

## 5. Regular Maintenance Tasks

Perform these tasks regularly:

1. Update dependencies (monthly):
   ```
   npm update
   ```

2. Renew API keys (annually or as needed)
3. Check for broken links (monthly)
4. Update content (as needed)
5. Backup database (weekly)
6. Monitor error logs (weekly)

---

Following these steps will help ensure the website remains functional, secure, and performant. 