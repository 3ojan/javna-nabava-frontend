import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { AnyAction } from 'redux';
import { base_url } from '../constants';
import axiosClient from '../../axios-client.js';
import { debug } from 'console';
import { AppDispatch } from '../store';
import { useSelector } from 'react-redux';
import { getPlaceName } from 'src/helper/domainHelper.js';

export interface TransparencyState {
  data: any | null;
  loading: boolean;
  errorMessage: string | null;
  searchValue: string;
  selectedYear: string;
  isDataLoaded: boolean;
  placeName: string;
}

export interface RootState {
  trasparency: TransparencyState
  searchValue: string;
  selectedYear: string;
  errorMessage: string | null;
}

interface Transparency {
  data: any;
  error: null;
  value: string;
}

// Slice
const slice = createSlice({
  name: 'transparency',
  initialState: {
    data: null, 
    loading: false,
    errorMessage: null,
    searchValue: "",
    isDataLoaded: false,
    selectedYear: new Date().getFullYear().toString(),
  } as  TransparencyState,
  reducers: {
    loadSuccess: (state, action: PayloadAction<Transparency>) => {
      return {
        ...state,
        isDataLoaded: true,
        data: action.payload,
        error: null,
      };

      // state.data = action.payload;
      //   state.error = null; 
      // Reset error on login success
    },
    onChangeSearchBarValue: (state, action: PayloadAction<string>) => { //PayloadAction<Transparency>
      state.searchValue = action.payload;
    }, 
    onChangeSelectYear: (state, action: PayloadAction<string>) => {
      state.selectedYear = action.payload;
    },
  },
});
export default slice.reducer;

// Actions
const { loadSuccess, onChangeSearchBarValue, onChangeSelectYear} = slice.actions;

export const getData = (year: string): ThunkAction<Promise<void>, RootState, void, AnyAction> => async dispatch => {
  try {
    //this is temporary, needs to work for strings that do not have "opcina-" in front
    const placeName = getPlaceName();
    const res = await axiosClient.get(`/opcina-${placeName}/transparentnost?year=` + year);

    dispatch(loadSuccess(res.data));
  } catch (e: any) {
    console.log(e);
  }
};

export const getSearchData = (year: string, value: string) => async (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  try {
    const placeName = getPlaceName();

    const res = await axiosClient.get(`/opcina-${placeName}/transparentnost?year=` + year + '&keyword=' + value);
    dispatch(loadSuccess(res.data));
  } catch (e: any) {
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
  dispatch(onChangeSearchBarValue(value));
};

export const changeSelectedYearValue = (value: string) => (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  dispatch(onChangeSelectYear(value));
};
