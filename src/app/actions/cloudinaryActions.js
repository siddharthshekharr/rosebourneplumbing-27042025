'use server'

import { bulkUploadToCloudinary } from '@/lib/bulkUploadToCloudinary'

/**
 * Server action to bulk upload images from the public folder to Cloudinary
 * @param {string} sourceDir - Directory to upload from (relative to public)
 * @returns {Promise<Object>} - Upload results
 */
export async function bulkUploadAction(sourceDir) {
  try {
    if (!sourceDir) {
      return {
        success: false,
        error: 'Source directory is required'
      }
    }

    // Call the bulk upload function
    const results = await bulkUploadToCloudinary(sourceDir)
    
    return results
  } catch (error) {
    console.error('Error in bulk upload action:', error)
    return {
      success: false,
      error: error.message || 'An error occurred during bulk upload'
    }
  }
} 