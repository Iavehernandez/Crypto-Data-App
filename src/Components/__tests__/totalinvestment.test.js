
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSelector } from "react-redux";
import TotalInvestment from "../PortfolioComponents/TotalInvestment/TotalInvestment";


jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));


jest.mock("../PortfolioComponents/TotalInvestment/styles", () => ({
  TotalInvestmentPanel: ({ children }) => <div>{children}</div>,
  TotalInvestmentText: ({ children }) => <div>{children}</div>,
  TotalInvestmentTitle: ({ children }) => <h3>{children}</h3>,
  TotalInvestmentValue: ({ children }) => <span>{children}</span>,
  IconContainer: () => <div data-testid="icon" />,
}));

describe("TotalInvestment", () => {
  it("renderiza título y valor con inversión positiva", () => {
    useSelector.mockReturnValue([
      { id: "btc", invested: 1000 },
      { id: "eth", invested: 500 },
    ]);
    render(<TotalInvestment />);
    expect(screen.getByText("Inversión total")).toBeInTheDocument();
    expect(screen.getByText(/\$1,500\.00/)).toBeInTheDocument();
  });

  it("renderiza valor cero si no hay portfolio", () => {
    useSelector.mockReturnValue([]);
    render(<TotalInvestment />);
    expect(screen.getByText(/\$0\.00/)).toBeInTheDocument();
  });

  it("incluye el icono decorativo", () => {
    useSelector.mockReturnValue([{ id: "btc", invested: 1000 }]);
    render(<TotalInvestment />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
