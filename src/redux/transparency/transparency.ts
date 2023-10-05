import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { base_url } from '../constants';
import axiosClient from '../../axios-client.js';
// import searchResultsMockData from "../../mockData/searchResult.json";
import { debug } from 'console';

export interface TransparencyState {
  data: any | null;
  loading: boolean;
  searchValue: string,
  selectedYear: string,
}
interface Transparency {
  data: any;
  error: null,
  value: string,
}

// Slice
const slice = createSlice({
  name: 'transparency',
  initialState: {
    data: null,  //here goes the data from the api
    loading: false,
    errorMessage: null,
    searchValue: "",
    selectedYear: "",
  } as TransparencyState,
  reducers: {
    loadSuccess: (state, action: PayloadAction<Transparency>) => {
      // debugger;
      console.log("action payload",action.payload);
      console.log("state",state);
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    
    // state.data = action.payload;
    //   state.error = null; 
      // Reset error on login success
    },
    onChangeSearchBarValue: (state, action: PayloadAction<Transparency>) => {
      state.searchValue = action.payload;
    },
    onChangeSelectYear: (state, action: PayloadAction<Transparency>) => {
      console.log("select year",action.payload);
      state.selectedYear = action.payload;
    },
  },
});
export default slice.reducer;

// Actions
const { loadSuccess, onChangeSearchBarValue, onChangeSelectYear, testCallback } = slice.actions;

export const getData = () => async (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  // debugger; 
  try {
    const res = await axiosClient.get(`/opcina-podcrkavlje/transparentnost`);
    dispatch(loadSuccess(res.data));
  } catch (e: any) {
    // dispatch(loginFailure(e.message)); // Dispatch loginFailure with the error message
    console.log(e);
  }
};

// export const getData = ({ pagination }: { pagination: any }) => async (
//   dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
// ) => {
// try {
//   const res = await axios.post(`....someUrlTo/Load`, { pagination });
//   dispatch(loadSuccess(res.data));
// } catch (e: any) {
//   // dispatch(loginFailure(e.message)); // Dispatch loginFailure with the error message
// }
// };

export const changeSearchBarValue = (value: string) => (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  debugger;
  dispatch(onChangeSearchBarValue(value));
};

export const changeSelectedYearValue = (value: string) => (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  debugger;
  dispatch(onChangeSelectYear(value));
};
