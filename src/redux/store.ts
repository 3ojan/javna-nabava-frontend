import { configureStore, ThunkAction, Action, ThunkDispatch } from '@reduxjs/toolkit';
import transparencyReducer from './transparency/transparency';
import { AnyAction } from 'redux';

// Import other reducers as needed

const store = configureStore({
  reducer: {
    transparency: transparencyReducer,
    // Add other reducers here
  },
});

// Extend Dispatch to understand thunks
// export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
