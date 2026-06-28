
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OpenInterestCard from "../OpenInterestCard/OpenInterestCard";


jest.mock("../OpenInterestCard/style", () => ({
  Card: ({ children }) => <div>{children}</div>,
  Title: ({ children }) => <h2>{children}</h2>,
  Value: ({ children }) => <span>{children}</span>,
  Subtitle: ({ children }) => <p>{children}</p>,
}));

describe("OpenInterestCard", () => {
  it("renderiza título y valor", () => {
    render(<OpenInterestCard />);
    expect(screen.getByText("Open Interest")).toBeInTheDocument();
    expect(screen.getByText("$12,845,000,000")).toBeInTheDocument();
  });

  it("muestra el subtítulo", () => {
    render(<OpenInterestCard />);
    expect(screen.getByText("Total derivatives positions")).toBeInTheDocument();
  });
});
