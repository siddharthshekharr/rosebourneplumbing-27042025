'use client'

import NextImage from '@/components/ui/NextImage'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const blogPosts = {
    'common-plumbing-issues': {
        title: "Common Plumbing Issues and How to Fix Them",
        date: "March 15, 2024",
        readTime: "5 min read",
        category: "DIY Tips",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2574",
        content: `
            <h2>Understanding Common Plumbing Problems</h2>
            <p>Plumbing issues can be a major headache for homeowners. From dripping faucets to clogged drains, these problems can cause significant damage if not addressed promptly. Here's a comprehensive guide to common plumbing issues and their solutions.</p>

            <h3>1. Dripping Faucets</h3>
            <p>A dripping faucet might seem like a minor annoyance, but it can waste hundreds of gallons of water annually. The most common cause is a worn-out washer or O-ring. Here's how to fix it:</p>
            <ul>
                <li>Turn off the water supply</li>
                <li>Remove the faucet handle</li>
                <li>Replace the washer or O-ring</li>
                <li>Reassemble the faucet</li>
            </ul>

            <h3>2. Clogged Drains</h3>
            <p>Clogged drains are one of the most common plumbing problems. They can be caused by:</p>
            <ul>
                <li>Hair and soap buildup</li>
                <li>Food waste</li>
                <li>Grease accumulation</li>
                <li>Foreign objects</li>
            </ul>

            <h3>3. Running Toilets</h3>
            <p>A running toilet can waste up to 200 gallons of water per day. The most common cause is a faulty flapper or fill valve. Regular maintenance can prevent this issue.</p>

            <h3>4. Low Water Pressure</h3>
            <p>Low water pressure can be caused by:</p>
            <ul>
                <li>Leaking pipes</li>
                <li>Mineral buildup</li>
                <li>Municipal supply issues</li>
                <li>Faulty pressure regulators</li>
            </ul>

            <h3>When to Call a Professional</h3>
            <p>While some plumbing issues can be fixed with DIY solutions, others require professional attention. Contact a plumber if you experience:</p>
            <ul>
                <li>Persistent leaks</li>
                <li>Sewage backup</li>
                <li>No water supply</li>
                <li>Water heater issues</li>
            </ul>
        `
    },
    'energy-efficient-heating': {
        title: "Energy-Efficient Heating Solutions for Your Home",
        date: "March 10, 2024",
        readTime: "4 min read",
        category: "Energy Saving",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2569",
        content: `
            <h2>Modern Heating Solutions</h2>
            <p>With rising energy costs and environmental concerns, choosing the right heating system for your home is more important than ever. Here's a guide to energy-efficient heating solutions that can help reduce your bills and carbon footprint.</p>

            <h3>1. Smart Thermostats</h3>
            <p>Smart thermostats can significantly reduce your heating costs by:</p>
            <ul>
                <li>Learning your schedule and preferences</li>
                <li>Providing remote control via smartphone</li>
                <li>Optimizing heating zones</li>
                <li>Tracking energy usage</li>
            </ul>

            <h3>2. High-Efficiency Boilers</h3>
            <p>Modern condensing boilers can achieve efficiency ratings of up to 98%, significantly reducing energy consumption and costs.</p>

            <h3>3. Heat Pumps</h3>
            <p>Air source and ground source heat pumps offer:</p>
            <ul>
                <li>Lower running costs</li>
                <li>Reduced carbon emissions</li>
                <li>Heating and cooling capabilities</li>
                <li>Long operational lifespan</li>
            </ul>
        `
    }
}

export default function BlogPost() {
    const { slug } = useParams()
    const post = blogPosts[slug]

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                    <Link href="/blog" className="text-blue-600 hover:text-blue-700">
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="absolute inset-0">
                    <NextImage src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
                </div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                            <span className="text-gray-300 text-sm">
                                {post.readTime}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            {post.title}
                        </h1>
                        <p className="text-gray-300 text-lg">
                            Published on {post.date}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <article className="prose prose-lg max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </article>

                        {/* Share and Navigation */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <div className="flex space-x-4 mb-4 sm:mb-0">
                                    <span className="text-gray-600">Share:</span>
                                    <a href="#" className="text-blue-600 hover:text-blue-700">Twitter</a>
                                    <a href="#" className="text-blue-600 hover:text-blue-700">Facebook</a>
                                    <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                                </div>
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                                >
                                    ← Back to Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 