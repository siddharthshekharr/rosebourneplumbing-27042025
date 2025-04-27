'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PhoneCall, Calendar, ArrowRight } from 'lucide-react'

export default function CTASection() {
    const [hoveredButton, setHoveredButton] = useState(null)
    
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background with overlay - matching the homepage gradient style */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 z-0"></div>
            
            {/* Background Pattern - Reduced opacity (matches homepage) */}
            <div className="absolute inset-0 opacity-5 z-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }} />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        {/* Decorative badge matching homepage style */}
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-sm font-medium text-white">Ready to Start?</span>
                        </div>

                        {/* Heading with styled accent - exactly matching homepage */}
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-sm">
                            Solve Your Plumbing
                            <div className="mt-2">
                                <span className="relative inline-block px-4">
                                    <span className="relative z-10">Problems</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 -rotate-1 rounded"></div>
                                </span>
                            </div>
                        </h2>

                        <p className="text-xl text-gray-300 mb-8">
                            Our expert team is available for all your plumbing needs in Andover and surrounding areas.
                        </p>

                        {/* CTA Buttons with exact homepage styling */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
                            <Link 
                                href="tel:01264502027" 
                                className={`flex items-center justify-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                                    hoveredButton === 'call' ? 'transform scale-105' : ''
                                }`}
                                onMouseEnter={() => setHoveredButton('call')}
                                onMouseLeave={() => setHoveredButton(null)}
                            >
                                <PhoneCall className="w-5 h-5" />
                                <span>Call Now</span>
                                {hoveredButton === 'call' && (
                                    <ArrowRight className="w-5 h-5 ml-2 animate-pulse" />
                                )}
                            </Link>
                            
                            <Link 
                                href="https://book.servicem8.com/request_booking?uuid=f77edceb-bd17-4859-8ac5-1cd5183969cb" 
                                className={`flex items-center justify-center gap-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                                    hoveredButton === 'book' ? 'transform scale-105' : ''
                                }`}
                                onMouseEnter={() => setHoveredButton('book')}
                                onMouseLeave={() => setHoveredButton(null)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>Book a Service</span>
                                {hoveredButton === 'book' && (
                                    <ArrowRight className="w-5 h-5 ml-2 animate-pulse" />
                                )}
                            </Link>
                        </div>
                        
                        {/* Info box with backdrop blur for modern effect - matching homepage card styling */}
                        <div className="mt-12 p-6 bg-black/30 backdrop-blur-sm rounded-xl max-w-2xl mx-auto border border-white/10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="text-white text-center">
                                    <div className="font-medium mb-1">Call Center Hours</div>
                                    <p className="text-sm text-gray-200">8am-6pm daily for bookings</p>
                                    <p className="text-sm text-gray-200 mt-1">Precise 2-hour arrival windows</p>
                                </div>
                                <div className="text-white text-center">
                                    <div className="font-medium mb-1">Service Area</div>
                                    <p className="text-sm text-gray-200">Andover, Hampshire & surroundings</p>
                                    <p className="text-sm text-gray-200 mt-1">Same-day emergency service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 