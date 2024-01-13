import Image from 'next/image'
import { ScanFace, Cookie, LayoutList, LibraryBig, Cable, Mail, Github, Linkedin } from 'lucide-react'

import ItemCard from '@/components/ItemCard'
import ExpCard from '@/components/ExpCard'
import ProCard from '@/components/ProCard'
import Button from '@/components/Button'

import bannerbg from '@/public/background.jpg'
import { Fragment } from 'react'

const about = ["I'm a front-end developer with 8 years of work experience", 'Welcome to Star, Fork and Issue']
const skills = [
  'vue',
  'react',
  'redux',
  'js',
  'ts',
  'html',
  'css',
  'jquery',
  'sass',
  'tailwind',
  'nodejs',
  'nuxtjs',
  'nextjs',
  'express',
  'git',
  'vite',
  'webpack',
  'mongodb',
  'graphql',
  'bootstrap',
  'postman',
]
const experiencelist = [
  {
    id: 1,
    logo: '/sls.png',
    position: 'Software Developer',
    job_type: 1,
    base: 'Shanghai',
    time_form: '2021-01',
    time_to: '2022-03',
    description:
      "Hello, I'm a software developer at The Queen's English, working on a diverse range of products from designing and developing new features to maintaining and optimizing existing ones. I have created several features utilized by thousands of users and enjoy collaborating with my team to find innovative solutions to challenging problems. It's a rewarding role and being part of a dynamic team that's constantly pushing the boundaries of software development is exciting.",
    tag_list: ['HTML', 'css', 'HTML', 'css', 'HTML', 'css', 'HTML', 'css', 'HTML', 'css', 'HTML', 'css', 'HTML', 'css'],
  },
]
const projectlist = [
  {
    id: 1,
    cover: '/background.jpg',
    project_name: 'Software Developer',
    description: 'Marvel API-based JavaScript project: Random character details, name search, responsive design.',
    tag_list: ['HTML', 'css'],
  },
  {
    id: 2,
    cover: '/background.jpg',
    project_name: 'Software Developer',
    description: 'Marvel API-based JavaScript project: Random character details, name search, responsive design.',
    tag_list: ['HTML', 'css', 'HTML', 'css', 'HTML', 'css'],
  },
]

export default function Home() {
  return (
    <main className='my-16'>
      <div className='relative w-full h-36 sm:h-44 md:h-52'>
        <Image className='object-cover' src={bannerbg} priority fill alt='background' />
      </div>
      <main className='wrap-container mx-auto px-4'>
        <div className='mt-4'>
          <h3 className='text-xl text-neutral-400'>Hi, my name is</h3>
          <h1 className='text-5xl font-black'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-teal-500 to-cyan-500'>
              Jinjin You
            </span>
          </h1>
          <h2 className='text-2xl text-neutral-100 mt-2'>A passionate full-stack developer.</h2>
        </div>

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
            <Button size='sm' icon={<Github size={24} />}>
              Github
            </Button>
            <Button size='sm' icon={<Linkedin size={24} />}>
              LinkedIn
            </Button>
          </div>
          <div className='text-sm my-4'>
            As a dedicated developer, I&lsquo;m fueled by my passion for coding and an unyielding hunger for fresh challenges. If
            you&lsquo;re interested in collaborating or embarking on an exciting project, please feel free to reach out.
            Let&lsquo;s create something extraordinary together!
          </div>
          <div className='flex justify-center'>
            <Button icon={<Mail size={24} />}>Git in touch</Button>
          </div>
        </ItemCard>
      </main>
    </main>
  )
}
