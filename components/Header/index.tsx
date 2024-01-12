import styles from './index.module.scss'

const Header = () => {
  return (
    <header>
      <div className='h-16 backdrop-blur-lg fixed top-0 left-0 right-0 shadow-sm shadow-neutral-700 z-50 bg-neutral-900/60'>
        <div className='wrap-container mx-auto h-full flex flex-row justify-between items-center px-20'>
          <div className='cursor-pointer'>
            <div className='text-3xl'>
              <span className='header-title'>Jin</span>
            </div>
          </div>
        </div>
      </div>
      <div className='h-16 w-full bg-neutral-900'></div>
    </header>
  )
}

export default Header
