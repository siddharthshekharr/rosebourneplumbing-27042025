'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Bathroom services array with all details
const bathroomServices = [
  {
    id: 'bathroom-installation',
    title: 'Bathroom Installation',
    description: 'Complete bathroom plumbing solutions for your home, including fixture installation, pipe work, and finishing touches.',
    features: [
      'Complete bathroom fixture installation',
      'Water supply and waste pipe installation',
      'Thermostatic shower valve installation',
      'Bath and shower fitting',
      'Sink and toilet installation',
      'Tile-ready waterproofing'
    ],
    price: 'Starts from £1,200',
    image: '/bathroom-installation.jpg'
  },
  {
    id: 'shower-installation',
    title: 'Shower Installation',
    description: 'Professional shower installation services, including enclosures, trays, and plumbing connections.',
    features: [
      'Shower tray installation',
      'Shower enclosure fitting',
      'Thermostatic valve installation',
      'Electric shower installation',
      'Digital shower system installation',
      'Water pressure optimization'
    ],
    price: 'Starts from £450',
    image: '/shower-installation.jpg'
  },
  {
    id: 'wetroom-installation',
    title: 'Wetroom Installation',
    description: 'Transform your bathroom into a modern wetroom with proper waterproofing and drainage solutions.',
    features: [
      'Full wetroom tanking system',
      'Linear drain installation',
      'Floor gradient creation',
      'Waterproof membrane application',
      'Tile-ready preparation',
      'Underfloor heating compatibility'
    ],
    price: 'Starts from £1,800',
    image: '/wetroom-installation.jpg'
  },
  {
    id: 'toilet-installation',
    title: 'Toilet Installation',
    description: 'Expert toilet installation, replacement, and repair services for all types of toilets.',
    features: [
      'Close-coupled toilet installation',
      'Wall-hung toilet installation',
      'Concealed cistern fitting',
      'Macerator toilet installation',
      'Toilet replacement',
      'Dual flush mechanism fitting'
    ],
    price: 'Starts from £220',
    image: '/toilet-installation.jpg'
  },
  {
    id: 'bath-installation',
    title: 'Bath Installation',
    description: 'Professional installation of all bath types, including freestanding, built-in, and corner baths.',
    features: [
      'Freestanding bath installation',
      'Built-in bath fitting',
      'Corner bath installation',
      'Bath panel fitting',
      'Tap and waste fitting',
      'Bath mixer and shower fitting'
    ],
    price: 'Starts from £380',
    image: '/bath-installation.jpg'
  },
  {
    id: 'bathroom-repair',
    title: 'Bathroom Repair & Maintenance',
    description: 'Comprehensive repair and maintenance services for all bathroom fixtures and fittings.',
    features: [
      'Leaking tap repair',
      'Shower repair',
      'Toilet repair',
      'Bath and basin resealing',
      'Bathroom pipe repairs',
      'Tile repair and replacement'
    ],
    price: 'Starts from £85',
    image: '/bathroom-repair.jpg'
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

// Bathroom Services Page Component
export default function BathroomServicesPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Bathroom Services</h1>
            <p className="text-xl opacity-90">
              Professional bathroom plumbing solutions for your home in Andover, Hungerford, Marlborough and surrounding areas.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bathroomServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Why Choose Our Bathroom Services?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Guaranteed Quality</h3>
              <p className="text-gray-600">All our bathroom installations come with a workmanship guarantee for your peace of mind.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Completion</h3>
              <p className="text-gray-600">We work efficiently to minimize disruption and complete your bathroom project on time.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">We provide detailed quotes with no hidden costs or unexpected charges.</p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Our Service Areas</h2>
          <p className="text-center text-gray-600 mb-6">We provide bathroom services throughout Hampshire and surrounding areas including:</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Andover', 'Hungerford', 'Marlborough', 'Newbury', 'Winchester', 'Basingstoke', 'Salisbury'].map((area) => (
              <span key={area} className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does a bathroom installation take?</h3>
              <p className="text-gray-600">A standard bathroom installation typically takes 5-7 working days, depending on the complexity of the job and whether any structural changes are required.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you handle the entire bathroom installation?</h3>
              <p className="text-gray-600">Yes, we provide a complete service including plumbing, electrical work (through our qualified partners), tiling, and all fixture installations.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do I need to provide my own bathroom fixtures?</h3>
              <p className="text-gray-600">You can either purchase your own fixtures, or we can supply and install them for you. We're happy to work with your preferences.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer any guarantees on your work?</h3>
              <p className="text-gray-600">Yes, all our bathroom installations come with a 12-month workmanship guarantee, in addition to any manufacturer warranties on the products installed.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-lg overflow-hidden">
          <div className="px-6 py-12 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to transform your bathroom?</h2>
              <p className="text-lg opacity-90 mb-8">Contact us today for a free consultation and quote on your bathroom project.</p>
              
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