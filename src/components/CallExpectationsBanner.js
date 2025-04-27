import { Phone, Info } from 'lucide-react'
import Link from 'next/link'

export default function CallExpectationsBanner() {
  return (
    <div className="bg-blue-50 border-b border-blue-100 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Info className="h-4 w-4 text-blue-600" />
            <span className="text-sm text-blue-800">
              <span className="font-medium">We use a professional call center</span>
              <span className="hidden md:inline"> - Your call is always answered and details passed to our plumber</span>
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Link href="/about/what-to-expect" className="text-xs text-blue-600 hover:text-blue-800 hover:underline">
              Learn what to expect
            </Link>
            <span className="text-blue-400">|</span>
            <Link href="tel:01264502027" className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-800">
              <Phone className="h-3 w-3 mr-1" />
              01264 502027
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 