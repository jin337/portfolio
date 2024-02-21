'use client'
import { UserProp } from '@/types/user'

const Tag = ({ children }: UserProp) => {
  return <div className='text-sm px-2 py-[2px] dark:bg-neutral-800 border dark:border-neutral-800 rounded-md'>{children}</div>
}
export default Tag
