import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
    {
        id: 1,
        slug: 'common-plumbing-issues',
        title: "Common Plumbing Issues and How to Fix Them",
        excerpt: "Learn about the most common household plumbing problems and get expert tips on how to resolve them quickly.",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2574",
        category: "DIY Tips",
        date: "March 15, 2024",
        readTime: "5 min read"
    },
    {
        id: 2,
        slug: 'energy-efficient-heating',
        title: "Energy-Efficient Heating Solutions for Your Home",
        excerpt: "Discover the latest energy-efficient heating solutions that can help reduce your energy bills and carbon footprint.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2569",
        category: "Energy Saving",
        date: "March 10, 2024",
        readTime: "4 min read"
    },
    {
        id: 3,
        title: "Signs You Need to Replace Your Boiler",
        excerpt: "Understanding when it's time to replace your boiler can save you money and prevent unexpected breakdowns.",
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2569",
        category: "Maintenance",
        date: "March 5, 2024",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "Water Conservation Tips for Your Home",
        excerpt: "Simple but effective ways to reduce water consumption and save money on your water bills.",
        image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2573",
        category: "Sustainability",
        date: "March 1, 2024",
        readTime: "4 min read"
    },
    {
        id: 5,
        title: "Bathroom Renovation Guide",
        excerpt: "Everything you need to know about planning and executing a successful bathroom renovation project.",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574",
        category: "Renovations",
        date: "February 25, 2024",
        readTime: "7 min read"
    },
    {
        id: 6,
        title: "Emergency Plumbing: What to Do Until Help Arrives",
        excerpt: "Essential steps to take during a plumbing emergency to minimize damage before professional help arrives.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2570",
        category: "Emergency",
        date: "February 20, 2024",
        readTime: "5 min read"
    }
]

export default function BlogPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image src="services/blog/hero.jpg"
                        alt="Blog"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Plumbing & Heating
                            <div className="mt-2">
                                <span className="relative inline-block px-4">
                                    <span className="relative z-10">Insights</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 -rotate-1 rounded"></div>
                                </span>
                            </div>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Expert tips, guides, and insights about plumbing, heating, and home maintenance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="relative h-48">
                                        <Image src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                                                {post.category}
                                            </span>
                                            <span className="text-gray-500 text-sm">
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500 text-sm">
                                                {post.date}
                                            </span>
                                            <span className="text-blue-600 font-medium">
                                                Read more →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
} 