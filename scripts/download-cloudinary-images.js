const fs = require('fs');
const path = require('path');
const axios = require('axios');
const glob = require('glob');
require('dotenv').config();

// Path to public directory
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Cloudinary cloud name - get from environment variables
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!cloudName) {
    console.error('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME environment variable not found');
    console.error('Please make sure it is set in your .env file');
    process.exit(1);
}

// Cloudinary base URL for optimized images
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${cloudName}/image/upload`;

// Function to extract all NextImage src attributes from a file
function extractImageSrcs(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const nextImageRegex = /<NextImage\s+([^>]*src=["']([^"']+)["'][^>]*)\s*\/?\s*>/g;
        const srcs = [];

        let match;
        while ((match = nextImageRegex.exec(content)) !== null) {
            srcs.push(match[2]);
        }

        return srcs;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return [];
    }
}

// Function to format path for Cloudinary ID
function formatCloudinaryId(src) {
    // Remove extension if present
    let cloudinaryId = src.replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, '');

    // If the path starts with a slash or images/, clean it up
    if (cloudinaryId.startsWith('/')) {
        cloudinaryId = cloudinaryId.substring(1);
    }
    if (cloudinaryId.startsWith('images/')) {
        cloudinaryId = cloudinaryId.substring(7);
    }

    // Add plumbing-website/ prefix if not present
    if (!cloudinaryId.startsWith('plumbing-website/')) {
        cloudinaryId = `plumbing-website/${cloudinaryId}`;
    }

    return cloudinaryId;
}

// Function to download an image from Cloudinary
async function downloadImage(cloudinaryId, destination) {
    try {
        const url = `${CLOUDINARY_BASE_URL}/${cloudinaryId}`;
        console.log(`Downloading ${url} to ${destination}`);

        // Create directory if it doesn't exist
        const dir = path.dirname(destination);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Download the file
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream'
        });

        // Save the file
        const writer = fs.createWriteStream(destination);
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Error downloading ${cloudinaryId}:`, error.message);
        return Promise.resolve(); // Continue with other downloads
    }
}

// Find all JavaScript/JSX files
const files = glob.sync('src/**/*.{js,jsx}');

// Extract all image srcs
let allImageSrcs = [];
files.forEach(file => {
    const srcs = extractImageSrcs(file);
    if (srcs.length > 0) {
        allImageSrcs = [...allImageSrcs, ...srcs];
    }
});

// Filter out external URLs and create a list of unique local paths
const localSrcs = allImageSrcs
    .filter(src => !src.startsWith('http'))
    .map(src => {
        // Ensure it starts with / for consistency
        if (!src.startsWith('/')) {
            src = `/images/${src}`;
        } else if (!src.startsWith('/images/')) {
            src = `/images${src}`;
        }
        return src;
    });

// Remove duplicates
const uniqueLocalSrcs = [...new Set(localSrcs)];

console.log(`Found ${uniqueLocalSrcs.length} unique local image paths to download`);

// Download all images
async function downloadAllImages() {
    console.log('\nStarting downloads...');

    for (const src of uniqueLocalSrcs) {
        // Get the destination path
        const destination = path.join(PUBLIC_DIR, src);

        // Get the Cloudinary ID
        const cloudinaryId = formatCloudinaryId(src);

        // Download the image
        await downloadImage(cloudinaryId, destination);
    }

    console.log('\nDownloads complete!');
    console.log(`\nDownloaded ${uniqueLocalSrcs.length} images to ${PUBLIC_DIR}/images/`);
    console.log('\nNext step: Run "npm run validate-images" to verify all images were downloaded correctly');
}

// Run the downloads
downloadAllImages().catch(error => {
    console.error('Error:', error);
}); 