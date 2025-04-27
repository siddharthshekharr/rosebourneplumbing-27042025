# Migration from Cloudinary to Next.js Image

This guide outlines the complete process for migrating from Cloudinary to Next.js Image for the Rosebourne Plumbing website.

## Migration Steps

Follow these steps in order to complete the migration:

### 1. Download Images from Cloudinary

First, download all images from Cloudinary that are referenced in the codebase:

```bash
npm run download-images
```

This script:
- Scans all JSX/JS files for NextImage components
- Creates the necessary directory structure in `/public/images/`
- Downloads each image from Cloudinary and saves it locally

### 2. Validate Image Paths

Verify that all images have been downloaded correctly:

```bash
npm run validate-images
```

This will report:
- Total number of images found in components
- Missing files that need to be downloaded
- Images missing file extensions

### 3. Remove Cloudinary Code

Remove all Cloudinary-related code to avoid confusion:

```bash
npm run cleanup-cloudinary
```

This script removes:
- Cloudinary components (CloudinaryImage, CloudinaryVideo)
- Legacy wrapper components (AppImage, AppVideo, UniversalImage)
- Cloudinary utility files and libraries
- Cloudinary API routes
- Cloudinary documentation files

### 4. Update package.json

Remove Cloudinary-related dependencies from package.json:

```bash
npm remove cloudinary next-cloudinary
```

### 5. Test The Application

Start the development server to test the migration:

```bash
npm run dev
```

Verify that all images load correctly throughout the site.

## Understanding the NextImage Component

The migration uses a new `NextImage` component that:

1. Accepts the same props as Next.js Image component
2. Automatically prepends `/images/` to paths if needed
3. Works with both local images and external URLs
4. Warns about missing file extensions

Example usage:

```jsx
// Basic usage
<NextImage 
  src="logo.png" 
  alt="Logo" 
  width={200} 
  height={80} 
/>

// Fill container
<NextImage 
  src="hero.jpg" 
  alt="Hero Image" 
  fill 
  className="object-cover" 
/>

// External URL (still optimized by Next.js)
<NextImage 
  src="https://example.com/image.jpg" 
  alt="External Image" 
  width={300} 
  height={200} 
/>
```

## Benefits of Next.js Image

- Built-in image optimization
- Automatic WebP/AVIF format conversion
- Responsive sizes
- Lazy loading
- Proper CLS prevention
- Works seamlessly with Vercel's infrastructure

## Troubleshooting

If images are not displaying correctly:

1. Check that file extensions match exactly (.jpg vs .jpeg, etc.)
2. Verify image paths in components
3. Ensure images exist in the public directory
4. Run `npm run validate-images` to find missing files

## Reverting (If Needed)

If you need to revert to Cloudinary:

1. Restore the Cloudinary dependencies: `npm install cloudinary next-cloudinary`
2. Restore the Cloudinary files from your Git history
3. Update imports in your components

However, the Next.js Image approach is recommended as it provides excellent optimization without third-party dependencies. 