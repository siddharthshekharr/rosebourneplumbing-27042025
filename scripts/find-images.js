/**
 * This script helps identify all places where images need to be migrated to Cloudinary.
 * Run with: node scripts/find-images.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const SRC_DIR = path.join(__dirname, '..', 'src');
const IGNORE_DIRS = ['node_modules', '.next', 'public'];
const IMAGE_PATTERNS = [
  '<Image',
  'src="/images/',
  'src="https://',
  'src={`/images',
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

// Find all files that need migration
function findFilesWithImages() {
  console.log(`${colors.cyan}Searching for files with images...${colors.reset}`);
  
  let results = [];
  
  // Use grep to find files with Image component
  IMAGE_PATTERNS.forEach(pattern => {
    try {
      const grepCommand = `grep -r "${pattern}" ${SRC_DIR} --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx"`;
      const output = execSync(grepCommand, { encoding: 'utf-8' });
      
      output.split('\n').forEach(line => {
        if (!line) return;
        
        // Parse the line to get file path and match
        const [filePath, ...rest] = line.split(':');
        const match = rest.join(':').trim();
        
        // Skip if file is in ignored directories
        if (IGNORE_DIRS.some(dir => filePath.includes(`/${dir}/`))) {
          return;
        }
        
        // Add to results if not already there
        const existingFile = results.find(r => r.filePath === filePath);
        if (existingFile) {
          existingFile.matches.push(match);
        } else {
          results.push({
            filePath,
            matches: [match],
          });
        }
      });
    } catch (error) {
      // grep returns non-zero exit code if no matches found
      if (error.status !== 1) {
        console.error(`Error running grep: ${error.message}`);
      }
    }
  });
  
  return results;
}

// Generate migration report
function generateReport(results) {
  console.log(`${colors.green}Found ${results.length} files with images to migrate${colors.reset}`);
  
  // Group by directory
  const byDirectory = {};
  results.forEach(result => {
    const dir = path.dirname(result.filePath);
    byDirectory[dir] = byDirectory[dir] || [];
    byDirectory[dir].push(result);
  });
  
  // Print report
  console.log(`\n${colors.magenta}Migration Report:${colors.reset}`);
  
  Object.keys(byDirectory).sort().forEach(dir => {
    console.log(`\n${colors.yellow}Directory: ${dir}${colors.reset}`);
    
    byDirectory[dir].forEach(file => {
      console.log(`  ${colors.blue}${path.basename(file.filePath)}${colors.reset} (${file.matches.length} images)`);
      
      // Print first 2 matches as examples
      file.matches.slice(0, 2).forEach((match, i) => {
        console.log(`    ${i + 1}. ${match.substring(0, 100)}${match.length > 100 ? '...' : ''}`);
      });
      
      if (file.matches.length > 2) {
        console.log(`    ... and ${file.matches.length - 2} more`);
      }
    });
  });
  
  // Generate migration checklist
  console.log(`\n${colors.magenta}Migration Checklist:${colors.reset}`);
  results.forEach(file => {
    console.log(`- [ ] ${file.filePath.replace(path.join(__dirname, '..'), '')}`);
  });
}

// Main function
function main() {
  const results = findFilesWithImages();
  generateReport(results);
  
  console.log(`\n${colors.green}Next steps:${colors.reset}`);
  console.log(`1. Upload all images to Cloudinary using /admin/cloudinary-upload`);
  console.log(`2. Replace Image components with AppImage components`);
  console.log(`3. Update image paths to use Cloudinary public IDs`);
  console.log(`4. Check the migration checklist to ensure all files are updated`);
}

main(); 