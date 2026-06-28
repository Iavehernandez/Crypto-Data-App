
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSelector } from "react-redux";
import ProfitLoss from "../PortfolioComponents/ProfitLoss/ProfitLoss";


jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));


jest.mock("../PortfolioComponents/ProfitLoss/styles", () => ({
  ProfitLossPanel: ({ children }) => <div>{children}</div>,
  ProfitLossTitle: ({ children }) => <h2>{children}</h2>,
  ProfitLossValue: ({ children }) => <span>{children}</span>,
  ProfitLossChange: ({ children }) => <span>{children}</span>,
}));


jest.mock("react-chartjs-2", () => ({
  Line: () => <div data-testid="line-chart" />,
}));

describe("ProfitLoss", () => {
  it("renderiza título y valor positivo", () => {
    useSelector.mockReturnValue([
      { name: "BTC", profit: 100 },
      { name: "ETH", profit: 50 },
    ]);
    render(<ProfitLoss />);
    expect(screen.getByText("Ganancia / Pérdida")).toBeInTheDocument();
    expect(screen.getByText(/\$150\.00/)).toBeInTheDocument();
    expect(screen.getByText(/▲/)).toBeInTheDocument();
  });

 it("renderiza valor negativo y flecha hacia abajo", () => {
  useSelector.mockReturnValue([
    { name: "BTC", profit: -200 },
    { name: "ETH", profit: -100 },
  ]);
  render(<ProfitLoss />);
  expect(screen.getByText(/-\$300\.00/)).toBeInTheDocument();
  expect(screen.getByText(/▼/)).toBeInTheDocument();
});


  it("muestra el gráfico", () => {
    useSelector.mockReturnValue([{ name: "BTC", profit: 100 }]);
    render(<ProfitLoss />);
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
  });
});
