const fs = require('fs');
const path = require('path');

// Function to process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the import statement
  content = content.replace(
    /import Image from 'next\/image';/g,
    "import AppImage from '@/components/ui/AppImage';"
  );
  
  // Replace Image component usage with AppImage
  content = content.replace(
    /<Image/g,
    '<AppImage'
  );
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, content);
  console.log(`Processed ${filePath}`);
}

// Function to recursively process all JavaScript files in a directory
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.js')) {
      processFile(filePath);
    }
  }
}

// Start processing from the src directory
const srcDir = path.join(process.cwd(), 'src');
processDirectory(srcDir);

console.log('Finished replacing Image imports with AppImage'); 