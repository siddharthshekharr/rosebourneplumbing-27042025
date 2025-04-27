'use client';

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { 
  CheckCircle, 
  Clock, 
  User, 
  Award, 
  Users, 
  Compass, 
  BadgePercent, 
  BriefcaseBusiness, 
  ChevronRight,
  MapPin
} from 'lucide-react'

// Import icons individually
import { Building2 } from 'lucide-react'
import { GraduationCap } from 'lucide-react'
import { Banknote } from 'lucide-react'

// Metadata moved to separate file
// export const metadata = {
//   title: 'Join Our Team | Rosebourne Plumbing',
//   description: 'Explore exciting career opportunities at Rosebourne Plumbing. We value skilled professionals and offer competitive packages with training and growth possibilities.',
// }

const JobCard = ({ title, location, type, category, description, requirements, posted, closing }) => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="text-xl font-bold text-blue-900">{title}</CardTitle>
          <CardDescription className="mt-1 flex flex-wrap items-center gap-2 text-gray-600">
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {location}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {type}</span>
          </CardDescription>
        </div>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          {category}
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-1">Job Description</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-1">Requirements</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between border-t pt-4">
      <div className="text-sm text-gray-500">
        <span>Posted: {posted}</span>
        <span className="mx-2">•</span>
        <span>Closing: {closing}</span>
      </div>
      <Link href="/about/join-our-team/apply" className={buttonVariants({ size: "sm" })}>
        Apply Now
      </Link>
    </CardFooter>
  </Card>
)

const BenefitItem = ({ icon, title, description }) => (
  <div className="flex gap-4">
    <div className="rounded-full bg-blue-100 p-3 h-12 w-12 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
)

const ValueItem = ({ title, description }) => (
  <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
    <h3 className="text-lg font-medium text-blue-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const TestimonialCard = ({ quote, name, role, years }) => (
  <div className="bg-blue-50 p-6 rounded-xl">
    <p className="italic text-gray-700 mb-4">{quote}</p>
    <div>
      <div className="font-medium text-gray-900">{name}</div>
      <div className="text-sm text-blue-600">{role}, {years} years</div>
    </div>
  </div>
)

