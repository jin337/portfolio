import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StateProps } from '@/types/user';

const initialState: StateProps = {
  languageType: 'en',
  i18nContent: {}
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
    }
  }
})

export const { setNewLanguages, setI18nContent } = common.actions

export default common.reducer
