import { createSlice } from "@reduxjs/toolkit";
import { searchCoins, fetchCoinChart, fetchCoins } from "../thunks/cryptoThunks";

const initialState = {
  chart: null,
  results: [],
  coins: [],

  coinsLoading: false,
  chartLoading: false,
  searchLoading: false,

  error: null,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
            .addCase(fetchCoins.pending, (state) => {
        state.coinsLoading = true;
        })

        .addCase(fetchCoins.fulfilled, (state, action) => {
        state.coinsLoading = false;
        state.coins = action.payload;
        })
            .addCase(fetchCoinChart.pending, (state) => {
        state.chartLoading = true;
        })

        .addCase(fetchCoinChart.fulfilled, (state, action) => {
        state.chartLoading = false;
        state.chart = action.payload;
        })
      .addCase(searchCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchCoins.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchCoins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cryptoSlice.reducer;
