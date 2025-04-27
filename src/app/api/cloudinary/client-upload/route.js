import { NextResponse } from 'next/server'
import cloudinary from '@/lib/cloudinary'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { v4 as uuidv4 } from 'uuid'
import { mkdir } from 'fs/promises'

export async function POST(request) {
  try {
    // Check if cloudinary is available (server-side only)
    if (!cloudinary) {
      return NextResponse.json(
        { success: false, error: 'Cloudinary is not configured on the server' },
        { status: 500 }
      )
    }

    // Get the form data
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      )
    }

    // Create a temporary directory if it doesn't exist
    const tmpDir = join(process.cwd(), 'tmp')
    try {
      await mkdir(tmpDir, { recursive: true })
    } catch (error) {
      console.error('Error creating tmp directory:', error)
    }

    // Create a temporary file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    // Generate a unique filename
    const uniqueFilename = `${uuidv4()}-${file.name}`
    const filePath = join(tmpDir, uniqueFilename)
    
    // Write the file to disk
    await writeFile(filePath, buffer)

    // Upload the file to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        filePath,
        {
          folder: 'plumbing-website',
          resource_type: 'auto'
        },
        (error, result) => {
          // Try to delete the temporary file
          try {
            const fs = require('fs')
            fs.unlinkSync(filePath)
          } catch (e) {
            console.error('Error deleting temporary file:', e)
          }

          if (error) {
            reject(error)
          } else {
            resolve(result)
          }
        }
      )
    })

    // Return the result
    return NextResponse.json({
      success: true,
      result
    })
  } catch (error) {
    console.error('Error in client upload API route:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'An error occurred during upload' },
      { status: 500 }
    )
  }
} 