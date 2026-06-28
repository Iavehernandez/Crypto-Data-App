import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoinCard from "../../Components/CoinCard/CoinCard";
import { ContainerCoinCardGrid } from "./styles";
import FearMeter from "../../Components/FearMeter/FearMeter";
import PriceList from "../../Components/PriceTable/PriceTable";
import BitcoinDominanceCard from "../../Components/BitconDominance/BitconDominanceCard";
import OpenInterestCard from "../../Components/OpenInterestCard/OpenInterestCard";
import ImpliedVolatilityCard from "../../Components/ImpliedVolatilyCard/ImpliedVolatilyCard";
import FundingRateCard from "../../Components/FundingRateCard/FundingRateCard";
import { fetchCoins } from "../../Redux/thunks/cryptoThunks";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { coins, coinsLoading, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  if (coinsLoading) return <p>Cargando monedas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ContainerCoinCardGrid>
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}

      <FearMeter />
      <BitcoinDominanceCard />
      <OpenInterestCard />
      <ImpliedVolatilityCard />
      <FundingRateCard />
      <PriceList coins={coins} />
    </ContainerCoinCardGrid>
  );
};

export default Dashboard;
