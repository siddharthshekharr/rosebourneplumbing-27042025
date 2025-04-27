# Cloudinary Migration Guide

This document provides instructions for migrating all images in the application to use Cloudinary.

## Why Standardize on CloudinaryImage?

- **Optimized Delivery**: Cloudinary automatically optimizes images for different devices and browsers
- **Transformations**: Easy resizing, cropping, and effects without generating multiple versions
- **CDN Delivery**: Fast global delivery through Cloudinary's CDN
- **Consistent API**: One component to handle all image needs
- **Responsive Images**: Automatic responsive image generation

## Migration Steps

### Step 1: Upload Images to Cloudinary

1. Go to `/admin/cloudinary-upload` in the application
2. Upload all images from the public folder using the bulk upload feature
3. Note the public IDs of uploaded images (they will follow the pattern `plumbing-website/filename`)

### Step 2: Update the Mapping File

Add your Cloudinary IDs to the mapping file at `src/lib/cloudinaryIdMapping.js`:

```javascript
const CLOUDINARY_ID_MAPPING = {
  'logo': 'plumbing-website/bsabiqq5lhwomujtixoe',
  'hero': 'plumbing-website/hero',
  // Add more mappings as needed
};
```

You can use the utility script to update mappings:

```bash
node scripts/update-cloudinary-id.js logo plumbing-website/bsabiqq5lhwomujtixoe
```

### Step 3: Replace Image Components

Replace all instances of:

```jsx
import Image from 'next/image'

<Image 
  src="/images/example.jpg" 
  alt="Example" 
  width={500} 
  height={300} 
/>
```

With:

```jsx
import AppImage from '@/components/ui/AppImage'

<AppImage 
  src="example" // Use the mapping key, not the full Cloudinary ID
  alt="Example" 
  width={500} 
  height={300} 
/>
```

### Step 4: Use Cloudinary Features

Take advantage of Cloudinary features:

```jsx
<AppImage 
  src="logo" 
  alt="Example" 
  width={500} 
  height={300}
  crop="fill"
  gravity="auto"
  quality="auto"
  format="auto"
/>
```

## Common Transformations

- **Resize**: `width` and `height` attributes
- **Crop**: `crop="fill"` or `crop="thumb"`
- **Quality**: `quality="auto"` for automatic optimization
- **Format**: `format="auto"` to serve the best format for the browser
- **Effects**: `effect="grayscale"` or other effects

## Example Migrations

### Header Logo

Before:
```jsx
<Image
  src="/images/logo.jpg"
  alt="Rosebourne Plumbing"
  fill
  className="object-contain"
  priority
/>
```

After:
```jsx
<AppImage
  src="logo" // Use the mapping key, not the full Cloudinary ID
  alt="Rosebourne Plumbing"
  fill
  className="object-contain"
  priority
/>
```

### Hero Image

Before:
```jsx
<Image
  src="/images/hero-image.jpg"
  alt="Hero"
  fill
  className="object-cover"
/>
```

After:
```jsx
<AppImage
  src="hero" // Use the mapping key
  alt="Hero"
  fill
  className="object-cover"
  quality="auto"
  format="auto"
/>
```

## File Migration Checklist

- [x] Header.js
- [ ] Footer.js
- [ ] Homepage (page.js)
- [ ] About page
- [ ] Service pages
- [ ] Blog pages
- [ ] Contact page
- [ ] All components using images

## Need Help?

If you encounter any issues during migration, refer to:
- Cloudinary documentation: https://cloudinary.com/documentation
- Next Cloudinary documentation: https://next.cloudinary.dev/ 