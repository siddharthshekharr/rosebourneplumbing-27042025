import { NextResponse } from 'next/server'
import { getGoogleReviews } from '@/lib/google-reviews'

/**
 * GET handler for /api/google-reviews
 * Returns reviews from Google Places API
 */
export async function GET(request) {
  console.log('==== API ROUTE: Google Reviews Request Received ====');
  console.log('Request URL:', request.url);
  
  try {
    console.log('API ROUTE: Fetching Google reviews...');
    
    // Fetch reviews from Google Places API
    const reviewsData = await getGoogleReviews();
    
    // Extract all review data
    const { reviews, place_name, average_rating, total_reviews, place_url } = reviewsData;
    
    console.log(`API ROUTE: Received ${reviews?.length || 0} reviews`);
    console.log('API ROUTE: Average rating:', average_rating);
    console.log('API ROUTE: Total reviews:', total_reviews);
    
    // Create the response object
    const responseData = { 
      success: true,
      reviews: reviews.slice(0, 6), // Ensure we return at most 6 reviews
      place_name: place_name,
      average_rating: average_rating,
      total_reviews: total_reviews,
      place_url: place_url
    };
    
    console.log('API ROUTE: Sending successful response');
    
    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'Access-Control-Allow-Origin': '*', // Allow cross-origin requests
        'Access-Control-Allow-Methods': 'GET', // Only allow GET requests
      }
    });
  } catch (error) {
    console.error('API ROUTE: Error in Google reviews API route:', error);
    console.error('API ROUTE: Stack trace:', error.stack);
    
    // Return error response with backup data
    const errorResponse = { 
      success: false,
      reviews: getBackupReviews().reviews,
      place_name: "Rosebourne Plumbing",
      average_rating: 4.8,
      total_reviews: 122,
      place_url: "https://maps.google.com/?cid=17633610867658341964",
      error: 'Failed to fetch reviews from Google Places API',
      message: error.message
    };
    
    console.log('API ROUTE: Sending error response with backup data');
    
    return NextResponse.json(errorResponse, {
      status: 200, // Return 200 even on error to avoid client-side errors
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  }
}

// Backup reviews data
function getBackupReviews() {
  return {
    reviews: [
      {
        author_name: "Edward Digby",
        author_url: "https://www.google.com/maps/contrib/123456789",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "a month ago",
        text: "Kitchen sink leak/Blockage The job we required took longer than expected,but was carried out by Will who kept us updated on all proceedings in a professional manner.",
        time: new Date().getTime() - 30 * 24 * 60 * 60 * 1000,
        google_maps_url: "https://maps.google.com/?cid=17633610867658341964"
      },
      {
        author_name: "Barbara Bell",
        author_url: "https://www.google.com/maps/contrib/123456789",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "a month ago",
        text: "Excellent service. Will was very polite and cleared up after work done. Very satisfied with the service and would highly recommend Rosebourne plumbing.",
        time: new Date().getTime() - 32 * 24 * 60 * 60 * 1000,
        google_maps_url: "https://maps.google.com/?cid=17633610867658341964"
      },
      {
        author_name: "James McGrigor",
        author_url: "https://www.google.com/maps/contrib/123456789",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "Fast to arrange a call out. Came bang on time with a text warning of the time of arrival. Will is so nice, and really works hard to get to the source of the problem.",
        time: new Date().getTime() - 60 * 24 * 60 * 60 * 1000,
        google_maps_url: "https://maps.google.com/?cid=17633610867658341964"
      },
      {
        author_name: "JulietAndNick Wilkinson",
        author_url: "https://www.google.com/maps/contrib/123456789",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "3 months ago",
        text: "Will carried out all planned work promptly and perfectly, in particular fitting a new shower. In addition he investigated a post-storm roof leak, which he fixed.",
        time: new Date().getTime() - 90 * 24 * 60 * 60 * 1000,
        google_maps_url: "https://maps.google.com/?cid=17633610867658341964"
      },
      {
        author_name: "Barry Millin",
        author_url: "https://www.google.com/maps/contrib/123456789",
        profile_photo_url: "",
        rating: 5,
        relative_time_description: "5 months ago",
        text: "Will and his team worked tirelessly to ensure our bathroom re-fit achieved everything that we wanted. They have turned a cramped, uninspiring bathroom into a stunning one.",
        time: new Date().getTime() - 150 * 24 * 60 * 60 * 1000,
        google_maps_url: "https://maps.google.com/?cid=17633610867658341964"
      },
      {
        author_name: "David Smith",
        author_url: "https://www.google.com/maps/contrib/123456789",
        profile_photo_url: "",
        rating: 4,
        relative_time_description: "4 months ago",
        text: "Great service from Will and the team at Rosebourne Plumbing. They installed a new boiler for us and the work was done efficiently with minimal disruption.",
        time: new Date().getTime() - 120 * 24 * 60 * 60 * 1000,
        google_maps_url: "https://maps.google.com/?cid=17633610867658341964"
      }
    ]
  };
} 