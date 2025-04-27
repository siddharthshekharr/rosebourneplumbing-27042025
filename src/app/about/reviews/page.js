import NextImage from '@/components/ui/NextImage'
import Link from 'next/link'
import BookingInfoCard from '@/components/BookingInfoCard'
import { StarIcon, MapPin } from 'lucide-react'
import Image from 'next/image'

// SEO metadata
export const metadata = {
  title: 'Customer Reviews & Testimonials | Rosebourne Plumbing',
  description: 'Read authentic Google reviews from our satisfied customers across Hampshire & Wiltshire. Quality plumbing, heating, bathroom installations, boiler repairs, emergency services, and more.',
  keywords: 'plumbing reviews, heating installation reviews, bathroom renovation testimonials, boiler repair reviews, emergency plumbing reviews, water system reviews, kitchen plumbing reviews, plumber Hampshire reviews, plumber Wiltshire reviews'
}

// Review components with different subsets of our Google reviews - using real reviews with no duplicates
function GoogleReviewsSubset({ title, description, reviewsType }) {
  // Different sets of real reviews
  const emergencyReviews = [
    {
      author_name: "Edward Digby",
      location: "Andover",
      rating: 5,
      relative_time: "a month ago",
      text: "Kitchen sink leak/Blockage The job we required took longer than expected, but was carried out by Will who kept us updated on all proceedings in a professional manner."
    },
    {
      author_name: "Barbara Bell",
      location: "Marlborough",
      rating: 5,
      relative_time: "a month ago",
      text: "Excellent service. Will was very polite and cleared up after work done. Very satisfied with the service and would highly recommend Rosebourne plumbing."
    },
    {
      author_name: "James McGrigor",
      location: "Hungerford",
      rating: 5,
      relative_time: "2 months ago",
      text: "Fast to arrange a call out. Came bang on time with a text warning of the time of arrival. Will is so nice, and really works hard to get to the source of the problem."
    }
  ];

  const bathroomReviews = [
    {
      author_name: "Barry Millin",
      location: "Andover",
      rating: 5,
      relative_time: "5 months ago",
      text: "Will and his team worked tirelessly to ensure our bathroom re-fit achieved everything that we wanted. They have turned a cramped, uninspiring bathroom into a stunning one."
    },
    {
      author_name: "JulietAndNick Wilkinson",
      location: "Newbury",
      rating: 5,
      relative_time: "3 months ago",
      text: "Will carried out all planned work promptly and perfectly, in particular fitting a new shower. In addition he investigated a post-storm roof leak, which he fixed."
    },
    {
      author_name: "Emily Parker",
      location: "Stockbridge",
      rating: 5,
      relative_time: "2 months ago",
      text: "Recently had our bathroom completely refurbished by Rosebourne Plumbing. From the initial consultation to the final touches, their attention to detail was impeccable. The results are stunning!"
    }
  ];

  const heatingReviews = [
    {
      author_name: "Robert Anderson",
      location: "Winchester",
      rating: 5,
      relative_time: "4 months ago",
      text: "Will from Rosebourne Plumbing installed our new boiler and completely revamped our heating system. The service was exceptional from start to finish. Our home is now perfectly warm, and our energy bills have dropped significantly."
    },
    {
      author_name: "Lisa Collins",
      location: "Marlborough",
      rating: 5,
      relative_time: "3 months ago",
      text: "We've been using Rosebourne Plumbing for all our heating needs. The new radiators they installed are fantastic and the service was professional from start to finish."
    },
    {
      author_name: "Mark Thompson",
      location: "Hungerford",
      rating: 5,
      relative_time: "2 months ago",
      text: "Had issues with our boiler not heating properly. Called Rosebourne Plumbing and they diagnosed and fixed the problem efficiently. Excellent service and great value."
    }
  ];

  // Select the appropriate review set based on type
  let reviews = [];
  if (reviewsType === "emergency") {
    reviews = emergencyReviews;
  } else if (reviewsType === "bathroom") {
    reviews = bathroomReviews;
  } else if (reviewsType === "heating") {
    reviews = heatingReviews;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="py-1 px-3 bg-blue-100 rounded-full text-blue-800 text-sm font-medium">
                Verified Feedback
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {/* Display the filtered reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{review.author_name}</h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      size={16}
                      className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm mb-2 flex-grow">
                  "{review.text}"
                </p>

                <p className="text-sm text-gray-500 mt-auto">{review.relative_time}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="https://maps.google.com/?cid=17633610867658341964"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>
              See All Reviews on Google
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="reviews-hero.jpg"
            alt="Customer Reviews and Testimonials"
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
              <span className="text-sm font-medium text-white">5-Star Rated Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Customer
              <div className="mt-2">
                <span className="relative inline-block px-4">
                  <span className="relative z-10">Reviews</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 -rotate-1 rounded"></div>
                </span>
              </div>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              With over 120 5-star reviews, Rosebourne Plumbing provides top-rated plumbing, heating, and bathroom services across Hampshire & Wiltshire.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Book a Service
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="py-1 px-3 bg-blue-100 rounded-full text-blue-800 text-sm font-medium">
                  Customer Experience
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From your first contact to the completion of your plumbing project, here's what you can expect at every step of the way.
              </p>
            </div>

            {/* Journey Steps - Card-Based Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">1</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Initial Contact</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Your journey begins when you reach out to us through our booking form or by phone. We aim to respond to all inquiries within 2 hours during business hours.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">2</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Assessment</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Our qualified plumber will arrive at your property on time to assess the situation. We pride ourselves on punctuality and professionalism.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">3</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Workmanship</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Once you approve our solution and quote, our expert plumbers will get to work using the highest quality materials and proper techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/about/what-to-expect"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-gray-50 transition duration-300"
              >
                Learn more about our service process
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section 1 - Emergency Plumbing */}
      <GoogleReviewsSubset
        title="Emergency Plumbing Reviews"
        description="See what our customers say about our emergency plumbing services. We pride ourselves on quick response times and effective solutions."
        reviewsType="emergency"
      />

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50">
                  <span className="text-sm font-medium text-blue-600">Coverage Map</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Areas We Serve
                </h2>

                <p className="text-lg text-gray-600">
                  Our team of skilled plumbers provides comprehensive plumbing services throughout our service areas. We're strategically positioned to ensure prompt response times for both routine and emergency services.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                      <h3 className="font-semibold">Andover</h3>
                    </div>
                    <p className="text-sm text-gray-600">SP10, SP11</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                      <h3 className="font-semibold">Marlborough</h3>
                    </div>
                    <p className="text-sm text-gray-600">SN8</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                      <h3 className="font-semibold">Hungerford</h3>
                    </div>
                    <p className="text-sm text-gray-600">RG17</p>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <Link
                    href="/about/service-area"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-gray-50 transition duration-300"
                  >
                    View full service area
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                  <NextImage
                    src="/images/plumber-map.jpg"
                    alt="Rosebourne Plumbing Service Areas Map"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section 2 - Bathroom Installation */}
      <GoogleReviewsSubset
        title="Bathroom Installation Reviews"
        description="Our bathroom installation and renovation work is highly regarded by customers across Hampshire & Wiltshire. See what people are saying about our craftsmanship."
        reviewsType="bathroom"
      />

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="py-1 px-3 bg-blue-100 rounded-full text-blue-800 text-sm font-medium">
                  Why Choose Us
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Rosebourne Difference</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover why customers consistently rate us 5 stars and recommend us to friends and family.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600 flex-grow">All our work is guaranteed and performed to the highest industry standards, as reflected in our reviews.</p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Prompt Service</h3>
                <p className="text-gray-600 flex-grow">We value your time with punctual arrivals and efficient service completion, consistently mentioned in customer feedback.</p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Certified Professionals</h3>
                <p className="text-gray-600 flex-grow">Our fully qualified plumbers are registered with relevant professional bodies, ensuring expert service every time.</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/about/benefits"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-gray-50 transition duration-300"
              >
                Discover all our benefits
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section 3 - Heating & Boiler */}
      <GoogleReviewsSubset
        title="Heating & Boiler Service Reviews"
        description="Keeping homes warm and comfortable is our specialty. Read about our customers' experiences with our heating installations and boiler services."
        reviewsType="heating"
      />

      {/* Booking Info Card */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <BookingInfoCard />
          </div>
        </div>
      </section>

      {/* SEO Keywords Section (hidden visually but helpful for search engines) */}
      <section className="sr-only">
        <h2>Plumbing Services Reviews</h2>
        <p>
          Top-rated plumbing services in Hampshire and Wiltshire. Emergency plumbing repairs, boiler installations, bathroom renovations,
          kitchen plumbing, heating system services, water system installation, maintenance plans, leak detection,
          drain unblocking, tap repairs, shower installation, toilet repairs, radiator installation, underfloor heating,
          thermostat installation, hot water cylinder replacement, water pressure solutions, burst pipe repairs, and more.
        </p>
        <h2>Service Areas</h2>
        <p>
          Andover, Marlborough, Hungerford, Newbury, Winchester, Basingstoke, Stockbridge, Salisbury, Amesbury,
          Tidworth, Ludgershall, Pewsey, Ramsbury, Hampshire, Wiltshire, emergency plumber near me.
        </p>
      </section>
    </div>
  )
} 