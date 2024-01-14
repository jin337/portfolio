import Image from 'next/image'

export default function Banner({ url }: { url: string }) {
  return (
    <div className='relative w-full h-36 sm:h-44 md:h-52 select-none'>
      <Image className='object-cover' src={url} priority fill sizes='100%' alt='background' />
    </div>
  )
}
