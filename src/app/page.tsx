'use client'
import Image from 'next/image'
import { ScanFace, Cookie, LayoutList, LibraryBig, Cable, Mail, Github, Linkedin } from 'lucide-react'

import ItemCard from '@/components/ItemCard'
import ExpCard from '@/components/ExpCard'
import ProCard from '@/components/ProCard'
import Button from '@/components/Button'
import Banner from '@/components/Banner'
import User from '@/components/User'

import { Fragment } from 'react'

const user = {
  cover: '/background.jpg',
  bannerbg: '/background.jpg',
  name: 'Jinjin You',
  slogn: 'A passionate full-stack developer.',
  github_link: 'https://github.com/jin337',
  linkedin_link: 'https://linkedin.com',
  email: 'jin337x@outlook.com',
  description: 'this is demo',
}

const about = ["I'm a front-end developer with 8 years of work experience", 'Welcome to Star, Fork and Issue']
const skills = [
  'nextjs',
  'nuxtjs',
  'nodejs',
  'react',
  'redux',
  'vue',
  'vite',
  'webpack',
  'js',
  'ts',
  'html',
  'css',
  'jquery',
  'sass',
  'tailwind',
  'express',
  'git',
  'mongodb',
  'graphql',
  'bootstrap',
  'postman',
]
const experiencelist = [
  {
    id: 1,
    logo: '/background.jpg',
    position: 'this is title',
    job_type: 1,
    base: 'Shanghai',
    time_form: '2021-01',
    time_to: '2022-03',
    description: 'this is text',
    tag_list: ['HTML', 'css', 'HTML', 'css', 'HTML', 'css', 'HTML', 'css', 'HTML', 'css', 'HTML', 'css', 'HTML', 'css'],
  },
]
const projectlist = [
  {
    id: 1,
    cover: '/background.jpg',
    project_name: 'this is title',
    description: 'this is text',
    tag_list: ['HTML', 'css'],
    github_link: 'https://github.com/jin337',
    link: 'https://www.baidu.com/',
  },
  {
    id: 2,
    cover: '/background.jpg',
    project_name: 'this is title',
    description: 'this is text',
    tag_list: ['HTML', 'css', 'HTML', 'css', 'HTML', 'css'],
    github_link: 'https://github.com/jin337',
    link: 'https://www.baidu.com/',
  },
]

export default function Home() {
  return (
    <main className='my-16'>
      <Banner url={user.bannerbg} />

      <main className='wrap-container mx-auto px-4'>
        <User item={user} />

        <ItemCard title='About Me' icon={<ScanFace size={18} />}>
          <ul className=' text-neutral-400 space-y-2'>
            {about.map((item, index) => (
              <li key={index} className='text-lg'>
                {item}
              </li>
            ))}
          </ul>
        </ItemCard>

        <ItemCard title='Skills' icon={<Cookie size={18} />}>
          <picture>
            <img src={`https://skillicons.dev/icons?i=${skills}`} alt='skills' />
          </picture>
        </ItemCard>

        <ItemCard title='Experience' icon={<LibraryBig size={18} />}>
          <div className='space-y-2'>
            {experiencelist.map((item, index) => (
              <Fragment key={index}>
                <ExpCard item={item} />
              </Fragment>
            ))}
          </div>
        </ItemCard>

        <ItemCard title='Projects' icon={<LayoutList size={18} />}>
          <div className='columns-1 xs:columns-2 space-y-4 gap-4'>
            {projectlist.map((item, index) => (
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
