'use client'

import { useState, useRef } from 'react'
import { uploadToCloudinary } from '@/lib/uploadToCloudinary'
import { Button } from '@/components/ui/button'
import { Loader2, Upload, X, Check } from 'lucide-react'
import toast from 'react-hot-toast'
import { Progress } from '@/components/ui/progress'
import NextImage from '@/components/ui/NextImage'

/**
 * Image Uploader Component
 * @param {Object} props - Component props
 * @param {Function} props.onUploadComplete - Callback when upload completes
 * @param {string} props.folder - Cloudinary folder to upload to
 * @param {Object} props.options - Additional Cloudinary upload options
 * @param {string} props.defaultImage - Default image to show
 * @param {string} props.className - Additional CSS classes
 */
export default function ImageUploader({
  onUploadComplete,
  folder = '',
  options = {},
  defaultImage = '',
  className = '',
}) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadedImage, setUploadedImage] = useState(defaultImage)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    try {
      setIsUploading(true)
      setError(null)
      setUploadProgress(0)

      // Show a loading toast
      const loadingToast = toast.loading('Uploading image...')

      // Create a mock progress indicator
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          const newProgress = prev + Math.random() * 10
          return newProgress > 90 ? 90 : newProgress
        })
      }, 300)

      // Upload the file to Cloudinary via server-side API
      const result = await uploadToCloudinary(file, folder, options)

      clearInterval(progressInterval)
      setUploadProgress(100)

      // Set the uploaded image
      if (result && result.public_id) {
        setUploadedImage(result.public_id)

        // Call the callback with the result
        if (onUploadComplete) {
          onUploadComplete(result)
        }

        // Show success toast
        toast.success('Image uploaded successfully!', {
          id: loadingToast,
          icon: '🎉',
        })
      } else {
        throw new Error('Invalid response from server')
      }
    } catch (err) {
      const errorMessage = err.message || 'Unknown error'
      setError('Upload failed: ' + errorMessage)
      console.error('Upload error:', err)

      // Show error toast
      toast.error(`Upload failed: ${errorMessage}`, {
        duration: 5000,
        icon: '❌',
      })
    } finally {
      setIsUploading(false)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const clearImage = (e) => {
    e.stopPropagation()
    setUploadedImage('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    if (onUploadComplete) {
      onUploadComplete(null)
    }

    // Show info toast when image is removed
    toast.success('Image removed', {
      icon: '🗑️',
      duration: 2000,
    })
  }

  return (
    <div className={`relative ${className}`}>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Upload area */}
      <div
        onClick={!isUploading ? triggerFileInput : undefined}
        className={`
          relative border-2 border-dashed rounded-lg p-4 min-h-[200px] flex flex-col items-center justify-center
          ${isUploading ? 'bg-gray-50 border-gray-300' : 'bg-gray-50 border-gray-300 hover:border-blue-500 cursor-pointer'}
          ${error ? 'border-red-500' : ''}
          transition-all duration-200
        `}
      >
        {/* Show preview if image is uploaded */}
        {uploadedImage ? (
          <div className="relative w-full h-full min-h-[200px]">
            <NextImage
              src={uploadedImage}
              alt="Uploaded image"
              fill
              className="object-contain rounded-md"
            />
            <button
              onClick={clearImage}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
              title="Remove image"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <>
            {/* Upload icon and text */}
            <div className="flex flex-col items-center justify-center text-gray-500">
              <Upload size={48} className="mb-2" />
              <p className="text-sm font-medium">
                {isUploading ? 'Uploading...' : 'Click to upload an image'}
              </p>
              <p className="text-xs mt-1">
                JPG, PNG, GIF up to 10MB
              </p>
            </div>
          </>
        )}

        {/* Upload progress */}
        {isUploading && (
          <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-2" />
            <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">{Math.round(uploadProgress)}%</p>
          </div>
        )}

        {/* Success indicator */}
        {uploadProgress === 100 && !isUploading && (
          <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
            <Check size={16} />
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}