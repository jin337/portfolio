'use client'
import { ScanFace, Cookie, LayoutList, LibraryBig, Cable, Mail, Github, Linkedin } from 'lucide-react'
import { Fragment, useEffect, useState, lazy } from 'react'

const Banner = lazy(() => import('@/components/Banner'))
const User = lazy(() => import('@/components/User'))
const ItemCard = lazy(() => import('@/components/ItemCard'))
const ExpCard = lazy(() => import('@/components/ExpCard'))
const ProCard = lazy(() => import('@/components/ProCard'))
const Button = lazy(() => import('@/components/Button'))
const Loading = lazy(() => import('@/components/Loading'))

import { PropUser } from '@/types/user'

export default function Home() {
  const [user, setUser] = useState<PropUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('/api/user');
        const res = await result.json();
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [])

  if (user === null) {
    return <div className='relative min-h-screen'><Loading /></div>
  }

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
