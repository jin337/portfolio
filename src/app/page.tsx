'use client'
import { store } from '@/store/index';
import { Cookie, LayoutList, LibraryBig, ScanFace } from 'lucide-react';
import { Fragment, lazy, useEffect, useMemo, useState } from 'react';
import { Provider } from 'react-redux';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setI18nContent, setUserContent } from '@/store/reducers/common';
import { UserProp } from '@/types/user';

const Header = lazy(() => import('@/components/Header'))
const Footer = lazy(() => import('@/components/Footer'))

const Skeleton = lazy(() => import('@/components/Skeleton'))
const Banner = lazy(() => import('@/components/Banner'))
const User = lazy(() => import('@/components/User'))
const ItemCard = lazy(() => import('@/components/ItemCard'))
const ExpCard = lazy(() => import('@/components/ExpCard'))
const ProCard = lazy(() => import('@/components/ProCard'))

const Main = () => {
  const dispatch = useAppDispatch()
  const i18nContent = useAppSelector(state => state.common.i18nContent)
  const languageType = useAppSelector(state => state.common.languageType)
  const userContent = useAppSelector(state => state.common.userContent)
  const [user, setUser] = useState<UserProp | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (type: string) => {
    const result = await fetch('/api/member?id=1');
    const res = await result.json();
    if (res.data) {
      setUser(res.data[type]);
      dispatch(setUserContent(res.data))

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  // 获取语言数据
  const loadTranslations = async (type: string) => {
    const currentTranslations = i18nContent[type];
    if (currentTranslations) {
      return;
    }
    const response = await fetch(`/i18n/${type}/common.json`);
    if (!response.ok) {
      throw new Error(`Translation file not found: ${response.statusText}`);
    }
    const data = await response.json();
    dispatch(setI18nContent({ type, content: data }));
  };

  useEffect(() => {
    const savedLangage = localStorage.getItem('languageType');
    const isLangage = savedLangage === null ? languageType : JSON.parse(savedLangage);
    fetchData(isLangage);

    loadTranslations('en')
    loadTranslations('cn')
  }, [])


  useEffect(() => {
    setUser(userContent[languageType]);
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
      <Skeleton loading={loading} variant='image' className="h-36 sm:h-44 md:h-52">
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

const Home = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  )
}

export default Home
