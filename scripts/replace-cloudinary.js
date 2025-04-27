const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to process a single file
function processFile(filePath) {
    console.log(`Processing file: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace imports
    const importReplacements = [
        {
            from: /import\s+(?:AppImage|CloudinaryImage|UniversalImage).*?from\s+['"]@\/components\/(?:ui\/AppImage|CloudinaryImage|UniversalImage)['"]/g,
            to: "import NextImage from '@/components/ui/NextImage'"
        },
        {
            from: /import\s+\{\s*(?:CldImage|CldUploadWidget|CldVideoPlayer).*?\}\s+from\s+['"]next-cloudinary['"]/g,
            to: "// Cloudinary import removed"
        }
    ];

    // Replace component usage
    const componentReplacements = [
        {
            from: /<AppImage/g,
            to: "<NextImage"
        },
        {
            from: /<CloudinaryImage/g,
            to: "<NextImage"
        },
        {
            from: /<UniversalImage/g,
            to: "<NextImage"
        },
        {
            from: /<CldImage/g,
            to: "<NextImage"
        }
    ];

    // Apply all replacements
    [...importReplacements, ...componentReplacements].forEach(replacement => {
        const newContent = content.replace(replacement.from, replacement.to);
        if (newContent !== content) {
            modified = true;
            content = newContent;
        }
    });

    // Save the file if modified
    if (modified) {
        fs.writeFileSync(filePath, content);
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

console.log(`\nMigration complete! Modified ${modifiedCount} files.`);
console.log(`\nNEXT STEPS:`);
console.log(`1. Install the glob package if not already installed: npm install glob`);
console.log(`2. Run: node scripts/replace-cloudinary.js`);
console.log(`3. Update package.json to remove Cloudinary dependencies`);
console.log(`4. Update next.config.js to remove Cloudinary configurations`);
console.log(`5. Test the application thoroughly\n`); 