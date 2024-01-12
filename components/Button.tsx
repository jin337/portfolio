const Button = ({ size = 'base', icon, children }: { size?: String; icon?: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <a
        href=''
        className={`${size == 'base' && 'py-2'} ${
          size == 'sm' && 'py-1'
        }  border px-3 rounded-md border-neutral-600 flex items-center hover:bg-neutral-800`}
      >
        {icon}
        <span className='text-base mx-2 text-neutral-100'>{children}</span>
      </a>
    </div>
  )
}

export default Button
