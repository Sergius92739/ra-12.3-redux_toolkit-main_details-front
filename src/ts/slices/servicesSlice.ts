import { createSlice, PayloadAction, createAsyncThunk, SerializedError, ThunkAction, AsyncThunkAction } from '@reduxjs/toolkit';
import { TRootState } from '../store';

export interface IService {
  id: number;
  name: string;
  price: number;
  content?: string;
}

export interface IState {
  services: IService[];
  details: IService | null;
  clickedID: string;
  loading: boolean;
  error: SerializedError | null;
}

const initialState: IState = {
  services: [],
  details: null,
  clickedID: '',
  loading: false,
  error: null,
}

export const fetchServicesData = createAsyncThunk('fetchServicesData', async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}`);
  return (await response.json()) as IService[];
});

export const fetchDetailsData = createAsyncThunk('fetchDetailsData', async (id: string) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${id}`);
  return (await response.json()) as IService;
})

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setClickedId: (state: IState, action: PayloadAction<string>): void => {
      state.clickedID = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServicesData.pending, (state: IState) => {
      state.services = [];
      state.details = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchServicesData.fulfilled, (state: IState, action: PayloadAction<IService[]>) => {
      state.services = action.payload;
      state.details = null;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchServicesData.rejected, (state: IState, action) => {
      state.services = [];
      state.details = null;
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(fetchDetailsData.pending, (state: IState, action) => {
      state.loading = true;
      state.details = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDetailsData.fulfilled, (state: IState, action) => {
      state.services = [];
      state.details = action.payload;
      state.clickedID = '';
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchDetailsData.rejected, (state: IState, action) => {
      state.services = [];
      state.details = null;
      state.loading = false;
      state.error = action.error;
    })
  }
});

export const selectServices = (state: TRootState) => state.services.services;
export const selectDetails = (state: TRootState) => state.services.details;
export const selectClickedId = (state: TRootState) => state.services.clickedID;
export const selectLoading = (state: TRootState) => state.services.loading;
export const selectError = (state: TRootState) => state.services.error

export const {
  setClickedId,
} = servicesSlice.actions;

console.log('actions: ', servicesSlice.actions)

export default servicesSlice.reducer;
