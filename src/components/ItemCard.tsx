'use client'
import { memo } from "react"

const ItemCard = memo(({
  title = ' Title',
  icon,
  children,
}: {
  title: String
  icon?: React.ReactNode
  children?: React.ReactNode
}) => {
  return (
    <div className='my-8 group overflow-hidden'>
      <div className='inline-block relative'>
        <div className='flex items-center text-neutral-200'>
          <span className='text-2xl font-bold'>{title}</span>
          {icon && <span className='ml-2'>{icon}</span>}
        </div>
        <div className='w-full border-t-[3px] border-neutral-700/50 rounded-full relative'>
          <div className='w-full h-[3px] rounded-full absolute bottom-0 left-0 z-50 bg-gradient-to-r from-indigo-500 via-teal-500 to-cyan-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></div>
        </div>
      </div>
      <div className='mt-3 text-neutral-400'>{children}</div>
    </div>
  )
})

export default ItemCard
