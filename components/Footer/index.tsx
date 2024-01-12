import styles from './index.module.scss'

const Footer = () => {
  return (
    <footer className='mx-auto my-4'>
      <div className='wrap-container text-center text-xs opacity-30'>
        &copy; {new Date().getFullYear()} Jinjin You. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
