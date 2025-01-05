  import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    items: [], // Initialize items array
  };

  const mywatchlistslice = createSlice({
    name: "myWatchlist",
    initialState,
    reducers: {
      addToWatchlist: (state, action) => {
        const item = action.payload;
        if (!state.items.some(watchlistItem => watchlistItem.id === item.id)) {
          state.items.push(item);
        } else {
          alert('The Movie is already in your watchlist');
        }
      },
      removeFromwatchlist: (state, action) => {
        const itemId = action.payload;
        state.items = state.items.filter(item => item.id !== itemId);
      },
      clearwatchlist: (state) => {
        state.items = [];
      },
    },
  });

  export const { addToWatchlist, removeFromwatchlist, clearwatchlist } = mywatchlistslice.actions;
  export default mywatchlistslice.reducer;
