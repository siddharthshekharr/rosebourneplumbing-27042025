# Migration from Cloudinary to Next.js Image

This document outlines the process for migrating from Cloudinary to Next.js Image for the Rosebourne Plumbing website.

## Overview

We're moving from a Cloudinary-based image system to using Next.js's built-in image optimization through Vercel. This will simplify our codebase and reduce third-party dependencies.

## Migration Steps

### 1. Install Required Dependencies

```bash
npm install glob
```

### 2. Run the Migration Script

```bash
npm run replace-nextimage
```

This script will:
- Replace all `AppImage`, `CloudinaryImage`, and `UniversalImage` imports with `NextImage`
- Replace all component usages in JSX
- Update paths as needed

### 3. Download and Move Images

Any images previously hosted on Cloudinary should be downloaded and placed in the `/public/images` directory. Make sure to maintain the same folder structure when doing this.

For example:
- `plumbing-website/logo` -> `/public/images/logo.png`
- `plumbing-website/services/about/content` -> `/public/images/services/about/content.jpg`

### 4. Image Naming

When referencing images in your components, use one of these formats:

```jsx
// Using full path
<NextImage src="/images/logo.png" alt="Logo" />

// Using relative path (automatically prepends /images/)
<NextImage src="logo.png" alt="Logo" />

// For folder paths, include the extension
<NextImage src="services/about/content.jpg" alt="About content" />
```

### 5. Testing

After migration, thoroughly test the website to ensure all images load correctly.

## Benefits of Using Next.js Image

- Built-in optimization (WebP, AVIF support)
- Automatic responsive images
- Lazy loading by default
- No external API dependencies
- Works seamlessly with Vercel's CDN

## Reverting if Needed

If you need to revert to Cloudinary, you can:

1. Restore Cloudinary dependencies in `package.json`
2. Restore Cloudinary components
3. Update imports back to the original components

## Reference

For more information on Next.js Image optimization, see:
https://nextjs.org/docs/basic-features/image-optimization 