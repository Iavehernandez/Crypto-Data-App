import React from "react";
import { Card, Title, Value, Subtitle, Badge } from "./styles";

const FundingRateCard = () => {
  const rate = 0.0123;
  const isPositive = rate >= 0;

  return (
    <Card>
      <Title>Funding Rate</Title>
      <Value>{rate.toFixed(4)}%</Value>

      <Badge $type={isPositive ? "positive" : "negative"}>
        {isPositive ? "Bullish bias" : "Bearish bias"}
      </Badge>

      <Subtitle>Perpetual futures sentiment</Subtitle>
    </Card>
  );
};

export default FundingRateCard;