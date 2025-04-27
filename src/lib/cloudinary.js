/**
 * SERVER-SIDE ONLY
 * This file configures the Cloudinary SDK which uses Node.js modules.
 * It should only be imported in server components or API routes.
 */

// Only import and configure cloudinary on the server side
let cloudinary;

if (typeof window === 'undefined') {
  // We're on the server
  const { v2 } = require('cloudinary');
  
  v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });
  
  cloudinary = v2;
} else {
  // We're on the client - provide a placeholder
  cloudinary = null;
}

export default cloudinary; 