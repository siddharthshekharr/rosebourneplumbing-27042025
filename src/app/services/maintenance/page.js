'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Maintenance services array with all details
const maintenanceServices = [
  {
    id: 'drain-maintenance',
    title: 'Drain Maintenance',
    description: 'Regular servicing and cleaning of drains to prevent blockages, bad odors, and costly repairs.',
    features: [
      'CCTV drain inspections',
      'High-pressure water jetting',
      'Root removal treatment',
      'Drain descaling',
      'Preventative maintenance',
      'Annual service plans'
    ],
    price: 'Starts from £120',
    image: '/drain-maintenance.jpg'
  },
  {
    id: 'water-quality',
    title: 'Water Quality Checks',
    description: 'Comprehensive testing and treatment to ensure your water is safe, clean, and pleasant to use.',
    features: [
      'Water hardness testing',
      'pH level analysis',
      'Contaminant screening',
      'Treatment recommendations',
      'Filter performance tests',
      'Water sampling'
    ],
    price: 'Starts from £85',
    image: '/water-quality.jpg'
  },
  {
    id: 'leak-repair',
    title: 'Leak Repair Service',
    description: 'Expert detection and repair of leaks to prevent water damage and wastage.',
    features: [
      'Non-invasive leak detection',
      'Pipe repair and replacement',
      'Joint and seal repairs',
      'Water meter monitoring',
      'Infrared detection technology',
      'Pressure testing'
    ],
    price: 'Starts from £100',
    image: '/leak-repair.jpg'
  },
  {
    id: 'plumbing-inspection',
    title: 'Plumbing Inspection',
    description: 'Thorough inspection of your plumbing system to identify potential issues before they become problems.',
    features: [
      'Complete system evaluation',
      'Pipe condition assessment',
      'Fixture inspection',
      'Water pressure testing',
      'Detailed inspection report',
      'Maintenance recommendations'
    ],
    price: 'Starts from £95',
    image: '/plumbing-inspection.jpg'
  },
  {
    id: 'tap-repair',
    title: 'Tap Repair & Servicing',
    description: 'Fix dripping taps, handle issues, and restore full functionality to extend the life of your fixtures.',
    features: [
      'Washer replacement',
      'Cartridge replacement',
      'Seal repairs',
      'Handle repairs',
      'Spout repairs',
      'Water pressure adjustment'
    ],
    price: 'Starts from £65',
    image: '/tap-repair.jpg'
  },
  {
    id: 'maintenance-plan',
    title: 'Annual Maintenance Plan',
    description: 'Comprehensive yearly maintenance package to keep your entire plumbing system in optimal condition.',
    features: [
      'Annual system inspection',
      'Preventative drain cleaning',
      'Water efficiency check',
      'Priority emergency service',
      'Heating system check',
      'Discounted repair rates'
    ],
    price: 'Starts from £225/year',
    image: '/maintenance-plan.jpg'
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

// Maintenance Services Page Component
export default function MaintenanceServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Maintenance Services</h1>
            <p className="text-xl opacity-90">
              Proactive plumbing maintenance to prevent issues, extend system life, and save you money.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-700 text-lg">
            Regular maintenance is the key to avoiding unexpected plumbing emergencies and costly repairs. 
            Our comprehensive maintenance services help keep your plumbing system running smoothly year-round.
          </p>
        </div>
        
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {maintenanceServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Maintenance Plan Highlight */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Our Annual Maintenance Plan?</h2>
              <p className="text-gray-600 mb-4">
                Our comprehensive annual maintenance plan provides peace of mind and helps you avoid unexpected plumbing emergencies. 
                Regular maintenance not only extends the life of your plumbing system but can significantly reduce your water bills and prevent costly repairs.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Plan Benefits:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Priority service for emergency calls</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">15% discount on all repair services</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Annual whole-house plumbing inspection</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Free water efficiency assessment</span>
                </li>
              </ul>
              
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Get Annual Plan
              </Link>
            </div>
            <div className="bg-blue-50 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="rounded-full bg-blue-100 p-6 inline-flex mx-auto mb-6">
                  <svg className="h-20 w-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-lg font-bold text-blue-800">
                  Prevent up to 85% of plumbing emergencies with regular maintenance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Benefits of Regular Plumbing Maintenance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lower Water Bills</h3>
              <p className="text-gray-600">Identifying and fixing small leaks and inefficiencies can save thousands of gallons of water annually.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Prevent Emergencies</h3>
              <p className="text-gray-600">Regular maintenance identifies potential problems before they become expensive emergency situations.</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-blue-100 p-4 inline-flex mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Extended System Life</h3>
              <p className="text-gray-600">Proper maintenance can extend the lifespan of your plumbing fixtures and pipes by years or even decades.</p>
            </div>
          </div>
        </div>

        {/* Maintenance Schedule Guide */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Recommended Maintenance Schedule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Monthly Checks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Check for leaks around toilets and taps</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Monitor water meter for unusual activity</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Clean shower heads and tap aerators</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Quarterly Tasks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Flush water heater to remove sediment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Check for toilet leaks with dye tablets</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Inspect visible pipes for corrosion or leaks</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Annual Services</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Professional drain cleaning</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Water pressure test and adjustment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Water heater inspection and service</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Every 2-3 Years</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>CCTV pipe inspection</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Water quality testing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Replace water heater anode rod</span>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How often should I have my drains professionally cleaned?</h3>
              <p className="text-gray-600">For residential properties, we recommend professional drain cleaning once a year to prevent buildup and blockages. If you have older pipes or frequently experience slow drains, you might benefit from more frequent cleanings every 6-8 months.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What are the first signs of a hidden water leak?</h3>
              <p className="text-gray-600">Common early warning signs include unexplained increases in water bills, the sound of running water when fixtures aren't in use, damp spots on walls or ceilings, musty odors, or decreased water pressure. If you notice any of these signs, it's important to investigate promptly.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Is it worth investing in a water softener maintenance service?</h3>
              <p className="text-gray-600">Yes, regular water softener maintenance is essential for optimal performance and longevity. Without proper maintenance, your softener may become less effective, use more salt, or even break down completely. Regular service typically includes cleaning the resin bed, checking salt efficiency, and inspecting for proper function.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I tell if my water pressure is too high?</h3>
              <p className="text-gray-600">Signs of excessive water pressure include banging pipes (water hammer), leaking taps, running toilets, and appliances wearing out prematurely. Ideal water pressure is between 40-60 psi. Our technicians can test your water pressure and install a pressure reducing valve if necessary.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-lg overflow-hidden">
          <div className="px-6 py-12 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Start a maintenance plan today</h2>
              <p className="text-lg opacity-90 mb-8">Prevent costly emergencies and extend the life of your plumbing system with our expert maintenance services.</p>
              
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