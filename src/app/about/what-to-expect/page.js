import Image from 'next/image'
import Link from 'next/link'
import CallExpectations from '@/components/CallExpectations'
import { Calendar, MessageSquare, CreditCard } from 'lucide-react'

export default function WhatToExpectPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2069"
                        alt="What to Expect from Our Service"
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
                            <span className="text-sm font-medium text-white">Customer Experience</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            What to 
                            <div className="mt-2">
                                <span className="relative inline-block px-4">
                                    <span className="relative z-10">Expect</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 -rotate-1 rounded"></div>
                                </span>
                            </div>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8">
                            Our transparent service process from initial contact to job completion and follow-up care.
                        </p>
                        
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            Book a Service
                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Service Journey Section - UPDATED DESIGN */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Journey With Rosebourne Plumbing</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                From your first contact to the completion of your plumbing project, here's what you can expect at every step of the way.
                            </p>
                        </div>

                        {/* Journey Steps - New Card-Based Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
                            {/* Step 1 */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col h-full">
                                    <div className="mb-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">1</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Contact</h3>
                                    <p className="text-gray-700 mb-4 text-sm">
                                        Your journey begins when you reach out to us through our booking form or by phone. We aim to respond to all inquiries within 2 hours during business hours.
                                    </p>
                                    <div className="mt-auto">
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Express your plumbing needs</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Receive a prompt response</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Schedule a convenient appointment</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col h-full">
                                    <div className="mb-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">2</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Assessment</h3>
                                    <p className="text-gray-700 mb-4 text-sm">
                                        Our qualified plumber will arrive at your property on time to assess the situation. We pride ourselves on punctuality and professionalism.
                                    </p>
                                    <div className="mt-auto">
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Thorough inspection of the issue</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Clear explanation of problems found</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Upfront, transparent pricing</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col h-full">
                                    <div className="mb-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">3</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Workmanship</h3>
                                    <p className="text-gray-700 mb-4 text-sm">
                                        Once you approve our solution and quote, our expert plumbers will get to work using the highest quality materials and proper techniques.
                                    </p>
                                    <div className="mt-auto">
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Careful protection of your property</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Efficient completion of the work</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Adherence to industry standards</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col h-full">
                                    <div className="mb-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">4</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Job Completion</h3>
                                    <p className="text-gray-700 mb-4 text-sm">
                                        After completing the work, we'll walk you through what was done and provide any advice for ongoing maintenance.
                                    </p>
                                    <div className="mt-auto">
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Thorough clean-up of the work area</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Final walk-through and explanation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Clear invoice with no hidden charges</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                                <div className="flex flex-col h-full">
                                    <div className="mb-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">5</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Aftercare & Warranty</h3>
                                    <p className="text-gray-700 mb-4 text-sm">
                                        Our relationship doesn't end when the job is done. We stand behind our work with a comprehensive warranty and follow-up service.
                                    </p>
                                    <div className="mt-auto">
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>12-month warranty on our workmanship</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Follow-up call to ensure satisfaction</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Priority service for returning customers</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ServiceM8 Feature Box */}
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-blue-100 mb-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center mb-4">
                                        <div className="h-14 w-14 mr-4 bg-blue-600 rounded-lg flex items-center justify-center">
                                            <Calendar className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Our ServiceM8 System</h3>
                                    </div>
                                    
                                    <p className="text-gray-700 mb-4">
                                        We use ServiceM8, a professional job management system, to ensure your plumbing needs are handled with maximum efficiency and minimal disruption to your day.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                                                SMS Updates
                                            </h4>
                                            <p className="text-sm text-gray-600">Receive automated SMS updates about your appointment status and when our technician is on the way.</p>
                                        </div>
                                        
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Digital Records
                                            </h4>
                                            <p className="text-sm text-gray-600">Access detailed digital job records with photos, notes, and complete service history.</p>
                                        </div>
                                        
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <CreditCard className="h-5 w-5 text-blue-500 mr-2" />
                                                Secure Payments
                                            </h4>
                                            <p className="text-sm text-gray-600">Enjoy convenient and secure online payment options for your plumbing services.</p>
                                        </div>
                                        
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                                <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                                                Easy Scheduling
                                            </h4>
                                            <p className="text-sm text-gray-600">Book appointments online at your convenience with our easy-to-use booking system.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Time Windows Explained</h4>
                                    <p className="text-gray-700 mb-4">
                                        When booking a service, we provide a time window rather than a specific appointment time. This allows us to:
                                    </p>
                                    <ul className="space-y-3 mb-4">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-600">Give each job the attention it deserves without rushing</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-600">Account for unforeseen complications in previous jobs</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-600">Maintain our high standards of workmanship</span>
                                        </li>
                                    </ul>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="text-blue-900 text-sm font-medium">
                                            Rest assured: We'll always call to update you when we're on our way with a more precise arrival time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Time Windows Section - NEW SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-10 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why We Provide Time Windows</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                We provide arrival windows rather than specific times to ensure honest scheduling and excellent service quality for every customer.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                            <div className="lg:w-1/2">
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2569"
                                        alt="Plumber working on schedule"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-900">The Reality of Plumbing Work</h3>
                                    <p className="text-gray-700">
                                        Every plumbing job is unique, and it's impossible to predict exactly how long each task will take. A simple job might reveal hidden complications, while complex jobs sometimes resolve quicker than expected.
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                            <h4 className="text-lg font-medium text-blue-700 mb-2">Our Promise to You</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>We'll provide a realistic arrival window (typically 2-3 hours)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>We'll call you when we're on our way with a more precise ETA</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>If we're running ahead or behind, we'll keep you updated</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>Your time is valuable - we'll never leave you wondering</span>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                            <p className="text-gray-700 italic">
                                                "Providing time windows instead of exact times allows us to give each job the attention it deserves without rushing or cutting corners. This approach helps us maintain our high standards of quality and customer satisfaction."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call Center Process Section */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-10 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Call Handling Process</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                As a one-man plumbing operation dedicated to quality service, we've partnered with a professional call center to ensure you always reach someone when you call.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {/* Step 1 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Call is Answered</h3>
                                <p className="text-gray-700">
                                    When you call our number, a professional receptionist answers promptly. They work with multiple small service businesses but are fully trained on our services.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Information Collection</h3>
                                <p className="text-gray-700">
                                    They'll gather all necessary details about your plumbing issue, location, and preferred availability for the service call.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Scheduling</h3>
                                <p className="text-gray-700">
                                    They have access to our live calendar and can book your appointment immediately, confirming the date and time slot that works for you.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Immediate Notification</h3>
                                <p className="text-gray-700">
                                    Details of your booking are instantly sent to our plumber, ensuring nothing gets lost in communication and your issue is fully understood.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow border border-blue-100">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                                    <Image
                                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2570"
                                        alt="Professional Call Handling"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Use a Call Center</h3>
                                    <p className="text-gray-700 mb-4">
                                        As a one-man operation focused on delivering exceptional plumbing services, using a professional call center allows us to:
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Ensure every call is answered promptly, even when we're on a job</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Provide professional booking service and clear communication</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Focus on delivering quality plumbing work rather than answering calls</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Never miss an opportunity to help a customer in need</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <Link
                                            href="tel:01264502027"
                                            className="inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition-colors hover:bg-blue-700"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            Call Us: 01264 502027
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ServiceM8 Section - NEW SECTION */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-10 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our ServiceM8 Job Management System</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                We use ServiceM8, a professional job management system, to ensure every aspect of your service is handled efficiently and transparently.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-12">
                            <div className="lg:w-1/2">
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                                        alt="Digital job management"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-900">The Benefits of ServiceM8</h3>
                                    <p className="text-gray-700">
                                        As a one-person plumbing business, I leverage ServiceM8's powerful technology to provide a level of service typically associated with larger companies.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                            <div className="flex items-center mb-3">
                                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="ml-3 text-lg font-medium text-gray-900">Online Booking</h4>
                                            </div>
                                            <p className="text-gray-700">
                                                Book appointments online at your convenience with our easy-to-use booking form.
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                            <div className="flex items-center mb-3">
                                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                    </svg>
                                                </div>
                                                <h4 className="ml-3 text-lg font-medium text-gray-900">Digital Job Records</h4>
                                            </div>
                                            <p className="text-gray-700">
                                                Your job history, photos, notes, and quotes are securely stored and easily accessible.
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                            <div className="flex items-center mb-3">
                                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                    </svg>
                                                </div>
                                                <h4 className="ml-3 text-lg font-medium text-gray-900">SMS Updates</h4>
                                            </div>
                                            <p className="text-gray-700">
                                                Receive automated notifications about your appointment status and ETA.
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                            <div className="flex items-center mb-3">
                                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <h4 className="ml-3 text-lg font-medium text-gray-900">Digital Invoices</h4>
                                            </div>
                                            <p className="text-gray-700">
                                                Receive detailed, professional invoices instantly upon job completion.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6">
                                        <Link 
                                            href="https://book.servicem8.com/request_booking?uuid=f77edceb-bd17-4859-8ac5-1cd5183969cb"
                                            className="inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition-colors hover:bg-blue-700"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            Book Online
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                            <blockquote className="italic text-gray-700 text-lg">
                                "ServiceM8 helps me stay organized and provide exceptional customer service as a solo plumber. From the moment you book to the final invoice, this system ensures every detail is tracked and you receive clear communication throughout the entire process."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Guarantees Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Guarantees</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                We stand behind every job we complete with the following commitments.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Guarantee 1 */}
                            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-6">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Workmanship Guarantee</h3>
                                <p className="text-gray-700">
                                    We guarantee our workmanship for 12 months. If anything goes wrong with our installation or repair, we'll fix it at no additional cost.
                                </p>
                            </div>

                            {/* Guarantee 2 */}
                            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-6">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">On-Time Promise</h3>
                                <p className="text-gray-700">
                                    We value your time. If we're late for a scheduled appointment without proper notice, we'll apply a discount to your service.
                                </p>
                            </div>

                            {/* Guarantee 3 */}
                            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-6">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent Pricing</h3>
                                <p className="text-gray-700">
                                    No hidden fees or surprises. The price we quote is the price you pay, and we'll always get your approval before any additional work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 