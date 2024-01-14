'use client'
import { ScanFace, Cookie, LayoutList, LibraryBig, Cable, Mail, Github, Linkedin } from 'lucide-react'

import ItemCard from '@/components/ItemCard'
import ExpCard from '@/components/ExpCard'
import ProCard from '@/components/ProCard'
import Button from '@/components/Button'
import Banner from '@/components/Banner'
import User from '@/components/User'

import { Fragment, useEffect, useState } from 'react'

import { PropUser } from '@/types/user'

export default function Home() {
  const [loading, setLoading] = useState<Boolean>(false)
  const [user, setUser] = useState<PropUser>({})

  const getUser = async () => {
    const result = await fetch('/api/user')
    const res = await result.json()
    setUser(res.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <main className='my-16'>
      <Banner url={user.bannerbg} />
      <main className='wrap-container mx-auto px-4'>
        <User item={user} />

        <ItemCard title='About Me' icon={<ScanFace size={18} />}>
          <ul className='text-neutral-400 space-y-2'>
            {user &&
              user.about &&
              Array.isArray(user.about) &&
              user.about.map((item, index) => (
                <li key={index} className='text-lg'>
                  {item}
                </li>
              ))}
          </ul>
        </ItemCard>

        <ItemCard title='Skills' icon={<Cookie size={18} />}>
          <picture>
            <img src={`https://skillicons.dev/icons?i=${user.skills}`} alt='skills' />
          </picture>
        </ItemCard>

        <ItemCard title='Experience' icon={<LibraryBig size={18} />}>
          <div className='space-y-2'>
            {user &&
              user.experience_list &&
              Array.isArray(user.experience_list) &&
              user.experience_list.map((item, index) => (
                <Fragment key={index}>
                  <ExpCard item={item} />
                </Fragment>
              ))}
          </div>
        </ItemCard>

        <ItemCard title='Projects' icon={<LayoutList size={18} />}>
          <div className='columns-1 xs:columns-2 space-y-4 gap-4'>
            {user &&
              user.project_list &&
              Array.isArray(user.project_list) &&
              user.project_list.map((item, index) => (
                <Fragment key={index}>
                  <ProCard item={item} />
                </Fragment>
              ))}
          </div>
        </ItemCard>

        <ItemCard title='Contact Me' icon={<Cable size={18} />}>
          <div className='flex space-x-4'>
            <Button size='sm' icon={<Github size={24} />} link={user.github_link}>
              Github
            </Button>
            <Button size='sm' icon={<Linkedin size={24} />} link={user.linkedin_link}>
              LinkedIn
            </Button>
          </div>
          <div className='text-sm my-4'>{user.description}</div>
          <div className='flex justify-center'>
            <Button icon={<Mail size={24} />} link={'mailto:' + user.linkedin_link}>
              Git in touch
            </Button>
          </div>
        </ItemCard>
      </main>
    </main>
  )
}
