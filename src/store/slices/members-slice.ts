import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { member } from 'types';

const initialState: { members: member[] } = {
  members: [],
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    updateMembers: (state, action: PayloadAction<member[]>) => {
      state.members = action.payload;
    },
  },
});

export const membersActions = membersSlice.actions;
export const membersReducer = membersSlice.reducer;
