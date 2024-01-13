import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/styles/globals.css'

const bricolage_Grotesque = Bricolage_Grotesque({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jinjin You | resume',
  description: 'Software Developer | Frontend Developer | Full Stack Web Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`bg-neutral-900 relative ${bricolage_Grotesque.className}`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
