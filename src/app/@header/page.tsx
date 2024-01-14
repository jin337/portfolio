'use client'
import { Oswald } from 'next/font/google'
import { Moon, Sun } from 'lucide-react'

const fantasy = Oswald({
  weight: '600',
  subsets: ['latin'],
})
const Header = () => {
  return (
    <header className='w-full h-16 px-4 shadow-sm shadow-neutral-700 bg-neutral-900/60 fixed top-0 left-0 right-0 z-50'>
      <div className='wrap-container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='size-16 flex items-center justify-center'>
            <span className={`text-neutral-50 text-3xl ${fantasy.className}`}>Jin</span>
          </div>
          <div className='text-neutral-50 cursor-pointer size-7 hover:bg-neutral-700 flex items-center justify-center rounded'>
            {false ? <Moon size={20} /> : <Sun size={20} />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header