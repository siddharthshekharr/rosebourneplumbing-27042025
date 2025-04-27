/**
 * Map of public folder images to their Cloudinary public IDs
 * This helps with migrating from public folder to Cloudinary
 */
export const IMAGE_MAPPING = {
  // Add mappings as you upload images to Cloudinary
  '/images/logo.jpg': 'plumbing-website/logo',
  '/images/hero-image.jpg': 'plumbing-website/hero-image',
  '/images/about-us-hero.jpg': 'plumbing-website/about-us-hero',
  '/images/will.jpg': 'plumbing-website/will',
  
  // Direct string IDs
  'logo': 'plumbing-website/logo',
  'logo-white': 'plumbing-website/logo-white',
  
  // Unsplash images
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070': 'plumbing-website/bathroom-before',
  'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069': 'plumbing-website/bathroom-after',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070': 'plumbing-website/kitchen-before',
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068': 'plumbing-website/kitchen-after',
  'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2069': 'plumbing-website/heating-before',
  'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2069': 'plumbing-website/heating-after',
  
  // Add more mappings as needed
}

/**
 * Get the Cloudinary public ID for a public folder image path
 * @param {string} publicPath - Path to the image in the public folder (e.g., '/images/logo.jpg')
 * @param {string} defaultId - Default Cloudinary ID to use if no mapping exists
 * @returns {string} - Cloudinary public ID or the original path if no mapping exists
 */
export const getCloudinaryId = (publicPath, defaultId = '') => {
  if (!publicPath) return defaultId
  
  // Check if we have a mapping for this public path or URL
  const cloudinaryId = IMAGE_MAPPING[publicPath]
  
  // Return the Cloudinary ID if found
  if (cloudinaryId) return cloudinaryId
  
  // Handle URLs
  if (publicPath.startsWith('http')) {
    console.log(`No Cloudinary mapping found for URL: ${publicPath}`)
    // Default to using the original URL as we can't upload it dynamically
    return defaultId || publicPath
  }
  
  // For local paths, try to construct a default Cloudinary ID
  if (publicPath.startsWith('/')) {
    // Remove the leading slash and 'images/' if present
    let defaultCloudinaryId = publicPath.replace(/^\/images\//, '')
    // Remove file extension
    defaultCloudinaryId = defaultCloudinaryId.replace(/\.\w+$/, '')
    // Add the folder prefix
    defaultCloudinaryId = `plumbing-website/${defaultCloudinaryId}`
    
    return defaultId || defaultCloudinaryId || publicPath
  }
  
  // Return the default or original path
  return defaultId || publicPath
}

/**
 * Determine if a path is a Cloudinary ID or a public folder path
 * @param {string} path - Path or ID to check
 * @returns {boolean} - True if the path is likely a Cloudinary ID
 */
export const isCloudinaryId = (path) => {
  if (!path) return false
  
  // If it's in our mapping, use that determination
  if (IMAGE_MAPPING[path]) return true
  
  // If it starts with http or https, it's not a Cloudinary ID
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return false
  }
  
  // If it starts with a slash, it's likely a public folder path
  if (path.startsWith('/')) {
    return false
  }
  
  // If it's a simple string with no slashes or dots, it could be a Cloudinary ID
  if (!path.includes('/') && !path.includes('.')) {
    return true
  }
  
  // Otherwise, assume it's a Cloudinary ID
  return true
}

/**
 * Universal image component helper - determines whether to use CloudinaryImage or Next/Image
 * @param {string} src - Image source (public path or Cloudinary ID)
 * @returns {Object} - { component, props } to use for rendering
 */
export const getImageComponent = (src) => {
  // Check if the source is a Cloudinary ID
  if (isCloudinaryId(src)) {
    return {
      component: 'CloudinaryImage',
      props: { src }
    }
  }
  
  // Check if we have a mapping for this public path
  const cloudinaryId = getCloudinaryId(src)
  
  // If we have a mapping, use CloudinaryImage
  if (cloudinaryId !== src) {
    return {
      component: 'CloudinaryImage',
      props: { src: cloudinaryId }
    }
  }
  
  // Otherwise, use Next/Image
  return {
    component: 'Image',
    props: { src }
  }
} 