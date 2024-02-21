'use client'
import Image from 'next/image'
import { Github, Mail, Twitter } from 'lucide-react'
import { useLocal } from '@/hooks/i18n';

import { UserProp } from '@/types/user'

const User = ({ item }: { item: UserProp }) => {

  const list = [
    {
      icon: <Twitter size={18} />,
      link: item.twitter_link
    },
    {
      icon: <Github size={18} />,
      link: item.github_link
    },
    {
      icon: <Mail size={18} />,
      link: 'mailto:' + item?.email
    },
  ]

  return (
    <>
      <div className='flex flex-wrap justify-between items-end xs:items-center -mt-16'>
        <div className='size-32 xs:size-48 relative rounded-full overflow-hidden border-8 dark:border-neutral-900 select-none'>
          {item.cover && <Image className='object-cover' src={item.cover} priority fill sizes='100%' alt='cover' />}
        </div>
        <div className='flex'>
          {
            list.map((i, index) => <a key={index}
              href={i.link}
              target='_blank'
              className='size-10 rounded-md dark:border-neutral-600 flex items-center justify-center hover:border hover:dark:bg-neutral-800'>
              {i.icon}
            </a>)
          }
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

export default User
