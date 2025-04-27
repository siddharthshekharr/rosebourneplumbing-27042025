import Image from 'next/image'
import Link from 'next/link'

export default function TermsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image src="services/terms/hero.jpg"
                        alt="Terms and Conditions"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Terms & Conditions
                        </h1>
                        <p className="text-xl text-gray-300">
                            Please read these terms and conditions carefully before using our services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                                <p className="text-gray-600">
                                    By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
                                <p className="text-gray-600">
                                    We provide plumbing and heating services including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                                    <li>Emergency plumbing repairs</li>
                                    <li>Heating system installation and maintenance</li>
                                    <li>Bathroom installations</li>
                                    <li>General plumbing maintenance</li>
                                    <li>Boiler services and repairs</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking and Cancellation</h2>
                                <p className="text-gray-600 mb-4">
                                    When booking our services:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                    <li>Appointments must be cancelled at least 24 hours in advance</li>
                                    <li>Late cancellations may incur a fee</li>
                                    <li>Standard service hours are Monday to Friday, 8:00 AM to 6:00 PM</li>
                                    <li>Emergency services are available outside standard hours</li>
                                    <li>Appointments are scheduled in 2-hour windows</li>
                                    <li>We reserve the right to reschedule appointments if necessary</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>
                                <p className="text-gray-600 mb-4">
                                    Our pricing and payment terms include:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                    <li>All prices are subject to VAT</li>
                                    <li>Payment is required upon completion of work</li>
                                    <li>We accept major credit cards and bank transfers</li>
                                    <li>Additional charges may apply for emergency callouts</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranties and Guarantees</h2>
                                <p className="text-gray-600">
                                    All our work comes with a standard warranty period. Parts and labor are guaranteed for 12 months unless otherwise specified. This warranty does not cover damage caused by misuse, normal wear and tear, or third-party modifications.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability</h2>
                                <p className="text-gray-600">
                                    While we strive to provide the best service possible, we are not liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid for the specific service provided.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Responsibilities</h2>
                                <p className="text-gray-600 mb-4">
                                    Customers are responsible for:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                    <li>Providing accurate information about the service required</li>
                                    <li>Ensuring access to the property at agreed times</li>
                                    <li>Maintaining a safe working environment</li>
                                    <li>Promptly reporting any issues with completed work</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                                <p className="text-gray-600">
                                    All content on our website, including text, graphics, logos, and images, is our property and protected by copyright laws. You may not use, reproduce, or distribute any content without our written permission.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                                <p className="text-gray-600">
                                    These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                                <p className="mt-4 text-gray-700">
                                    For any questions about these Terms and Conditions, please contact us:
                                </p>
                                <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                                    <div className="space-y-2">
                                        <p className="text-gray-600">Phone: 01264 502027</p>
                                        <p className="text-gray-600">Or use our <Link href="/contact" className="text-blue-600 hover:underline">booking form</Link> to request a service</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                                <p className="text-gray-600">
                                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of these changes.
                                </p>
                                <p className="text-gray-500 mt-4 text-sm">
                                    Last Updated: {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 