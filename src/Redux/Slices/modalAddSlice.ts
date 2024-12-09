import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

const modalAddSlice = createSlice({
  name: 'modalAdd',
  initialState,
  reducers: {
    openModalAdd: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export const { openModalAdd } = modalAddSlice.actions;

export default modalAddSlice.reducer;
