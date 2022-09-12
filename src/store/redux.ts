import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bandReducer, membersReducer, linksReducer } from './slices';

const rootReducer = combineReducers({
  band: bandReducer,
  members: membersReducer,
  links: linksReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
