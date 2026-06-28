
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FundingRateCard from "../FundingRateCard/FundingRateCard";


jest.mock("../FundingRateCard/styles", () => ({
  Card: ({ children }) => <div>{children}</div>,
  Title: ({ children }) => <h2>{children}</h2>,
  Value: ({ children }) => <span>{children}</span>,
  Subtitle: ({ children }) => <p>{children}</p>,
  Badge: ({ children }) => <span>{children}</span>,
}));

describe("FundingRateCard", () => {
  it("renderiza título, valor y subtítulo", () => {
    render(<FundingRateCard />);
    expect(screen.getByText("Funding Rate")).toBeInTheDocument();
    expect(screen.getByText("0.0123%")).toBeInTheDocument();
    expect(screen.getByText("Perpetual futures sentiment")).toBeInTheDocument();
  });

  it("muestra el badge correcto según la tasa", () => {
    render(<FundingRateCard />);
    expect(screen.getByText("Bullish bias")).toBeInTheDocument();
  });
});
