import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { AnyAction } from 'redux';
import { DataType } from 'src/app/components/table/ResultTable.js';
import { getPlaceName } from 'src/helper/domainHelper.js';
import axiosClient from '../../axios-client.js';


export interface TransparencyState {
  data: DataType[] ;//| null
  loading: boolean;
  errorMessage: string | null;
  searchValue: string;
  selectedYear: string;
  availableYears: [];
  isDataLoaded: boolean;
  isOpcinaDataLoaded: boolean;
  // placeName: string;
  opcinaData: LocationInfo;
}

export interface RootState {
  trasparency: TransparencyState
  searchValue: string;
  // selectedYear: string;
  errorMessage: string | null;

}

interface LocationInfo {
  id: number;
  rkpid: number;
  naziv: string;
  adresa: string;
  mjesto: string;
  zupanija: string;
  homepage: string;
  oib: string;
  url: string;
  grb: string;
  favico: string;
  background: string;
  description: string;
  created_at: string | null;
  updated_at: string | null;
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
    data: [], 
    loading: false,
    errorMessage: null,
    searchValue: "",
    isDataLoaded: false,
    selectedYear: "2023",//new Date().getFullYear().toString(),
    availableYears: [],
    isOpcinaDataLoaded: false,
    opcinaData: {} as LocationInfo,
  } as  TransparencyState,
  reducers: {
    loadSuccess: (state, action: PayloadAction< DataType[]>) => {
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
    loadOpcina: (state, action: PayloadAction<LocationInfo>) => {
      return {
        ...state,
        isOpcinaDataLoaded: true,
        opcinaData: action.payload,
      }
    },
    loadYears: (state, action: PayloadAction<any>) => {
      // console.log(action.payload)
      const availableYears = action.payload.map((year: any) => String(year.godina));
      return {
        ...state,
        availableYears: availableYears,
        // selectedYear: availableYears[0], //data is sorted by year desc b4 returning to frontend
      }
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
const { loadSuccess, loadOpcina, loadYears, onChangeSearchBarValue, onChangeSelectYear} = slice.actions;

export const getData = (placeName: string, year: string): ThunkAction<Promise<void>, RootState, void, AnyAction> => async dispatch => {
  try {
    //this is temporary, needs to work for strings that do not have "opcina-" in front
    const res = await axiosClient.get(`/${placeName}/transparentnost?year=` + year);

    dispatch(loadSuccess(res.data));
  } catch (e: any) {
    console.log(e);
  }
};

export const getSearchData = (placeName: string, year: string, value: string) => async (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  try {
    const res = await axiosClient.get(`/${placeName}/transparentnost?year=` + year + '&keyword=' + value);
    dispatch(loadSuccess(res.data));
  } catch (e: any) {
    console.log(e);
  }
};

export const getOpcineData = (/* placeName: string */) => async (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  try {
    const res = await axiosClient.get(`/opcine/${getPlaceName()}`);

    // console.log("Resource data", res.data)
    dispatch(loadOpcina(res.data));
  } catch (e: any) {
    console.log(e);
  }
};

export const getAvailableYearsData = (placeName: string) => async (
  dispatch: ThunkDispatch<TransparencyState, void, AnyAction>
) => {
  try {
    const res = await axiosClient.get(`/${placeName}/transparentnost/godinePodataka`);

    // console.log(res.data)
    dispatch(loadYears(res.data));
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
// }


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
