'use client'
import Image from 'next/image';
import { memo } from 'react';

const Banner = memo(({ url }: { url?: string }) => {
  return (
    <div className='relative w-full h-36 sm:h-44 md:h-52 select-none'>
      {url && <Image className='object-cover' src={url} fill alt='background' />}
    </div>
  );
});

export default Banner;
