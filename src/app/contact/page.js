'use client'

import { useState } from 'react'
import { showToast } from '@/lib/toast'
import NextImage from '@/components/ui/NextImage'
import Link from 'next/link'
import ServiceM8Form from '@/components/ServiceM8Form'
import BookingInfoCard from '@/components/BookingInfoCard'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Form submission logic will go here
        showToast.success('Message sent successfully!')
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <NextImage src="plumbing-website/services/contact/hero"
                        alt="Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 z-0">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    }} />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-sm font-medium text-white">Emergency Service</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Get in Touch
                            <div className="mt-2">
                                <span className="relative inline-block px-4">
                                    <span className="relative z-10">With Us</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 -rotate-1 rounded"></div>
                                </span>
                            </div>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8">
                            Need help with plumbing or heating? We're here to assist you. Get in touch for a free quote or emergency service.
                        </p>

                        {/* Quick Contact Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Call Us</p>
                                        <p className="text-blue-300">01264 502027</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Opening Hours</p>
                                        <p className="text-blue-300">Mon-Fri: 8am-6pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Added Booking Info Card */}
                        <BookingInfoCard />
                        
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 mt-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book a Service</h2>
                            <p className="text-gray-600 mb-6">Fill out the form below to book a service with our team.</p>
                            
                            {/* ServiceM8 Form Integration - Using our custom component */}
                            <ServiceM8Form uuid="f77edceb-bd17-4859-8ac5-1cd5183969cb" />
                        </div>

                        {/* Emergency Notice */}
                        <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-900">Emergency Service</h3>
                                    <p className="text-blue-700">For urgent plumbing emergencies, call our emergency line: 01264 502027</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 