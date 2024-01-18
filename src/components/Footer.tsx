'use client'
import { memo } from "react"

const Footer = memo(() => {
  return (
    <footer className='wrap-container mx-auto my-4 text-center'>
      <div className='text-xs text-neutral-50 opacity-30'>&copy; {new Date().getFullYear()} Jinjin You. All Rights Reserved.</div>
    </footer>
  )
})

export default Footer
