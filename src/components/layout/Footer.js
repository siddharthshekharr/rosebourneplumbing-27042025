import Link from 'next/link'
import NextImage from '@/components/ui/NextImage'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <div className="relative h-12 w-36">
                                <NextImage
                                    src="logo-white"
                                    alt="Rosebourne Plumbing Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Professional plumbing services with over 15 years of experience in Andover, Marlborough, Hungerford and surrounding areas.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                </svg>
                            </a>
                            <a 
                                href="https://google.com/maps?cid=yourid" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                aria-label="Google Business"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative">
                            <span className="relative z-10">Quick Links</span>
                            <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-500 to-blue-700"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/reviews" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Customer Reviews
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/emergency" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Emergency Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative">
                            <span className="relative z-10">Our Services</span>
                            <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-500 to-blue-700"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services/emergency" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Emergency Plumbing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/bathroom-refurbishment" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Bathroom Refurbishment
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/shower-installation" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Shower Installation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/water-heater" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Water Heater Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/leak-detection" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Leak Detection
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    View All Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Service Area */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative">
                            <span className="relative z-10">Contact Us</span>
                            <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-blue-500 to-blue-700"></span>
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start space-x-3">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <div>
                                    <a href="tel:01264502027" className="text-white hover:text-blue-500 font-medium transition-colors">01264 502027</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="text-white font-medium">Operating Hours</span>
                                    <p className="text-gray-400 text-sm mt-1">Mon-Fri: 8am-6pm</p>
                                    <p className="text-gray-400 text-sm">Weekend: Emergency Only</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="text-white font-medium">Service Areas</span>
                                    <p className="text-gray-400 text-sm mt-1">Andover • Marlborough • Hungerford</p>
                                    <Link href="/about/service-area" className="text-blue-500 text-sm hover:text-blue-400 inline-flex items-center mt-1">
                                        Coverage Map
                                        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </li>
                            <li className="mt-6">
                                <Link 
                                    href="https://book.servicem8.com/request_booking?uuid=f77edceb-bd17-4859-8ac5-1cd5183969cb" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full justify-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Book a Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} Rosebourne Plumbing. All rights reserved.
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Professional plumbing solutions in Hampshire and surrounding areas
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                                Terms & Conditions
                            </Link>
                            <Link href="/sitemap.xml" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}