import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-us-hero.jpg"
                        alt="About Us Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/60"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Your Local Plumbing
                            <div className="mt-2">
                                <span className="relative inline-block px-4">
                                    <span className="relative z-10 text-white">Experts</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 -rotate-1 rounded"></div>
                                </span>
                            </div>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                            Proudly serving customers across Andover, Winchester, Basingstoke, Stockbridge, Newbury, Marlborough and Hungerford.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            Contact Us
                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Content */}
                            <div className="space-y-8">
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50">
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"></span>
                                    </span>
                                    <span className="text-sm font-medium text-blue-800">Our Journey</span>
                                </div>

                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Two Decades of
                                        <span className="block mt-1 text-blue-600">Plumbing Excellence</span>
                                    </h2>
                                    <p className="text-lg text-gray-600">
                                        From humble beginnings to becoming Test Valley's trusted plumbing service.
                                    </p>
                                </div>

                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        My father, a very practical man himself and a carpenter by trade, gave me the idea of becoming a plumber 20 years ago. After completing a comprehensive 4-year apprenticeship, which he sadly never saw me complete, I've dedicated myself to mastering the craft.
                                    </p>
                                    <p>
                                        Throughout my career in the construction industry, I've applied these skills and knowledge countless times, building a reputation for excellence. Our journey has taken us from London to the beautiful Test Valley, where we've grown into the Rosebourne Plumbing team you know today.
                                    </p>
                                </div>

                                {/* Team Member */}
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                                    <div className="flex items-center space-x-6">
                                        <div className="relative">
                                            <div className="w-20 h-20 rounded-xl overflow-hidden">
                                                <Image
                                                    src="/images/services/about/content.jpg"
                                                    alt="Will - Owner of Rosebourne Plumbing"
                                                    width={80}
                                                    height={80}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">Will</h3>
                                            <p className="text-gray-600 mb-1">Founder & Lead Plumber</p>
                                            <p className="text-sm text-blue-600">20+ Years Experience</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-6">
                                    {[
                                        { number: "20+", label: "Years Experience" },
                                        { number: "5000+", label: "Projects Completed" },
                                        { number: "98%", label: "Customer Satisfaction" }
                                    ].map((stat, index) => (
                                        <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 text-center">
                                            <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                                            <div className="text-sm text-gray-600">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="relative lg:h-[800px]">
                                <div className="sticky top-8">
                                    <div className="relative h-[600px] rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/services/about/content.jpg"
                                            alt="Professional Plumbing Service"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                                    </div>

                                    {/* Experience Badge */}
                                    <div className="absolute -bottom-6 left-8">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                            <div className="flex items-center justify-between gap-6">
                                                <div>
                                                    <p className="text-sm font-medium text-blue-600 mb-1">Trusted Experience</p>
                                                    <h4 className="text-2xl font-bold text-gray-900">Since 2004</h4>
                                                </div>
                                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto mb-20">
                        <div className="relative">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 mb-6">
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"></span>
                                    </span>
                                    <span className="text-sm font-medium text-blue-800">Core Values</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    The Principles That
                                    <div className="mt-2">
                                        <span className="relative inline-block px-4">
                                            <span className="relative z-10 text-white">Guide Us</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 -rotate-1"></div>
                                        </span>
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Quality & Professionalism",
                                    description: "We take pride in delivering exceptional workmanship with meticulous attention to detail. Our team continuously learns and evolves, ensuring we provide the highest quality service that represents true value for money. While we may not be the cheapest, we guarantee service that exceeds expectations.",
                                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                },
                                {
                                    title: "Trust & Integrity",
                                    description: "Our word is our bond. We deliver on our promises and maintain complete transparency throughout every project. When challenges arise, we proactively communicate and provide viable solutions. Every customer receives our seal of quality workmanship, backed by our unwavering commitment to excellence.",
                                    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                },
                                {
                                    title: "Certified Expertise",
                                    description: "Our team consists of highly skilled, Gas Safe certified engineers who bring years of experience to every job. We invest in continuous training and stay updated with the latest industry standards. This expertise allows us to provide both preventative solutions and expert repairs, ensuring lasting results.",
                                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                },
                                {
                                    title: "Customer Dedication",
                                    description: "Your satisfaction is our top priority. We maintain clear, proactive communication and remain on-site until you're completely satisfied with our work. Our responsive approach and commitment to preventative solutions help minimize disruptions and provide long-term peace of mind.",
                                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                }
                            ].map((value, index) => (
                                <div key={index} className="group relative bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                    {/* Gradient Border Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                                    {/* Icon Container */}
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>

                                    {/* Decorative Element */}
                                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Image */}
                            <div className="relative">
                                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/services/about/content.jpg"
                                        alt="Professional Plumbing Service"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                                </div>

                                {/* Mission Badge */}
                                <div className="absolute top-8 right-8">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                        <div className="flex items-center justify-between gap-6">
                                            <div>
                                                <p className="text-sm font-medium text-blue-600 mb-1">Our Commitment</p>
                                                <h4 className="text-2xl font-bold text-gray-900">100% Satisfaction</h4>
                                            </div>
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50">
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"></span>
                                    </span>
                                    <span className="text-sm font-medium text-blue-800">Our Mission</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Committed to Excellence
                                </h2>

                                <div className="prose prose-lg text-gray-600">
                                    <p>
                                        We strive to be the most trusted plumbing service provider in Test Valley, delivering exceptional service through our comprehensive service plans and consistent communication.
                                    </p>
                                    <p>
                                        Our mission is to provide hassle-free, high-value plumbing services that give our customers peace of mind. We achieve this through:
                                    </p>
                                </div>

                                {/* Mission Points */}
                                <div className="space-y-4">
                                    {[
                                        "Priority coverage status for all customers",
                                        "Comprehensive service plans",
                                        "Transparent pricing and communication",
                                        "Preventative maintenance solutions",
                                        "Emergency response capability"
                                    ].map((point, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Can Expect Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto mb-20">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 mb-6">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"></span>
                                </span>
                                <span className="text-sm font-medium text-blue-800">Our Promise</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                What You Can
                                <div className="mt-2">
                                    <span className="relative inline-block px-4">
                                        <span className="relative z-10 text-white">Expect</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 -rotate-1"></div>
                                    </span>
                                </div>
                            </h2>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {[
                                { title: "5 Stars Rated Service", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
                                { title: "24hr Enquiry Response", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                                { title: "Same Day Quotes", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
                                { title: "SMS Visit Notifications", icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" },
                                { title: "Dedicated Help Desk", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
                                { title: "Customer Satisfaction", icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" }
                            ].map((item, index) => (
                                <div key={index} className="group text-center">
                                    <div className="inline-flex mb-4 w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    }} />
                </div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div>
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    <span className="text-sm font-medium text-blue-100">Available for Emergencies</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Need a Professional
                                    <div className="mt-2">
                                        <span className="relative inline-block px-4">
                                            <span className="relative z-10">Plumber Today?</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 -rotate-1 rounded"></div>
                                        </span>
                                    </div>
                                </h2>

                                <p className="text-xl text-gray-300 mb-8">
                                    Whether it's an emergency repair or a planned renovation, our expert team is here to help. Get in touch for a free quote.
                                </p>

                                {/* Trust Badges */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {[
                                        { text: "Emergency Service", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                                        { text: "Fully insured with comprehensive liability coverage", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                        { text: "Transparent pricing with no hidden fees", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                        { text: "Satisfaction guarantee on all work", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                                    ].map((badge, index) => (
                                        <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={badge.icon} />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="text-sm text-gray-300 font-medium">{badge.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Content - Contact Card */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                                <div className="space-y-6">
                                    <div className="flex flex-col space-y-4">
                                        {/* Phone Contact */}
                                        <div className="group">
                                            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">Call Us Now</h3>
                                                    <p className="text-blue-300">01264 502027</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Email Contact - REMOVED */}
                                        <div className="group">
                                            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">Online Booking</h3>
                                                    <p className="text-blue-300">Use our website booking form</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Book Now Button */}
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                                    >
                                        Book an Appointment
                                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 