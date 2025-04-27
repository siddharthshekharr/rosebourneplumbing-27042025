const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common image extensions to use when adding extensions
const IMAGE_EXTENSIONS = {
    'logo': 'png',
    'hero': 'jpg',
    'about-us-hero': 'jpg',
    'plumbing': 'jpg',
    'bathroom': 'jpg',
    'content': 'jpg',
    'team': 'jpg',
    'office': 'jpg',
    'values': 'jpg',
    'default': 'jpg' // Default extension if none matched
};

// Function to guess appropriate extension based on filename
function guessExtension(filename) {
    // Check if there's a specific extension mapping
    for (const [key, ext] of Object.entries(IMAGE_EXTENSIONS)) {
        if (filename.includes(key)) {
            return ext;
        }
    }
    return IMAGE_EXTENSIONS.default;
}

// Function to convert Cloudinary ID to proper file path
function convertCloudinaryPath(src) {
    // If it already has an extension or is a URL, leave it alone
    if (src.includes('.') || src.startsWith('http')) {
        return src;
    }

    let newPath = src;

    // Remove 'plumbing-website/' prefix if present
    if (newPath.startsWith('plumbing-website/')) {
        newPath = newPath.replace('plumbing-website/', '');
    }

    // Add appropriate extension
    const extension = guessExtension(newPath);
    newPath = `${newPath}.${extension}`;

    return newPath;
}

// Function to process a single file
function processFile(filePath) {
    console.log(`Processing file: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Regex to find NextImage components with their src attributes
    const nextImageRegex = /<NextImage\s+([^>]*src=["']([^"']+)["'][^>]*)\s*\/?\s*>/g;

    // Replace all instances of NextImage with updated src paths
    const newContent = content.replace(nextImageRegex, (match, attrs, src) => {
        const newSrc = convertCloudinaryPath(src);
        if (newSrc !== src) {
            modified = true;
            return match.replace(`src="${src}"`, `src="${newSrc}"`);
        }
        return match;
    });

    // Save the file if modified
    if (modified) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Modified: ${filePath}`);
        return true;
    }

    return false;
}

// Find all JavaScript/JSX files in the src directory
const files = glob.sync('src/**/*.{js,jsx}');
let modifiedCount = 0;

// Process each file
files.forEach(file => {
    if (processFile(file)) {
        modifiedCount++;
    }
});

console.log(`\nPath update complete! Modified ${modifiedCount} files.`);
console.log(`\nNEXT STEPS:`);
console.log(`1. Check that all image paths have appropriate extensions (.jpg, .png, etc.)`);
console.log(`2. Make sure all necessary images are placed in the /public/images/ directory`);
console.log(`3. Test the website to ensure all images load correctly\n`); 