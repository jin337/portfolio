'use client'
import { memo } from "react"

const Loading = memo(() => {
  return (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center'>
      <div className='w-full h-full flex items-center justify-center'>
        <p className='text-neutral-100 text-4xl loader ease-linear animate-spin'>🌀</p>
      </div>
    </div>
  )
})

export default Loading
