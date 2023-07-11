import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';
import { base_url } from '../constants';
import searchResultsData from "../../mockData/searchResult.json";

export interface TransparencyState {
  data: any | null;
  loading: boolean;
}
interface Transparency {
  data: any;
  error:null,
}



// Slice
const slice = createSlice({
  name: 'transparency',
  initialState: {
    data: searchResultsData,
    loading: false,
  } as TransparencyState,
  reducers: {
    loadSuccess: (state, action: PayloadAction<Transparency>) => {
      state.data = action.payload;
      state.error = null; // Reset error on login success
    },
  },
});
export default slice.reducer;

// Actions
const { loadSuccess } = slice.actions;

export const getData = ({pagination }: { pagination:any }) => async (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  try {
    const res = await axios.post(`....someUrlTo/Load`, { pagination });
    dispatch(loadSuccess(res.data));
  } catch (e: any) {
    // dispatch(loginFailure(e.message)); // Dispatch loginFailure with the error message
  }
};

