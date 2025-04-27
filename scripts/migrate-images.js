/**
 * This script helps automate the migration of images to Cloudinary.
 * It replaces import statements and Image components with AppImage.
 * Run with: node scripts/migrate-images.js [file_path]
 */

const fs = require('fs');
const path = require('path');

// Check if a file path was provided
const filePath = process.argv[2];
if (!filePath) {
  console.error('Please provide a file path to migrate');
  console.error('Usage: node scripts/migrate-images.js src/app/page.js');
  process.exit(1);
}

// Read the file
try {
  const fullPath = path.resolve(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Replace import statement
  const importReplaced = content.replace(
    /import\s+Image\s+from\s+['"]next\/image['"]/g,
    "import AppImage from '@/components/ui/AppImage'"
  );
  
  // Replace Image components with AppImage
  // This is a simple replacement that assumes standard formatting
  // For complex cases, manual editing might be required
  let componentReplaced = importReplaced.replace(
    /<Image\s+/g,
    '<AppImage '
  );
  
  // Replace image sources
  // This is a simplified approach - you'll need to provide the correct Cloudinary IDs
  componentReplaced = componentReplaced.replace(
    /src="\/images\/([^"]+)"/g,
    'src="plumbing-website/$1"'
  );
  
  componentReplaced = componentReplaced.replace(
    /src="https:\/\/images\.unsplash\.com\/[^"]+"/g,
    (match, offset, string) => {
      // Extract a meaningful name from the context
      const nearbyAlt = string.substring(Math.max(0, offset - 100), offset + match.length + 100);
      const altMatch = nearbyAlt.match(/alt="([^"]+)"/);
      const altText = altMatch ? altMatch[1].toLowerCase().replace(/\s+/g, '-') : 'image';
      
      // Find the nearest component name
      const componentMatch = string.substring(0, offset).match(/function\s+(\w+)/);
      const component = componentMatch ? componentMatch[1].replace(/Page$/, '').toLowerCase() : '';
      
      // Generate a reasonable Cloudinary ID
      const section = string.substring(Math.max(0, offset - 500), offset).includes('Hero') ? 'hero' : 'content';
      return `src="plumbing-website/${component}/${section}-${altText}"`;
    }
  );
  
  // Write the modified content back to the file
  fs.writeFileSync(fullPath, componentReplaced);
  console.log(`Successfully migrated ${filePath}`);
  
} catch (error) {
  console.error(`Error processing file: ${error.message}`);
  process.exit(1);
} 