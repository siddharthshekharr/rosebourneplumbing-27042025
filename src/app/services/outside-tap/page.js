import NextImage from '@/components/ui/NextImage'
import Link from 'next/link'

export default function OutsideTapPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <NextImage src="services/outside-tap/hero.jpg"
                        alt="Outside Tap Installation"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 z-0">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    }} />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-sm font-medium text-white">Professional Installation</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Outside Tap
                            <div className="mt-2">
                                <span className="relative inline-block px-4">
                                    <span className="relative z-10">Installation</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 -rotate-1 rounded"></div>
                                </span>
                            </div>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8">
                            Expert outside tap fitting service with frost protection. Quick, professional installation with a lifetime guarantee.
                        </p>

                        {/* Contact Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Need an Outside Tap?</h3>
                                    <p className="text-gray-300">Professional installation in 1 hour</p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                                >
                                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50">
                                    <span className="text-sm font-medium text-blue-600">Quick Installation</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Professional Outside Tap Fitting
                                </h2>

                                <div className="prose prose-lg text-gray-600">
                                    <p>
                                        Get your outside tap installed by experienced professionals. We provide quick, reliable installation with frost protection and all necessary pipework included.
                                    </p>
                                </div>

                                {/* Service List */}
                                <div className="space-y-4">
                                    {[
                                        "1-Hour Installation",
                                        "Frost Protection Included",
                                        "Double Check Valve Fitted",
                                        "All Pipework Included",
                                        "Lifetime Guarantee",
                                        "Professional Finish"
                                    ].map((service, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative">
                                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                                    <NextImage src="services/outside-tap/content.jpg"
                                        alt="Outside Tap Installation"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>

                                    {/* Experience Badge */}
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-blue-600 mb-1">Quick Service</p>
                                                    <h4 className="text-2xl font-bold text-gray-900">1-Hour Installation</h4>
                                                </div>
                                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                                    <span className="text-sm font-medium text-blue-100">Expert Installation</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Ready for Your
                                    <div className="mt-2">
                                        <span className="relative inline-block px-4">
                                            <span className="relative z-10">Outside Tap?</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 -rotate-1 rounded"></div>
                                        </span>
                                    </div>
                                </h2>

                                <p className="text-xl text-gray-300 mb-8">
                                    Get your outside tap installed today by our expert team. Quick installation with frost protection and lifetime guarantee.
                                </p>

                                {/* Trust Badges */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {[
                                        { text: "1-Hour Installation", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                                        { text: "Lifetime Guarantee", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
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
                                                    <h3 className="text-lg font-semibold text-white">Call Us Today</h3>
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
                                        Get Quote
                                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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