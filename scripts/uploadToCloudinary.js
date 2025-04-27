const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Directory containing images
const publicDir = path.join(process.cwd(), 'public', 'images');

// Upload a remote image
async function uploadRemoteImage(url) {
  try {
    const result = await cloudinary.uploader.upload(url, {
      folder: 'plumbing-website',
      resource_type: 'auto'
    });
    return result;
  } catch (error) {
    console.error(`Error uploading remote image ${url}:`, error);
    return null;
  }
}

// Upload a local image
async function uploadLocalImage(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'plumbing-website',
      resource_type: 'auto'
    });
    return result;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error);
    return null;
  }
}

// Process all images
async function processImages() {
  try {
    // Process local images
    const files = fs.readdirSync(publicDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} local images to process`);

    // Process remote images (Unsplash)
    const remoteImages = [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068',
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2069',
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2069'
    ];

    console.log(`Found ${remoteImages.length} remote images to process`);

    const results = {};

    // Process local images
    for (const file of imageFiles) {
      const filePath = path.join(publicDir, file);
      console.log(`Processing local image ${file}...`);
      
      const result = await uploadLocalImage(filePath);
      if (result) {
        results[file] = result;
        console.log(`Successfully uploaded ${file}`);
        console.log(`Public ID: ${result.public_id}`);
        console.log(`URL: ${result.secure_url}`);
        console.log('---');
      }
    }

    // Process remote images
    for (const url of remoteImages) {
      console.log(`Processing remote image ${url}...`);
      
      const result = await uploadRemoteImage(url);
      if (result) {
        const filename = url.split('/').pop().split('?')[0];
        results[filename] = result;
        console.log(`Successfully uploaded ${filename}`);
        console.log(`Public ID: ${result.public_id}`);
        console.log(`URL: ${result.secure_url}`);
        console.log('---');
      }
    }

    // Save results to file
    fs.writeFileSync('upload-results.json', JSON.stringify(results, null, 2));
    console.log('Upload results saved to upload-results.json');

  } catch (error) {
    console.error('Error processing images:', error);
  }
}

// Run the script
processImages(); 