import Image from 'next/image'
import Tag from '@/components/Tag'
import logo from '@/public/images/sls.png'

const ExpCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='text-md text-neutral-400 font-medium border-dashed border rounded-md border-neutral-500 group/item hover:border-solid'>
      {children}
      <div className='p-4 group-hover/item:bg-neutral-800/[.1] rounded-md'>
        <div className='flex'>
          <div className='size-16 border-dashed border rounded-md border-neutral-500 group-hover/item:border-solid'>
            <Image className='object-cover p-2' src={logo} alt='logo' />
          </div>
          <div className=' ml-4'>
            <div className='text-lg font-bold'>Software Developer</div>
            <div className='text-base'>Full-time•Shanghai</div>
            <div className='text-sm'>Dec 2021-Jun 2022• 7 months</div>
          </div>
        </div>
        <div className='text-base border-t border-dashed border-neutral-500 mt-2 pt-2 group-hover/item:border-solid'>
          Hello, I&lsquo;m a software developer at The Queen&lsquo;s English, working on a diverse range of products from
          designing and developing new features to maintaining and optimizing existing ones. I have created several features
          utilized by thousands of users and enjoy collaborating with my team to find innovative solutions to challenging
          problems. It&lsquo;s a rewarding role and being part of a dynamic team that&lsquo;s constantly pushing the boundaries of
          software development is exciting.
        </div>
        <div className='flex border-t border-dashed border-neutral-500 mt-2 pt-2 gap-1 group-hover/item:border-solid'>
          <span className='text-base'>Skills:</span>
          <Tag>HTML</Tag>
          <Tag>css</Tag>
        </div>
      </div>
    </div>
  )
}

export default ExpCard
