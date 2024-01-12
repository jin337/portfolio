import { Fragment } from 'react'

const ProCard = ({ item }: { item: any }) => {
  return (
    <div className='text-md text-neutral-400 font-medium border-dashed border rounded-md border-neutral-600 group/item hover:border-solid'>
      <div className='group-hover/item:bg-neutral-800/[0.5] inline-table'>
        <div className='cursor-pointer overflow-hidden rounded-md'>
          <picture>
            <img
              className='w-full h-48 object-cover duration-300 transition-all group-hover/item:scale-110'
              src={item.cover}
              alt='cover'
            />
          </picture>
        </div>
        <div className='p-2'>
          <div className='text-lg font-bold'>{item.project_name}</div>
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
}

export default ProCard
