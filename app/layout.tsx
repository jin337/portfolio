import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Jinjin You | resume',
  description: 'Software Developer | Frontend Developer | Full Stack Web Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-neutral-900 relative font-Grotesque'>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
