
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BitcoinDominanceCard from "../BitconDominance/BitconDominanceCard";

jest.mock("../BitconDominance/styles", () => ({
  Card: ({ children }) => <div>{children}</div>,
  Title: ({ children }) => <h2>{children}</h2>,
  Value: ({ children }) => <span>{children}</span>,
  Subtitle: ({ children }) => <p>{children}</p>,
  ProgressBar: ({ children }) => <div>{children}</div>,
  ProgressFill: () => <div data-testid="progress-fill" />,
}));

describe("BitcoinDominanceCard", () => {
  it("renderiza título, valor y subtítulo", () => {
    render(<BitcoinDominanceCard />);
    expect(screen.getByText("Bitcoin Dominance")).toBeInTheDocument();
    expect(screen.getByText("52.8%")).toBeInTheDocument();
    expect(screen.getByText("Market share of BTC")).toBeInTheDocument();
  });

  it("renderiza el ProgressFill dentro del ProgressBar", () => {
    render(<BitcoinDominanceCard />);
    expect(screen.getByTestId("progress-fill")).toBeInTheDocument();
  });
});
