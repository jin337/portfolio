import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StateProps } from '@/types/user';

const initialState: StateProps = {
  languageType: 'en',
  i18nContent: {},
  userContent: {},
}

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setNewLanguages: (state, action: PayloadAction<string>) => {
      state.languageType = action.payload
    },
    setI18nContent: (state, action: PayloadAction<{ type: string, content: any }>) => {
      const { type, content } = action.payload;
      state.i18nContent[type] = content;
    },
    setUserContent: (state, action: PayloadAction<any>) => {
      state.userContent = action.payload
    }
  }
})

export const { setNewLanguages, setI18nContent, setUserContent } = common.actions

export default common.reducer
