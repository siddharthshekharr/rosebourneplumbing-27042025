const fs = require('fs');
const path = require('path');

// Path to imageHelper.js
const imageHelperPath = path.join(process.cwd(), 'src', 'lib', 'imageHelper.js');

// Read the current imageHelper.js content
let content = fs.readFileSync(imageHelperPath, 'utf8');

// Extract the current IMAGE_MAPPING object
const mappingMatch = content.match(/export const IMAGE_MAPPING = ({[\s\S]*?});/);
if (!mappingMatch) {
  console.error('Could not find IMAGE_MAPPING in imageHelper.js');
  process.exit(1);
}

// Parse the current mappings
const currentMappings = eval('(' + mappingMatch[1] + ')');

// Read the upload results from a file (you'll need to save the output of uploadToCloudinary.js)
const uploadResults = JSON.parse(fs.readFileSync('upload-results.json', 'utf8'));

// Update the mappings
const updatedMappings = { ...currentMappings };
for (const [file, result] of Object.entries(uploadResults)) {
  const publicPath = `/images/${file}`;
  updatedMappings[publicPath] = result.public_id;
}

// Create the new IMAGE_MAPPING object string
const newMappingString = `export const IMAGE_MAPPING = ${JSON.stringify(updatedMappings, null, 2)};`;

// Replace the old mapping with the new one
content = content.replace(/export const IMAGE_MAPPING = {[\s\S]*?};/, newMappingString);

// Write the updated content back to imageHelper.js
fs.writeFileSync(imageHelperPath, content);

console.log('Successfully updated image mappings in imageHelper.js'); 