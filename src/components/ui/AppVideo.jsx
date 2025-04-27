'use client'

import CloudinaryVideo from '@/components/CloudinaryVideo'
import { getCloudinaryId, isCloudinaryId } from '@/lib/cloudinaryIdMapping'

/**
 * Standardized video component that uses CloudinaryVideo internally
 * This is the recommended component to use for all videos in the application
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Cloudinary public ID, mapping key, or full URL
 * @param {string} props.alt - Video alt text
 * @param {boolean} props.controls - Whether to show video controls
 * @param {boolean} props.autoPlay - Whether to auto-play the video
 * @param {boolean} props.muted - Whether the video should be muted
 * @param {boolean} props.loop - Whether the video should loop
 * @param {Object} props.transformations - Cloudinary video transformations
 */
export default function AppVideo({
  src,
  alt = '',
  ...props
}) {
  // If no src is provided, return null
  if (!src) return null;
  
  // If src is already a Cloudinary ID, use it directly
  if (isCloudinaryId(src)) {
    return (
      <CloudinaryVideo
        src={src}
        alt={alt}
        {...props}
      />
    );
  }
  
  // Check if we have a mapping for this key
  const cloudinarySrc = getCloudinaryId(src);
  
  // Handle URLs and local paths if no mapping was found
  if (cloudinarySrc === `plumbing-website/${src}` && (src.startsWith('http') || src.startsWith('/'))) {
    // For demo purposes, we'll use a placeholder
    console.warn(`AppVideo: Non-Cloudinary video source detected: ${src}. Please upload to Cloudinary.`);
    
    // For local paths, we'll strip the leading slash and use as is
    let processedSrc = src;
    if (src.startsWith('/')) {
      // Remove the leading slash and 'videos/' if present
      processedSrc = src.replace(/^\/videos\//, '');
      // Remove file extension
      processedSrc = processedSrc.replace(/\.\w+$/, '');
      // Add the folder prefix if not already present
      if (!processedSrc.startsWith('plumbing-website/')) {
        processedSrc = `plumbing-website/${processedSrc}`;
      }
      
      return (
        <CloudinaryVideo
          src={processedSrc}
          alt={alt}
          {...props}
        />
      );
    }
  }

  return (
    <CloudinaryVideo
      src={cloudinarySrc}
      alt={alt}
      {...props}
    />
  );
} 