'use client'

import Image from 'next/image'
import NextImage from '@/components/ui/NextImage'
import { getCloudinaryId, isCloudinaryId } from '@/lib/imageHelper'

/**
 * Standardized image component that uses CloudinaryImage internally
 * This is the recommended component to use for all images in the application
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Cloudinary public ID, mapping key, or full URL
 * @param {string} props.alt - Image alt text
 * @param {Object} props.cloudinaryOptions - Additional options for Cloudinary
 */
export default function AppImage({
  src,
  alt = '',
  ...props
}) {
  // If no src is provided, return null
  if (!src) return null;

  // If src is already a Cloudinary ID, use it directly
  if (isCloudinaryId(src)) {
    return (
      <NextImage
        src={src}
        alt={alt}
        {...props}
      />
    );
  }

  // Check if we have a mapping for this key
  const cloudinarySrc = getCloudinaryId(src);

  // If cloudinarySrc is different from src, it means we found a mapping
  if (cloudinarySrc !== src) {
    return (
      <NextImage
        src={cloudinarySrc}
        alt={alt}
        {...props}
      />
    );
  }

  // Handle external URLs if no mapping was found
  if (src.startsWith('http')) {
    console.warn(`AppImage: Non-Cloudinary image source detected: ${src}. Please upload to Cloudinary.`);

    // Fall back to Next.js Image for external URLs
    return (
      <Image
        src={src}
        alt={alt}
        {...props}
      />
    );
  }

  // For local paths with no mapping
  if (src.startsWith('/')) {
    // Remove the leading slash and 'images/' if present
    let processedSrc = src.replace(/^\/images\//, '');
    // Remove file extension
    processedSrc = processedSrc.replace(/\.\w+$/, '');
    // Add the folder prefix if not already present
    if (!processedSrc.startsWith('plumbing-website/')) {
      processedSrc = `plumbing-website/${processedSrc}`;
    }

    return (
      <NextImage
        src={processedSrc}
        alt={alt}
        {...props}
      />
    );
  }

  // Default case, try to use CloudinaryImage
  return (
    <NextImage
      src={cloudinarySrc}
      alt={alt}
      {...props}
    />
  );
} 