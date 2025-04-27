import { NextResponse } from 'next/server'
import cloudinary from '@/lib/cloudinary'

export async function POST(request) {
  try {
    // Get the file path from the request
    const { filePath, folder = '', options = {} } = await request.json()

    if (!filePath) {
      return NextResponse.json(
        { success: false, error: 'File path is required' },
        { status: 400 }
      )
    }

    // Upload the file to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadOptions = {
        folder,
        ...options
      }
      
      cloudinary.uploader.upload(filePath, uploadOptions, (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })

    // Return the result
    return NextResponse.json({
      success: true,
      result
    })
  } catch (error) {
    console.error('Error in server-side upload:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'An error occurred during upload' },
      { status: 500 }
    )
  }
} 