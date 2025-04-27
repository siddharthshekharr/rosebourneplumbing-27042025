const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Path to public directory
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Function to extract all NextImage src attributes from a file
function extractImageSrcs(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const nextImageRegex = /<NextImage\s+([^>]*src=["']([^"']+)["'][^>]*)\s*\/?\s*>/g;
        const srcs = [];

        let match;
        while ((match = nextImageRegex.exec(content)) !== null) {
            srcs.push({
                src: match[2],
                file: filePath
            });
        }

        return srcs;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return [];
    }
}

// Function to validate an image path
function validateImagePath(imageSrc, sourceFile) {
    // Skip external URLs
    if (imageSrc.startsWith('http')) {
        return { valid: true, src: imageSrc, file: sourceFile, reason: 'external' };
    }

    // Process the src to get the actual file path
    let processedSrc = imageSrc;

    // If it doesn't start with /, add the /images/ prefix
    if (!processedSrc.startsWith('/')) {
        processedSrc = `/images/${processedSrc}`;
    }

    // Check if the path has an extension
    const hasExtension = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(processedSrc);

    // Resolve the full path
    const fullPath = path.join(PUBLIC_DIR, processedSrc);

    // Check if the file exists
    const fileExists = fs.existsSync(fullPath);

    return {
        valid: hasExtension && fileExists,
        src: imageSrc,
        processedSrc,
        fullPath,
        file: sourceFile,
        hasExtension,
        fileExists
    };
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

console.log(`Found ${allImageSrcs.length} NextImage components across ${files.length} files.`);

// Validate all image paths
const validationResults = allImageSrcs.map(({ src, file }) => validateImagePath(src, file));

// Group results by validity
const valid = validationResults.filter(result => result.valid);
const missingExtension = validationResults.filter(result => !result.hasExtension);
const missingFiles = validationResults.filter(result => result.hasExtension && !result.fileExists);

// Output results
console.log('\n=== VALIDATION RESULTS ===');
console.log(`Total images: ${validationResults.length}`);
console.log(`Valid images: ${valid.length}`);
console.log(`Missing extensions: ${missingExtension.length}`);
console.log(`Missing files: ${missingFiles.length}`);

if (missingExtension.length > 0) {
    console.log('\n=== IMAGES MISSING EXTENSIONS ===');
    missingExtension.forEach(result => {
        console.log(`- ${result.src} in ${result.file}`);
    });
}

if (missingFiles.length > 0) {
    console.log('\n=== IMAGES NOT FOUND IN PUBLIC DIRECTORY ===');
    missingFiles.forEach(result => {
        console.log(`- ${result.processedSrc} (referenced in ${result.file})`);
        console.log(`  Expected at: ${result.fullPath}`);
    });
}

// Print list of all unique image paths that need to be placed in the public directory
const allRequiredImages = validationResults
    .filter(result => !result.valid && !result.reason)
    .map(result => result.processedSrc);

// Remove duplicates
const uniqueRequiredImages = [...new Set(allRequiredImages)];

if (uniqueRequiredImages.length > 0) {
    console.log('\n=== IMAGES NEEDED IN PUBLIC DIRECTORY ===');
    uniqueRequiredImages.forEach(imagePath => {
        console.log(`- ${imagePath}`);
    });
}

console.log('\nREMINDER: Make sure to download these images from Cloudinary and place them in the public directory.'); 