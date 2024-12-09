import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const idSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { setId } = idSlice.actions;

export default idSlice.reducer;
