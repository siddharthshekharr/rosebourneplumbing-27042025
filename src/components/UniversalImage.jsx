'use client'

import NextImage from '@/components/ui/NextImage'
import { isCloudinaryId, getCloudinaryId } from '@/lib/imageHelper'

/**
 * Universal Image Component
 * This is now a wrapper around AppImage for backward compatibility
 * New code should use AppImage directly
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source (public path or Cloudinary ID)
 * @param {string} props.alt - Image alt text
 * @param {boolean} props.forceCloudinary - Force using Cloudinary even for public paths
 * @param {Object} props.cloudinaryOptions - Additional options for Cloudinary
 */
export default function UniversalImage({
  src,
  alt,
  forceCloudinary = false,
  cloudinaryOptions = {},
  ...props
}) {
  // If no src is provided, return null
  if (!src) return null

  // If forceCloudinary is true or src is already a Cloudinary ID, or we have a mapping
  // Just pass everything to AppImage which will handle it appropriately
  return <NextImage src={src} alt={alt} {...cloudinaryOptions} {...props} />
} 