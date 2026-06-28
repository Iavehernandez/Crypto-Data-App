import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: 100000, 
  reducers: {
    setWallet: (state, action) => action.payload,
    addFunds: (state, action) => state + action.payload,
    subtractFunds: (state, action) => state - action.payload,
  },
});

export const { setWallet, addFunds, subtractFunds } = walletSlice.actions;
export default walletSlice.reducer;
