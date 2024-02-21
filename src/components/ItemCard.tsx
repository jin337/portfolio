'use client'
import { CardProp } from '@/types/user'

const ItemCard = ({ title = ' Title', icon, children }: CardProp) => {
  return (
    <div className='my-8 group overflow-hidden'>
      <div className='inline-block relative'>
        <div className='flex pb-1 items-center dark:text-neutral-200'>
          <span className='text-2xl font-bold'>{title}</span>
          {icon && <span className='ml-2'>{icon}</span>}
        </div>
        <div className='w-full border-t-[3px] dark:border-neutral-700/50 rounded-full relative'>
          <div className='w-full h-[3px] rounded-full absolute bottom-0 left-0 z-50 bg-gradient-to-r from-indigo-500 via-teal-500 to-cyan-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></div>
        </div>
      </div>
      <div className='mt-3'>{children}</div>
    </div>
  )
}

export default ItemCard
