import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: string;
  name: string;
  status: string;
  date: string;
};

type UsersState = {
  list: User[];
};

const initialState: UsersState = {
  list: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.list.push({
        id: action.payload.id,
        name: action.payload.name,
        status: action.payload.status,
        date: action.payload.date,
      });
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((user) => user.id !== action.payload);
    },
    newEditUser: (state, action: PayloadAction<User>) => {
      state.list = state.list.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
  },
});

export const { addUser, removeUser, newEditUser } = userSlice.actions;

export default userSlice.reducer;