export default function CareersPage() {
  const openPositions = [
    {
      title: "Qualified Plumber",
      location: "Andover, Hampshire",
      type: "Full-time",
      category: "Experienced",
      description: "We're looking for a qualified plumber to join our team. You'll be working on a variety of residential and commercial plumbing projects, from installations to repairs and maintenance.",
      requirements: [
        "NVQ Level 2/3 in Plumbing or equivalent qualification",
        "Minimum 3 years of experience in residential plumbing",
        "Valid UK driving license",
        "Excellent customer service skills",
        "Problem-solving ability and attention to detail"
      ],
      posted: "15 May 2023",
      closing: "15 June 2023"
    },
    {
      title: "Plumbing Apprentice",
      location: "Hampshire",
      type: "Full-time",
      category: "Entry Level",
      description: "Join our apprenticeship program and learn from experienced plumbers while earning. This is a great opportunity to start a rewarding career in the plumbing industry with a reputable company.",
      requirements: [
        "GCSEs in Maths and English (grade C/4 or above)",
        "Enthusiasm and willingness to learn",
        "Good practical skills",
        "Reliable and punctual",
        "Basic understanding of plumbing principles"
      ],
      posted: "10 May 2023",
      closing: "10 June 2023"
    },
    {
      title: "Heating Engineer",
      location: "Hungerford & Marlborough",
      type: "Full-time",
      category: "Specialized",
      description: "We're seeking a qualified heating engineer to join our growing team. You'll be responsible for installing, servicing, and repairing heating systems in residential and commercial properties.",
      requirements: [
        "Gas Safe registered",
        "ACS qualifications",
        "Experience with various heating systems",
        "Strong troubleshooting skills",
        "Excellent customer service approach"
      ],
      posted: "5 May 2023",
      closing: "5 June 2023"
    }
  ]

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">Join Our Team</h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Build your career with Hampshire's premier plumbing service provider. We're always looking for talented individuals to join our team.
            </p>
            <Link href="#open-positions" className={buttonVariants({ size: "lg" })}>
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Work With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Rosebourne Plumbing, we pride ourselves on being a great place to work. Here's what we offer our team members:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BenefitItem 
              icon={<GraduationCap className="h-6 w-6 text-blue-600" />}
              title="Continuous Training & Development"
              description="We invest in our team's growth with regular training opportunities and clear career progression paths."
            />
            <BenefitItem 
              icon={<BriefcaseBusiness className="h-6 w-6 text-blue-600" />}
              title="Diverse Work Experience"
              description="Work on a variety of projects across residential and commercial sectors, expanding your skillset."
            />
            <BenefitItem 
              icon={<Building2 className="h-6 w-6 text-blue-600" />}
              title="Stable Work Environment"
              description="Join a well-established company with a solid reputation and consistent workload throughout the year."
            />
            <BenefitItem 
              icon={<Banknote className="h-6 w-6 text-blue-600" />}
              title="Competitive Compensation"
              description="Enjoy competitive pay, performance bonuses, and a comprehensive benefits package."
            />
            <BenefitItem 
              icon={<Clock className="h-6 w-6 text-blue-600" />}
              title="Work-Life Balance"
              description="We respect your time off with reasonable hours and generous holiday allowance."
            />
            <BenefitItem 
              icon={<Users className="h-6 w-6 text-blue-600" />}
              title="Supportive Team Culture"
              description="Be part of a collaborative, respectful team that values your contribution and wellbeing."
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our work and define our company culture:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ValueItem 
              title="Excellence"
              description="We strive for excellence in everything we do, from the quality of our workmanship to our customer service."
            />
            <ValueItem 
              title="Integrity"
              description="We operate with honesty and transparency in all our dealings with customers, suppliers, and team members."
            />
            <ValueItem 
              title="Reliability"
              description="We're dependable and consistent, delivering on our promises to both customers and colleagues."
            />
            <ValueItem 
              title="Innovation"
              description="We embrace new techniques and technologies to provide the best solutions for our customers."
            />
            <ValueItem 
              title="Teamwork"
              description="We believe in the power of collaboration and supporting each other to achieve common goals."
            />
            <ValueItem 
              title="Growth"
              description="We're committed to continuous improvement and the personal and professional development of our team."
            />
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hear From Our Team</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard 
              quote="Working at Rosebourne has been rewarding both professionally and personally. The training opportunities have helped me become a better plumber, and the team feels like family."
              name="Mark Stevens"
              role="Senior Plumber"
              years="7"
            />
            <TestimonialCard 
              quote="I started as an apprentice and have grown into a confident heating engineer. The mentorship and support I've received here is incredible."
              name="Emma Clarke"
              role="Heating Engineer"
              years="5"
            />
            <TestimonialCard 
              quote="What I appreciate most is the respect for work-life balance. The management understands that happy employees provide better service to customers."
              name="James Wilson"
              role="Plumbing Technician"
              years="3"
            />
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current vacancies and find your next career opportunity with Rosebourne Plumbing.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job, i) => (
              <JobCard key={i} {...job} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Don't see a position that fits your skills?</h3>
            <p className="text-gray-600 mb-4">
              We're always interested in meeting talented professionals. Send us your CV for future opportunities.
            </p>
            <Link href="/about/join-our-team/apply?type=general" className={buttonVariants({ variant: "outline" })}>
              Submit General Application
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Application Process</h2>
          
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-gray-200 ml-3 space-y-8">
              <li className="mb-8 ml-8">
                <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white">
                  1
                </div>
                <h3 className="font-medium text-lg text-gray-900">Submit Your Application</h3>
                <p className="text-gray-600 mt-1">
                  Complete our online application form and attach your CV and cover letter.
                </p>
              </li>
              <li className="mb-8 ml-8">
                <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white">
                  2
                </div>
                <h3 className="font-medium text-lg text-gray-900">Initial Phone Interview</h3>
                <p className="text-gray-600 mt-1">
                  If your application matches our requirements, we'll schedule a brief phone conversation to learn more about you.
                </p>
              </li>
              <li className="mb-8 ml-8">
                <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white">
                  3
                </div>
                <h3 className="font-medium text-lg text-gray-900">In-Person Interview</h3>
                <p className="text-gray-600 mt-1">
                  Meet with our team to discuss your experience, skills, and fit with our company culture.
                </p>
              </li>
              <li className="mb-8 ml-8">
                <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white">
                  4
                </div>
                <h3 className="font-medium text-lg text-gray-900">Practical Assessment</h3>
                <p className="text-gray-600 mt-1">
                  For technical roles, we may include a practical test to evaluate your skills in a real-world scenario.
                </p>
              </li>
              <li className="ml-8">
                <div className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white">
                  5
                </div>
                <h3 className="font-medium text-lg text-gray-900">Offer & Onboarding</h3>
                <p className="text-gray-600 mt-1">
                  Successful candidates will receive a job offer followed by a comprehensive onboarding program.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white">Ready to Join Our Team?</h2>
            <p className="mx-auto max-w-[600px] text-blue-100 md:text-lg">
              Take the first step towards a rewarding career with Rosebourne Plumbing. We look forward to meeting you!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link href="#open-positions" className={buttonVariants({ variant: "secondary" })}>
                View Positions
              </Link>
              <Link href="/contact?subject=Careers" className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 py-2 px-4 rounded-md transition-colors">
                Contact HR Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 