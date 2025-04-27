import { Phone, Clock, Calendar, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function BookingInfoCard() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 my-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
        Important Booking Information
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Call Center Info */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Phone className="h-5 w-5 text-blue-500 mt-0.5" />
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-gray-900">Professional Call Center</h4>
            <p className="text-xs text-gray-600 mt-1">
              We use a dedicated call center to ensure your calls are always answered promptly and your details are passed directly to our plumber.
            </p>
          </div>
        </div>
        
        {/* Time Windows Info */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-gray-900">Arrival Windows</h4>
            <p className="text-xs text-gray-600 mt-1">
              We provide time windows rather than exact times to ensure quality work on each job. We'll keep you updated with a more precise ETA.
            </p>
          </div>
        </div>
        
        {/* ServiceM8 Info */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Calendar className="h-5 w-5 text-blue-500 mt-0.5" />
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-gray-900">ServiceM8 System</h4>
            <p className="text-xs text-gray-600 mt-1">
              Our professional job management system provides SMS updates, online booking, and digital job records for a seamless experience.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
        <Link 
          href="/about/what-to-expect" 
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          Learn more about our process
        </Link>
        <Link 
          href="https://book.servicem8.com/request_booking?uuid=f77edceb-bd17-4859-8ac5-1cd5183969cb"
          className="inline-flex items-center text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded font-medium transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Online
        </Link>
      </div>
    </div>
  )
} 