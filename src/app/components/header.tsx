'use client'
import { Oswald } from 'next/font/google'
import { Moon, Sun, Languages } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/hooks/redux'
import { setNewLanguages } from '@/store/reducers/common'

const fantasy = Oswald({
  weight: '600',
  subsets: ['latin'],
})

const Header = () => {
  const dispatch = useAppDispatch()
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [languages, setLanguages] = useState<string>('en');

  // 初始化
  useEffect(() => {
    // 获取存储语言
    const savedLangage = localStorage.getItem('languageType');
    const isLangage = savedLangage === null ? languages : JSON.parse(savedLangage);
    toggleLanguage(isLangage == 'en' ? 'cn' : 'en')

    // 获取存储主题
    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode === null ? true : savedMode === 'true';
    if (darkMode !== isDarkMode) {
      toggleDarkMode(isDarkMode)
    }
  }, []);

  // 切换主题
  const toggleDarkMode = (mode: boolean) => {
    setDarkMode(mode);
    if (mode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', mode.toString());
  };
  // 切换语言
  const toggleLanguage = (type: string) => {
    const newLanguages = type === 'en' ? 'cn' : 'en'
    setLanguages(newLanguages);
    dispatch(setNewLanguages(newLanguages))
    localStorage.setItem('languageType', JSON.stringify(newLanguages))
  }

  return (
    <header className='w-full h-16 px-4 shadow-sm shadow-neutral-700 bg-neutral-900/60 fixed top-0 left-0 right-0 z-50'>
      <div className='wrap-container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='size-16 flex items-center justify-center'>
            <span className={`text-neutral-50 text-3xl ${fantasy.className}`}>Jin</span>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center text-neutral-50 cursor-pointer' onClick={() => toggleLanguage(languages)}>
              <Languages size={20} />
              <span className='text-base ml-1'>{languages === 'en' ? 'EN' : 'CN'}</span>
            </div>
            <div className='flex items-center justify-center text-neutral-50 cursor-pointer size-7 hover:bg-neutral-700 rounded ml-5'
              onClick={() => toggleDarkMode(!darkMode)}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
