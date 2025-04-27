'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Kitchen services array with all details
const kitchenServices = [
  {
    id: 'kitchen-plumbing',
    title: 'Kitchen Plumbing',
    description: 'Complete kitchen plumbing solutions including installation, repairs, and upgrades for sinks, taps, and appliances.',
    features: [
      'Sink and tap installation',
      'Dishwasher and washing machine connection',
      'Waste disposal unit installation',
      'Water filter system installation',
      'Under-sink water heater installation',
      'Pipe relocation and replacement'
    ],
    price: 'Starts from £180',
    image: '/kitchen-plumbing.jpg'
  },
  {
    id: 'sink-installation',
    title: 'Sink Installation',
    description: 'Professional installation of all types of kitchen sinks, including undermount, topmount, and farmhouse styles.',
    features: [
      'Undermount sink fitting',
      'Topmount sink installation',
      'Belfast and farmhouse sink installation',
      'Composite and stainless steel sink fitting',
      'Waste and trap installation',
      'Silicone sealing and finishing'
    ],
    price: 'Starts from £180',
    image: '/sink-installation.jpg'
  },
  {
    id: 'tap-installation',
    title: 'Tap Installation',
    description: 'Expert installation of kitchen taps, including mixer taps, pull-out sprays, and instant hot water taps.',
    features: [
      'Mixer tap installation',
      'Pull-out spray tap fitting',
      'Instant hot water tap installation',
      'Filter tap installation',
      'Tap repair and replacement',
      'Pressure testing and adjustment'
    ],
    price: 'Starts from £85',
    image: '/tap-installation.jpg'
  },
  {
    id: 'waste-disposal',
    title: 'Waste Disposal Units',
    description: 'Installation and repair of waste disposal units to keep your kitchen clean and efficient.',
    features: [
      'Waste disposal unit installation',
      'Existing unit replacement',
      'Repair and maintenance',
      'Wiring and connection setup',
      'Compatible sink assessment',
      'Operational testing'
    ],
    price: 'Starts from £150',
    image: '/waste-disposal.jpg'
  },
  {
    id: 'dishwasher-installation',
    title: 'Dishwasher Installation',
    description: 'Safe and reliable dishwasher installation with proper plumbing connections and testing.',
    features: [
      'Freestanding dishwasher installation',
      'Integrated dishwasher fitting',
      'Water inlet connection',
      'Waste outlet connection',
      'Leak prevention system installation',
      'Full appliance testing'
    ],
    price: 'Starts from £95',
    image: '/dishwasher-installation.jpg'
  },
  {
    id: 'kitchen-repairs',
    title: 'Kitchen Plumbing Repairs',
    description: 'Fast and reliable repairs for all kitchen plumbing issues, from leaks to blockages.',
    features: [
      'Leaking tap repair',
      'Sink drain unblocking',
      'Garbage disposal repair',
      'Under-sink pipe repair',
      'Dishwasher leak repair',
      'Water pressure issues'
    ],
    price: 'Starts from £85',
    image: '/kitchen-repairs.jpg'
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

// Kitchen Services Page Component
export default function KitchenServicesPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Kitchen Services</h1>
            <p className="text-xl opacity-90">
              Professional kitchen plumbing solutions for your home in Andover, Hungerford, Marlborough and surrounding areas.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {kitchenServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Why Choose Our Kitchen Services?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Installation</h3>
              <p className="text-gray-600">Our experienced plumbers ensure all kitchen fixtures are installed correctly and function perfectly.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">We respond quickly to kitchen plumbing emergencies, minimizing disruption to your daily routine.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">We source and install high-quality kitchen fixtures and fittings for lasting performance.</p>
            </div>
          </div>
        </div>

        {/* Service Process */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Our Kitchen Service Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="rounded-full bg-blue-600 text-white w-10 h-10 flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
              <h3 className="font-semibold text-gray-800 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">We discuss your requirements and provide professional advice on your kitchen plumbing.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="rounded-full bg-blue-600 text-white w-10 h-10 flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
              <h3 className="font-semibold text-gray-800 mb-2">Quote</h3>
              <p className="text-gray-600 text-sm">We provide a detailed, transparent quote with all costs clearly explained.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="rounded-full bg-blue-600 text-white w-10 h-10 flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
              <h3 className="font-semibold text-gray-800 mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">Our professional plumbers complete the work efficiently and to the highest standard.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="rounded-full bg-blue-600 text-white w-10 h-10 flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
              <h3 className="font-semibold text-gray-800 mb-2">Aftercare</h3>
              <p className="text-gray-600 text-sm">We provide complete testing, cleanup, and aftercare support for all our kitchen services.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does a kitchen sink installation take?</h3>
              <p className="text-gray-600">A standard kitchen sink installation typically takes 2-3 hours, depending on the complexity and whether any modifications to the plumbing are required.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can you install a kitchen tap that I've purchased elsewhere?</h3>
              <p className="text-gray-600">Yes, we're happy to install kitchen taps purchased from any supplier. We'll ensure it's properly fitted and functioning correctly.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do I need to update my plumbing for a new dishwasher?</h3>
              <p className="text-gray-600">Not necessarily. We'll assess your current plumbing connections and make recommendations if any updates are needed. Modern dishwashers typically work with standard plumbing connections.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can you install instant hot water taps?</h3>
              <p className="text-gray-600">Yes, we can install all types of instant hot water taps and boiling water taps, including systems from Quooker, InSinkErator, and other brands.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-lg overflow-hidden">
          <div className="px-6 py-12 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to upgrade your kitchen?</h2>
              <p className="text-lg opacity-90 mb-8">Contact us today for a free consultation and quote on your kitchen plumbing needs.</p>
              
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