import Link from 'next/link'

export default function DirectContactLink() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link 
        href="/contact" 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Contact Page
      </Link>
    </div>
  )
} 