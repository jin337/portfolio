import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.css'

const bricolage_Grotesque = Bricolage_Grotesque({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jinjin You | resume',
  description: 'Software Developer | Frontend Developer | Full Stack Web Developer',
}

export default function RootLayout({
  header,
  footer,
  children,
}: {
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`dark:bg-neutral-900 dark:text-neutral-400 relative ${bricolage_Grotesque.className}`}>
        {header}
        {children}
        {footer}
        <Analytics />
      </body>
    </html>
  )
}
