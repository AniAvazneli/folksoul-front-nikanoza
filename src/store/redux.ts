import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer, bandReducer, membersReducer } from './slices';

const rootReducer = combineReducers({
  band: bandReducer,
  members: membersReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
