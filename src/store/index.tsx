import { configureStore } from '@reduxjs/toolkit';
import commonReducer from '@/store/reducers/common';


export const store = configureStore({
  reducer: {
    common: commonReducer
  },
});
