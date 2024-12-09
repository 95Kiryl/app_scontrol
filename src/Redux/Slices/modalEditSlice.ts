import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

const modalEditSlice = createSlice({
  name: 'modalEdit',
  initialState,
  reducers: {
    openModalEdit: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export const { openModalEdit } = modalEditSlice.actions;

export default modalEditSlice.reducer;
