import React from "react";
import { useSelector } from "react-redux";
import { CoinCard, TitleStyled, PortfolioLayout } from "./styles";

import WalletBalance from "../../Components/PortfolioComponents/WalletBalance/WalletBalance";
import ChartBitcoin from "../../Components/PortfolioComponents/TradingChart/TradingChart";
import TradePanel from "../../Components/PortfolioComponents/TradePanel/TradePanel";
import ProfitLoss from "../../Components/PortfolioComponents/ProfitLoss/ProfitLoss";
import TotalInvestment from "../../Components/PortfolioComponents/TotalInvestment/TotalInvestment";

const SIMULATED_PRICE = 20000;

const Portfolio = () => {
  const portfolio = useSelector((state) => state.portfolio);

  return (
    <PortfolioLayout>
      <TitleStyled>
        <h2>Portafolio</h2>
        <p>Resumen de tus inversiones</p>
      </TitleStyled>


      <div className="top">
        <WalletBalance />
        <ProfitLoss />
        <TotalInvestment />
      </div>

     
      <div className="bottom">
        <ChartBitcoin
          data={[
            [1622505600000, SIMULATED_PRICE],
            [1622592000000, SIMULATED_PRICE + 500],
            [1622678400000, SIMULATED_PRICE - 300],
            [1622764800000, SIMULATED_PRICE + 800],
          ]}
        />
        <TradePanel
          coin={{
            id: "bitcoin",
            name: "Bitcoin",
            symbol: "BTC",
            image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
            price: SIMULATED_PRICE,
          }}
        />
      </div>


      {Array.isArray(portfolio) && portfolio.length === 0 ? (
        <p>No coins added</p>
      ) : (
        Array.isArray(portfolio) &&
        portfolio.map((coin) => {
          const currentPrice = SIMULATED_PRICE;
          const avgBuyPrice = coin.invested / coin.qty;
          const profit = (currentPrice - avgBuyPrice) * coin.qty;

          return (
            <CoinCard key={coin.id}>
              <span>{coin.name}</span>
              <span>Qty: {coin.qty}</span>
              <span>Avg Buy: ${avgBuyPrice.toFixed(2)}</span>
              <span>Current: ${currentPrice.toFixed(2)}</span>
              <span>Invested: ${coin.invested.toFixed(2)}</span>
              <span>P/L: {profit.toFixed(2)}</span>
            </CoinCard>
          );
        })
      )}
    </PortfolioLayout>
  );
};

export default Portfolio;
