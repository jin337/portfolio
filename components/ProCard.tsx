import Image from 'next/image'
import bannerbg from '@/public/images/background.jpg'
import { Fragment } from 'react'

const ProCard = ({ item }: { item: any }) => {
  return (
    <div className='text-md text-neutral-400 font-medium border-dashed border rounded-md border-neutral-500 group/item hover:border-solid'>
      <div className='group-hover/item:bg-neutral-800 rounded-md inline-table'>
        <div className='cursor-pointer overflow-hidden'>
          <Image className='object-cover duration-300 transition-all hover:scale-110' src={bannerbg} alt='logo' />
        </div>
        <div className='p-2'>
          <div className='text-lg font-bold'>{item.project_name}</div>
          <div className='text-sm'>{item.description}</div>
          <div className='flex flex-wrap gap-1 mt-2'>
            {item.tag_list.map((e: any, i: any) => (
              <Fragment key={i}>
                <div className='text-sm border border-dashed rounded-md border-neutral-500 px-2 py-[2px] group-hover/item:border-solid'>
                  {e}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProCard
