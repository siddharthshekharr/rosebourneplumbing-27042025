'use client'

import { useEffect, useRef } from 'react'
import { getCloudinaryId } from '@/lib/cloudinaryIdMapping'

/**
 * CloudinaryVideo Component
 * Displays videos from Cloudinary with optional transformations
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Cloudinary public ID or mapping key
 * @param {string} props.alt - Video alt text
 * @param {boolean} props.controls - Whether to show video controls (default: true)
 * @param {boolean} props.autoPlay - Whether to auto-play the video (default: false)
 * @param {boolean} props.muted - Whether the video should be muted (default: true if autoPlay is true)
 * @param {boolean} props.loop - Whether the video should loop (default: false)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.transformations - Cloudinary video transformations
 */
export default function CloudinaryVideo({
  src,
  alt = '',
  controls = true,
  autoPlay = false,
  muted: propsMuted,
  loop = false,
  className = '',
  transformations = {},
  ...props
}) {
  const videoRef = useRef(null)
  
  // If autoPlay is true, muted should default to true (browser requirement)
  const muted = propsMuted !== undefined ? propsMuted : autoPlay
  
  // Get the Cloudinary ID from the mapping if it's a key
  const cloudinarySrc = getCloudinaryId(src)
  
  // Build the Cloudinary URL
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'
  
  // Build transformation string
  let transformationString = ''
  if (Object.keys(transformations).length > 0) {
    transformationString = Object.entries(transformations)
      .map(([key, value]) => `${key}_${value}`)
      .join(',') + '/'
  }
  
  const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${transformationString}${cloudinarySrc}`
  
  // Handle autoplay with IntersectionObserver for better performance
  useEffect(() => {
    if (!autoPlay || !videoRef.current) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(error => {
              console.warn('Auto-play was prevented:', error)
            })
          } else {
            videoRef.current.pause()
          }
        })
      },
      { threshold: 0.1 }
    )
    
    observer.observe(videoRef.current)
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [autoPlay])
  
  return (
    <video
      ref={videoRef}
      src={videoUrl}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      className={className}
      playsInline
      {...props}
    >
      <source src={videoUrl} type="video/mp4" />
      {alt && <track kind="captions" src="" label={alt} />}
      Your browser does not support the video tag.
    </video>
  )
} 