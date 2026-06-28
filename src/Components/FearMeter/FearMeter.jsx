import { useEffect, useState } from "react";
import {
  Container,
  Gauge,
  Arc,
  Needle,
  CenterDot,
  Score,
  Label
} from "../FearMeter/styles";

const FearMeter = () => {
  const [score, setScore] = useState(50);

  useEffect(() => {
    const saved = localStorage.getItem("market_sentiment");

    if (saved) {
      const parsed = JSON.parse(saved);
      const twelveHours = 12 * 60 * 60 * 1000;

      if (Date.now() - parsed.timestamp < twelveHours) {
        setScore(parsed.value);
        return;
      }
    }

    const randomValue = Math.floor(Math.random() * 100);

    setScore(randomValue);

    localStorage.setItem(
      "market_sentiment",
      JSON.stringify({
        value: randomValue,
        timestamp: Date.now(),
      })
    );
  }, []);

  const getLabel = () => {
    if (score <= 24) return "Extreme Fear";
    if (score <= 44) return "Fear";
    if (score <= 55) return "Neutral";
    if (score <= 74) return "Greed";
    return "Extreme Greed";
  };

  const rotation = (score / 100) * 180 - 90;

  return (
    <Container>
      <Score>{score}</Score>

      <Gauge>
        <Arc color="#ff3b30" rotate="-90deg" />
        <Arc color="#ff9500" rotate="-45deg" />
        <Arc color="#ffd60a" rotate="0deg" />
        <Arc color="#30d158" rotate="45deg" />

        <Needle rotation={rotation} />
        <CenterDot />
      </Gauge>

      <Label>{getLabel()}</Label>
    </Container>
  );
};

export default FearMeter;