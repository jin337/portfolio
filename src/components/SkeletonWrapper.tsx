'use client'

import { ReactNode } from "react";

const SkeletonLayout = () => {
  return (
    <div className="animate-pulse mb-4">
      <div className="h-52 bg-gray-300 rounded"></div>
    </div>
  );
};


const SkeletonWrapper = ({ loading, children }: { loading: boolean, children: ReactNode }) => {

  return loading ? <SkeletonLayout /> : children
};

export default SkeletonWrapper
