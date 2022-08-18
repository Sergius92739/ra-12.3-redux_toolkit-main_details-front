import {configureStore} from '@reduxjs/toolkit';
import servicesReducer from '../slices/servicesSlice';


export const store = configureStore({
  reducer: {
    services: servicesReducer,
  }
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
