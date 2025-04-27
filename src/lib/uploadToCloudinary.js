/**
 * Client-side utilities for uploading to Cloudinary
 * This file is safe to import in client components
 */

/**
 * Upload a single file to Cloudinary (client-side only)
 * @param {File} file - File object from input or drag-and-drop
 * @param {string} folder - Folder in Cloudinary to upload to
 * @param {Object} options - Additional upload options
 * @returns {Promise<Object>} - Cloudinary upload response
 */
export const uploadToCloudinary = async (file, folder = '', options = {}) => {
    try {
        if (!file) {
            throw new Error('No file provided')
        }

        // Create a FormData object to send the file
        const formData = new FormData()
        formData.append('file', file)
        
        // Send the file to our server-side API route
        const response = await fetch('/api/cloudinary/client-upload', {
            method: 'POST',
            body: formData,
        })

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error || 'Upload failed')
        }

        const data = await response.json()
        return data.result
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error)
        throw error
    }
}

/**
 * Upload multiple files to Cloudinary (client-side only)
 * @param {Array<File>} files - Array of File objects
 * @param {string} folder - Folder in Cloudinary to upload to
 * @param {Object} options - Additional upload options
 * @returns {Promise<Array<Object>>} - Array of Cloudinary upload responses
 */
export const uploadMultipleToCloudinary = async (files, folder = '', options = {}) => {
    try {
        const uploadPromises = files.map(file => uploadToCloudinary(file, folder, options))
        return await Promise.all(uploadPromises)
    } catch (error) {
        console.error('Error uploading multiple files to Cloudinary:', error)
        throw error
    }
} 