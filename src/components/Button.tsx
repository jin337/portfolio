'use client'
import { ButtonProps } from '@/types/user'

const Button = ({ size = 'base', icon, link, children }: ButtonProps) => {
  return (
    <div className='flex dark:text-neutral-100'>
      <a href={link} target='_blank' className={`${size == 'base' && 'py-2'} ${size == 'sm' && 'py-1'} border px-3 rounded-md dark:border-neutral-600 flex items-center hover:dark:bg-neutral-800`} >
        {icon}
        <span className='text-base mx-2'>
          {children}
        </span>
      </a>
    </div>
  )
}

export default Button
