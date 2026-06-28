import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolio: [],
  history: [] 
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,

  reducers: {
   
    buyCoin: (state, action) => {
      const { id, name, price } = action.payload;

      const coin = state.portfolio.find((c) => c.id === id);

      if (coin) {
        coin.qty += 1;
        coin.invested += price;
        coin.avgBuyPrice = coin.invested / coin.qty;
        coin.price = price; 
      } else {
        state.portfolio.push({
          id,
          name,
          qty: 1,
          invested: price,
          avgBuyPrice: price,
          price, 
        });
      }
    },

  
    sellCoin: (state, action) => {
      const { id, price } = action.payload;

      const coin = state.portfolio.find((c) => c.id === id);
      if (!coin) return;

      const profit = price - coin.avgBuyPrice;

      state.history.push({
        id,
        name: coin.name,
        profit,
      });

      coin.qty -= 1;
      coin.invested -= coin.avgBuyPrice;

      if (coin.qty <= 0) {
        state.portfolio = state.portfolio.filter((c) => c.id !== id);
      } else {
        coin.avgBuyPrice = coin.invested / coin.qty;
        coin.price = price; 
      }
    },
  },
});

export const { buyCoin, sellCoin } = portfolioSlice.actions;
export default portfolioSlice.reducer;
