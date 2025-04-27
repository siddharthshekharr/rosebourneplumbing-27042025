'use client'

// Cloudinary import removed

/**
 * Cloudinary Image Component
 * Uses the next-cloudinary package which is safe for client-side use
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Cloudinary public ID
 * @param {string} props.alt - Image alt text
 */
export default function CloudinaryImage({ src, alt, ...props }) {
    return (
        <NextImage
            src={src}
            alt={alt}
            {...props}
        />
    )
} 