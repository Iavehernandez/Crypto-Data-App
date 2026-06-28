import React from "react";
import {
  Card,
  Title,
  Value,
  Subtitle,
  Badge,
  Bar,
  Fill,
} from "./styles";

const ImpliedVolatilityCard = () => {
  const iv = 67;

  const getLabel = () => {
    if (iv < 30) return "Low";
    if (iv < 70) return "Medium";
    return "High";
  };

  return (
    <Card>
      <Title>Implied Volatility</Title>
      <Value>{iv}%</Value>

      <Badge $level={getLabel()}>{getLabel()}</Badge>

      <Bar>
        <Fill $value={iv} />
      </Bar>

      <Subtitle>Expected market movement</Subtitle>
    </Card>
  );
};

export default ImpliedVolatilityCard;