'use client'
import { memo } from "react"

const Tag = memo(({ children }: { children: React.ReactNode }) => {
  return <div className='text-sm px-2 py-[2px] dark:bg-neutral-800 rounded-md'>{children}</div>
}
)
export default Tag
