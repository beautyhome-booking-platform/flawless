import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  customerSearch: string;
  artistSearch: string;
  date: string;
}

// const today = new Date().toISOString().slice(0, 10);

const initialState: SearchState = {
  customerSearch: '',
  artistSearch: '',
  date: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCustomerSearch(state, action: { payload: string }) {
      state.customerSearch = action.payload;
    },
    setArtistSearch(state, action: { payload: string }) {
      state.artistSearch = action.payload;
    },
    setDate(state, action: { payload: string }) {
      state.date = action.payload;
    },
  },
});

export const { setCustomerSearch, setArtistSearch, setDate } = searchSlice.actions;
export default searchSlice.reducer; 