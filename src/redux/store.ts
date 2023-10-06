import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import transparencyReducer from './transparency/transparency';
// Import other reducers as needed

const store = configureStore({
  reducer: {
    transparency: transparencyReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
