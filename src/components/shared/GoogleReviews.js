'use client';

import { useState, useEffect } from 'react';
import { StarIcon } from 'lucide-react';
import toast from 'react-hot-toast';

export default function GoogleReviews() {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [placeName, setPlaceName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load reviews from Google Places API only
    async function loadReviews() {
        setLoading(true);
        setError(null);
        
        try {
            // Fetch from Google API
            let response = await fetch('/api/google-reviews');
            let data = await response.json();
            
            if (!data.success) {
                throw new Error(data.error || 'Failed to fetch reviews from Google API');
            }
            
            setReviews(data.reviews);
            setAverageRating(data.average_rating);
            setTotalReviews(data.total_reviews);
            setPlaceName(data.place_name);
            
        } catch (error) {
            console.error('Error fetching Google reviews:', error);
            setError('Unable to load reviews. Please try again later.');
            toast.error('Could not load reviews from Google at this time.', {
                duration: 5000,
                position: 'bottom-right',
            });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadReviews();
        
        // Set up a refresh interval (every 15 minutes)
        const refreshInterval = setInterval(() => {
            loadReviews();
        }, 15 * 60 * 1000);
        
        return () => clearInterval(refreshInterval);
    }, []);

    // Generate stars based on rating
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <StarIcon 
                key={i} 
                size={16} 
                className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
            />
        ));
    };

    // If loading, show skeleton
    if (loading && reviews.length === 0) {
        return (
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm animate-pulse">
                <div className="flex items-center justify-between mb-4">
                    <div className="h-7 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                </div>
                <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-white rounded-lg p-4">
                            <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                            </div>
                            <div className="h-3 bg-gray-200 rounded mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // If no reviews are available
    if (!loading && reviews.length === 0) {
        return (
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                    {placeName || "Reviews"}
                </h3>
                <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-gray-600">
                        {error || "No reviews available yet. Be the first to leave a review!"}
                    </p>
                    <a 
                        href="https://g.page/r/CQ_Ub4_A2MWCEAE/review" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-sm text-blue-600 hover:text-blue-800"
                    >
                        Leave a review
                    </a>
                </div>
            </div>
        );
    }

    // Render the component with reviews
    return (
        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-800">
                    {placeName || "Reviews"}
                </h3>
                <div className="flex items-center space-x-1 text-sm">
                    <span className="font-bold">{averageRating.toFixed(1)}</span>
                    <div className="flex">
                        {renderStars(Math.round(averageRating))}
                    </div>
                    <span className="text-gray-500">({totalReviews})</span>
                </div>
            </div>
            
            {error && (
                <div className="text-orange-600 mb-4 text-sm">
                    {error}
                </div>
            )}
            
            <div className="space-y-3">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-2">
                            <img 
                                src={review.profile_photo_url} 
                                alt={review.author_name} 
                                className="w-8 h-8 rounded-full mr-3"
                            />
                            <div>
                                <div className="font-medium">{review.author_name}</div>
                                <div className="text-xs text-gray-500">{review.relative_time_description}</div>
                            </div>
                        </div>
                        <div className="flex mb-2">
                            {renderStars(review.rating)}
                        </div>
                        <p className="text-sm text-gray-700">{review.text}</p>
                    </div>
                ))}
            </div>
            
            {reviews.length > 0 && (
                <div className="mt-4 text-center">
                    <a 
                        href="https://g.page/r/CQ_Ub4_A2MWCEAE/review" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800"
                    >
                        Leave a review
                    </a>
                </div>
            )}
        </div>
    );
} 