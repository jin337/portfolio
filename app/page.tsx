import Image from 'next/image'
import { ScanFace, Cookie, LayoutList, LibraryBig, Cable, Mail, Github, Linkedin } from 'lucide-react'

import ItemCard from '@/components/ItemCard'
import ExpCard from '@/components/ExpCard'
import ProCard from '@/components/ProCard'
import Button from '@/components/Button'

import bannerbg from '@/public/images/background.jpg'
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
const experiencelist = ['', '']
const projectlist = ['', '', '', '']

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
                <ExpCard>2</ExpCard>
              </Fragment>
            ))}
          </div>
        </ItemCard>

        <ItemCard title='Projects' icon={<LayoutList size={18} />}>
          <div className='columns-2 xs:columns-1 space-y-4 gap-4'>
            {projectlist.map((item, index) => (
              <Fragment key={index}>
                <ProCard>1</ProCard>
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
