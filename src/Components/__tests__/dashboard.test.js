
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../Pages/Dashboard/Dashboard";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));


jest.mock("../../Pages/Dashboard/styles", () => ({
  ContainerCoinCardGrid: ({ children }) => <div>{children}</div>,
}));

jest.mock("../../Components/CoinCard/CoinCard", () => ({ coin }) => (
  <div data-testid="coin-card">{coin.name}</div>
));
jest.mock("../../Components/FearMeter/FearMeter", () => () => (
  <div data-testid="fear-meter" />
));
jest.mock("../../Components/BitconDominance/BitconDominanceCard", () => () => (
  <div data-testid="btc-dominance" />
));
jest.mock("../../Components/OpenInterestCard/OpenInterestCard", () => () => (
  <div data-testid="open-interest" />
));
jest.mock("../../Components/ImpliedVolatilyCard/ImpliedVolatilyCard", () => () => (
  <div data-testid="implied-volatility" />
));
jest.mock("../../Components/FundingRateCard/FundingRateCard", () => () => (
  <div data-testid="funding-rate" />
));
jest.mock("../../Components/PriceTable/PriceTable", () => ({ coins }) => (
  <div data-testid="price-list">{coins.length} coins</div>
));

describe("Dashboard", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    mockDispatch.mockClear();
  });

  it("despacha fetchCoins al montar", () => {
    useSelector.mockReturnValue({ coins: [], coinsLoading: false, error: null });
    render(<Dashboard />);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it("muestra mensaje de carga", () => {
    useSelector.mockReturnValue({ coins: [], coinsLoading: true, error: null });
    render(<Dashboard />);
    expect(screen.getByText("Cargando monedas...")).toBeInTheDocument();
  });

  it("muestra mensaje de error", () => {
    useSelector.mockReturnValue({ coins: [], coinsLoading: false, error: "fallo" });
    render(<Dashboard />);
    expect(screen.getByText(/Error: fallo/)).toBeInTheDocument();
  });

  it("renderiza CoinCards y componentes hijos cuando hay datos", () => {
    useSelector.mockReturnValue({
      coins: [{ id: "btc", name: "Bitcoin" }],
      coinsLoading: false,
      error: null,
    });
    render(<Dashboard />);
    expect(screen.getByTestId("coin-card")).toHaveTextContent("Bitcoin");
    expect(screen.getByTestId("fear-meter")).toBeInTheDocument();
    expect(screen.getByTestId("btc-dominance")).toBeInTheDocument();
    expect(screen.getByTestId("open-interest")).toBeInTheDocument();
    expect(screen.getByTestId("implied-volatility")).toBeInTheDocument();
    expect(screen.getByTestId("funding-rate")).toBeInTheDocument();
    expect(screen.getByTestId("price-list")).toHaveTextContent("1 coins");
  });
});
