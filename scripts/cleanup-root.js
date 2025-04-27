const fs = require('fs');
const path = require('path');

console.log('Starting cleanup of unnecessary files from root directory...');

// List of unnecessary files to delete from root
const filesToDelete = [
    // Cloudinary-related
    'NEXTJS_IMAGE_MIGRATION.md',
    'upload-results.json',

    // Other unnecessary files
    'header_part1.txt',
    'remove_babelrc.sh'

    // Note: Keeping MAINTENANCE_GUIDE.md and testing-checklist.md as they might be useful general documentation
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

console.log('\nCleanup Summary:');
console.log(`- Total files to process: ${filesToDelete.length}`);
console.log(`- Successfully deleted: ${deletedCount}`);
console.log(`- Skipped (not found): ${skippedCount}`);
console.log(`- Errors: ${filesToDelete.length - deletedCount - skippedCount}`);

console.log('\nNext steps:');
console.log('1. Run "npm run download-images" to get all your images from Cloudinary');
console.log('2. Run "npm run validate-images" to verify all images are in place');
console.log('3. Test your application with "npm run dev"'); 