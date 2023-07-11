import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import transparencyReducer from '../redux/transparency/transparency';
// Import other reducers as needed

const store = configureStore({
  reducer: {
    transparency: transparencyReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
