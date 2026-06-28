import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../slices/chartSlice";
import portfolioReducer from '../slices/portfolioSlice';
import walletReducer from "../slices/walletSlice";
import watchlistReducer from "../slices/watchList";


export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    crypto: cryptoReducer,
    wallet: walletReducer,
    watchlist: watchlistReducer,
  
  },
});

export default store;