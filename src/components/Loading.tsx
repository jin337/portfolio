export default function Loading() {
  return (
    <div className='w-full h-full fixed top-0 left-0  z-50 bg-neutral-100/50'>
      <div className='w-full h-full flex items-center justify-center'>
        <p className='text-neutral-100 text-4xl animate-spin'>🌀</p>
      </div>
    </div>
  )
}
