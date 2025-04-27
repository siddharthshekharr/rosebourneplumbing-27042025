'use client'

import { useState } from 'react'
import { uploadToCloudinary } from '@/lib/uploadToCloudinary'
import { bulkUploadAction } from '@/app/actions/cloudinaryActions'
import ImageUploader from '@/components/ui/ImageUploader'
import { Button } from '@/components/ui/button'
import { Loader2, Upload, Check, FolderOpen, RefreshCw } from 'lucide-react'
import toast from 'react-hot-toast'

export default function CloudinaryUploadPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadResults, setUploadResults] = useState(null)
  const [uploadError, setUploadError] = useState(null)
  const [singleUploadResult, setSingleUploadResult] = useState(null)
  const [sourceFolder, setSourceFolder] = useState('images')

  const handleBulkUpload = async () => {
    try {
      setIsUploading(true)
      setUploadError(null)
      setUploadResults(null)

      // Show loading toast
      const loadingToast = toast.loading(`Uploading images from ${sourceFolder}...`)

      // Call the server action for bulk upload
      const results = await bulkUploadAction(sourceFolder)

      setUploadResults(results)
      
      if (results.success) {
        // Show success toast
        toast.success(`Successfully uploaded ${results.totalUploaded} images!`, {
          id: loadingToast,
          icon: '🎉',
          duration: 5000,
        })
      } else {
        setUploadError(results.error || 'An error occurred during bulk upload')
        // Show error toast
        toast.error(results.error || 'An error occurred during bulk upload', {
          id: loadingToast,
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Bulk upload error:', error)
      setUploadError(error.message || 'An error occurred during bulk upload')
      
      // Show error toast
      toast.error(`Upload failed: ${error.message || 'Unknown error'}`, {
        duration: 5000,
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleSingleUploadComplete = (result) => {
    setSingleUploadResult(result)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Cloudinary Image Upload</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Single Image Upload */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Upload Single Image</h2>
          <p className="text-gray-600 mb-6">
            Upload individual images to Cloudinary. The uploaded image will be available immediately.
          </p>

          <ImageUploader 
            onUploadComplete={handleSingleUploadComplete}
            folder="plumbing-website"
          />

          {singleUploadResult && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2 flex items-center">
                <Check size={16} className="text-green-500 mr-2" />
                Upload Successful
              </h3>
              <div className="text-sm text-gray-700">
                <p><span className="font-medium">Public ID:</span> {singleUploadResult.public_id}</p>
                <p><span className="font-medium">URL:</span> {singleUploadResult.secure_url}</p>
                <p className="mt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => navigator.clipboard.writeText(singleUploadResult.public_id)}
                  >
                    Copy Public ID
                  </Button>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bulk Upload */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Bulk Upload from Public Folder</h2>
          <p className="text-gray-600 mb-6">
            Upload all images from a directory in the public folder to Cloudinary.
            This will preserve the folder structure.
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Source Directory (relative to public/)
            </label>
            <div className="flex">
              <div className="flex-grow flex items-center border rounded-l-md px-3 bg-gray-50 text-gray-500">
                public/
              </div>
              <input
                type="text"
                value={sourceFolder}
                onChange={(e) => setSourceFolder(e.target.value)}
                className="flex-grow border border-l-0 rounded-r-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="images"
              />
            </div>
          </div>

          <Button
            onClick={handleBulkUpload}
            disabled={isUploading || !sourceFolder}
            className="w-full"
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <FolderOpen className="mr-2 h-4 w-4" />
                Bulk Upload from {sourceFolder}
              </>
            )}
          </Button>

          {uploadError && (
            <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
              <p className="font-medium">Error</p>
              <p className="text-sm">{uploadError}</p>
            </div>
          )}

          {uploadResults && (
            <div className="mt-6">
              <h3 className="font-medium mb-2 flex items-center">
                {uploadResults.success ? (
                  <>
                    <Check size={16} className="text-green-500 mr-2" />
                    Upload Complete
                  </>
                ) : (
                  <>
                    <RefreshCw size={16} className="text-red-500 mr-2" />
                    Upload Failed
                  </>
                )}
              </h3>
              
              {uploadResults.success && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2">
                    Successfully uploaded {uploadResults.totalUploaded} images.
                  </p>
                  
                  {uploadResults.results && uploadResults.results.length > 0 && (
                    <div className="mt-4">
                      <p className="font-medium text-sm mb-2">Uploaded Images:</p>
                      <div className="max-h-60 overflow-y-auto">
                        <ul className="text-xs space-y-1">
                          {uploadResults.results.map((result, index) => (
                            <li key={index} className="flex justify-between">
                              <span className="text-gray-600">{result.originalPath}</span>
                              <span className="text-blue-600">{result.publicId}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 