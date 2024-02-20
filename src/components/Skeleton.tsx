'use client'
import { useEffect, useState } from "react";
import { SkeletoProp } from '@/types/user'

// 组类型
const Group = ({ group = 1, children, ...rest }: SkeletoProp) => {
  const [groupList, setGroupList] = useState([])

  useEffect(() => {
    let groupNumber: number[] = new Array(group).fill(' ')
    setGroupList(groupNumber as any)
  }, [group])

  return (
    groupList.map((item, index) => <div key={index} {...rest}>{children}</div>)
  )
}

// 文字类型
const TextType = ({ className, count = 2, ...rest }: SkeletoProp) => {
  const [countList, setCountList] = useState([])

  useEffect(() => {
    let countNumber: number[] = new Array(count + 1).fill(' ')
    setCountList(countNumber as any)
  }, [count])

  return (
    <Group className="mb-4" {...rest}>
      {
        countList.map((item, index) => (
          <div key={index} className={`animate-shimmer delay-100 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 mb-2 rounded
        ${className || 'h-5'} ${index == 0 ? 'w-1/3' : ''} ${index === count ? 'w-9/12' : ''} `}></div>
        ))
      }
    </Group>
  )
}

// 卡片类型
const CardType = ({ className, count = 2, ...rest }: SkeletoProp) => {
  const [countList, setCountList] = useState([])

  useEffect(() => {
    let countNumber: number[] = new Array(count + 1).fill(' ')
    setCountList(countNumber as any)
  }, [count])

  return (
    <div className='columns-1 xs:columns-2 space-y-4 gap-4' >
      <Group {...rest}>
        <ImageType className={className} />
        {
          countList.map((item, index) => (
            <div key={index} className={`animate-shimmer delay-100 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 mb-2 rounded h-5 ${index == 0 ? 'w-1/3' : ''} ${index === 2 ? 'w-9/12' : ''}`}></div>
          ))
        }
      </Group>
    </div>
  )
}

// 图片类型
const ImageType = ({ className }: SkeletoProp) => {
  return (
    <div className={`animate-shimmer delay-100 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 mb-2 rounded ${className || 'h-20'}`}></div>
  )
}

// 圆形图片类型
const CircleType = ({ className }: SkeletoProp) => {
  return (
    <div className={`animate-shimmer delay-100 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 mb-2 rounded-full ${className || 'size-2'}`}></div>
  )
}

const SkeletonWrapper = ({ loading, children, variant = 'text', ...rest }: SkeletoProp) => {
  return loading ? (
    <div className="mb-8">
      {variant === 'text' && <TextType  {...rest} />}
      {variant === 'image' && <ImageType  {...rest} />}
      {variant === 'circle' && <CircleType  {...rest} />}
      {variant === 'card' && <CardType {...rest} />}
    </div>
  ) : children
};

export default SkeletonWrapper
