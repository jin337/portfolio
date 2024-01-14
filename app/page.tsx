import Image from 'next/image'
import { ScanFace, Cookie, LayoutList, LibraryBig, Cable, Mail, Github, Linkedin } from 'lucide-react'

import ItemCard from '@/components/ItemCard'
import ExpCard from '@/components/ExpCard'
import ProCard from '@/components/ProCard'
import Button from '@/components/Button'

import bannerbg from '@/public/background.jpg'
import { Fragment } from 'react'

const user = {
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
      <div className='relative w-full h-36 sm:h-44 md:h-52'>
        <Image className='object-cover' src={bannerbg} priority fill alt='background' />
      </div>

      <main className='wrap-container mx-auto px-4'>
        <div className='flex flex-wrap justify-between items-center -mt-16'>
          <div className='size-48 relative rounded-full overflow-hidden border-8 border-neutral-900'>
            <Image className='object-cover' src={bannerbg} priority fill alt='cover' />
          </div>
          <div className='flex text-neutral-100'>
            <a
              href={user.github_link}
              target='_blank'
              className='size-10 rounded-md border-neutral-600 flex items-center justify-center hover:border hover:bg-neutral-800'
            >
              <Linkedin size={18} />
            </a>
            <a
              href={user.linkedin_link}
              target='_blank'
              className='size-10 rounded-md border-neutral-600 flex items-center justify-center hover:border hover:bg-neutral-800'
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className='mt-4'>
          <h3 className='text-xl text-neutral-400'>Hi, my name is</h3>
          <h1 className='text-5xl font-black'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-teal-500 to-cyan-500'>
              {user.name}
            </span>
          </h1>
          <h2 className='text-2xl text-neutral-100 mt-2'>{user.slogn}</h2>
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
