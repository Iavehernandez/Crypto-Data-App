
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_COINGECKO_API_KEY;
const baseUrl = "https://api.coingecko.com/api/v3";

export const fetchCoins = createAsyncThunk("crypto/fetchCoins", async () => {
  const response = await axios.get(`${baseUrl}/coins/markets`, {
    params: {
      vs_currency: "mxn",
      order: "market_cap_desc",
      per_page: 4,
      page: 1,
      sparkline: false,
    },
    headers: { "X-CoinGecko-API-Key": API_KEY },
  });
  return response.data;
});

export const fetchCoinChart = createAsyncThunk(
  "crypto/fetchCoinChart",
  async (coinId) => {
    const response = await axios.get(`${baseUrl}/coins/${coinId}/market_chart`, {
      params: { vs_currency: "mxn", days: 7 },
      headers: { "X-CoinGecko-API-Key": API_KEY },
    });
    return response.data;
  }
);

export const searchCoins = createAsyncThunk(
  "crypto/searchCoins",
  async (query) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    );

    return res.data.coins; 
  }
);

export const getSearchCoinById = createAsyncThunk(
  "crypto/getSearchCoinById",
  async (id) => {
    const res = await axios.get(`${baseUrl}/coins/markets`, {
      params: { vs_currency: "usd", ids: id },
    });
    return res.data[0];
  }
);

console.log("API KEY:", process.env.REACT_APP_COINGECKO_API_KEY);
