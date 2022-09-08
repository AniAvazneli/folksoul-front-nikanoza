import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bandSlice } from './slices';

const rootReducer = combineReducers({ band: bandSlice.reducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
