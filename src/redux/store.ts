import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import revenueReducer from "./slices/revenueSlice";
import bookingReducer from "./slices/bookingSlice";
import bestArtistReducer from "./slices/bestArtistSlice";
import bestServiceReducer from "./slices/bestServiceSlice";
import customerReducer from "./slices/customerSlice";
import artistReducer from "./slices/artistSlice";
// import other reducers...

export const store = configureStore({
  reducer: {
    search: searchReducer,
    revenue: revenueReducer,
    booking: bookingReducer,
    bestArtist: bestArtistReducer,
    bestService: bestServiceReducer,
    customer: customerReducer,
    artist: artistReducer,
    // other reducers...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 