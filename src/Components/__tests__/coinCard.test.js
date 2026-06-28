
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CoinCard from "../CoinCard/CoinCard";


jest.mock("../Chart/Chart", () => () => <div data-testid="chart" />);

const mockCoin = {
  id: "bitcoin",
  name: "Bitcoin",
  symbol: "btc",
  image: "https://example.com/btc.png",
  current_price: 30000,
  price_change_percentage_24h: 2.5,
};

describe("CoinCard", () => {
  it("renderiza nombre y símbolo de la moneda", () => {
    render(<CoinCard coin={mockCoin} />);
    expect(screen.getByText("BTC")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
  });

  it("muestra el precio y el porcentaje de cambio", () => {
    render(<CoinCard coin={mockCoin} />);
    expect(screen.getByText("$30000")).toBeInTheDocument();
    expect(screen.getByText("2.50%")).toBeInTheDocument();
  });

  it("incluye el componente Chart", () => {
    render(<CoinCard coin={mockCoin} />);
    expect(screen.getByTestId("chart")).toBeInTheDocument();
  });
});
