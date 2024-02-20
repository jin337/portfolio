'use client'
import { ScanFace, Cookie, LayoutList, LibraryBig } from 'lucide-react'
import { Fragment, useEffect, useState, lazy, useMemo } from 'react'

const Skeleton = lazy(() => import('@/components/Skeleton'))
const Banner = lazy(() => import('@/components/Banner'))
const User = lazy(() => import('@/components/User'))
const ItemCard = lazy(() => import('@/components/ItemCard'))
const ExpCard = lazy(() => import('@/components/ExpCard'))
const ProCard = lazy(() => import('@/components/ProCard'))

import { PropUser } from '@/types/user'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setUserContent } from '@/store/reducers/common'

export default function Main() {
  const dispatch = useAppDispatch()
  const languageType = useAppSelector(state => state.common.languageType)
  const userContent = useAppSelector(state => state.common.userContent)
  const [user, setUser] = useState<PropUser | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (type: string) => {
    const result = await fetch('/api/user');
    const res = await result.json();
    if (res.data) {
      setUser(res.data[type]);
      dispatch(setUserContent(res.data))

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const savedLangage = localStorage.getItem('languageType');
    const isLangage = savedLangage === null ? languageType : JSON.parse(savedLangage);

    const saveUserContent = localStorage.getItem('userContent');
    if (saveUserContent) {
      let data = JSON.parse(saveUserContent)
      setUser(data[isLangage]);
      dispatch(setUserContent(data))
      setLoading(false);
    } else {
      fetchData(isLangage);
    }
  }, [])


  useEffect(() => {
    setUser(userContent[languageType || 'en']);
  }, [languageType])

  const aboutElement = useMemo(() => {
    return (
      <ul className='space-y-2'>
        {user &&
          user.about &&
          Array.isArray(user.about) &&
          user.about.map((item, index) => (
            <li key={index} className={languageType == 'en' ? 'text-lg' : 'text-base'}>
              &bull;&nbsp;&nbsp;{item}
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

  return (
    <main className='my-16'>
      <Skeleton loading={loading} variant='image' className="h-52">
        <Banner url={user?.bannerbg} />
      </Skeleton>
      <main className='wrap-container mx-auto px-4'>
        <Skeleton loading={loading} variant='circle' className="size-32 xs:size-48 -mt-24" />
        <Skeleton loading={loading}>
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

        <Skeleton loading={loading} group={2} count={3} groupClassName='space-y-4 mb-8'>
          <ItemCard title='Experience' icon={<LibraryBig size={18} />}>
            {experienceElement}
          </ItemCard>
        </Skeleton>

        <Skeleton loading={loading} variant='card' group={2} className="h-48" groupClassName='columns-1 xs:columns-2 gap-4'>
          <ItemCard title='Projects' icon={<LayoutList size={18} />}>
            {projectsElement}
          </ItemCard>
        </Skeleton>
      </main>
    </main>
  )
}
