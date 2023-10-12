import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { base_url } from '../constants';
import axiosClient from '../../axios-client.js';
import { debug } from 'console';

export interface TransparencyState {
  data: any | null;
  loading: boolean;
  searchValue: string;
  selectedYear: string;
  errorMessage: string | null;
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
    data: null, 
    loading: false,
    errorMessage: null,
    searchValue: "",
    selectedYear: "",
  } as  TransparencyState,
  reducers: {
    loadSuccess: (state, action: PayloadAction<Transparency>) => {
      // console.log("action payload",action.payload);
      return {
        ...state,
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
const { loadSuccess, onChangeSearchBarValue, onChangeSelectYear } = slice.actions;

export const getData = () => async (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  // debugger; 
  try {
    const res = await axiosClient.get(`/api/opcina-podcrkavlje/transparentnost`);
    
    dispatch(loadSuccess(res.data));
  } catch (e: any) {
    // dispatch(loginFailure(e.message)); // Dispatch loginFailure with the error message
    console.log(e);
  }
};

export const getSearchData = (value: string) => async (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  try {
    console.log("getSearchData: ", value)
    const res = await axiosClient.get(`/api/opcina-podcrkavlje/transparentnost/` + value);
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
