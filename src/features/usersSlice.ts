import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/User';

type UsersState = {
  items: User[];
  expanded: boolean;
};

const initialState: UsersState = {
  items: [],
  expanded: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (users, action: PayloadAction<User[]>) => {
      users.items.push(...action.payload);
    },
    setExpanded: (state, action: PayloadAction<boolean>) => ({
      ...state,
      expanded: action.payload,
    }),
  },
});

export default usersSlice.reducer;
export const { setUsers, setExpanded } = usersSlice.actions;
