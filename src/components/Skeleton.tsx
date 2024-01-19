'use client'
import { ReactNode } from "react";

interface Prop {
  loading?: boolean
  count?: number
  variant?: string
  className?: string
  children?: ReactNode
}

const Skeleton = ({ count, variant, className }: { count: number, variant: string, className?: string }) => {
  const countList = new Array(count + 1).fill('')
  return (
    <div className="mb-8">
      {
        variant === 'text' && countList.map((item, index) => (
          <div key={index} className={`animate-pulse mb-2 bg-gray-300 rounded ${className || 'h-5'} ${index == 0 ? 'w-1/3' : 'w-full'} ${index === count ? 'w-9/12' : 'w-full'}`}></div>
        ))
      }
      {
        variant === 'image' && <div className={`animate-pulse mb-2 bg-gray-300 rounded ${className || 'h-20'}`}></div>
      }
      {
        variant === 'circle' && <div className={`animate-pulse mb-2 bg-gray-300 rounded-full ${className || 'size-2'}`}></div>
      }
    </div>
  );
};


const SkeletonWrapper = ({ loading, count = 3, variant = 'text', className, children }: Prop) => {

  return loading ? <Skeleton count={count} variant={variant} className={className} /> : children
};

export default SkeletonWrapper
