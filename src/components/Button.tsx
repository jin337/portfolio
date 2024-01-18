'use client'
import { memo } from 'react';
const Button = memo(({ size = 'base', icon, link, children }: {
  size?: string
  icon?: React.ReactNode
  link?: string | 'javascript:void(0);'
  children: React.ReactNode
}) => {
  return (
    <div className='flex'>
      <a href={link} target='_blank' className={`${size == 'base' && 'py-2'} ${size == 'sm' && 'py-1'} border px-3 rounded-md dark:border-neutral-600 flex items-center hover:dark:bg-neutral-800`} >
        {icon}
        <span className='text-base mx-2 dark:text-neutral-100'>
          {children}
        </span>
      </a>
    </div>
  )
})

export default Button
