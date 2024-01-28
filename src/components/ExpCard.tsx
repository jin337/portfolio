'use client'
import { memo } from 'react'
import { format, differenceInYears, differenceInMonths, addMonths } from 'date-fns';

import { useLocal } from '@/hooks/i18n';
import Tag from '@/components/Tag'

const diffTime = (from: string, to: string) => {
  const startDate = new Date(from);
  const endDate = addMonths(new Date(to), 1);
  const years = differenceInYears(endDate, startDate);
  const months = differenceInMonths(endDate, startDate) % 12;
  const yearString = years ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthString = months ? `${months} month${months > 1 ? 's' : ''}` : '';
  const diff = `${yearString} ${monthString}`.trim();
  return diff;
}

const ExpCard = memo(({ item }: { item: any }) => {
  const fullTimeText = useLocal('full_time');
  const partTimeText = useLocal('part_time');

  return (
    <div className='text-md font-medium border-dashed border rounded-md border-neutral-600 group/item hover:border-solid'>
      <div className='p-4 group-hover/item:dark:bg-neutral-800/[0.5] rounded-md'>
        <div className='flex'>
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
              <span>{item.job_type == 1 ? fullTimeText : partTimeText}</span>
              <span>•</span>
              <span>{item.base}</span>
            </div>
            <div className='text-sm space-x-1'>
              <span>{format(new Date(item.start_form), 'MMM yyyy')}</span>
              <span>-</span>
              <span>{format(new Date(item.end_to), 'MMM yyyy')}</span>
              <span>•</span>
              <span>{diffTime(item.start_form, item.end_to)}</span>
            </div>
          </div>
        </div>
        <div className='text-base border-t border-dashed border-neutral-600 mt-2 pt-2 group-hover/item:border-solid'>
          {item.description?.map((e: string, i: number) => <p key={i}>&bull;&nbsp;&nbsp;{e}</p>)}
        </div>
        <div className='flex flex-wrap border-t border-dashed border-neutral-600 mt-2 pt-2 gap-1 group-hover/item:border-solid'>
          <span className='text-base'>Skills:</span>
          {item.tag_list.map((e: any, i: any) => (
            <Tag key={i}>{e}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
})

export default ExpCard
