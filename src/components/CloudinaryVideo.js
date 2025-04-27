'use client'

// Cloudinary import removed
import 'next-cloudinary/dist/cld-video-player.css'

export default function CloudinaryVideo({ src, ...props }) {
    return (
        <CldVideoPlayer
            src={src}
            {...props}
        />
    )
} 