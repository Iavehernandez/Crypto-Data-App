import React from "react";
import {
  Card,
  Title,
  Value,
  Subtitle,
  ProgressBar,
  ProgressFill,
} from "../BitconDominance/styles";

const BitcoinDominanceCard = () => {

  const dominance = 52.8;

  return (
    <Card>
      <Title>Bitcoin Dominance</Title>
      <Value>{dominance}%</Value>
      <Subtitle>Market share of BTC</Subtitle>

      <ProgressBar>
        <ProgressFill $width={dominance} />
      </ProgressBar>
    </Card>
  );
};

export default BitcoinDominanceCard;