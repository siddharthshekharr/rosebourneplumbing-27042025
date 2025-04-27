/**
 * SERVER-SIDE ONLY
 * This file uses Node.js modules like fs and should only be imported in server components or API routes.
 * DO NOT import this file directly in client components.
 */
import fs from 'fs'
import path from 'path'
import cloudinary from './cloudinary'

/**
 * Get all image files from a directory recursively
 * @param {string} dir - Directory to scan
 * @param {Array<string>} fileList - Accumulator for file list
 * @returns {Array<string>} - List of image file paths
 */
const getImageFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList)
    } else {
      const ext = path.extname(file).toLowerCase()
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
        fileList.push(filePath)
      }
    }
  })
  
  return fileList
}

/**
 * Upload a single file from the public folder to Cloudinary
 * @param {string} filePath - Path to the file
 * @param {string} publicDir - Public directory path
 * @returns {Promise<Object>} - Cloudinary upload response
 */
const uploadPublicFile = async (filePath, publicDir) => {
  // Get the relative path from the public directory
  const relativePath = path.relative(publicDir, filePath)
  // Create a folder structure in Cloudinary that matches the file structure
  const folderPath = path.dirname(relativePath)
  // Get the filename without extension
  const fileName = path.basename(filePath, path.extname(filePath))
  
  // Create a public ID that preserves the folder structure
  const publicId = path.join(folderPath, fileName).replace(/\\/g, '/')
  
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      filePath,
      {
        public_id: publicId,
        overwrite: true,
        resource_type: 'auto'
      },
      (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve({
            originalPath: relativePath,
            cloudinaryUrl: result.secure_url,
            publicId: result.public_id,
            result
          })
        }
      }
    )
  })
}

/**
 * Bulk upload images from the public folder to Cloudinary
 * @param {string} sourceDir - Directory to upload from (relative to public)
 * @returns {Promise<Array<Object>>} - Array of upload results
 */
export const bulkUploadToCloudinary = async (sourceDir = 'images') => {
  try {
    // Get the absolute path to the public directory
    const publicDir = path.join(process.cwd(), 'public')
    // Get the absolute path to the source directory
    const sourcePath = path.join(publicDir, sourceDir)
    
    // Check if the directory exists
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Directory not found: ${sourcePath}`)
    }
    
    // Get all image files from the directory
    const imageFiles = getImageFiles(sourcePath)
    
    // Upload each file to Cloudinary
    const uploadPromises = imageFiles.map(filePath => 
      uploadPublicFile(filePath, publicDir)
    )
    
    // Wait for all uploads to complete
    const results = await Promise.all(uploadPromises)
    
    return {
      success: true,
      totalUploaded: results.length,
      results
    }
  } catch (error) {
    console.error('Error in bulk upload to Cloudinary:', error)
    return {
      success: false,
      error: error.message
    }
  }
} 