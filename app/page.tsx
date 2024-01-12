import Image from 'next/image'
import bannerbg from '@/public/images/background.jpg'

export default function Home() {
  return (
    <main className='wrap-container'>
      <div className='relative w-full h-36 sm:h-44 md:h-52'>
        <Image className='banner object-cover' src={bannerbg} fill alt='background' />
      </div>
      <div className='px-5 pt-5 space-y-0'>
        <h3 className='text-lg md:text-xl text-neutral-400 font-medium'>Hi, my name is</h3>
        <h1 className='text-4xl md:text-5xl font-bold gradient-linear-text'>Jinjin You Manish Prajapat</h1>
        <h2 className='text-xl md:text-2xl text-red pt-2 border-b-transparent hover:border-b-[2px 4px 6px]'>
          A passionate full-stack developer.
        </h2>
      </div>
      <div className='component-box my-8 px-5'>
        <div className='header-box relative inline-block mb-1'>About Me</div>
        <div className='contents-box'></div>
      </div>
      <div className='component-box my-8 px-5'>
        <div className='header-box relative inline-block mb-1'>Skills</div>
        <div className='contents-box'></div>
      </div>
      <div className='component-box my-8 px-5'>
        <div className='header-box relative inline-block mb-1'>Experience</div>
        <div className='contents-box'></div>
      </div>
      <div className='component-box my-8 px-5'>
        <div className='header-box relative inline-block mb-1'>Projects</div>
        <div className='contents-box'></div>
      </div>
      <div className='component-box my-8 px-5'>
        <div className='header-box relative inline-block mb-1'>Contact Me</div>
        <div className='contents-box'></div>
      </div>
    </main>
  )
}
