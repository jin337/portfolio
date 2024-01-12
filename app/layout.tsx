import type { Metadata } from 'next'
import '@/public/styles/globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Jinjin You | Portfolio',
  description: 'Software Developer | Frontend Developer | Full Stack Web Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-neutral-900 text-neutral-200'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
