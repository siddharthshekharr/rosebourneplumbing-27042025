import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata = {
  title: 'Emergency Plumbing Services',
  description: 'Immediate emergency plumbing assistance in Andover, Marlborough, Hungerford and surrounding areas. Available for emergencies with quick response times.',
}

export default function EmergencyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with emergency messaging */}
      <section className="relative py-28 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70 rounded-lg"></div>
            <div className="relative z-10 p-6 sm:p-8">
              <div className="mb-4">
                <span className="text-sm font-medium text-white">Emergency Service</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Urgent Plumbing Help</h3>
              <p className="text-gray-100 mb-6">
                Our experienced emergency plumbing team is ready to respond within the hour.
              </p>
              {/* CTA button */}
              <div className="flex flex-col space-y-3">
                <a href="tel:01264502027" className="inline-flex items-center justify-center bg-white text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: 01264 502027
                </a>
                <p className="text-gray-300">Our emergency team is available during emergency hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Counts as an Emergency Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-red-50">
                  <span className="text-sm font-medium text-red-600">Fast Response</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  What Counts as a Plumbing Emergency?
                </h2>

                <div className="prose prose-lg text-gray-600">
                  <p>
                    Not sure if your situation requires emergency service? Here are some common plumbing emergencies that require immediate attention:
                  </p>
                </div>

                {/* Emergency Scenarios List */}
                <div className="space-y-4">
                  {[
                    "Burst or leaking pipes causing flooding",
                    "No water supply to your entire property",
                    "Sewage backup or overflow",
                    "Gas leaks or gas smells",
                    "No hot water in cold weather",
                    "Blocked toilet (if it's your only toilet)",
                    "Water leaking through ceilings"
                  ].map((scenario, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{scenario}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative">
                <div className="relative h-[550px] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-600 mb-2">Emergency Response</h3>
                    <p className="text-gray-500">1-Hour Response Time Available for Emergencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-red-50 mb-4">
                <span className="text-sm font-medium text-red-600">Our Emergency Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Handle Your Emergency
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined emergency response process ensures we address your plumbing crisis quickly and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Call Our Emergency Line",
                  description: "Contact our emergency line at 01264 502027. Our team will ask about your emergency and dispatch the nearest plumber.",
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                },
                {
                  step: "2",
                  title: "Rapid Response",
                  description: "Our emergency plumber will arrive within 1 hour with all necessary equipment to diagnose and fix most common emergencies on the spot.",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  step: "3",
                  title: "Problem Resolution",
                  description: "We'll quickly assess the situation, provide upfront pricing, and fix the emergency properly the first time to prevent recurrence.",
                  icon: "M5 13l4 4L19 7"
                }
              ].map((process, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600/10 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                      <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={process.icon} />
                      </svg>
                    </div>
                    
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-lg mb-4">
                      {process.step}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 lg:p-16 space-y-6">
                  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
                    <span className="text-sm font-medium text-white">What To Do While Waiting</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white">
                    Emergency First Steps
                  </h2>
                  
                  <p className="text-gray-300">
                    While waiting for our emergency plumber to arrive, here are some important steps you can take to minimize damage:
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    {[
                      {
                        tip: "Shut off your water main",
                        description: "For burst pipes or severe leaks, turn off your main water valve to stop water flow"
                      },
                      {
                        tip: "Turn off appliance water supply",
                        description: "For issues with specific appliances, turn off their dedicated water supply valves"
                      },
                      {
                        tip: "Switch off water heater",
                        description: "For water heater leaks, turn off the power supply and water inlet valve"
                      },
                      {
                        tip: "Contain the water",
                        description: "Use buckets, towels or containers to catch water and prevent further damage"
                      }
                    ].map((tip, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <h4 className="font-semibold text-white mb-1">{tip.tip}</h4>
                        <p className="text-sm text-gray-300">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Image Placeholder */}
                <div className="relative h-[400px] lg:h-auto bg-blue-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-20 h-20 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-xl font-bold text-white mb-2">Take Action Quick</h3>
                    <p className="text-blue-200">Fast action can prevent extensive damage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-red-50 mb-4">
                <span className="text-sm font-medium text-red-600">Service Areas</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Emergency Coverage Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide emergency plumbing services throughout Andover, Marlborough, Hungerford and the surrounding areas.
              </p>
            </div>
            
            {/* Service Area Map Placeholder */}
            <div className="h-[400px] rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
              <div className="text-center max-w-lg p-8">
                <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Service Areas</h3>
                <p className="text-gray-600 mb-4">We provide emergency plumbing services in:</p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-700">Andover</h4>
                    <p className="text-xs text-gray-500">SP10, SP11</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-700">Marlborough</h4>
                    <p className="text-xs text-gray-500">SN8</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-700">Hungerford</h4>
                    <p className="text-xs text-gray-500">RG17</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Not sure if we cover your area for emergency services?</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Check your coverage
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-red-50">
                  <span className="text-sm font-medium text-red-600">Transparent Pricing</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Emergency Service Rates
                </h2>
                
                <div className="prose prose-lg text-gray-600">
                  <p>
                    We believe in full transparency with our emergency service pricing. Our emergency call-out fee covers:
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Initial callout and first hour of labor",
                    "Diagnostic assessment of the emergency",
                    "Basic parts and materials for common fixes",
                    "Full upfront quote before any additional work",
                    "No hidden fees or surprise charges"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link
                    href="tel:01264502027"
                    className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
                  >
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call For Emergency Service
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Emergency Call-Out Rate</h3>
                  <div className="text-4xl font-bold text-red-600">£95</div>
                  <p className="text-gray-600 mt-2">For after-hours emergency service</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="font-medium">Standard Hours (8am-6pm)</span>
                    <span className="text-gray-900 font-semibold">£75</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="font-medium">Evening (6pm-10pm)</span>
                    <span className="text-gray-900 font-semibold">£95</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="font-medium">Night/Weekend/Holiday</span>
                    <span className="text-gray-900 font-semibold">£125</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4">
                    <span className="font-medium">Additional Hours</span>
                    <span className="text-gray-900 font-semibold">£60/hour</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-gray-600">All rates include VAT. Additional parts or materials will be quoted before installation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-red-700 via-red-800 to-red-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Emergency Plumbing Help?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Our emergency team is standing by to help you with your plumbing crisis
            </p>
            <Link
              href="tel:01264502027"
              className="inline-flex items-center justify-center bg-white text-red-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: 01264 502027
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 