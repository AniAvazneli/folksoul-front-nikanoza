import { createSlice } from '@reduxjs/toolkit';

const initialState: { token: string } = {
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, action) => {
      state.token = action.payload;
    },
    onLogout: (state) => {
      state.token = '';
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
