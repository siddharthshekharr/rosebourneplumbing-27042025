/**
 * This script helps update Cloudinary IDs in the codebase.
 * Run with: node scripts/update-cloudinary-id.js [key] [new_id]
 * Example: node scripts/update-cloudinary-id.js logo-white plumbing-website/new-logo-white-id
 */

const fs = require('fs');
const path = require('path');

// Check if key and new ID were provided
const key = process.argv[2];
const newId = process.argv[3];

if (!key || !newId) {
  console.error('Please provide a key and new ID');
  console.error('Usage: node scripts/update-cloudinary-id.js [key] [new_id]');
  console.error('Example: node scripts/update-cloudinary-id.js logo-white plumbing-website/new-logo-white-id');
  process.exit(1);
}

// Path to the cloudinaryIdMapping.js file
const mappingFilePath = path.resolve(process.cwd(), 'src/lib/cloudinaryIdMapping.js');

try {
  // Read the file
  let content = fs.readFileSync(mappingFilePath, 'utf8');
  
  // Create a regex to match the key in the mapping
  const keyRegex = new RegExp(`'${key}':\\s*'[^']*'`, 'g');
  
  // Replace the ID
  const updatedContent = content.replace(keyRegex, `'${key}': '${newId}'`);
  
  // Write the updated content back to the file
  fs.writeFileSync(mappingFilePath, updatedContent);
  
  console.log(`Successfully updated '${key}' to '${newId}'`);
  
  // Now find and update all direct references in the codebase
  const srcDir = path.resolve(process.cwd(), 'src');
  
  // Use grep to find all files with the old ID
  const { execSync } = require('child_process');
  
  try {
    // Find all files that contain the old pattern
    const oldPattern = `plumbing-website/${key}`;
    const grepCommand = `grep -r "src=\\"${oldPattern}\\"" ${srcDir} --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx"`;
    
    const output = execSync(grepCommand, { encoding: 'utf-8' });
    
    // Parse the output to get file paths
    const filesToUpdate = output.split('\n')
      .filter(line => line.trim())
      .map(line => {
        const colonIndex = line.indexOf(':');
        return line.substring(0, colonIndex);
      });
    
    // Update each file
    let updatedFileCount = 0;
    
    filesToUpdate.forEach(filePath => {
      try {
        let fileContent = fs.readFileSync(filePath, 'utf8');
        
        // Replace the old ID with the new ID
        const oldIdRegex = new RegExp(`src="plumbing-website/${key}"`, 'g');
        const updatedFileContent = fileContent.replace(oldIdRegex, `src="${newId}"`);
        
        // Only write if changes were made
        if (fileContent !== updatedFileContent) {
          fs.writeFileSync(filePath, updatedFileContent);
          console.log(`Updated ${filePath}`);
          updatedFileCount++;
        }
      } catch (error) {
        console.error(`Error updating ${filePath}: ${error.message}`);
      }
    });
    
    console.log(`\nUpdated ${updatedFileCount} files with direct references to '${key}'`);
    
  } catch (error) {
    // grep returns non-zero exit code if no matches found
    if (error.status !== 1) {
      console.error(`Error finding references: ${error.message}`);
    } else {
      console.log('No direct references found in the codebase');
    }
  }
  
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
} 