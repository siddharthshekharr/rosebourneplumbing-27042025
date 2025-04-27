import Link from 'next/link'

export default function EmergencyBanner() {
    return (
        <div className="bg-red-600 text-white py-2 px-4">
            <div className="container mx-auto text-center">
                <span className="font-semibold">Emergency? Call Now: </span>
                <Link href="tel:+441234567890" className="underline">
                    01264 502027
                </Link>
            </div>
        </div>
    )
} 