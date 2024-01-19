import { configureStore } from '@reduxjs/toolkit';
import commonReducer from '@/store/reducers/common';

export const store = configureStore({
  reducer: {
    common: commonReducer
  },
});

// 定义根 state 类型
export type RootState = ReturnType<typeof store.getState>;

// 定义 dispatch 类型
export type AppDispatch = typeof store.dispatch;
