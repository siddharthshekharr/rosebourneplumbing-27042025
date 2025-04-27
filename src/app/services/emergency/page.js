import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BookingInfoCard from '@/components/BookingInfoCard'
import ServiceAreasMap from '@/components/ServiceAreasMap'

const emergencyServices = [
  {
    title: 'Emergency Plumbing',
    description: 'Fast response for urgent plumbing issues',
    features: ['Professional Service', 'Fully Equipped Vans', 'Experienced Plumbers'],
    price: 'From £160'
  },
  {
    title: 'Blocked Drains',
    description: 'Professional drain clearance service',
    features: ['High-pressure Jetting', 'CCTV Surveys', 'Quick Resolution'],
    price: 'From £150'
  },
  {
    title: 'Leak Detection',
    description: 'Advanced leak finding and repair services',
    features: ['Non-invasive Methods', 'Thermal Imaging', 'Accurate Detection'],
    price: 'From £190'
  },
  {
    title: 'Burst Pipes',
    description: 'Emergency pipe repair service',
    features: ['Rapid Response', 'Water Control', 'Complete Repair'],
    price: 'From £190'
  },
  {
    title: 'Toilet Issues',
    description: 'Fast toilet repair and replacement service',
    features: ['Blockage Clearing', 'Cistern Repairs', 'Complete Replacements'],
    price: 'From £150'
  },
  {
    title: 'Leaking Taps',
    description: 'Professional tap repair service',
    features: ['All Tap Types', 'Washer Replacement', 'Complete Repairs'],
    price: 'From £120'
  },
  {
    title: 'No Hot Water',
    description: 'Hot water system diagnosis and repair',
    features: ['System Diagnosis', 'Quick Repairs', 'Cylinder Services'],
    price: 'From £160'
  },
  {
    title: 'Flood Response',
    description: 'Emergency flood control and cleanup',
    features: ['Water Extraction', 'Damage Control', 'Prevention'],
    price: 'From £200'
  },
  {
    title: 'Water Leak Repairs',
    description: 'Professional leak detection and repair',
    features: ['Leak Location', 'Quick Repairs', 'Prevention'],
    price: 'From £160'
  }
];

export const metadata = {
  title: 'Emergency Plumbing Services in Hampshire & Wiltshire',
  description: 'Professional emergency plumbing solutions for your home or business. Available for emergencies throughout Hampshire.',
};

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="space-y-2 mb-4">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <div className="font-bold text-blue-800 text-lg">{service.price}</div>
      </div>
    </div>
  );
}

export default function EmergencyServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-20 lg:pt-20 bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,5 C60,20 40,80 0,100 Z" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Urgent Plumbing Assistance</h3>
                <span className="text-sm font-medium">EMERGENCY AVAILABILITY</span>
                <div className="mt-2 h-1 w-20 bg-red-600"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Emergency Plumbing Services</h1>
              <p className="mt-4 text-gray-600">
                We understand that plumbing emergencies don't wait for convenient business hours. You can count on Rosebourne Plumbing for quick response on short notice. Our emergency team is on call to solve your most urgent plumbing issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01264502027"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now: 01264 502027
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-900 hover:bg-red-950 transition-colors"
                >
                  Book Online
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Emergency Callout Information</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold block">Response Time:</span>
                      <span>Typically within 60-90 minutes in our service areas</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold block">Initial Callout Fee:</span>
                      <span>From £120 (includes first hour of labour)</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <span className="font-semibold block">Guarantee:</span>
                      <span>All emergency work is fully guaranteed</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <div>
                      <span className="font-semibold block">Payment:</span>
                      <span>We accept all major credit/debit cards, cash, and bank transfers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Emergency Plumbing Services</h2>
            <p className="text-lg text-gray-600">
              From burst pipes to blocked drains, our emergency plumbers are equipped to handle any urgent plumbing issue.
              We arrive with fully-stocked vans and the expertise to resolve your problem quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Rosebourne Plumbing for Emergencies</h2>
            <p className="text-lg text-gray-600">
              With over 15 years of experience in emergency plumbing, we've built our reputation on reliability,
              quality workmanship, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-100">
                <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Fast Response Time</h3>
              <p className="text-gray-600 text-center">
                We understand that emergencies require immediate attention. Our team is dispatched quickly to minimize damage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-100">
                <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Experienced Professionals</h3>
              <p className="text-gray-600 text-center">
                Our emergency plumbers are highly trained specialists with the expertise to handle any crisis effectively.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-100">
                <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Transparent Pricing</h3>
              <p className="text-gray-600 text-center">
                Even in emergencies, we provide clear pricing with no hidden fees, giving you peace of mind during stressful situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Coverage Areas</h2>
            <p className="text-lg text-gray-600">
              We provide emergency plumbing services throughout Hampshire, including Andover, Marlborough, Hungerford, and surrounding areas.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ServiceAreasMap />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Plumbing FAQs</h2>
            <p className="text-lg text-gray-600">
              Common questions about our emergency plumbing services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What qualifies as a plumbing emergency?</h3>
              <p className="text-gray-600">
                Plumbing emergencies typically include situations that pose immediate risks to property, health, or safety: burst pipes, severe leaks causing flooding,
                completely blocked toilets or drains, gas leaks, or no hot water during extremely cold weather.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How quickly can you respond to an emergency?</h3>
              <p className="text-gray-600">
                In most cases, we can arrive at your property within 60-90 minutes of your call, depending on your location within our service area and current demand.
                We prioritize true emergencies that pose risks of significant damage or safety concerns.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What should I do while waiting for an emergency plumber?</h3>
              <p className="text-gray-600">
                If safe to do so, turn off your water at the main stopcock to minimize damage. For burst pipes or severe leaks, use towels or containers to collect water.
                For gas issues, open windows, avoid using electrical switches, and evacuate if necessary. Our emergency team can provide specific guidance over the phone while en route.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Is there an extra charge for emergency callouts?</h3>
              <p className="text-gray-600">
                Yes, emergency callouts outside of regular business hours incur a higher callout fee to cover the additional costs of providing emergency service.
                However, we're completely transparent about our pricing before any work begins, and we never add hidden charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <BookingInfoCard />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency? Don't Wait!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our emergency plumbing team is ready to help. One call and we'll be on our way to fix your plumbing issue.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01264502027"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50 md:py-4 md:text-lg md:px-8 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us: 01264 502027
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-900 hover:bg-red-950 md:py-4 md:text-lg md:px-8 transition-colors"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}