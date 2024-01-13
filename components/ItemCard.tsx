const ItemCard = ({
  title = ' Title',
  icon,
  children,
}: {
  title: String
  icon?: React.ReactNode
  children?: React.ReactNode
}) => {
  return (
    <div className='my-8'>
      <div className='inline-block relative'>
        <div className='flex items-center text-neutral-200'>
          <span className='text-2xl font-bold'>{title}</span>
          {icon && <span className='ml-2'>{icon}</span>}
        </div>
        <div className='w-full border-t-[3px] border-neutral-700/50 rounded-full'></div>
      </div>
      <div className='mt-3 text-neutral-400'>{children}</div>
    </div>
  )
}

export default ItemCard
