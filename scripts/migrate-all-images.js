/**
 * This script migrates all images in the codebase to use AppImage.
 * Run with: node scripts/migrate-all-images.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files to migrate based on the find-images.js output
const filesToMigrate = [
  'src/app/contact/page.js',
  'src/app/privacy-policy/page.js',
  'src/app/terms/page.js',
  'src/app/about/page.js',
  'src/app/blog/page.js',
  'src/app/blog/[slug]/page.js',
  'src/app/services/water-heater/page.js',
  'src/app/services/electric-shower/page.js',
  'src/app/services/extractor-fan/page.js',
  'src/app/services/bath-to-shower/page.js',
  'src/app/services/emergency/page.js',
  'src/app/services/shower-installation/page.js',
  'src/app/services/tap-repairs/page.js',
  'src/app/services/leak-detection/page.js',
  'src/app/services/toilet-installation/page.js',
  'src/app/services/outside-tap/page.js',
  'src/app/services/bathroom-refurbishment/page.js',
];

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Migrate a single file
function migrateFile(filePath) {
  try {
    console.log(`${colors.cyan}Migrating ${filePath}...${colors.reset}`);
    
    // Read the file
    const fullPath = path.resolve(process.cwd(), filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace import statement
    const importReplaced = content.replace(
      /import\s+Image\s+from\s+['"]next\/image['"]/g,
      "import AppImage from '@/components/ui/AppImage'"
    );
    
    // Replace Image components with AppImage
    let componentReplaced = importReplaced.replace(
      /<Image\s+/g,
      '<AppImage '
    );
    
    // Replace image sources
    componentReplaced = componentReplaced.replace(
      /src="\/images\/([^"]+)"/g,
      (match, filename) => {
        // Remove file extension
        const nameWithoutExt = filename.replace(/\.\w+$/, '');
        return `src="plumbing-website/${nameWithoutExt}"`;
      }
    );
    
    // Replace unsplash images
    componentReplaced = componentReplaced.replace(
      /src="https:\/\/images\.unsplash\.com\/[^"]+"/g,
      (match, offset, string) => {
        // Extract a meaningful name from the context
        const nearbyAlt = string.substring(Math.max(0, offset - 100), offset + match.length + 100);
        const altMatch = nearbyAlt.match(/alt="([^"]+)"/);
        const altText = altMatch ? altMatch[1].toLowerCase().replace(/\s+/g, '-') : 'image';
        
        // Find the service name from the file path
        const pathParts = filePath.split('/');
        const serviceName = pathParts[pathParts.length - 2] === 'services' 
          ? pathParts[pathParts.length - 1]
          : pathParts[pathParts.length - 2];
        
        // Generate a reasonable Cloudinary ID
        const section = string.substring(Math.max(0, offset - 500), offset).includes('Hero') ? 'hero' : 'content';
        return `src="plumbing-website/services/${serviceName}/${section}"`;
      }
    );
    
    // Write the modified content back to the file
    fs.writeFileSync(fullPath, componentReplaced);
    console.log(`${colors.green}Successfully migrated ${filePath}${colors.reset}`);
    return true;
    
  } catch (error) {
    console.error(`${colors.red}Error migrating ${filePath}: ${error.message}${colors.reset}`);
    return false;
  }
}

// Main function
async function main() {
  console.log(`${colors.magenta}Starting migration of ${filesToMigrate.length} files...${colors.reset}`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const file of filesToMigrate) {
    const success = migrateFile(file);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  console.log(`\n${colors.magenta}Migration Summary:${colors.reset}`);
  console.log(`${colors.green}Successfully migrated: ${successCount} files${colors.reset}`);
  console.log(`${colors.red}Failed to migrate: ${failCount} files${colors.reset}`);
  
  console.log(`\n${colors.yellow}Next steps:${colors.reset}`);
  console.log(`1. Review the migrated files to ensure the Cloudinary IDs are correct`);
  console.log(`2. Upload all images to Cloudinary using /admin/cloudinary-upload`);
  console.log(`3. Update the Cloudinary IDs with the actual IDs from your Cloudinary account`);
}

main(); 