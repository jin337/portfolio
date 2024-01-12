import Image from 'next/image'
import bannerbg from '@/public/images/background.jpg'

const ProCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='duration-300 transition-all text-md text-neutral-400 font-medium border-dashed border rounded-md border-neutral-500 group/item hover:border-solid'>
      {children}
      <div className='group-hover/item:bg-neutral-800/[.1] rounded-md'>
        <div className=' cursor-pointer'>
          <Image className='object-cover' src={bannerbg} alt='logo' />
        </div>
        <div className='p-2'>
          <div className='text-lg font-bold'>Software Developer</div>
          <div className='text-sm'>Dec 2021-Jun 2022• 7 months</div>
          <div className='flex gap-1 mt-2'>
            <div className='text-sm border border-dashed rounded-md border-neutral-500 px-1 py-[2px] group-hover/item:border-solid'>
              HTML
            </div>
            <div className='text-sm border border-dashed rounded-md border-neutral-500 px-1 py-[2px] group-hover/item:border-solid'>
              css
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProCard
