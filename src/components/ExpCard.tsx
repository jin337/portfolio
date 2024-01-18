'use client'
import moment from 'moment'
import { Fragment, memo } from 'react'
import Tag from '@/components/Tag'

const diffTime = (from: string, to: string) => {
  let startDate = moment(from)
  let endDate = moment(to)
  const duration = moment.duration(endDate.add(1, 'month').diff(startDate))
  const years = duration.years()
  const months = duration.months()
  const diff = `${years ? `${years} year${years > 1 ? 's' : ''}` : ''} ${months ? `${months} month${months > 1 ? 's' : ''}` : ''}`
  return diff
}

const ExpCard = memo(({ item }: { item: any }) => {

  return (
    <div className='text-md font-medium border-dashed border rounded-md border-neutral-600 group/item hover:border-solid'>
      <div className='p-4 group-hover/item:dark:bg-neutral-800/[0.5] rounded-md'>
        <div className='flex flex-wrap'>
          <div className='flex size-16 border-dashed border rounded-md border-neutral-600 group-hover/item:border-solid mr-4'>
            <a href={item.link} target='_blank' className='flex items-center'>
              <picture className='flex items-center'>
                <img className='object-contain p-2' src={item.logo} alt='logo' />
              </picture>
            </a>
          </div>
          <div>
            <div className='text-lg font-bold'><a href={item.link} target='_blank'>{item.position}</a></div>
            <div className='text-base space-x-1'>
              <span>{item.job_type == 1 ? 'Full-time' : 'Part-time'}</span>
              <span>•</span>
              <span>{item.base}</span>
            </div>
            <div className='text-sm space-x-1'>
              <span>{moment(item.start_form).format('MMM YYYY')}</span>
              <span>-</span>
              <span>{moment(item.end_to).format('MMM YYYY')}</span>
              <span>•</span>
              <span>{diffTime(item.start_form, item.end_to)}</span>
            </div>
          </div>
        </div>
        <div className='text-base border-t border-dashed border-neutral-600 mt-2 pt-2 group-hover/item:border-solid'>
          {item.description?.map((e: string, i: number) => <p key={i}>{e}</p>)}
        </div>
        <div className='flex flex-wrap border-t border-dashed border-neutral-600 mt-2 pt-2 gap-1 group-hover/item:border-solid'>
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
})

export default ExpCard
