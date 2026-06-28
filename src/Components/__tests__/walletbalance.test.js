
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSelector } from "react-redux";
import WalletBalance from "../PortfolioComponents/WalletBalance/WalletBalance";


jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));


jest.mock("../PortfolioComponents/WalletBalance/styles", () => ({
  WalletCard: ({ children }) => <div>{children}</div>,
}));

describe("WalletBalance", () => {
  it("renderiza título y valor con saldo positivo", () => {
    useSelector.mockReturnValue(100000);
    render(<WalletBalance />);
    expect(screen.getByText("Dinero Disponible")).toBeInTheDocument();
    expect(screen.getByText(/\$100,000\.00/)).toBeInTheDocument();
  });

  it("renderiza valor cero si el wallet está vacío", () => {
    useSelector.mockReturnValue(0);
    render(<WalletBalance />);
    expect(screen.getByText(/\$0\.00/)).toBeInTheDocument();
  });

  it("incluye el ícono de wallet", () => {
    useSelector.mockReturnValue(500);
    render(<WalletBalance />);
    expect(screen.getByAltText("wallet icon")).toBeInTheDocument();
  });
});
