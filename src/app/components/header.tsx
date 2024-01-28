'use client'
import { Oswald } from 'next/font/google'
import { Moon, Sun, Languages } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setNewLanguages, setI18nContent } from '@/store/reducers/common'

const fantasy = Oswald({
  weight: '600',
  subsets: ['latin'],
})

const Header = () => {
  const common = useAppSelector(state => state.common.languageType)
  const i18nContent = useAppSelector(state => state.common.i18nContent)
  const dispatch = useAppDispatch()
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [languages, setLanguages] = useState<string>('en');

  // 初始化
  useEffect(() => {
    // 获取存储主题
    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode === null ? true : savedMode === 'true';
    setDarkMode(isDarkMode);
    applyDarkMode(isDarkMode);
    // 获取存储语言
    const savedLangage = localStorage.getItem('language');
    const isLangage = savedLangage === null ? common : savedLangage;
    setLanguages(isLangage);
    loadTranslations('en')
    loadTranslations('cn')

    if (isLangage !== common) {
      dispatch(setNewLanguages(isLangage))
    }
  }, []);

  // 获取语言数据
  const loadTranslations = async (type: string) => {
    const currentTranslations = i18nContent[type];
    if (currentTranslations) {
      return;
    }
    const response = await fetch(`/i18n/${type}/common.json`);
    if (!response.ok) {
      throw new Error(`Translation file not found: ${response.statusText}`);
    }
    const messages = await response.json();
    dispatch(setI18nContent({ type, content: messages }));
  };

  // 主题class切换
  const applyDarkMode = (mode: boolean) => {
    if (mode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  // 切换主题
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    applyDarkMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', newMode.toString());
    }
  };
  // 切换语言
  const toggleLanguage = () => {
    const newLanguages = languages === 'en' ? 'cn' : 'en'
    setLanguages(newLanguages);
    dispatch(setNewLanguages(newLanguages))
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguages.toString());
    }
  }

  return (
    <header className='w-full h-16 px-4 shadow-sm shadow-neutral-700 bg-neutral-900/60 fixed top-0 left-0 right-0 z-50'>
      <div className='wrap-container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='size-16 flex items-center justify-center'>
            <span className={`text-neutral-50 text-3xl ${fantasy.className}`}>Jin</span>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center text-neutral-50 cursor-pointer' onClick={toggleLanguage}>
              <Languages size={20} />
              <span className='text-base ml-1'>{languages === 'en' ? 'EN' : 'CN'}</span>
            </div>
            <div className='flex items-center justify-center text-neutral-50 cursor-pointer size-7 hover:bg-neutral-700 rounded ml-5' onClick={toggleDarkMode}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
