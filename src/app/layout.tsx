import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jinjin You | Portfolio',
  description: 'Software Developer | Frontend Developer | Full Stack Web Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-neutral-900 text-neutral-200'>
        <header className='h-16 backdrop-blur-lg fixed top-0 left-0 right-0 shadow-sm shadow-neutral-700 z-50 bg-neutral-900/60'>
          <div className='mx-auto h-full flex flex-row justify-between items-center px-20'>
            <div className='cursor-pointer'>
              <div className='text-3xl'>
                <span className='header-title'>Jin</span>
              </div>
            </div>
          </div>
        </header>
        <div className='h-16 w-full bg-neutral-900'></div>
        {children}
        <footer className='mx-auto my-4'>
          <div className='text-center text-xs opacity-30'>&copy; {new Date().getFullYear()} Jinjin You. All Rights Reserved.</div>
        </footer>
      </body>
    </html>
  )
}
