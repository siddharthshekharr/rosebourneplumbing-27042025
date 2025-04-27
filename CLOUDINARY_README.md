# Cloudinary Integration for Rosebourne Plumbing

This document provides an overview of the Cloudinary integration in the Rosebourne Plumbing website.

## Overview

All images and videos in the application should use Cloudinary for optimized delivery, transformations, and CDN benefits. We've standardized on the `AppImage` and `AppVideo` components which use Cloudinary internally.

## Components

### 1. AppImage Component

The main component for displaying images. It supports three types of sources:

1. **Mapping Keys** (Recommended):
```jsx
import AppImage from '@/components/ui/AppImage'

<AppImage 
  src="logo" // Uses the mapping key from cloudinaryIdMapping.js
  alt="Example" 
  width={500} 
  height={300} 
/>
```

2. **Direct Cloudinary IDs**:
```jsx
import AppImage from '@/components/ui/AppImage'

<AppImage 
  src="plumbing-website/bsabiqq5lhwomujtixoe" // Direct Cloudinary ID
  alt="Example" 
  width={500} 
  height={300} 
/>
```

3. **Legacy Paths** (Automatically converted):
```jsx
import AppImage from '@/components/ui/AppImage'

<AppImage 
  src="/images/logo.png" // Will be converted to Cloudinary format
  alt="Example" 
  width={500} 
  height={300} 
/>
```

### 2. AppVideo Component

The main component for displaying videos:

```jsx
import AppVideo from '@/components/ui/AppVideo'

<AppVideo 
  src="promo-video" // Uses the mapping key from cloudinaryIdMapping.js
  alt="Promotional Video" 
  controls
  autoPlay
  muted
  loop
  className="w-full rounded-lg"
  transformations={{ quality: "auto" }}
/>
```

### 3. CloudinaryImage Component

The underlying component that interfaces with Cloudinary for images:

```jsx
import CloudinaryImage from '@/components/CloudinaryImage'

<CloudinaryImage 
  src="plumbing-website/example" 
  alt="Example" 
  width={500} 
  height={300} 
/>
```

### 4. CloudinaryVideo Component

The underlying component that interfaces with Cloudinary for videos:

```jsx
import CloudinaryVideo from '@/components/CloudinaryVideo'

<CloudinaryVideo 
  src="plumbing-website/example-video" 
  alt="Example Video" 
  controls
  autoPlay={false}
  muted
  loop={false}
/>
```

### 5. ImageUploader Component

For uploading images and videos to Cloudinary:

```jsx
import ImageUploader from '@/components/ui/ImageUploader'

<ImageUploader 
  folder="plumbing-website" 
  onUploadComplete={handleUploadComplete} 
/>
```

## Image Mapping System

We use a mapping system to manage Cloudinary IDs in a central location:

1. **Mapping File**: `src/lib/cloudinaryIdMapping.js` contains all image and video mappings
2. **Benefits**:
   - Central management of media IDs
   - Use simple keys in components instead of long IDs
   - Update IDs without changing components
   - Backward compatibility with legacy paths

Example mapping:
```javascript
const CLOUDINARY_ID_MAPPING = {
  'logo': 'plumbing-website/bsabiqq5lhwomujtixoe',
  'hero': 'plumbing-website/hero',
  'promo-video': 'plumbing-website/promotional-video',
  // other mappings...
};
```

## Admin Interface

The admin interface for uploading images and videos is available at `/admin/cloudinary-upload`. It provides:

1. Single file upload (images and videos)
2. Bulk upload from the public folder
3. Preview of uploaded files
4. Copy functionality for public IDs

## Supported File Types

### Images
- JPG/JPEG
- PNG
- GIF
- WebP
- SVG
- and more

### Videos
- MP4
- MOV
- AVI
- WMV
- FLV
- MKV
- WEBM
- and more

## Media Naming Convention

All media should follow this naming convention:

- **Public IDs**: `plumbing-website/[category]/[name]` or `plumbing-website/[unique_id]`
- **Examples**:
  - `plumbing-website/bsabiqq5lhwomujtixoe` (logo)
  - `plumbing-website/services/bathroom-renovation`
  - `plumbing-website/videos/promotional`

## Cloudinary Features

### Image Transformations

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

### Video Transformations

```jsx
<AppVideo 
  src="promo-video" 
  alt="Promotional Video"
  transformations={{
    quality: "auto",
    format: "auto",
    width: 720,
    height: 480,
    crop: "fill"
  }}
/>
```

### Responsive Images

```jsx
<AppImage 
  src="logo" 
  alt="Example" 
  sizes="(max-width: 768px) 100vw, 50vw"
  width={1200}
  height={800}
  responsive
/>
```

### Effects

```jsx
<AppImage 
  src="logo" 
  alt="Example" 
  width={500} 
  height={300}
  effect="grayscale"
/>
```

## Migration

See the [CLOUDINARY_MIGRATION.md](./CLOUDINARY_MIGRATION.md) file for detailed migration instructions.

## Troubleshooting

### Media Not Found

If an image or video is not found, check:

1. The public ID is correct
2. The file has been uploaded to Cloudinary
3. The Cloudinary credentials are correct in `.env.local`

### Performance Issues

If media is loading slowly:

1. Ensure `quality="auto"` and `format="auto"` are used
2. Check that responsive sizing is appropriate
3. Use the `priority` prop for above-the-fold images
4. Consider using lower resolution videos for mobile devices

## Resources

- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Next Cloudinary Documentation](https://next.cloudinary.dev/)
- [Cloudinary Dashboard](https://console.cloudinary.com/) 