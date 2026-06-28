
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";   
import Home from "../../Pages/Home/Home";

jest.mock("../../Components/HomeComponents/Banner/Banner", () => () => <div data-testid="banner" />);
jest.mock("../../Components/HomeComponents/Features/Features", () => () => <div data-testid="features" />);
jest.mock("../../Components/HomeComponents/MarketOverview/MarketOverview", () => () => <div data-testid="market-overview" />);
jest.mock("../../Components/HomeComponents/PromoBanner/PromoBanner", () => () => <div data-testid="promo-banner" />);

describe("Home", () => {
  it("renderiza todas las secciones principales", () => {
    render(<Home />);
    expect(screen.getByTestId("banner")).toBeInTheDocument();
    expect(screen.getByTestId("features")).toBeInTheDocument();
    expect(screen.getByTestId("market-overview")).toBeInTheDocument();
    expect(screen.getByTestId("promo-banner")).toBeInTheDocument();
  });
});
