import { Bricolage_Grotesque } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

import '@/styles/globals.css'

const font = Bricolage_Grotesque({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jinjin You | resume',
  description: 'Software Developer | Frontend Developer | Full Stack Web Developer',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`dark:bg-neutral-900 dark:text-neutral-400 relative ${font.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
