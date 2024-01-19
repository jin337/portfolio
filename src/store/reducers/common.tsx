import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StateProps {
  langageType: string
}

const initialState: StateProps = {
  langageType: 'en'
}

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setNewLanguages: (state, action: PayloadAction<string>) => {
      state.langageType = action.payload
    }
  }
})

export const { setNewLanguages } = common.actions

export default common.reducer
