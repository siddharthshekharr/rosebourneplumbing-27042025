'use client';

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CheckCircle } from 'lucide-react'

const MembershipFeature = ({ children }) => (
  <div className="flex items-start gap-2">
    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
    <span className="text-gray-700">{children}</span>
  </div>
)

const PricingCard = ({ title, price, period, features, popular, ctaText }) => (
  <div className={`rounded-xl border bg-white shadow-sm ${popular ? 'border-blue-600 ring-2 ring-blue-600' : 'border-gray-200'}`}>
    {popular && (
      <div className="rounded-t-xl bg-blue-600 p-2">
        <p className="text-center text-sm font-medium text-white">Most Popular</p>
      </div>
    )}
    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-3xl font-bold text-gray-900">£{price}</span>
        <span className="ml-1 text-sm text-gray-500">/{period}</span>
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact?plan=membership"
        className={buttonVariants({
          className: 'mt-8 w-full',
          variant: popular ? 'default' : 'outline'
        })}
      >
        {ctaText}
      </Link>
    </div>
  </div>
)

export default function MembershipPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">Plumbing Membership Plans</h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Join our membership program for priority service, exclusive discounts, and peace of mind for all your plumbing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Membership?</h2>
              <div className="space-y-4">
                <MembershipFeature>Priority scheduling for service calls</MembershipFeature>
                <MembershipFeature>Discounted hourly rates on all services</MembershipFeature>
                <MembershipFeature>No emergency call-out fees</MembershipFeature>
                <MembershipFeature>Annual plumbing inspection</MembershipFeature>
                <MembershipFeature>Exclusive member-only offers and promotions</MembershipFeature>
                <MembershipFeature>Extended warranty on repairs</MembershipFeature>
                <MembershipFeature>Dedicated customer support line</MembershipFeature>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Membership Highlights</h3>
              <p className="text-gray-700 mb-6">
                Our members save an average of £320 per year on plumbing services. Plus, enjoy the peace of mind knowing that your plumbing system is regularly maintained by professionals.
              </p>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Regular Service Call</span>
                  <span className="text-sm font-medium text-gray-900">£95</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Member Service Call</span>
                  <span className="text-sm font-medium text-blue-600">£65</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Regular Emergency Fee</span>
                  <span className="text-sm font-medium text-gray-900">£145</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Member Emergency Fee</span>
                  <span className="text-sm font-medium text-blue-600">£0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing Plans */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Membership Plan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the plan that suits your needs and budget. All plans include our core membership benefits.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PricingCard 
              title="Basic Plan"
              price="99"
              period="year"
              features={[
                "Annual plumbing inspection",
                "10% discount on services",
                "No emergency call-out fees",
                "48-hour response guarantee",
                "Access to member portal"
              ]}
              popular={false}
              ctaText="Get Basic Plan"
            />

            <PricingCard 
              title="Premium Plan"
              price="179"
              period="year"
              features={[
                "Bi-annual plumbing inspection",
                "20% discount on services",
                "No emergency call-out fees",
                "24-hour response guarantee",
                "Extended 2-year warranty on repairs",
                "Water efficiency assessment"
              ]}
              popular={true}
              ctaText="Get Premium Plan"
            />

            <PricingCard 
              title="Family Plan"
              price="249"
              period="year"
              features={[
                "Quarterly plumbing check-ups",
                "25% discount on services",
                "No emergency call-out fees",
                "Same-day response guarantee",
                "Extended 3-year warranty on repairs",
                "Water efficiency assessment",
                "Free minor repairs during inspections"
              ]}
              popular={false}
              ctaText="Get Family Plan"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-800 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Choose Your Plan</h3>
              <p className="text-gray-600">Select the membership plan that best fits your household needs and budget.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-800 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sign Up & Schedule</h3>
              <p className="text-gray-600">Complete your registration and schedule your first plumbing inspection.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-800 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Enjoy Benefits</h3>
              <p className="text-gray-600">Start enjoying priority service, discounts, and peace of mind right away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">Can I cancel my membership?</h3>
              <p className="text-gray-600">Yes, you can cancel your membership at any time. Refunds are prorated based on the remaining time in your subscription.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">How do I schedule my inspection?</h3>
              <p className="text-gray-600">Once you sign up, you'll receive access to our member portal where you can schedule your inspections at your convenience.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">What's included in the plumbing inspection?</h3>
              <p className="text-gray-600">Our thorough inspection includes checking all visible plumbing fixtures, pipes, water pressure, water heater, and drainage systems.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">How quickly can I use my benefits?</h3>
              <p className="text-gray-600">Your membership benefits are active immediately after your payment is processed. You can schedule your first service right away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white">Ready to Join?</h2>
            <p className="mx-auto max-w-[600px] text-blue-100 md:text-lg">
              Sign up today and start enjoying exclusive benefits and savings on all your plumbing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link href="/contact?plan=membership" className={buttonVariants({ variant: "secondary" })}>
                Join Now
              </Link>
              <Link href="/contact" className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 py-2 px-4 rounded-md transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 