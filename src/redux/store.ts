import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import revenueReducer from "./slices/revenueSlice";
import bookingReducer from "./slices/bookingSlice";
import bestArtistReducer from "./slices/bestArtist";
import bestServiceReducer from "./slices/bestService";
// import other reducers...

export const store = configureStore({
  reducer: {
    search: searchReducer,
    revenue: revenueReducer,
    booking: bookingReducer,
    bestArtist: bestArtistReducer,
    bestService: bestServiceReducer,
    // other reducers...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 