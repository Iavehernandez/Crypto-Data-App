// TradePanel.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCoin, sellCoin } from "../../../Redux/slices/portfolioSlice";
import { subtractFunds, addFunds } from "../../../Redux/slices/walletSlice";
import { TradeButton } from "./styles";

const TradePanel = ({ coin }) => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.wallet);

  const handleBuy = () => {
  if (balance >= coin.price) {
    dispatch(
      buyCoin({
        id: coin.id,
        name: coin.name,
        price: coin.price,
      })
    );

    dispatch(subtractFunds(coin.price));
  }
};

const handleSell = () => {
  dispatch(
    sellCoin({
      id: coin.id,
      price: coin.price,
    })
  );

  dispatch(addFunds(coin.price));
};

  return (
    <div>
      <TradeButton className="buy" onClick={handleBuy}>
        + Comprar
      </TradeButton>
      <TradeButton className="sell" onClick={handleSell}>
        - Vender
      </TradeButton>
    </div>
  );
};

export default TradePanel;
