import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserEdit = {
  id: string;
  name: string;
  status: string;
  date: string;
};

type UsersEditState = {
  listEdit: UserEdit[];
};

const initialState: UsersEditState = {
  listEdit: [],
};

const userEditSlice = createSlice({
  name: 'userEdit',
  initialState,
  reducers: {
    setUserEdit: (state, action: PayloadAction<UserEdit>) => {
      state.listEdit.push({
        id: action.payload.id,
        name: action.payload.name,
        status: action.payload.status,
        date: action.payload.date,
      });
    },
    removeUserEditDate: (state) => {
      state.listEdit.pop();
    },
  },
});

export const { setUserEdit, removeUserEditDate } = userEditSlice.actions;

export default userEditSlice.reducer;
