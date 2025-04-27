'use client'

import Image from 'next/image'

/**
 * Standardized image component that uses Next.js Image
 * This is the recommended component to use for all images in the application
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image path or URL
 * @param {string} props.alt - Image alt text
 */
export default function NextImage({
    src,
    alt = '',
    ...props
}) {
    // If no src is provided, return null
    if (!src) return null;

    // Handle image paths properly
    let processedSrc = src;

    // If not a URL and doesn't start with /, add the /images/ prefix
    if (!src.startsWith('http') && !src.startsWith('/')) {
        processedSrc = `/images/${src}`;
    }

    // If it's a key without extension, add one as Next.js needs file extensions
    if (!processedSrc.includes('.') && !processedSrc.startsWith('http')) {
        processedSrc = `${processedSrc}.png`;
    }

    return (
        <Image
            src={processedSrc}
            alt={alt}
            {...props}
        />
    );
} 