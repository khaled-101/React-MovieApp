import { configureStore } from "@reduxjs/toolkit";
import mywatchlistslice from "./slices/watcllist";

export default configureStore({
  reducer: {
    myWatchlist:  mywatchlistslice,
   
  },
});
