import React from 'react'
import NextImage from '@/components/ui/NextImage'
import Link from 'next/link'
import BookingInfoCard from '@/components/BookingInfoCard'
import ServiceAreasMap from '@/components/ServiceAreasMap'

export async function generateMetadata({ params }) {
  const service = params.service
  const title = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  return {
    title: `${title} Services in Hampshire | Rosebourne Plumbing`,
    description: `Professional ${title} services in Hampshire. Expert plumbers, competitive rates, and fast response times. Call us today for a free quote.`,
    keywords: `${title}, plumbing services, Hampshire plumbers, emergency plumbing, professional plumbers, ${title} near me`,
  }
}

export default function ServicePage({ params }) {
  const service = params.service
  const title = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title} Services in Hampshire
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional {title} services provided by experienced plumbers in Hampshire and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/about/reviews"
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
            >
              Read Customer Reviews
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our {title} Services</h2>
              <div className="prose max-w-none">
                <p>
                  At Rosebourne Plumbing, we provide professional {title} services to homeowners and businesses across Hampshire. Our experienced team of plumbers is fully qualified and equipped to handle all types of {title} needs.
                </p>
                <h3>Why Choose Us?</h3>
                <ul>
                  <li>Fully qualified and experienced plumbers</li>
                  <li>Fast response times</li>
                  <li>Competitive rates</li>
                  <li>Guaranteed workmanship</li>
                  <li>Professional service</li>
                  <li>Clean and tidy work</li>
                </ul>
                <h3>Our Process</h3>
                <ol>
                  <li>Initial consultation and assessment</li>
                  <li>Detailed quote with no hidden costs</li>
                  <li>Professional service delivery</li>
                  <li>Quality assurance and guarantee</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Booking info card */}
          <div className="lg:col-span-1">
            <BookingInfoCard />
          </div>
        </div>

        {/* Service areas map */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Service Areas</h2>
          <ServiceAreasMap />
        </div>

        {/* All About section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">All About {title} Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is {title}?</h3>
              <p className="text-gray-600">
                {title} is an essential part of your plumbing system. Our professional services ensure your {title} needs are met with the highest standards of quality and safety.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Issues</h3>
              <p className="text-gray-600">
                We handle all types of {title} issues, from minor repairs to complete replacements. Our experienced team can diagnose and fix any problem efficiently.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maintenance Tips</h3>
              <p className="text-gray-600">
                Regular maintenance is key to preventing {title} problems. We offer professional maintenance services to keep your system running smoothly.
              </p>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="max-w-4xl mx-auto mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Need {title} Services?
              </h2>
              <p className="text-gray-600 mb-6">
                Contact us today for professional {title} services in Hampshire. We offer competitive rates and fast response times.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us Today
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-40 h-40 rounded-full bg-blue-50 flex items-center justify-center">
                <svg className="w-20 h-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 