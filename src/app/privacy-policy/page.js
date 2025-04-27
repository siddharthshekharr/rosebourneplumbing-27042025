import NextImage from '@/components/ui/NextImage'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <NextImage src="services/privacy-policy/hero.jpg"
                        alt="Privacy Policy"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-300">
                            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                                <p className="text-gray-600">
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                                <p className="text-gray-600 mb-4">
                                    We collect information that you provide directly to us when you:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                    <li>Fill out forms on our website</li>
                                    <li>Create an account</li>
                                    <li>Make a purchase</li>
                                    <li>Sign up for our newsletter</li>
                                    <li>Contact us for support</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                                <p className="text-gray-600 mb-4">
                                    We may use the information we collect for various purposes, including:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                    <li>Providing and maintaining our services</li>
                                    <li>Responding to your requests and inquiries</li>
                                    <li>Sending you marketing communications (with your consent)</li>
                                    <li>Improving our website and services</li>
                                    <li>Complying with legal obligations</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Security</h2>
                                <p className="text-gray-600">
                                    We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                                <p className="text-gray-600">
                                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                                <p className="text-gray-600">
                                    We may employ third-party companies and individuals to facilitate our service, provide service on our behalf, perform service-related services, or assist us in analyzing how our service is used.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                                <p className="text-gray-600 mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                    <li>Access your personal information</li>
                                    <li>Correct inaccurate information</li>
                                    <li>Request deletion of your information</li>
                                    <li>Object to processing of your information</li>
                                    <li>Withdraw consent</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                                <p className="mt-4 text-gray-700">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                                    <div className="space-y-2">
                                        <p className="text-gray-600">Phone: 01264 502027</p>
                                        <p className="text-gray-600">Or use our <Link href="/contact" className="text-blue-600 hover:underline">booking form</Link> to request a service</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                                <p className="text-gray-600">
                                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
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