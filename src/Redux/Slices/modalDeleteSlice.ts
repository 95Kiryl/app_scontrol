import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

const modalDeleteSlice = createSlice({
  name: 'modalDelete',
  initialState,
  reducers: {
    openModalDelete: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export const { openModalDelete } = modalDeleteSlice.actions;

export default modalDeleteSlice.reducer;