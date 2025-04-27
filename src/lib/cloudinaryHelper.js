export const getCloudinaryUrl = (path, options = {}) => {
    const baseUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`

    // Convert options to Cloudinary URL parameters
    const params = Object.entries(options)
        .map(([key, value]) => `${key}_${value}`)
        .join(',')

    return `${baseUrl}/${params}/${path}`
}

export const getCloudinaryVideoUrl = (path, options = {}) => {
    const baseUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload`

    const params = Object.entries(options)
        .map(([key, value]) => `${key}_${value}`)
        .join(',')

    return `${baseUrl}/${params}/${path}`
} 