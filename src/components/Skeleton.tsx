'use client'
import { SkeletoProp } from '@/types/user'

// 组类型
const Group = ({ group = 1, className, children }: SkeletoProp) => {
  const groupList = new Array(group).fill(' ')

  return (
    group != 1 ?
      <div className={`${className || ''}`}>
        {
          groupList.map((item, index) => <div key={index}>{children}</div>)
        }
      </div> : <div className="mb-8">{children}</div>
  )
}

// 文字类型
const TextType = ({ count = 2 }: SkeletoProp) => {
  const countList = new Array(count + 1).fill(' ')

  return (
    <div>
      {
        countList.map((item, index) => (
          <div key={index} className={`animate-shimmer rounded mb-2 h-5 ${index == 0 ? 'w-1/3' : ''} ${index === count ? 'w-9/12' : ''} `}></div>
        ))
      }
    </div>
  )
}

// 卡片类型
const CardType = ({ className }: SkeletoProp) => {
  return (
    <>
      <ImageType className={`${className} mb-2`} />
      <TextType />
    </>
  )
}

// 图片类型
const ImageType = ({ className }: SkeletoProp) => {
  return (
    <div className={`animate-shimmer rounded ${className || 'h-20'}`}></div>
  )
}

// 圆形图片类型
const CircleType = ({ className }: SkeletoProp) => {
  return (
    <div className={`animate-shimmer rounded-full ${className || 'size-2'}`}></div>
  )
}

const SkeletonWrapper = ({ children, loading, variant = 'text', group = 1, groupClassName, ...rest }: SkeletoProp) => {
  return loading ? (
    <>
      {variant === 'text' && <Group group={group} className={`${groupClassName}`}><TextType {...rest} /></Group >}
      {variant === 'image' && <Group group={group} className={`${groupClassName}`}><ImageType {...rest} /></Group>}
      {variant === 'circle' && <Group group={group} className={`${groupClassName}`}><CircleType {...rest} /></Group>}
      {variant === 'card' && <Group group={group} className={`${groupClassName}`}><CardType {...rest} /></Group>}
    </>
  ) : children
};

export default SkeletonWrapper
