import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  search: string;
  date: string;
}

// const today = new Date().toISOString().slice(0, 10);

const initialState: SearchState = {
  search: '',
  date: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: { payload: string }) {
      state.search = action.payload;
    },
    setDate(state, action: { payload: string }) {
      state.date = action.payload;
    },
  },
});

export const { setSearch, setDate } = searchSlice.actions;
export default searchSlice.reducer; 