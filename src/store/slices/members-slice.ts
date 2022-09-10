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
    addMember: (state, action: PayloadAction<member>) => {
      state.members.push(action.payload);
    },
    updateMember: (state, action: PayloadAction<member>) => {
      const copyState = state.members.slice();
      const memberIndex = state.members.findIndex(
        (singer) => singer.id === action.payload.id
      );
      const updatedMember = { ...action.payload };
      copyState[memberIndex] = updatedMember;
      state.members = copyState;
    },
    deleteMember: (state, action: PayloadAction<number>) => {
      const memberIndex = state.members.findIndex(
        (singer) => singer.id === action.payload
      );
      const copyState = state.members.slice();
      copyState.splice(memberIndex, 1);
      state.members = copyState;
    },
  },
});

export const membersActions = membersSlice.actions;
export const membersReducer = membersSlice.reducer;
