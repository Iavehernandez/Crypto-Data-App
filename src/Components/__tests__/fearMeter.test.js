
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FearMeter from "../FearMeter/FearMeter";

jest.mock("../FearMeter/styles", () => ({
  Container: ({ children }) => <div>{children}</div>,
  Gauge: ({ children }) => <div>{children}</div>,
  Arc: () => <div />,
  Needle: () => <div />,
  CenterDot: () => <div />,
  Score: ({ children }) => <span>{children}</span>,
  Label: ({ children }) => <span>{children}</span>,
}));

describe("FearMeter", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(global.Math, "random").mockReturnValue(0.5); // fuerza score = 50
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renderiza un puntaje y etiqueta controlados", () => {
    render(<FearMeter />);
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("Neutral")).toBeInTheDocument();
  });
});
