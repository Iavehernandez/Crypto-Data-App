import React from "react";
import { Card, Title, Value, Subtitle } from "./style";

const OpenInterestCard = () => {

  const openInterest = 12845000000;

  return (
    <Card>
      <Title>Open Interest</Title>
      <Value>${openInterest.toLocaleString()}</Value>
      <Subtitle>Total derivatives positions</Subtitle>
    </Card>
  );
};

export default OpenInterestCard;