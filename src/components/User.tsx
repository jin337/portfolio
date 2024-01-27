'use client'
import { memo } from 'react'
import Image from 'next/image'
import { Github, Mail } from 'lucide-react'
import { useLocal } from '@/hooks/i18n';

interface UserProps {
  cover?: string
  github_link?: string
  email?: string
  slogn?: string
  name?: string
}

const User = memo(({ item }: { item: UserProps }) => {
  return (
    <>
      <div className='flex flex-wrap justify-between items-end xs:items-center -mt-16'>
        <div className='size-32 xs:size-48 relative rounded-full overflow-hidden border-8 dark:border-neutral-900 select-none'>
          {item.cover && <Image className='object-cover' src={item.cover} priority fill sizes='100%' alt='cover' />}
        </div>
        <div className='flex'>
          <a
            href={item.github_link}
            target='_blank'
            className='size-10 rounded-md dark:border-neutral-600 flex items-center justify-center hover:border hover:dark:bg-neutral-800'
          >
            <Github size={18} />
          </a>
          <a
            href={'mailto:' + item?.email}
            target='_blank'
            className='size-10 rounded-md dark:border-neutral-600 flex items-center justify-center hover:border hover:dark:bg-neutral-800'
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className='mt-4'>
        <h3 className='text-xl'>{useLocal('welcome')}</h3>
        <h1 className='text-5xl py-2 font-black'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-teal-500 to-cyan-500'>
            {item.name}
          </span>
        </h1>
        <h2 className='text-2xl dark:text-neutral-100 mt-2'>{item.slogn}</h2>
      </div>
    </>
  )
}
)

export default User
