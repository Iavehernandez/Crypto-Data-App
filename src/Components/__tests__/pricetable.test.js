
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PriceList from "../PriceTable/PriceTable";

jest.mock("../PriceTable/styles", () => ({
  TableContainer: ({ children }) => <div>{children}</div>,
  Table: ({ children }) => <table>{children}</table>,
  TableRow: ({ children }) => <tr>{children}</tr>,
  TableHead: ({ children }) => <th>{children}</th>,
  TableCell: ({ children }) => <td>{children}</td>,
  CoinName: ({ children }) => <div>{children}</div>,
  PriceUp: ({ children }) => <span data-testid="price-up">{children}</span>,
  PriceDown: ({ children }) => <span data-testid="price-down">{children}</span>,
}));

describe("PriceList", () => {
  const coins = [
    {
      id: "btc",
      name: "Bitcoin",
      image: "btc.png",
      current_price: 30000,
      price_change_percentage_24h: 5.25,
      market_cap: 600000000,
    },
    {
      id: "eth",
      name: "Ethereum",
      image: "eth.png",
      current_price: 2000,
      price_change_percentage_24h: -2.5,
      market_cap: 250000000,
    },
  ];

  it("renderiza encabezados de la tabla", () => {
    render(<PriceList coins={coins} />);
    expect(screen.getByText("Coin")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("24h %")).toBeInTheDocument();
    expect(screen.getByText("Market Cap")).toBeInTheDocument();
  });

  it("renderiza monedas con nombre e imagen", () => {
    render(<PriceList coins={coins} />);
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();
    expect(screen.getByAltText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByAltText("Ethereum")).toBeInTheDocument();
  });

  it("muestra porcentaje positivo en PriceUp y negativo en PriceDown", () => {
    render(<PriceList coins={coins} />);
    expect(screen.getByTestId("price-up")).toHaveTextContent("+5.25%");
    expect(screen.getByTestId("price-down")).toHaveTextContent("-2.50%");
  });
});
