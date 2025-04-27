'use client';

import React from 'react';
import NextImage from '@/components/ui/NextImage'
import Link from 'next/link'
import ServiceAreasMap from '@/components/ServiceAreasMap'
import BookingInfoCard from '@/components/BookingInfoCard'
import { MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

// Metadata moved to separate file
// export const metadata = {
//     title: 'Service Areas | Rosebourne Plumbing',
//     description: 'Discover where Rosebourne Plumbing provides professional plumbing services across Andover, Marlborough, Hungerford and surrounding villages.',
//     keywords: 'plumbing service areas, Andover plumber, Marlborough plumber, Hungerford plumbing services, Rosebourne Plumbing locations',
// }

export default function ServiceAreaPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28">
                <div className="absolute inset-0 overflow-hidden">
                    <NextImage
                        src="/images/plumber-map.jpg"
                        alt="Rosebourne Plumbing Service Areas"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
                </div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-xl">
                        <div className="inline-block px-4 py-2 bg-blue-600 bg-opacity-90 rounded-lg mb-4">
                            <p className="text-white text-sm font-semibold tracking-wider uppercase">Service Coverage</p>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Areas We Service
                        </h1>
                        <p className="text-lg text-gray-200 mb-8">
                            Rosebourne Plumbing provides expert plumbing services across Andover, Marlborough, Hungerford and the surrounding villages. Check our coverage map to see if we service your location.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Areas Map Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50">
                                    <span className="text-sm font-medium text-blue-600">Coverage Map</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Where We Provide Our Services
                                </h2>

                                <p className="text-lg text-gray-600">
                                    Our team of skilled plumbers provides comprehensive plumbing services throughout our service areas. We're strategically positioned to ensure prompt response times for both routine and emergency services.
                                </p>

                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us For Your Area</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Local plumbers who understand regional plumbing challenges",
                                            "2-hour arrival windows with SMS updates via ServiceM8",
                                            "Comprehensive knowledge of local building codes and regulations",
                                            "Digital documentation and invoicing through our ServiceM8 system",
                                            "Expert service from plumbers familiar with your local area"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <ServiceAreasMap />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Info Card Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <BookingInfoCard />
                    </div>
                </div>
            </section>

            {/* Detailed Service Areas Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 mb-4">
                                <span className="text-sm font-medium text-blue-600">Areas We Cover</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Service Locations
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We provide comprehensive plumbing services to the following areas and their surrounding communities.
                            </p>
                        </div>

                        {/* Areas Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    city: "Andover",
                                    postcodes: "SP10, SP11",
                                    description: "Covering Andover town center and surrounding villages with comprehensive plumbing services.",
                                    areas: ["Upper Clatford", "Tidworth", "Ludgershall", "Shipton Bellinger"]
                                },
                                {
                                    city: "Marlborough",
                                    postcodes: "SN8",
                                    description: "Serving the historic market town of Marlborough and neighboring communities.",
                                    areas: ["Great Bedwyn", "Ramsbury", "Aldbourne", "Burbage"]
                                },
                                {
                                    city: "Hungerford",
                                    postcodes: "RG17",
                                    description: "Providing expert plumbing solutions throughout Hungerford and the surrounding countryside.",
                                    areas: ["Lambourn", "Great Shefford", "Chilton Foliat", "Inkpen"]
                                }
                            ].map((area, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{area.city}</h3>
                                                <p className="text-sm text-blue-600 mt-1">{area.postcodes}</p>
                                            </div>
                                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4">{area.description}</p>

                                        <h4 className="font-semibold text-gray-900 mb-2">Areas Covered:</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {area.areas.map((item, i) => (
                                                <div key={i} className="flex items-center text-sm text-gray-600">
                                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Radius Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Our Service Coverage
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Rosebourne Plumbing primarily services Andover (SP10, SP11), Marlborough (SN8), and Hungerford (RG17), including all the surrounding villages like Upper Clatford, Tidworth, Great Bedwyn, Ramsbury, Lambourn, and many more.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            We focus on providing quality service to these specific locations to ensure prompt response times and excellent customer care.
                        </p>
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">
                                Service Beyond Listed Areas
                            </h3>
                            <p className="text-gray-700">
                                In some cases, we may be able to provide service to locations adjacent to our core coverage areas. Please contact our call center to check availability for your specific location if you don't see it listed on our map.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage Details Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Our Coverage Areas in Detail
                            </h2>
                            <p className="text-lg text-gray-700">
                                Find detailed information about each of our service areas below.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Andover */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-md">
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Andover</h3>
                                    <p className="text-sm text-blue-600 font-medium mb-4">SP10, SP11</p>
                                    <p className="text-gray-700 mb-4">
                                        Covering Andover town center and surrounding villages with comprehensive plumbing services.
                                    </p>
                                    <div>
                                        <h4 className="text-md font-semibold text-gray-900 mb-2">Areas Covered:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Upper Clatford</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Tidworth</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Ludgershall</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Shipton Bellinger</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Marlborough */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-md">
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Marlborough</h3>
                                    <p className="text-sm text-blue-600 font-medium mb-4">SN8</p>
                                    <p className="text-gray-700 mb-4">
                                        Serving the historic market town of Marlborough and neighboring communities.
                                    </p>
                                    <div>
                                        <h4 className="text-md font-semibold text-gray-900 mb-2">Areas Covered:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Great Bedwyn</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Ramsbury</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Aldbourne</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Burbage</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Hungerford */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-md">
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hungerford</h3>
                                    <p className="text-sm text-blue-600 font-medium mb-4">RG17</p>
                                    <p className="text-gray-700 mb-4">
                                        Providing expert plumbing solutions throughout Hungerford and the surrounding countryside.
                                    </p>
                                    <div>
                                        <h4 className="text-md font-semibold text-gray-900 mb-2">Areas Covered:</h4>
                                        <ul className="space-y-1">
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Lambourn</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Great Shefford</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Chilton Foliat</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                <span className="text-gray-700">Inkpen</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Why Choose Us For Your Area
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local plumbing expertise</h3>
                                    <p className="text-gray-700">Our plumbers are familiar with local plumbing systems and common issues in each area we serve.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Familiarity with local building codes</h3>
                                    <p className="text-gray-700">We understand the specific building regulations and code requirements in each area we service.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital documentation through our ServiceM8 system</h3>
                                    <p className="text-gray-700">All service details are recorded digitally for easy access and future reference.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert service from plumbers familiar with your local area</h3>
                                    <p className="text-gray-700">Our team has extensive experience working in each of the towns and villages we serve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 