'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Water Systems services array with all details
const waterServices = [
  {
    id: 'water-tank-services',
    title: 'Water Tank Services',
    description: 'Professional installation, replacement, and maintenance of water tanks for domestic and commercial properties.',
    features: [
      'Cold water tank installation',
      'Hot water cylinder installation',
      'Tank replacement',
      'Insulation upgrades',
      'Valve replacement',
      'System flushing and cleaning'
    ],
    price: 'Starts from £280',
    image: '/water-tank.jpg'
  },
  {
    id: 'water-softener-installation',
    title: 'Water Softener Installation',
    description: 'Expert installation of water softening systems to reduce limescale and improve water quality.',
    features: [
      'Full system installation',
      'Salt-based softener installation',
      'Salt-free conditioner installation',
      'Existing system replacement',
      'Bypass valve installation',
      'System optimization'
    ],
    price: 'Starts from £600',
    image: '/water-softener.jpg'
  },
  {
    id: 'water-treatment',
    title: 'Water Treatment Systems',
    description: 'Installation of filtration and purification systems for cleaner, healthier water throughout your home.',
    features: [
      'Whole house water filtration',
      'Under-sink water filters',
      'UV purification systems',
      'Reverse osmosis systems',
      'Carbon filtration installation',
      'Sediment filter installation'
    ],
    price: 'Starts from £350',
    image: '/water-treatment.jpg'
  },
  {
    id: 'water-pressure-solutions',
    title: 'Water Pressure Solutions',
    description: 'Diagnosis and solutions for water pressure issues in residential and commercial properties.',
    features: [
      'Pressure testing',
      'Booster pump installation',
      'Pressure reducing valve installation',
      'Accumulator tank installation',
      'System balancing',
      'Flow rate optimization'
    ],
    price: 'Starts from £180',
    image: '/water-pressure.jpg'
  },
  {
    id: 'rainwater-harvesting',
    title: 'Rainwater Harvesting',
    description: 'Sustainable water collection systems for garden use and non-potable applications.',
    features: [
      'Collection system installation',
      'Storage tank installation',
      'Filtration system setup',
      'Pump installation',
      'Irrigation connection',
      'System maintenance'
    ],
    price: 'Starts from £1,200',
    image: '/rainwater-harvesting.jpg'
  },
  {
    id: 'leak-detection-repair',
    title: 'Leak Detection & Repair',
    description: 'Advanced techniques for locating and repairing hidden water leaks with minimal disruption.',
    features: [
      'Non-invasive leak detection',
      'Thermal imaging',
      'Acoustic detection',
      'Precision pipe repairs',
      'Underground leak location',
      'Pressure testing'
    ],
    price: 'Starts from £160',
    image: '/leak-detection.jpg'
  }
];

// Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Features:</h4>
          <ul className="space-y-1">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-blue-600 font-semibold">{service.price}</div>
          <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

// Water Systems Page Component
export default function WaterSystemsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Water Systems Services</h1>
            <p className="text-xl opacity-90">
              Professional water system solutions for clean, efficient, and reliable water throughout your home.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-700 text-lg">
            From water tanks and softeners to filtration systems and pressure solutions, our expert plumbers 
            provide complete water system services to ensure your home has clean, efficient water delivery.
          </p>
        </div>
        
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {waterServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Benefits of Professional Water Systems</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Improved Water Quality</h3>
              <p className="text-gray-600">Enjoy cleaner, better-tasting water throughout your home with our filtration and treatment solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Energy Efficiency</h3>
              <p className="text-gray-600">Properly maintained water systems use less energy, reducing your utility bills and environmental impact.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Extended Appliance Life</h3>
              <p className="text-gray-600">Water treatment systems help protect your appliances from scale buildup, extending their operational life.</p>
            </div>
          </div>
        </div>

        {/* Water Quality Information */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Understanding Your Water Quality</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Hard Water Issues</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Limescale buildup on taps and showerheads</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Reduced efficiency of water heaters</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Spots on glassware and silverware</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Reduced soap lathering and cleaning effectiveness</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Benefits of Treated Water</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Improved taste and odor of drinking water</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Softer skin and hair after showering</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduced cleaning product usage</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Extended life of water-using appliances</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I know if I need a water softener?</h3>
              <p className="text-gray-600">If you notice limescale buildup on taps and fixtures, spots on glassware after washing, or dry skin and hair after showering, these are common signs of hard water that could benefit from a water softener installation.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How often should water filters be replaced?</h3>
              <p className="text-gray-600">This depends on the type of filter, water usage, and water quality. Generally, basic carbon filters should be replaced every 3-6 months, while reverse osmosis membranes may last 2-3 years. We can provide a maintenance schedule specific to your system.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can you install water treatment systems in any home?</h3>
              <p className="text-gray-600">Yes, we can design and install water treatment solutions for virtually any property. Our initial assessment will determine the best system based on your space constraints, water quality issues, and usage requirements.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Are water softeners expensive to run?</h3>
              <p className="text-gray-600">Modern water softeners are quite efficient. Running costs include salt (for traditional systems) and a small amount of electricity. These costs are often offset by savings on cleaning products, extended appliance lifespans, and reduced energy usage from more efficient water heating.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-lg overflow-hidden">
          <div className="px-6 py-12 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to improve your water quality?</h2>
              <p className="text-lg opacity-90 mb-8">Contact us today for a water quality assessment and personalized recommendations for your home.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                  Get a Quote
                </Link>
                <a href="tel:+441264123456" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  01264 123 456
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 