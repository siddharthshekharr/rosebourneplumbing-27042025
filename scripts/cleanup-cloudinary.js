const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Starting cleanup of Cloudinary-related code...');

// List of Cloudinary-specific files to delete
const filesToDelete = [
    // Components
    'src/components/CloudinaryImage.js',
    'src/components/CloudinaryVideo.js',
    'src/components/CloudinaryVideo.jsx',
    'src/components/ui/AppImage.jsx',
    'src/components/ui/AppVideo.jsx',
    'src/components/UniversalImage.jsx',

    // Libraries
    'src/lib/cloudinary.js',
    'src/lib/cloudinaryHelper.js',
    'src/lib/cloudinaryIdMapping.js',
    'src/lib/imageHelper.js',
    'src/lib/uploadToCloudinary.js',
    'src/lib/bulkUploadToCloudinary.js',
    'src/lib/cloudinaryImages.js',

    // Scripts
    'scripts/uploadToCloudinary.js',
    'scripts/replaceImageImports.js',
    'scripts/updateImageMappings.js',
    'scripts/migrate-images.js',

    // Documentation
    'CLOUDINARY_README.md',
    'CLOUDINARY_MIGRATION.md',

    // API Routes
    'src/app/api/cloudinary/upload/route.js',
    'src/app/api/cloudinary/client-upload/route.js',
    'src/app/api/cloudinary/bulk-upload/route.js',

    // Admin pages
    'src/app/admin/cloudinary-upload/page.jsx',
    'src/app/admin/image-upload/page.jsx'
];

// Count successful deletions
let deletedCount = 0;
let skippedCount = 0;

// Delete each file if it exists
filesToDelete.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
        try {
            fs.unlinkSync(fullPath);
            console.log(`✅ Deleted: ${file}`);
            deletedCount++;
        } catch (error) {
            console.error(`❌ Error deleting ${file}: ${error.message}`);
        }
    } else {
        console.log(`⚠️ Skipped (not found): ${file}`);
        skippedCount++;
    }
});

// Also remove directories if they're empty
const dirsToCheck = [
    'src/app/api/cloudinary',
    'src/app/admin/cloudinary-upload'
];

dirsToCheck.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath)) {
        try {
            // Check if directory is empty
            const files = fs.readdirSync(fullPath);
            if (files.length === 0) {
                fs.rmdirSync(fullPath);
                console.log(`✅ Removed empty directory: ${dir}`);
            }
        } catch (error) {
            console.error(`❌ Error checking/removing directory ${dir}: ${error.message}`);
        }
    }
});

console.log('\nCleanup Summary:');
console.log(`- Total files to process: ${filesToDelete.length}`);
console.log(`- Successfully deleted: ${deletedCount}`);
console.log(`- Skipped (not found): ${skippedCount}`);
console.log(`- Errors: ${filesToDelete.length - deletedCount - skippedCount}`);

console.log('\nNext steps:');
console.log('1. Run "npm run download-images" to get all your images from Cloudinary');
console.log('2. Run "npm run validate-images" to verify all images are in place');
console.log('3. Test your application with "npm run dev"');
console.log('4. Consider removing the "next-cloudinary" package from package.json if not needed'); 