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
    addNewLink: (state, action: PayloadAction<link>) => {
      state.links.push(action.payload);
    },
    updateLink: (state, action: PayloadAction<link>) => {
      const copyState = state.links.slice();
      const linkIndex = state.links.findIndex(
        (link) => link.id === action.payload.id
      );
      const updatedLink: link = { ...action.payload };
      copyState[linkIndex] = updatedLink;
      state.links = copyState;
    },
    deleteLink: (state, action: PayloadAction<number>) => {
      const copyState = state.links.slice();
      const linkIndex = state.links.findIndex(
        (link) => link.id === action.payload
      );
      copyState.splice(linkIndex, 1);
      state.links = copyState;
    },
  },
});

export const linksReducer = linksSlice.reducer;
export const linksActions = linksSlice.actions;
