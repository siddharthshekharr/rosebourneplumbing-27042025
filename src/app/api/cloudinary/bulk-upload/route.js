import { NextResponse } from 'next/server'
import { bulkUploadAction } from '@/app/actions/cloudinaryActions'

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { sourceDir } = body

    if (!sourceDir) {
      return NextResponse.json(
        { success: false, error: 'Source directory is required' },
        { status: 400 }
      )
    }

    // Call the server action for bulk upload
    const results = await bulkUploadAction(sourceDir)

    // Return the results
    return NextResponse.json(results)
  } catch (error) {
    console.error('Error in bulk upload API route:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'An error occurred during bulk upload' },
      { status: 500 }
    )
  }
} 