'use client'
import { Fragment, memo } from 'react'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'

interface UserProps {
  cover?: string
  github_link?: string
  linkedin_link?: string
  slogn?: string
  name?: string
}

const User = memo(({ item }: { item: UserProps }) => {
  return (
    <Fragment>
      <div className='flex flex-wrap justify-between items-end xs:items-center -mt-16'>
        <div className='size-32 xs:size-48 relative rounded-full overflow-hidden border-8 border-neutral-900 select-none'>
          {item.cover && <Image className='object-cover' src={item.cover} priority fill sizes='100%' alt='cover' />}
        </div>
        <div className='flex text-neutral-100'>
          <a
            href={item.github_link}
            target='_blank'
            className='size-10 rounded-md border-neutral-600 flex items-center justify-center hover:border hover:bg-neutral-800'
          >
            <Github size={18} />
          </a>
          <a
            href={item.linkedin_link}
            target='_blank'
            className='size-10 rounded-md border-neutral-600 flex items-center justify-center hover:border hover:bg-neutral-800'
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className='mt-4'>
        <h3 className='text-xl text-neutral-400'>Hi, my name is</h3>
        <h1 className='text-5xl font-black'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-teal-500 to-cyan-500'>
            {item.name}
          </span>
        </h1>
        <h2 className='text-2xl text-neutral-100 mt-2'>{item.slogn}</h2>
      </div>
    </Fragment>
  )
}
)

export default User
