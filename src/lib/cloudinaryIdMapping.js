/**
 * Mapping of image paths to Cloudinary IDs
 * This file should be updated with the actual Cloudinary IDs after uploading images
 */

const CLOUDINARY_ID_MAPPING = {
  // Logo and branding
  'logo': 'plumbing-website/bsabiqq5lhwomujtixoe',
  'logo-white': 'plumbing-website/logo-white',
  
  // Home page
  'hero': 'plumbing-website/qefkppzy4eppcmupekwz',
  'about-section': 'plumbing-website/about-section',
  'testimonials-bg': 'plumbing-website/testimonials-bg',
  'professional-plumber-at-work': 'plumbing-website/g9ln1obrjvhhy9wdjq6m',
  
  // Services
  'services/emergency/hero': 'plumbing-website/services/emergency/hero',
  'services/emergency/content': 'plumbing-website/services/emergency/content',
  'services/bathroom-refurbishment/hero': 'plumbing-website/services/bathroom-refurbishment/hero',
  'services/bathroom-refurbishment/content': 'plumbing-website/services/bathroom-refurbishment/content',
  'services/shower-installation/hero': 'plumbing-website/services/shower-installation/hero',
  'services/shower-installation/content': 'plumbing-website/services/shower-installation/content',
  'services/bath-to-shower/hero': 'plumbing-website/services/bath-to-shower/hero',
  'services/bath-to-shower/content': 'plumbing-website/services/bath-to-shower/content',
  'services/electric-shower/hero': 'plumbing-website/services/electric-shower/hero',
  'services/electric-shower/content': 'plumbing-website/services/electric-shower/content',
  'services/leak-detection/hero': 'plumbing-website/services/leak-detection/hero',
  'services/leak-detection/content': 'plumbing-website/services/leak-detection/content',
  'services/tap-repairs/hero': 'plumbing-website/services/tap-repairs/hero',
  'services/tap-repairs/content': 'plumbing-website/services/tap-repairs/content',
  'services/outside-tap/hero': 'plumbing-website/services/outside-tap/hero',
  'services/outside-tap/content': 'plumbing-website/services/outside-tap/content',
  'services/toilet-installation/hero': 'plumbing-website/services/toilet-installation/hero',
  'services/toilet-installation/content': 'plumbing-website/services/toilet-installation/content',
  'services/water-heater/hero': 'plumbing-website/services/water-heater/hero',
  'services/water-heater/content': 'plumbing-website/services/water-heater/content',
  'services/extractor-fan/hero': 'plumbing-website/services/extractor-fan/hero',
  'services/extractor-fan/content': 'plumbing-website/services/extractor-fan/content',
  
  // About page
  'about/team': 'plumbing-website/about/team',
  'about/office': 'plumbing-website/about/office',
  'about/values': 'plumbing-website/about/values',
  
  // Blog
  'blog/hero': 'plumbing-website/blog/hero',
  
  // Add more mappings as needed
};

/**
 * Get the Cloudinary ID for a given image path
 * @param {string} imagePath - The image path to look up
 * @returns {string} - The Cloudinary ID or the original path if not found
 */
export function getCloudinaryId(imagePath) {
  // Remove leading slash and file extension if present
  const normalizedPath = imagePath
    .replace(/^\//, '')
    .replace(/^images\//, '')
    .replace(/\.\w+$/, '');
  
  // Check if we have a mapping for this path
  return CLOUDINARY_ID_MAPPING[normalizedPath] || `plumbing-website/${normalizedPath}`;
}

/**
 * Check if a string is a Cloudinary ID
 * @param {string} str - The string to check
 * @returns {boolean} - True if the string is a Cloudinary ID
 */
export function isCloudinaryId(str) {
  return typeof str === 'string' && str.startsWith('plumbing-website/');
}

export default CLOUDINARY_ID_MAPPING; 