'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Service category data
const serviceCategories = [
  {
    id: 'emergency',
    title: 'Emergency Services',
    description: 'Professional emergency plumbing solutions for your home or business',
    slug: '/services/emergency',
    icon: 'emergency',
    services: [
      {
        title: 'Emergency Plumbing',
        description: 'Fast response for urgent plumbing issues',
        features: ['Professional Service', 'Fully Equipped Vans', 'Experienced Plumbers'],
        price: 'From £320'
      },
      {
        title: 'Blocked Drains',
        description: 'Professional drain clearance service',
        features: ['High-pressure Jetting', 'CCTV Surveys', 'Quick Resolution'],
        price: 'From £300'
      },
      {
        title: 'Leak Detection',
        description: 'Advanced leak finding and repair services',
        features: ['Non-invasive Methods', 'Thermal Imaging', 'Accurate Detection'],
        price: 'From £380'
      },
      {
        title: 'Burst Pipes',
        description: 'Emergency pipe repair service',
        features: ['Rapid Response', 'Water Control', 'Complete Repair'],
        price: 'From £380'
      },
      {
        title: 'Toilet Issues',
        description: 'Fast toilet repair and replacement service',
        features: ['Blockage Clearing', 'Cistern Repairs', 'Complete Replacements'],
        price: 'From £300'
      },
      {
        title: 'Leaking Taps',
        description: 'Professional tap repair service',
        features: ['All Tap Types', 'Washer Replacement', 'Complete Repairs'],
        price: 'From £125'
      },
      {
        title: 'No Hot Water',
        description: 'Hot water system diagnosis and repair',
        features: ['System Diagnosis', 'Quick Repairs', 'Cylinder Services'],
        price: 'From £160'
      },
      {
        title: 'Flood Response',
        description: 'Emergency flood control and cleanup',
        features: ['Water Extraction', 'Damage Control', 'Prevention'],
        price: 'From £200'
      },
      {
        title: 'Water Leak Repairs',
        description: 'Professional leak detection and repair',
        features: ['Leak Location', 'Quick Repairs', 'Prevention'],
        price: 'From £160'
      },
      {
        title: 'Gas Leaks',
        description: 'Emergency gas leak detection and repair',
        features: ['Gas Safe Engineers', 'Emergency Response', 'Safety Checks'],
        price: 'From £160'
      },
      {
        title: 'Boiler Breakdown',
        description: 'Emergency boiler repair service',
        features: ['All Boiler Types', 'Parts Available', 'Quick Fix'],
        price: 'From £200'
      },
      {
        title: 'Water Leaks',
        description: 'Professional water leak repair',
        features: ['Leak Detection', 'Quick Repair', 'Water Control'],
        price: 'From £160'
      },
      {
        title: 'Frozen Pipes',
        description: 'Emergency frozen pipe thawing service',
        features: ['Safe Thawing', 'Prevention Tips', 'Pipe Protection'],
        price: 'From £160'
      }
    ]
  },
  {
    id: 'bathroom',
    title: 'Bathroom Services',
    description: 'Complete bathroom plumbing and installation services',
    slug: '/services/bathroom',
    icon: 'bathroom',
    services: [
      {
        title: 'Bathroom Renovation',
        description: 'Complete bathroom renovation service',
        features: ['Full Installation', 'Quality Materials', 'Expert Fitting'],
        price: 'From £6,000'
      },
      {
        title: 'Shower Installation',
        description: 'Professional shower fitting service',
        features: ['All Shower Types', 'Waterproofing', 'Tile Work'],
        price: 'From £700'
      },
      {
        title: 'Bathroom Suite',
        description: 'Complete bathroom suite installation',
        features: ['Full Suite Fitting', 'Quality Fixtures', 'Expert Work'],
        price: 'From £9,000'
      },
      {
        title: 'Toilet Installation',
        description: 'Professional toilet fitting service',
        features: ['All Toilet Types', 'Proper Sealing', 'Clean Work'],
        price: 'From £125'
      },
      {
        title: 'Bath Installation',
        description: 'Expert bath fitting service',
        features: ['All Bath Types', 'Proper Support', 'Waterproofing'],
        price: 'From £180'
      },
      {
        title: 'Shower Repairs',
        description: 'Professional shower repair service',
        features: ['All Shower Types', 'Pressure Issues', 'Leak Repairs'],
        price: 'From £125'
      },
      {
        title: 'Bathroom Taps',
        description: 'Professional bathroom tap installation',
        features: ['All Tap Types', 'Proper Sealing', 'Clean Work'],
        price: 'From £500'
      },
      {
        title: 'Bathroom Radiator',
        description: 'Bathroom radiator installation service',
        features: ['All Radiator Types', 'Proper Fitting', 'Clean Work'],
        price: 'From £1,200'
      },
      {
        title: 'Shower Pump',
        description: 'Professional shower pump installation',
        features: ['All Pump Types', 'Proper Fitting', 'Pressure Testing'],
        price: 'From £160'
      }
    ]
  },
  {
    id: 'kitchen',
    title: 'Kitchen Services',
    description: 'Professional kitchen plumbing and installation services',
    slug: '/services/kitchen',
    icon: 'kitchen',
    services: [
      {
        title: 'Kitchen Sink',
        description: 'Professional kitchen sink installation',
        features: ['All Sink Types', 'Proper Fitting', 'Clean Work'],
        price: 'From £180'
      },
      {
        title: 'Kitchen Taps',
        description: 'Professional kitchen tap installation',
        features: ['All Tap Types', 'Proper Fitting', 'Clean Work'],
        price: 'From £180'
      },
      {
        title: 'Dishwasher',
        description: 'Professional dishwasher installation',
        features: ['All Models', 'Proper Connection', 'Testing'],
        price: 'From £125'
      },
      {
        title: 'Washing Machine',
        description: 'Professional washing machine installation',
        features: ['All Models', 'Proper Connection', 'Testing'],
        price: 'From £150'
      },
      {
        title: 'Waste Disposal',
        description: 'Professional waste disposal installation',
        features: ['All Models', 'Proper Fitting', 'Testing'],
        price: 'From £125'
      },
      {
        title: 'Water Filter',
        description: 'Professional water filter installation',
        features: ['All Filter Types', 'Proper Fitting', 'Testing'],
        price: 'From £125'
      }
    ]
  },
  {
    id: 'water',
    title: 'Water Services',
    description: 'Water system installation and maintenance services',
    slug: '/services/water',
    icon: 'water',
    services: [
      {
        title: 'Water Softener',
        description: 'Water softener installation service',
        features: ['All Models', 'Proper Fitting', 'Testing'],
        price: 'From £280'
      },
      {
        title: 'Water Filter',
        description: 'Water filter system installation',
        features: ['All Systems', 'Proper Fitting', 'Testing'],
        price: 'From £600'
      },
      {
        title: 'Water Treatment',
        description: 'Water treatment system installation',
        features: ['All Systems', 'Proper Fitting', 'Testing'],
        price: 'From £350'
      },
      {
        title: 'Water Pump',
        description: 'Water pump installation service',
        features: ['All Models', 'Proper Fitting', 'Testing'],
        price: 'From £180'
      },
      {
        title: 'Water Storage',
        description: 'Water storage tank installation',
        features: ['All Types', 'Proper Fitting', 'Testing'],
        price: 'From £1,200'
      },
      {
        title: 'Water Testing',
        description: 'Professional water testing service',
        features: ['Quality Test', 'Analysis', 'Report'],
        price: 'From £160'
      }
    ]
  },
  {
    id: 'heating',
    title: 'Heating Services',
    description: 'Complete heating system installation and maintenance',
    slug: '/services/heating',
    icon: 'heating',
    services: [
      {
        title: 'Boiler Installation',
        description: 'Professional boiler installation service',
        features: ['All Boiler Types', 'Gas Safe', 'Warranty'],
        price: 'From £350'
      },
      {
        title: 'Radiator Installation',
        description: 'Professional radiator fitting service',
        features: ['All Radiator Types', 'Proper Fitting', 'Testing'],
        price: 'From £125'
      },
      {
        title: 'Underfloor Heating',
        description: 'Professional underfloor heating installation',
        features: ['All Systems', 'Proper Installation', 'Testing'],
        price: 'From £1,200'
      },
      {
        title: 'Central Heating',
        description: 'Complete central heating installation',
        features: ['Full System', 'Quality Parts', 'Testing'],
        price: 'From £180'
      },
      {
        title: 'Thermostat',
        description: 'Smart thermostat installation service',
        features: ['All Models', 'Proper Fitting', 'Programming'],
        price: 'From £125'
      },
      {
        title: 'Power Flush',
        description: 'Professional power flush service',
        features: ['Complete System', 'Chemical Treatment', 'Testing'],
        price: 'From £450'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance Services',
    description: 'Regular maintenance and inspection services',
    slug: '/services/maintenance',
    icon: 'maintenance',
    services: [
      {
        title: 'Annual Service',
        description: 'Annual plumbing system inspection',
        features: ['Full Check', 'Safety Inspection', 'Report'],
        price: 'From £125'
      },
      {
        title: 'Boiler Service',
        description: 'Annual boiler service and inspection',
        features: ['Safety Check', 'Efficiency Test', 'Report'],
        price: 'From £125'
      },
      {
        title: 'Gas Safety',
        description: 'Gas safety inspection service',
        features: ['Safety Check', 'Documentation', 'Report'],
        price: 'From £125'
      },
      {
        title: 'Water Quality',
        description: 'Water quality testing service',
        features: ['Quality Test', 'Analysis', 'Report'],
        price: 'From £125'
      },
      {
        title: 'System Check',
        description: 'Complete system inspection',
        features: ['Full Check', 'Testing', 'Report'],
        price: 'From £125'
      },
      {
        title: 'Maintenance Plan',
        description: 'Annual maintenance plan service',
        features: ['Regular Checks', 'Priority Service', 'Discounts'],
        price: 'From £225/year'
      }
    ]
  }
];

// Group types for filtering
const serviceGroups = [
  { id: 'all', name: 'All Services' },
  { id: 'room', name: 'By Room' },
  { id: 'type', name: 'By Service Type' },
  { id: 'frequency', name: 'By Frequency' }
];

// Component for individual service card
const ServiceCard = ({ title, description, features, price, categorySlug, index }) => {
  // Create a URL-friendly version of the service title for linking
  const serviceSlug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
  
  // Determine if we should link to a category page or individual service page
  const linkPath = categorySlug ? `${categorySlug}/${serviceSlug}` : `/services/${serviceSlug}`
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-blue-600 font-medium">{price}</span>
          {categorySlug && (
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
              {categorySlug.split('/').pop()}
            </span>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      {features && (
        <div className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              {feature}
            </div>
          ))}
        </div>
      )}
      
      <Link 
        href={linkPath}
        className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
      >
        Learn More
        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

// Filter component
const ServiceFilter = ({ categories, activeFilter, setActiveFilter }) => {
  return (
    <div className="mb-8">
      <div className="text-lg font-medium mb-3">Filter by Category:</div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          All Services
        </button>
        
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === category.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  // Flatten all services into a single array with category information
  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      categoryId: category.id,
      categoryTitle: category.title,
      categorySlug: category.slug
    }))
  )
  
  // Filter services based on active filter
  const filteredServices = activeFilter === 'all' 
    ? allServices 
    : allServices.filter(service => service.categoryId === activeFilter)
  
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Plumbing Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive plumbing solutions for residential and commercial properties in Hampshire and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/about/reviews"
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
            >
              Read Customer Reviews
            </Link>
          </div>
        </div>
        
        {/* Filter section */}
        <ServiceFilter 
          categories={serviceCategories} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={`${service.categoryId}-${index}`}
              title={service.title}
              description={service.description}
              features={service.features}
              price={service.price}
              categorySlug={service.categorySlug}
              index={index}
            />
          ))}
        </div>
        
        {/* No results message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-800 mb-2">No services found</h3>
            <p className="text-gray-600">Please try a different filter or contact us for custom requirements.</p>
          </div>
        )}
        
        {/* CTA section */}
        <div className="max-w-4xl mx-auto mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Need a service not listed here?
              </h2>
              <p className="text-gray-600 mb-6">
                We offer a wide range of plumbing services beyond what's listed. Contact us to discuss your specific requirements and get a customized solution.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us Today
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-40 h-40 rounded-full bg-blue-50 flex items-center justify-center">
                <svg className="w-20 h-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 