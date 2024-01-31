'use client'
import { Fragment, memo } from 'react'
import { Github } from 'lucide-react'

const ProCard = memo(({ item }: { item: any }) => {
  return (
    <div className='break-inside-avoid text-md font-medium border-dashed border rounded-md border-neutral-600 group/item hover:border-solid'>
      <div className='group-hover/item:dark:bg-neutral-800/[0.5]'>
        <div className='cursor-pointer overflow-hidden rounded-md'>
          <a href={item.link} target='_blank'>
            <picture>
              <img
                className='w-full h-48 object-cover duration-300 transition-all group-hover/item:scale-110'
                src={item.cover}
                alt='cover'
              />
            </picture>
          </a>
        </div>
        <div className='p-2'>
          <div className='flex items-center justify-between'>
            <span className='text-lg font-bold'>{item.project_name}</span>
            <a
              href={item.github_link}
              target='_blank'
              className='size-10 rounded-md dark:border-neutral-600 flex items-center justify-center hover:border hover:dark:bg-neutral-900'
            >
              <Github size={18} />
            </a>
          </div>
          <div className='text-sm'>{item.description}</div>
          <div className='flex flex-wrap gap-1 mt-2'>
            {item.tag_list.map((e: any, i: any) => (
              <Fragment key={i}>
                <div className='text-sm border border-dashed rounded-md border-neutral-600 px-2 py-[2px] group-hover/item:border-solid'>
                  {e}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

export default ProCard
