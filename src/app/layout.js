import { Lato } from 'next/font/google'
import '@/app/globals.css'
import StaticGoogleReviews from '@/components/StaticGoogleReviews'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'

// Font setup
const lato = Lato({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: 'Rosebourne Plumbing | Expert Plumbers in Andover & Hampshire',
    description: 'Professional plumbing services in Andover, Hampshire, Wiltshire & Berkshire. Fast response, competitive pricing, and 5-star rated service.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={lato.className}>
                <Header />
                <main className="pt-16">
                    {children}
                </main>
                <StaticGoogleReviews />
                <Footer />
                <Toaster position="bottom-right" />
                {/* 
                    Components temporarily removed to fix chunk loading error:
                    - CTASection
                    - DirectContactLink
                    - ToastProvider
                    - CallExpectationsBanner
                */}
            </body>
        </html>
    )
}
