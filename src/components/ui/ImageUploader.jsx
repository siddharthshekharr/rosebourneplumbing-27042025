'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2, Upload, X, Check } from 'lucide-react'
import toast from 'react-hot-toast'
import { Progress } from '@/components/ui/progress'
import NextImage from '@/components/ui/NextImage'

/**
 * Image Uploader Component
 * @param {Object} props - Component props
 * @param {Function} props.onUploadComplete - Callback when upload completes
 * @param {string} props.folder - Upload folder path
 * @param {Object} props.options - Additional upload options
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
  const [uploadedImage, setUploadedImage] = useState(defaultImage || '');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState('');

  const fileInputRef = useRef(null);

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      toast.error('Please select an image file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      toast.error('File size must be less than 10MB');
      return;
    }

    setError('');
    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          const next = prev + Math.random() * 10;
          return next >= 100 ? 100 : next;
        });
      }, 200);

      // Create a local file URL
      const imageUrl = URL.createObjectURL(file);

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      clearInterval(progressInterval);
      setUploadProgress(100);
      setUploadedImage(imageUrl);

      if (onUploadComplete) {
        // In a real implementation, you would upload to your server and get a URL
        onUploadComplete({
          secure_url: imageUrl,
          public_id: `local-${Date.now()}`,
          original_filename: file.name
        });
      }

      toast.success('Image uploaded successfully');

      // Simulate the final processing
      setTimeout(() => {
        setIsUploading(false);
      }, 500);

    } catch (error) {
      setIsUploading(false);
      setError('Upload failed. Please try again.');
      toast.error('Upload failed. Please try again.');
      console.error('Upload error:', error);
    }
  };

  const clearImage = (e) => {
    e.stopPropagation();
    setUploadedImage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onUploadComplete) {
      onUploadComplete(null);
    }

    // Show info toast when image is removed
    toast.success('Image removed', {
      icon: '🗑️',
      duration: 2000,
    });
  };

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
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}