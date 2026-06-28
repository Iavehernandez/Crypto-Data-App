
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChartTrading from "../PortfolioComponents/TradingChart/TradingChart";


jest.mock("../PortfolioComponents/TradingChart/styles", () => ({
  ChartPanel: ({ children }) => <div>{children}</div>,
  ChartTitle: ({ children }) => <h3>{children}</h3>,
}));


jest.mock("react-chartjs-2", () => ({
  Line: () => <div data-testid="line-chart" />,
}));

describe("ChartTrading", () => {
  it("muestra mensaje si no hay datos", () => {
    render(<ChartTrading data={[]} />);
    expect(screen.getByText("No hay datos disponibles")).toBeInTheDocument();
  });

  it("renderiza título y gráfico con datos", () => {
    const mockData = [
      [Date.now(), 100],
      [Date.now() + 1000, 200],
    ];
    render(<ChartTrading data={mockData} />);
    expect(screen.getByText("Evolución del portafolio")).toBeInTheDocument();
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
  });
});
