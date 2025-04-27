'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// Add this new component for service categories
const ServiceCategory = ({ title, services }) => (
    <div className="col-span-1">
        <div className="mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {title}
        </div>
        <ul className="space-y-2">
            {services.map((service) => (
                <li key={service.href}>
                    <NavigationMenuLink asChild>
                        <Link
                            href={service.href}
                            className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-50 transition-colors group"
                        >
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md bg-blue-50 group-hover:bg-blue-100 text-blue-600">
                                {service.icon}
                            </span>
                            <div>
                                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                    {service.title}
                                </div>
                                <p className="text-xs text-gray-500 line-clamp-1">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    </NavigationMenuLink>
                </li>
            ))}
        </ul>
    </div>
)

// Add this new component for About categories
const AboutCategory = ({ title, items }) => (
    <div className="col-span-1">
        <div className="mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {title}
        </div>
        <ul className="space-y-2">
            {items.map((item) => (
                <li key={item.href}>
                    <NavigationMenuLink asChild>
                        <Link
                            href={item.href}
                            className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-50 transition-colors group"
                        >
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md bg-blue-50 group-hover:bg-blue-100 text-blue-600">
                                {item.icon}
                            </span>
                            <div>
                                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                    {item.title}
                                </div>
                                <p className="text-xs text-gray-500 line-clamp-1">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    </NavigationMenuLink>
                </li>
            ))}
        </ul>
    </div>
)

// Add this new component for About submenu items
const AboutMenuItems = [
    {
        title: "What to Expect",
        href: "/about/what-to-expect",
        description: "Learn about our service process and standards",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Review Page",
        href: "/about/reviews",
        description: "See what our customers say about us",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        )
    },
    {
        title: "Service Area",
        href: "/about/service-area",
        description: "Check our coverage areas",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
        )
    }
]

// Update the About menu items with categories
const aboutCategories = {
    "Company": [
        {
            title: "What to Expect",
            href: "/about/what-to-expect",
            description: "Learn about our service process and standards",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "About Us",
            href: "/about/company",
            description: "Learn more about our company history and values",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        }
    ],
    "Customer Feedback": [
        {
            title: "Review Page",
            href: "/about/reviews",
            description: "See what our customers say about us",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            )
        }
    ],
    "Coverage": [
        {
            title: "Service Area",
            href: "/about/service-area",
            description: "Check our coverage areas",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
            )
        }
    ],
    "Membership": [
        {
            title: "Membership Plans",
            href: "/about/membership",
            description: "Explore our membership options and benefits",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
            )
        }
    ],
    "Benefits": [
        {
            title: "Customer Benefits",
            href: "/about/benefits",
            description: "Discover the advantages of choosing our services",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            )
        }
    ],
    "Careers": [
        {
            title: "Join Our Team",
            href: "/about/join-our-team",
            description: "Explore career opportunities with us",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        }
    ],
    "Partnerships": [
        {
            title: "Collaborate With Us",
            href: "/about/collaborate",
            description: "Partner with us for plumbing projects and initiatives",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
            )
        }
    ]
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Updated service categories
    const serviceCategories = {
        "Emergency Services": [
            {
                title: "Emergency Plumbing",
                href: "/services/emergency",
                description: "Professional emergency plumbing solutions for your home or business",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            }
        ],
        "Bathroom Services": [
            {
                title: "Bathroom Installation",
                href: "/services/bathroom",
                description: "Complete bathroom plumbing solutions",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M12 9v2m0 4h.01" />
                    </svg>
                )
            }
        ],
        "Kitchen Services": [
            {
                title: "Kitchen Plumbing",
                href: "/services/kitchen",
                description: "Professional kitchen plumbing solutions",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                )
            }
        ],
        "Water Systems": [
            {
                title: "Water Systems",
                href: "/services/water",
                description: "Professional water system solutions",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                )
            }
        ],
        "Heating Services": [
            {
                title: "Heating Systems",
                href: "/services/heating",
                description: "Professional heating system solutions",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    </svg>
                )
            }
        ],
        "Maintenance Services": [
            {
                title: "Maintenance & Repair",
                href: "/services/maintenance",
                description: "Professional maintenance and repair solutions",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                )
            }
        ]
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="relative h-12 w-48">
                            <Image
                                src="/images/logo.png"
                                alt="Rosebourne Plumbing"
                                width={150}
                                height={50}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Navigation - Desktop */}
                    <nav className="hidden md:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/"
                                            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${usePathname() === '/' ? 'text-blue-600' : 'text-gray-700'
                                                }`}
                                        >
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${usePathname().startsWith('/services') ? 'text-blue-600' : 'text-gray-700'
                                            }`}
                                    >
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-[950px] flex-col p-6 bg-white rounded-xl shadow-xl">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {/* Featured Service */}
                                                <div className="lg:col-span-3 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg mb-6">
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                                        <div className="md:col-span-2 space-y-2">
                                                            <h3 className="text-lg font-bold text-blue-800">Professional Plumbing Services in Hampshire</h3>
                                                            <p className="text-blue-700">Expert plumbing solutions in Andover, Hungerford & Marlborough</p>
                                                            <Link
                                                                href="/services"
                                                                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                                                            >
                                                                View all services
                                                                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="hidden md:block">
                                                            <div className="flex justify-end">
                                                                <div className="rounded-full bg-blue-200 p-6">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.563 9.75a12.014 12.014 0 00-3.427 5.136L9 15l-5-5 1.5-1.5L9 12l.485-.773A12.01 12.01 0 0114.5 7.204M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Service Categories */}
                                                {Object.entries(serviceCategories).map(([category, services]) => (
                                                    <ServiceCategory key={category} title={category} services={services} />
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                                        About
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-[800px] p-6">
                                            <div className="grid grid-cols-3 gap-6">
                                                {Object.entries(aboutCategories).map(([category, items]) => (
                                                    <AboutCategory
                                                        key={category}
                                                        title={category}
                                                        items={items}
                                                    />
                                                ))}
                                            </div>
                                            <div className="mt-6 pt-6 border-t border-gray-100">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h3 className="text-sm font-medium text-gray-900">
                                                            Need more information?
                                                        </h3>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            Contact us for any questions about our services
                                                        </p>
                                                    </div>
                                                    <Link
                                                        href="/contact"
                                                        className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                                    >
                                                        Contact Us
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/blog" legacyBehavior passHref>
                                        <NavigationMenuLink className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
                                            Blog
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Get Quote Button - Right */}
                    <div className="hidden md:block flex-shrink-0">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100">
                        <nav className="py-2">
                            <Link
                                href="/"
                                className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <div className="px-4 py-2.5">
                                <div className="text-sm font-medium text-gray-900 mb-2">Services</div>
                                <div className="space-y-1">
                                    {Object.entries(serviceCategories).map(([category, services]) => (
                                        <Link
                                            key={category}
                                            href={services[0].href}
                                            className="block pl-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 text-sm rounded-md"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {category}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="px-4 py-2.5">
                                <div className="text-sm font-medium text-gray-900 mb-2">About</div>
                                <div className="space-y-1">
                                    {AboutMenuItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-center gap-2 pl-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 text-sm rounded-md"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <Link
                                href="/blog"
                                className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                Blog
                            </Link>
                            <div className="px-4 py-2.5">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
} 