require('dotenv').config();
const axios = require('axios');

// Get the API key from environment variables
const apiKey = process.env.GOOGLE_PLACES_API_KEY;

if (!apiKey) {
  console.error('Error: GOOGLE_PLACES_API_KEY not found in environment variables');
  process.exit(1);
}

// Test function for Google Places API
async function testGooglePlacesAPI() {
  try {
    // Test a simple Place Search request
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
      params: {
        query: 'plumbers in Hampshire UK',
        key: apiKey
      }
    });

    console.log('API Response Status:', response.status);
    
    if (response.data.status === 'OK') {
      console.log('✅ Google Places API is working!');
      console.log(`Found ${response.data.results.length} places`);
      
      // Display the first few results
      console.log('\nSample results:');
      response.data.results.slice(0, 3).forEach((place, index) => {
        console.log(`${index + 1}. ${place.name}`);
        console.log(`   Rating: ${place.rating || 'N/A'}`);
        console.log(`   Address: ${place.formatted_address}`);
        console.log('---');
      });
    } else {
      console.error('❌ API responded with status:', response.data.status);
      console.error('Error message:', response.data.error_message);
    }
  } catch (error) {
    console.error('❌ Error testing Google Places API:', error.message);
    
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the test
testGooglePlacesAPI(); 