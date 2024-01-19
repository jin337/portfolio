'use client'
import { Provider } from 'react-redux';
import { store } from '@/store/index';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';


export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  )
}
