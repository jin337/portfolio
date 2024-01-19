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
          <div key={index} className={`animate-shimmer delay-100 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 mb-2 rounded
          ${className || 'h-5'} ${index == 0 ? 'w-1/3' : ''} ${index === count ? 'w-9/12' : ''}`}></div>
        ))
      }
      {
        variant === 'image' && <div className={`animate-shimmer delay-100 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 mb-2 rounded ${className || 'h-20'}`}></div>
      }
      {
        variant === 'circle' && <div className={`animate-shimmer delay-100 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 mb-2 rounded-full ${className || 'size-2'}`}></div>
      }
    </div>
  );
};


const SkeletonWrapper = ({ loading, count = 3, variant = 'text', className, children }: Prop) => {

  return loading ? <Skeleton count={count} variant={variant} className={className} /> : children
};

export default SkeletonWrapper
