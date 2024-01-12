import Image from 'next/image'
import Tag from '@/components/Tag'
import { Fragment } from 'react'

const ExpCard = ({ item }: { item: any }) => {
  return (
    <div className='text-md text-neutral-400 font-medium border-dashed border rounded-md border-neutral-500 group/item hover:border-solid'>
      <div className='p-4 group-hover/item:bg-neutral-800 rounded-md'>
        <div className='flex'>
          <div className='size-16 border-dashed border rounded-md border-neutral-500 group-hover/item:border-solid'>
            <Image className='object-cover p-2' src={item.logo} alt='logo' />
          </div>
          <div className=' ml-4'>
            <div className='text-lg font-bold'>{item.position}</div>
            <div className='text-base space-x-1'>
              <span>{item.job_type == 1 ? 'Full-time' : 'Part-time'}</span>
              <span>•</span>
              <span>{item.base}</span>
            </div>
            <div className='text-sm space-x-1'>
              <span>{item.time_form}</span>
              <span>-</span>
              <span>{item.time_to}</span>
              <span>•</span>
              <span>7 months</span>
            </div>
          </div>
        </div>
        <div className='text-base border-t border-dashed border-neutral-500 mt-2 pt-2 group-hover/item:border-solid'>
          {item.description}
        </div>
        <div className='flex flex-wrap border-t border-dashed border-neutral-500 mt-2 pt-2 gap-1 group-hover/item:border-solid'>
          <span className='text-base'>Skills:</span>
          {item.tag_list.map((e: any, i: any) => (
            <Fragment key={i}>
              <Tag>{e}</Tag>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExpCard
