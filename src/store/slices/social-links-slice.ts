import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { link } from 'types';

const initialState: { links: link[] } = {
  links: [],
};

const linksSlice = createSlice({
  name: 'social-links',
  initialState,
  reducers: {
    getLinksInfo: (state, action: PayloadAction<link[]>) => {
      state.links = action.payload;
    },
  },
});

export const linksReducer = linksSlice.reducer;
export const linksActions = linksSlice.actions;
