import { Phone, Calendar, MessageSquare, ClipboardCheck } from 'lucide-react'

export default function CallExpectations() {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg shadow-sm">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Phone className="h-5 w-5 text-blue-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">What to Expect When Calling Us</h3>
          <div className="mt-2 text-sm text-blue-700 space-y-1">
            <p>
              While we're a dedicated one-man operation focused on delivering expert plumbing services, 
              we partner with a professional call center to ensure you always reach someone when you call.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              <div className="flex items-start">
                <MessageSquare className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                <span>Your call is answered by our professional reception team</span>
              </div>
              <div className="flex items-start">
                <Calendar className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                <span>They'll schedule your appointment efficiently</span>
              </div>
              <div className="flex items-start">
                <ClipboardCheck className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                <span>All details are immediately passed to our plumber</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                <span>You'll receive confirmation & follow-up</span>
              </div>
            </div>
            <p className="pt-1 font-medium">
              This system ensures you never get lost in the shuffle and always receive the attention your plumbing needs deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 