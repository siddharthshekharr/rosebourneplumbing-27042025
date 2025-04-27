'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Heating services array with all details
const heatingServices = [
  {
    id: 'power-flushing',
    title: 'Power Flushing',
    description: 'Professional cleaning of your heating system to remove sludge, scale, and rust, improving efficiency and lifespan.',
    features: [
      'Complete system flush',
      'Removal of sludge and debris',
      'Improved heating efficiency',
      'Reduced energy bills',
      'Extended system life',
      'Chemical treatment'
    ],
    price: 'Starts from £350',
    image: '/power-flushing.jpg'
  },
  {
    id: 'radiator-services',
    title: 'Radiator Services',
    description: 'Installation, replacement, and maintenance of radiators to ensure optimal heating performance.',
    features: [
      'Radiator installation',
      'Radiator replacement',
      'Radiator balancing',
      'Thermostatic valve fitting',
      'Radiator bleeding',
      'System pressure adjustment'
    ],
    price: 'Starts from £120',
    image: '/radiator-services.jpg'
  },
  {
    id: 'underfloor-heating',
    title: 'Underfloor Heating',
    description: 'Installation and repair of energy-efficient underfloor heating systems for consistent, comfortable warmth.',
    features: [
      'Water-based system installation',
      'Electric system installation',
      'Underfloor heating repairs',
      'System design and planning',
      'Manifold installation',
      'Thermostat installation'
    ],
    price: 'Starts from £1,200',
    image: '/underfloor-heating.jpg'
  },
  {
    id: 'heating-controls',
    title: 'Heating Controls',
    description: 'Installation and upgrades of smart heating controls for better efficiency and comfort.',
    features: [
      'Smart thermostat installation',
      'Zone control installation',
      'Programmable timer setup',
      'Wireless control installation',
      'System optimization',
      'Energy saving configuration'
    ],
    price: 'Starts from £180',
    image: '/heating-controls.jpg'
  },
  {
    id: 'boiler-maintenance',
    title: 'Boiler Maintenance',
    description: 'Professional maintenance and servicing to keep your boiler running efficiently and safely.',
    features: [
      'Annual boiler service',
      'Safety checks',
      'Efficiency optimization',
      'Component replacement',
      'Pressure adjustment',
      'Performance testing'
    ],
    price: 'Starts from £85',
    image: '/boiler-maintenance.jpg'
  },
  {
    id: 'heating-system-upgrades',
    title: 'Heating System Upgrades',
    description: 'Modernization of outdated heating systems to improve efficiency, control, and comfort.',
    features: [
      'System assessment',
      'Energy efficiency improvements',
      'Component upgrades',
      'Smart control integration',
      'System redesign',
      'Performance optimization'
    ],
    price: 'Starts from £450',
    image: '/heating-upgrades.jpg'
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

// Heating Services Page Component
export default function HeatingServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Heating Services</h1>
            <p className="text-xl opacity-90">
              Professional heating solutions to keep your home warm, comfortable, and energy-efficient.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-700 text-lg">
            From power flushing and radiator services to underfloor heating and smart controls, our heating experts 
            ensure your home stays warm while minimizing energy consumption and costs.
          </p>
        </div>
        
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {heatingServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Benefits of Professional Heating Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lower Energy Bills</h3>
              <p className="text-gray-600">Efficient heating systems use less energy, reducing your monthly utility costs and environmental impact.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Consistent Comfort</h3>
              <p className="text-gray-600">Well-maintained heating systems provide even, reliable warmth throughout your home without cold spots.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Extended System Life</h3>
              <p className="text-gray-600">Regular maintenance and proper installation extend the lifespan of your heating system, saving money long-term.</p>
            </div>
          </div>
        </div>

        {/* Energy Efficiency Information */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Heating System Efficiency Guide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Signs Your Heating System Needs Attention</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Uneven heating or cold spots</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Unusual noises from radiators or boiler</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Increasing energy bills</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Radiators need frequent bleeding</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Benefits of System Upgrades</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 25% reduction in heating costs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smartphone-controlled heating</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Zoned heating for specific areas</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduced carbon footprint</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Power Flushing Highlight */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Power Flushing Matters</h2>
              <p className="text-gray-600 mb-4">
                Over time, heating systems accumulate sludge, rust, and debris that reduce efficiency and can lead to breakdowns.
                Power flushing cleans your entire system, restoring optimal performance and extending its lifespan.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Benefits include:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Improved heating efficiency</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Reduced energy consumption</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">More even heat distribution</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Extended system lifespan</span>
                </li>
              </ul>
              
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Book Power Flushing
              </Link>
            </div>
            <div className="bg-blue-50 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="rounded-full bg-blue-100 p-6 inline-flex mx-auto mb-6">
                  <svg className="h-20 w-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div className="text-lg font-bold text-blue-800">
                  Power flushing can increase heating efficiency by up to 25%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How often should a heating system be serviced?</h3>
              <p className="text-gray-600">We recommend annual servicing for most heating systems to ensure efficiency, safety, and reliability. Regular maintenance prevents costly breakdowns and extends system life.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What are the signs that my heating system needs power flushing?</h3>
              <p className="text-gray-600">Cold spots on radiators, noisy system operation, frequent need to bleed radiators, slow heating, and increasing energy bills are all indicators that your system may benefit from power flushing.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Is underfloor heating more efficient than radiators?</h3>
              <p className="text-gray-600">Underfloor heating is typically 15-40% more energy-efficient than traditional radiator systems because it operates at a lower temperature while providing even heat distribution. It's particularly efficient with heat pumps and modern condensing boilers.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How much could I save with smart heating controls?</h3>
              <p className="text-gray-600">Smart heating controls can reduce energy usage by 10-30% depending on your previous system and usage patterns. Features like zoned heating, learning algorithms, and remote access all contribute to these savings.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-lg overflow-hidden">
          <div className="px-6 py-12 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to improve your heating system?</h2>
              <p className="text-lg opacity-90 mb-8">Contact us today for expert advice and a free quote on any of our heating services.</p>
              
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