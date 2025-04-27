'use client';

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Metadata moved to separate file
// export const metadata = {
//   title: 'Collaborate with Us | Rosebourne Plumbing',
//   description: 'Partner with Rosebourne Plumbing for property maintenance, real estate, and construction projects in Hampshire.',
// }

// Create custom icons for partnership types
const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z M9.5 19.5h-3a2 2 0 01-2-2v-3a2 2 0 012-2h3v7zM14.5 19.5h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3v7z" />
  </svg>
)

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
)

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const PartnershipCard = ({ title, description, icon }) => (
  <Card className="border border-gray-100 shadow-sm h-full">
    <CardHeader className="pb-2">
      <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl font-medium text-blue-900">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600">{description}</CardDescription>
    </CardContent>
  </Card>
)

const BenefitItem = ({ title, description }) => (
  <div className="flex items-start gap-3">
    <div className="rounded-full bg-green-50 p-1 w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
)

const TestimonialCard = ({ quote, author, company }) => (
  <div className="bg-blue-50 p-6 rounded-xl">
    <p className="italic text-gray-700 mb-4">{quote}</p>
    <div>
      <div className="font-medium text-gray-900">{author}</div>
      <div className="text-sm text-blue-600">{company}</div>
    </div>
  </div>
)

export default function CollaboratePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">Collaborate With Us</h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Join our network of trusted partners and grow your business alongside Hampshire's leading plumbing service provider.
            </p>
            <Link href="#partnership-opportunities" className={buttonVariants({ size: "lg" })}>
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Partner With Rosebourne Plumbing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Rosebourne Plumbing, we believe in the power of collaboration. Here's why businesses choose to partner with us:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BenefitItem 
              title="Established Reputation"
              description="Align with a trusted name in Hampshire's plumbing industry with over 15 years of excellence."
            />
            <BenefitItem 
              title="Expanded Customer Base"
              description="Gain access to our extensive network of residential and commercial clients across Hampshire."
            />
            <BenefitItem 
              title="Complementary Expertise"
              description="Combine your specialized skills with our comprehensive plumbing services for complete customer solutions."
            />
            <BenefitItem 
              title="Consistent Work Flow"
              description="Benefit from our steady stream of projects throughout the year, reducing seasonal fluctuations."
            />
            <BenefitItem 
              title="Marketing Support"
              description="Leverage our marketing channels and customer communications to increase your visibility."
            />
            <BenefitItem 
              title="Professional Development"
              description="Access joint training opportunities and industry insights through our established network."
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Partnership Opportunities */}
      <section id="partnership-opportunities" className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Partnership Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer multiple ways to collaborate, tailored to different business needs and goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PartnershipCard 
              title="Contractor Network"
              description="Join our trusted network of specialized contractors for project referrals and collaborative work opportunities."
              icon={<HandshakeIcon />}
            />
            <PartnershipCard 
              title="Property Developers"
              description="Partner with us for comprehensive plumbing solutions for new builds, renovations, and property developments."
              icon={<BuildingIcon />}
            />
            <PartnershipCard 
              title="Product Suppliers"
              description="Become a preferred supplier of quality plumbing products, fixtures, and materials for our installation projects."
              icon={<AwardIcon />}
            />
            <PartnershipCard 
              title="Trade Associations"
              description="Collaborate on industry initiatives, training programs, and certification courses for the plumbing trade."
              icon={<UsersIcon />}
            />
            <PartnershipCard 
              title="Technology Providers"
              description="Integrate your innovative plumbing technologies and smart home solutions with our service offerings."
              icon={<RocketIcon />}
            />
            <PartnershipCard 
              title="Marketing Alliances"
              description="Create co-marketing opportunities to promote complementary services to our shared customer base."
              icon={<BarChartIcon />}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Partnership Success Stories</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard 
              quote="Our partnership with Rosebourne has increased our project pipeline by 35%. Their professional approach and quality standards align perfectly with our business values."
              author="David Mitchell"
              company="Hampshire Building Developers"
            />
            <TestimonialCard 
              quote="As a specialized heating engineer, partnering with Rosebourne has given me access to a steady stream of quality projects and expanded my business reach considerably."
              author="Sarah Thompson"
              company="Elite Heating Solutions"
            />
            <TestimonialCard 
              quote="The co-marketing initiatives we've run with Rosebourne have been highly effective, helping both our businesses reach new customers in the Hampshire area."
              author="Michael Anderson"
              company="Hampshire Home Security Systems"
            />
          </div>
        </div>
      </section>

      {/* Our Partnership Process */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Partnership Process</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold">1</div>
                  <h3 className="text-lg font-medium text-gray-900">Initial Consultation</h3>
                </div>
                <p className="text-gray-600">
                  We begin with an in-depth discussion to understand your business, services, and partnership goals to identify collaboration opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold">2</div>
                  <h3 className="text-lg font-medium text-gray-900">Proposal Development</h3>
                </div>
                <p className="text-gray-600">
                  Based on our consultation, we'll create a tailored partnership proposal that outlines opportunities, expectations, and mutual benefits.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold">3</div>
                  <h3 className="text-lg font-medium text-gray-900">Agreement & Onboarding</h3>
                </div>
                <p className="text-gray-600">
                  Once terms are agreed upon, we'll formalize our partnership and begin the onboarding process, including introductions to key team members.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold">4</div>
                  <h3 className="text-lg font-medium text-gray-900">Active Collaboration</h3>
                </div>
                <p className="text-gray-600">
                  Implement our partnership strategy with regular check-ins, open communication channels, and collaborative projects to ensure mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">What types of businesses do you partner with?</h3>
              <p className="text-gray-600">We collaborate with a wide range of businesses, including contractors, property developers, product suppliers, and complementary service providers in the home improvement sector.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">Are there any costs involved in partnering?</h3>
              <p className="text-gray-600">Most partnerships don't involve upfront costs. Our partnership models typically focus on mutual referrals, project collaboration, or commission-based arrangements.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">What geographical areas do you cover?</h3>
              <p className="text-gray-600">We primarily operate in Hampshire, including Andover, Hungerford, and Marlborough, but we're open to partnerships throughout the South of England.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">What qualifications do you require from partners?</h3>
              <p className="text-gray-600">We require all partners to have appropriate industry qualifications, insurance, and a proven track record of quality work and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white">Ready to Explore a Partnership?</h2>
            <p className="mx-auto max-w-[600px] text-blue-100 md:text-lg">
              Let's discuss how we can collaborate to achieve mutual growth and success. Contact our partnership team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link href="/contact?subject=Partnership" className={buttonVariants({ variant: "secondary" })}>
                Contact Us
              </Link>
              <Link href="#partnership-opportunities" className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 py-2 px-4 rounded-md transition-colors">
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 