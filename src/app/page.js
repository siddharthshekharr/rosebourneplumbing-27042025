import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ServiceAreasMap from '@/components/ServiceAreasMap'
import BookingInfoCard from '@/components/BookingInfoCard'

const services = [
    {
        title: "Emergency Plumbing",
        description: "Emergency plumbing services for when you need us most. Fast response times and reliable solutions.",
        features: ["Fast Response Time", "No Call-Out Charges", "Fully Equipped Vans"],
        href: "/services/emergency",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        popular: true
    },
    {
        title: "Bathroom Installation",
        description: "Complete bathroom fitting and renovation services. Transform your space with our expert installation.",
        features: ["Free Design Service", "Quality Fixtures", "Full Project Management", "Tiling Services"],
        href: "/services/bathroom",
        icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
        title: "Leak Detection",
        description: "Advanced leak detection and repair services using the latest technology.",
        features: ["Non-Invasive Detection", "Thermal Imaging", "Pressure Testing", "Pipe Tracing"],
        href: "/services/leak-detection",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    },
    {
        title: "Shower Installation",
        description: "Expert shower installation services including electric, mixer, and digital systems.",
        features: ["Power Shower Fitting", "Digital Systems", "Wetroom Installation", "Waterproofing"],
        href: "/services/shower-installation",
        icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    },
    {
        title: "Tap Repairs",
        description: "Professional tap repair and replacement services for kitchens and bathrooms.",
        features: ["Mixer Tap Repairs", "Dripping Taps", "Tap Replacement", "Water Pressure Fix"],
        href: "/services/tap-repairs",
        icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    },
    {
        title: "Toilet Installation",
        description: "Expert toilet fitting and repair services with quality workmanship guaranteed.",
        features: ["New Installation", "Repairs & Parts", "Cistern Repairs", "Dual Flush Systems"],
        href: "/services/toilet-installation",
        icon: "M19 14l-7 7m0 0l-7-7m7 7V3"
    }
];

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center py-32 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero.jpg"
                        alt="Professional Plumbing Services"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                    />
                    {/* Adjusted gradient overlay with better opacity - matching the site style */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
                </div>

                {/* Background Pattern - Reduced opacity */}
                <div className="absolute inset-0 opacity-5 z-0">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    }} />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl">
                        {/* Main Content */}
                        <div className="mb-16">
                            {/* Updated badge to match site-wide style */}
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                <span className="text-sm font-medium text-white">Emergency Service</span>
                            </div>

                            {/* Added text shadow for better visibility */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-sm">
                                Expert Plumbing
                                <div className="mt-2">
                                    <span className="relative inline-block px-4">
                                        <span className="relative z-10">Solutions</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 -rotate-1 rounded"></div>
                                    </span>
                                </div>
                            </h1>

                            {/* Added semi-transparent background for better readability */}
                            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg">
                                Professional plumbing services in Andover and surrounding areas. Available for all your plumbing needs.
                            </p>

                            {/* CTA Button - Updated gradient to match site style */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                                aria-label="Book a plumbing service now"
                            >
                                Book Now
                                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Features Grid - Added more opacity to background */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                    title: "Fast Response",
                                    subtitle: "Fast Service"
                                },
                                {
                                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                    title: "Guaranteed",
                                    subtitle: "Quality Work"
                                },
                                {
                                    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
                                    title: "Fair Pricing",
                                    subtitle: "No Hidden Fees"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center space-x-4 bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                    <div className="flex-shrink-0">
                                        <div className="p-3 bg-white/10 rounded-lg">
                                            <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">{feature.title}</div>
                                        <div className="text-sm text-gray-200">{feature.subtitle}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto mb-20">
                        <div className="relative">
                            {/* Main Content */}
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 mb-6">
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"></span>
                                    </span>
                                    <span className="text-sm font-medium text-blue-800">Professional Services</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Expert Solutions for
                                    <div className="mt-2">
                                        <span className="relative inline-block px-4">
                                            <span className="relative z-10 text-white">Your Home</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 -rotate-1"></div>
                                        </span>
                                    </div>
                                </h2>

                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    From emergency repairs to complete bathroom renovations, our expert team provides comprehensive plumbing solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mb-20">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Service Card */}
                                <div className="relative z-10 bg-white border border-gray-100 rounded-xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.08)] hover:translate-y-[-5px]">
                                    {/* Icon Container */}
                                    <div className="absolute -top-8 left-8">
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-2xl shadow-lg flex items-center justify-center transform -rotate-6 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-8 h-8 text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d={service.icon}
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-gray-900">
                                                {service.title}
                                            </h3>
                                            {service.popular && (
                                                <span className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-full shadow-sm">
                                                    Popular
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-2.5 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-600">
                                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-full mr-3"></span>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Action Link */}
                                        <Link
                                            href={service.href}
                                            className="inline-flex items-center text-blue-800 text-sm font-medium hover:text-blue-900 transition-colors group/link"
                                        >
                                            Explore Service
                                            <span className="ml-2 w-4 h-[1px] bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 transition-all duration-300 group-hover/link:w-6"></span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3 h-3"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Booking Information Card - Added to highlight booking process */}
                    <div className="max-w-5xl mx-auto mb-20">
                        <BookingInfoCard />
                    </div>

                    {/* View All Services Button */}
                    <div className="text-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                            aria-label="Browse all plumbing services"
                        >
                            Browse All Services
                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto mb-20">
                        <div className="relative">
                            {/* Main Content */}
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 mb-6">
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"></span>
                                    </span>
                                    <span className="text-sm font-medium text-blue-800">Why Choose Us</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Trust Our
                                    <div className="mt-2">
                                        <span className="relative inline-block px-4">
                                            <span className="relative z-10 text-white">Experience</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 -rotate-1"></div>
                                        </span>
                                    </div>
                                </h2>

                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    With over 15 years of experience, we've built our reputation on quality workmanship and exceptional customer service.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Features */}
                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Expert Team",
                                        description: "Our fully qualified plumbers bring years of expertise to every project. With continuous training and development, we ensure the highest standards of service.",
                                        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    },
                                    {
                                        title: "Emergency Support",
                                        description: "Plumbing emergencies don't wait for business hours. That's why we're available with rapid response times and reliable solutions.",
                                        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    },
                                    {
                                        title: "Fair Pricing",
                                        description: "We believe in transparent pricing with no hidden costs. Get a clear, upfront quote and pay only for what you need. No surprises, just honest service.",
                                        icon: "M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Side - Image */}
                            <div className="relative">
                                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/professional-plumber-at-work.jpg"
                                        alt="Professional Plumber at Work"
                                        fill
                                        className="object-cover"
                                        loading="lazy"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

                                    {/* Experience Badge */}
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-blue-600 mb-1">Trusted Experience</p>
                                                    <h4 className="text-2xl font-bold text-gray-900">15+ Years of Excellence</h4>
                                                </div>
                                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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

                    {/* Testimonial Quote - Adding for credibility */}
                    <div className="max-w-4xl mx-auto mt-16 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                        <div className="p-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-6">
                                    <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xl font-medium text-gray-600 mb-4">
                                        We had a serious emergency with a burst pipe at 2am. The team arrived within 30 minutes, stopped the leak quickly, and prevented what could have been thousands in water damage. Their professionalism and quick response saved our home. Can't recommend them highly enough!
                                    </p>
                                    <div className="flex items-center">
                                        <div className="mr-4">
                                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                                JS
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">James Smith</h4>
                                            <p className="text-sm text-gray-500">Andover, Hampshire</p>
                                        </div>
                                        <div className="ml-auto flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
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
                                    <span className="text-sm font-medium text-blue-800">Our Process</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    How We
                                    <div className="mt-2">
                                        <span className="relative inline-block px-4">
                                            <span className="relative z-10 text-white">Work</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 -rotate-1"></div>
                                        </span>
                                    </div>
                                </h2>

                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    Our simple and efficient process ensures quality service from start to finish
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div className="max-w-7xl mx-auto">
                        <div className="relative">
                            {/* Connection Line - Adjusted to be vertically centered */}
                            <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-blue-700/20 via-blue-800/20 to-blue-900/20 hidden lg:block -translate-y-1/2"></div>

                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Initial Contact",
                                        description: "Get in touch via phone or our online form for immediate assistance.",
                                        icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    },
                                    {
                                        step: "02",
                                        title: "Job Scheduling",
                                        description: "Our professional call center schedules a convenient time and provides a 2-hour arrival window via ServiceM8.",
                                        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    },
                                    {
                                        step: "03",
                                        title: "Pre-Visit Communication",
                                        description: "We confirm all details and send SMS updates via ServiceM8 before the visit.",
                                        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    },
                                    {
                                        step: "04",
                                        title: "Service Delivery",
                                        description: "Our expert team completes the work to the highest standards.",
                                        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    },
                                    {
                                        step: "05",
                                        title: "Job Completion",
                                        description: "Final inspection, digital records through ServiceM8, and customer satisfaction confirmation.",
                                        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="relative group">
                                        <div className="relative bg-white rounded-xl p-8 h-full border border-gray-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.08)] z-10">
                                            {/* Step Number */}
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                                {step.step}
                                            </div>

                                            {/* Icon */}
                                            <div className="mt-8 mb-6">
                                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-6">
                                                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="text-center">
                                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-16">
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                                aria-label="Start your plumbing project"
                            >
                                Start Your Project
                                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas Section */}
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
                                    <span className="text-sm font-medium text-blue-800">Service Areas</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Areas We
                                    <div className="mt-2">
                                        <span className="relative inline-block px-4">
                                            <span className="relative z-10 text-white">Cover</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 -rotate-1"></div>
                                        </span>
                                    </div>
                                </h2>

                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    Professional plumbing services available in Andover, Marlborough, Hungerford and surrounding areas
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Map Container */}
                            <div className="lg:col-span-2 relative">
                                <ServiceAreasMap />
                            </div>

                            {/* Areas List */}
                            <div className="space-y-6">
                                {[
                                    {
                                        city: "Andover",
                                        postcodes: "SP10, SP11",
                                        areas: ["Upper Clatford", "Tidworth", "Ludgershall", "Shipton Bellinger"]
                                    },
                                    {
                                        city: "Marlborough",
                                        postcodes: "SN8",
                                        areas: ["Great Bedwyn", "Ramsbury", "Aldbourne", "Burbage"]
                                    },
                                    {
                                        city: "Hungerford",
                                        postcodes: "RG17",
                                        areas: ["Lambourn", "Great Shefford", "Chilton Foliat", "Inkpen"]
                                    }
                                ].map((area, index) => (
                                    <div key={index} className="group bg-white rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{area.city}</h3>
                                                <p className="text-sm text-blue-600 mt-1">{area.postcodes}</p>
                                            </div>
                                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {area.areas.map((item, i) => (
                                                <div key={i} className="flex items-center text-sm text-gray-600">
                                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Check Coverage Button */}
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                                    aria-label="Check if we service your area"
                                >
                                    Check Your Area Coverage
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Before & After Section */}
            <section className="py-24 bg-white">
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
                                    <span className="text-sm font-medium text-blue-800">Transformations</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Before &
                                    <div className="mt-2">
                                        <span className="relative inline-block px-4">
                                            <span className="relative z-10 text-white">After</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 -rotate-1"></div>
                                        </span>
                                    </div>
                                </h2>

                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    Browse through our recent transformations and see the quality of our work
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {[
                                {
                                    title: "Modern Bathroom Renovation",
                                    location: "Andover, Hampshire",
                                    description: "Complete bathroom transformation including new suite, tiling, and underfloor heating",
                                    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
                                    afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069",
                                    duration: "1 Week",
                                    category: "Bathroom Installation"
                                },
                                {
                                    title: "Kitchen Plumbing Upgrade",
                                    location: "Marlborough, Wiltshire",
                                    description: "Full kitchen plumbing system replacement with modern fixtures",
                                    beforeImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070",
                                    afterImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068",
                                    duration: "3 Days",
                                    category: "Kitchen Plumbing"
                                }
                            ].map((project, index) => (
                                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {/* Before Image */}
                                        <div className="relative h-64 rounded-xl overflow-hidden">
                                            <Image
                                                src={project.beforeImage}
                                                alt="Before"
                                                fill
                                                className="object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                                                Before
                                            </div>
                                        </div>
                                        {/* After Image */}
                                        <div className="relative h-64 rounded-xl overflow-hidden">
                                            <Image
                                                src={project.afterImage}
                                                alt="After"
                                                fill
                                                className="object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 rounded-full text-sm font-medium text-white">
                                                After
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                            <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                                                {project.duration}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            </svg>
                                            {project.location}
                                        </div>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <div className="flex items-center text-sm font-medium text-blue-600">
                                            <span>{project.category}</span>
                                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Projects Button */}
                        <div className="text-center mt-12">
                            <Link
                                href="/projects"
                                className="inline-flex items-center bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                                aria-label="View all plumbing projects"
                            >
                                <span>View All Projects</span>
                                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
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
                                    <span className="text-sm font-medium text-blue-800">Latest Updates</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Plumbing
                                    <div className="mt-2">
                                        <span className="relative inline-block px-4">
                                            <span className="relative z-10 text-white">Insights</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 -rotate-1"></div>
                                        </span>
                                    </div>
                                </h2>

                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    Expert advice, tips, and guides for maintaining your plumbing systems
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Common Signs of a Hidden Water Leak",
                                    excerpt: "Learn how to identify the early warning signs of hidden water leaks before they cause serious damage.",
                                    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
                                    category: "Maintenance",
                                    readTime: "5 min read",
                                    date: "Mar 15, 2024"
                                },
                                {
                                    title: "How to Prevent Frozen Pipes in Winter",
                                    excerpt: "Essential tips and preventive measures to protect your plumbing system during cold weather.",
                                    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2069",
                                    category: "Tips & Tricks",
                                    readTime: "4 min read",
                                    date: "Mar 10, 2024"
                                },
                                {
                                    title: "Choosing the Right Water Heater",
                                    excerpt: "A comprehensive guide to selecting the perfect water heater for your home's needs.",
                                    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2069",
                                    category: "Buying Guide",
                                    readTime: "6 min read",
                                    date: "Mar 5, 2024"
                                }
                            ].map((post, index) => (
                                <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600/90 backdrop-blur-sm rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <span>{post.date}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                        >
                                            Read More
                                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Posts Button */}
                        <div className="text-center mt-12">
                            <Link
                                href="/blog"
                                className="inline-flex items-center bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                                aria-label="View all plumbing blog posts"
                            >
                                <span>View All Posts</span>
                                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 mb-6">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"></span>
                                </span>
                                <span className="text-sm font-medium text-blue-800">Common Questions</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Get quick answers to the most common plumbing questions
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    question: "How quickly can you respond to a plumbing emergency?",
                                    answer: "We aim to respond to all emergency calls within 1 hour. Our emergency plumbers are strategically located throughout the service area to ensure the fastest possible response times."
                                },
                                {
                                    question: "Do you charge for call-outs or estimates?",
                                    answer: "We don't charge for estimates on planned work. For emergency call-outs, our standard call-out fee applies, which will be clearly explained before we attend."
                                },
                                {
                                    question: "What areas do you cover?",
                                    answer: "We service Andover, Marlborough, Hungerford and surrounding areas. If you're unsure if we cover your location, please contact us and we'll be happy to confirm."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <Link
                                href="/faqs"
                                className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                                aria-label="View all frequently asked questions"
                            >
                                View all FAQs
                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
