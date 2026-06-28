import React from "react";
import { useSelector } from "react-redux";
import {
  TotalInvestmentPanel,
  TotalInvestmentText,
  TotalInvestmentTitle,
  TotalInvestmentValue,
  IconContainer,
} from "./styles";

const TotalInvestment = () => {
  const portfolio = useSelector(
    (state) => state.portfolio.portfolio
  );

  const totalInvested = portfolio.reduce(
    (acc, coin) => acc + (coin.invested || 0),
    0
  );

  return (
    <TotalInvestmentPanel>
      <TotalInvestmentText>
        <TotalInvestmentTitle>
          Inversión total
        </TotalInvestmentTitle>

        <TotalInvestmentValue>
          {totalInvested.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
          })}
        </TotalInvestmentValue>
      </TotalInvestmentText>

      <IconContainer />
    </TotalInvestmentPanel>
  );
};

export default TotalInvestment;