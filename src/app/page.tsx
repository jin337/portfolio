'use client'
import { ScanFace, Cookie, LayoutList, LibraryBig, Cable, Mail, Github, Linkedin } from 'lucide-react'
import { Fragment, useEffect, useState, lazy, useMemo } from 'react'

const Skeleton = lazy(() => import('@/components/Skeleton'))
const Banner = lazy(() => import('@/components/Banner'))
const User = lazy(() => import('@/components/User'))
const ItemCard = lazy(() => import('@/components/ItemCard'))
const ExpCard = lazy(() => import('@/components/ExpCard'))
const ProCard = lazy(() => import('@/components/ProCard'))
const Button = lazy(() => import('@/components/Button'))

import { PropUser } from '@/types/user'

export default function Home() {
  const [user, setUser] = useState<PropUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/user');
      const res = await result.json();
      setUser(res.data);
    };

    fetchData();
  }, [])

  const aboutElement = useMemo(() => {
    return (
      <ul className='space-y-2'>
        {user &&
          user.about &&
          Array.isArray(user.about) &&
          user.about.map((item, index) => (
            <li key={index} className='text-lg'>
              {item}
            </li>
          ))}
      </ul>
    )
  }, [user?.about])

  const experienceElement = useMemo(() => {
    return (
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
    )
  }, [user?.experience_list])

  const projectsElement = useMemo(() => {
    return (
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
    )
  }, [user?.project_list])

  const contactElement = useMemo(() => {
    return (
      <>
        <div className='flex space-x-4'>
          <Button size='sm' icon={<Github size={20} />} link={user?.github_link}>
            Github
          </Button>
          <Button size='sm' icon={<Linkedin size={20} />} link={user?.linkedin_link}>
            LinkedIn
          </Button>
        </div>
        <div className='text-sm my-4'>{user?.description}</div>
        <div className='flex justify-center'>
          <Button icon={<Mail size={20} />} link={'mailto:' + user?.linkedin_link}>
            Git in touch
          </Button>
        </div>
      </>
    )
  }, [user])


  return (
    <main className='my-16'>
      <Skeleton loading={!user} variant='image' className="h-52">
        <Banner url={user?.bannerbg} />
      </Skeleton>
      <main className='wrap-container mx-auto px-4'>
        <Skeleton loading={!user} count={2}>
          <User item={user || {}} />
        </Skeleton>

        <Skeleton loading={!user} count={4}>
          <ItemCard title='About Me' icon={<ScanFace size={18} />}>
            {aboutElement}
          </ItemCard>
        </Skeleton>

        <Skeleton loading={!user} variant='image' className="h-20">
          <ItemCard title='Skills' icon={<Cookie size={18} />}>
            <picture>
              <img src={`https://skillicons.dev/icons?i=${user?.skills}`} alt='skills' />
            </picture>
          </ItemCard>
        </Skeleton>

        <Skeleton loading={!user}>
          <ItemCard title='Experience' icon={<LibraryBig size={18} />}>
            {experienceElement}
          </ItemCard>
        </Skeleton>

        <Skeleton loading={!user}>
          <ItemCard title='Projects' icon={<LayoutList size={18} />}>
            {projectsElement}
          </ItemCard>
        </Skeleton>

        <Skeleton loading={!user}>
          <ItemCard title='Contact Me' icon={<Cable size={18} />}>
            {contactElement}
          </ItemCard>
        </Skeleton>
      </main>
    </main>
  )
}
