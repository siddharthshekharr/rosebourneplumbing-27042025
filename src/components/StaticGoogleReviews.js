'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StarIcon } from 'lucide-react'
import toast from 'react-hot-toast'

export default function StaticGoogleReviews() {
  const [reviews, setReviews] = useState([])
  const [averageRating, setAverageRating] = useState(0)
  const [totalReviews, setTotalReviews] = useState(0)
  const [placeName, setPlaceName] = useState("")
  const [placeUrl, setPlaceUrl] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
      console.log('==== GOOGLE REVIEWS: Starting fetch ====');
      setLoading(true)
      setError(null)
      
      try {
        console.log('GOOGLE REVIEWS: Fetching from API...');
        const response = await fetch('/api/google-reviews', {
          cache: 'no-store', // Disable caching for this request
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        console.log('GOOGLE REVIEWS: API response status:', response.status);
        
        // Handle network errors
        if (!response.ok) {
          console.error('GOOGLE REVIEWS: API response not ok:', response.status, response.statusText);
          throw new Error(`API error: ${response.status} ${response.statusText}`)
        }
        
        const data = await response.json();
        console.log('GOOGLE REVIEWS: API response data:', data);
        
        if (!data.success) {
          console.warn('GOOGLE REVIEWS: API returned success false:', data.error);
          // Don't throw error here, use the data anyway since we have fallbacks
        }
        
        console.log(`GOOGLE REVIEWS: Reviews count: ${data.reviews?.length || 0}`);
        
        // Use all reviews returned by the API (which is already limited to 6 in the API route)
        setReviews(data.reviews || []);
        setAverageRating(Number(data.average_rating) || 0);
        setTotalReviews(Number(data.total_reviews) || 0);
        setPlaceName(typeof data.place_name === 'object' ? data.place_name.text : data.place_name || "Rosebourne Plumbing");
        setPlaceUrl(data.place_url || "https://maps.google.com/?cid=17633610867658341964");
        
        console.log('GOOGLE REVIEWS: Successfully set state data');
      } catch (error) {
        console.error('GOOGLE REVIEWS: Error during fetch:', error);
        setError('Unable to load reviews at this time. ' + error.message);
        toast.error('Could not load Google reviews. Please try again later.', {
          duration: 5000,
          position: 'bottom-right',
        });
      } finally {
        setLoading(false);
        console.log('GOOGLE REVIEWS: Fetch completed', { success: !error, reviews: reviews.length });
      }
    }
    
    fetchReviews();
  }, []);

  // Generate stars for a rating
  const renderStars = (rating) => {
    const numericRating = Number(rating) || 0
    return [...Array(5)].map((_, i) => (
      <StarIcon 
        key={i} 
        size={16} 
        className={`${i < numericRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ))
  }

  // Only show if we have reviews or if there's an error worth showing
  if (!loading && reviews.length === 0 && !error) {
    return null
  }

  // Show loading state
  if (loading) {
    return (
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const numericAverageRating = Number(averageRating) || 0

  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="py-1 px-3 bg-blue-100 rounded-full text-blue-800 text-sm font-medium">
                Google Reviews
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {placeName} Reviews
            </h2>
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-gray-900 mr-2">{numericAverageRating.toFixed(1)}</span>
              <div className="flex mr-2">
                {renderStars(Math.round(numericAverageRating))}
              </div>
              <span className="text-gray-500">
                Based on {totalReviews} review{totalReviews !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-8 text-center">
              {error}
            </div>
          )}

          {/* Reviews grid */}
          {reviews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center mb-4">
                    {review.profile_photo_url ? (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image 
                          src={review.profile_photo_url} 
                          alt={`${review.author_name}'s profile`}
                          fill
                          sizes="40px"
                          className="object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                                <span class="text-blue-800 font-medium">
                                  ${review.author_name?.charAt(0) || "U"}
                                </span>
                              </div>
                            `;
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-800 font-medium">
                          {review.author_name?.charAt(0) || "U"}
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{review.author_name}</div>
                      <div className="text-xs text-gray-500">{review.relative_time_description}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-2 flex-grow">
                    {review.text?.length > 150 
                      ? `${review.text.substring(0, 150)}...` 
                      : review.text || ""}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Leave a review button */}
          <div className="text-center flex justify-center space-x-4">
            <a
              href={placeUrl || "https://g.page/r/CQ_Ub4_A2MWCEAE/review"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Leave a Review on Google
            </a>
            
            <a
              href={placeUrl || "https://maps.google.com/?cid=17633610867658341964"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              See All Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 