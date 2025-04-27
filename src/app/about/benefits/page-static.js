export default function BenefitsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">Why Choose Rosebourne Plumbing</h1>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Discover the advantages of working with our experienced professionals for all your plumbing needs
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 flex-grow">All our work is guaranteed and performed to the highest industry standards.</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Prompt Service</h3>
              <p className="text-gray-600 flex-grow">We value your time with punctual arrivals and efficient service completion.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Certified Professionals</h3>
              <p className="text-gray-600 flex-grow">Our fully qualified plumbers are registered with relevant professional bodies.</p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Experience & Expertise</h3>
              <p className="text-gray-600 flex-grow">With years of experience, we handle any plumbing challenge with confidence.</p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Full Insurance Coverage</h3>
              <p className="text-gray-600 flex-grow">We're comprehensively insured for your complete peace of mind.</p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 flex-grow">Transparent pricing with no hidden fees or surprise charges.</p>
            </div>

            {/* Benefit 7 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600 flex-grow">We're not happy until you're completely satisfied with our work.</p>
            </div>

            {/* Benefit 8 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Modern Equipment</h3>
              <p className="text-gray-600 flex-grow">We use the latest tools and techniques for efficient and lasting results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px bg-gray-200 w-full"></div>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-blue-900 mb-4">What Our Customers Say</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Read testimonials from our satisfied customers throughout Hampshire
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="space-y-4">
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg font-medium text-gray-900">Excellent service from start to finish. Fixed our bathroom leak quickly and professionally. Would definitely recommend!</p>
                <div className="text-blue-600 font-medium">
                  Sarah Thompson, <span className="text-gray-500 font-normal">Andover</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="space-y-4">
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg font-medium text-gray-900">Called Rosebourne Plumbing for an emergency and they were at our house within the hour. Professional, courteous and fixed the issue without any fuss.</p>
                <div className="text-blue-600 font-medium">
                  James Wilson, <span className="text-gray-500 font-normal">Marlborough</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="space-y-4">
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg font-medium text-gray-900">We've used Rosebourne for all our plumbing needs over the past 3 years. Always reliable, always professional, and always reasonably priced.</p>
                <div className="text-blue-600 font-medium">
                  Emma Davis, <span className="text-gray-500 font-normal">Hungerford</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-blue-900">Experience the Rosebourne Difference</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg mb-4">
              Ready to work with Hampshire's most trusted plumbing professionals? Contact us today for a consultation or quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Contact Us
              </a>
              <a href="/services" className="inline-flex items-center justify-center rounded-md border border-blue-600 bg-transparent px-6 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 