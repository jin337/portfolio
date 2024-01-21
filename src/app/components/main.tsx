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
import { useAppSelector } from '@/hooks/redux'

export default function Main() {
  const langageType = useAppSelector(state => state.common.langageType)
  const [userEN, setUserEN] = useState<PropUser | null>(null);
  const [userCN, setUserCN] = useState<PropUser | null>(null);
  const [user, setUser] = useState<PropUser | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (type: string) => {
    const result = await fetch('/api/user');
    const res = await result.json();
    const en = res.data.en
    const cn = res.data.cn
    setUser(type == 'en' ? en : cn);
    setUserCN(cn)
    setUserEN(en)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const savedLangage = localStorage.getItem('language');
    const isLangage = savedLangage === null ? langageType : savedLangage;
    fetchData(isLangage);
  }, [])


  useEffect(() => {
    setUser(langageType == 'en' ? userEN : userCN);
  }, [langageType])

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
      <Skeleton loading={loading} variant='image' className="h-52">
        <Banner url={user?.bannerbg} />
      </Skeleton>
      <main className='wrap-container mx-auto px-4'>
        <Skeleton loading={loading} count={2}>
          <User item={user || {}} />
        </Skeleton>

        <Skeleton loading={loading} count={4}>
          <ItemCard title='About Me' icon={<ScanFace size={18} />}>
            {aboutElement}
          </ItemCard>
        </Skeleton>

        <Skeleton loading={loading} variant='image' className="h-20">
          <ItemCard title='Skills' icon={<Cookie size={18} />}>
            <picture>
              <img src={`https://skillicons.dev/icons?i=${user?.skills}`} alt='skills' />
            </picture>
          </ItemCard>
        </Skeleton>

        <Skeleton loading={loading}>
          <ItemCard title='Experience' icon={<LibraryBig size={18} />}>
            {experienceElement}
          </ItemCard>
        </Skeleton>

        <Skeleton loading={loading}>
          <ItemCard title='Projects' icon={<LayoutList size={18} />}>
            {projectsElement}
          </ItemCard>
        </Skeleton>

        <Skeleton loading={loading}>
          <ItemCard title='Contact Me' icon={<Cable size={18} />}>
            {contactElement}
          </ItemCard>
        </Skeleton>
      </main>
    </main>
  )
}
