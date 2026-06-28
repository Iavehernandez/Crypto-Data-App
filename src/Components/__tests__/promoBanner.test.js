
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PromoBanner from "../HomeComponents/PromoBanner/PromoBanner";


jest.mock("../HomeComponents/PromoBanner/styles", () => ({
  BannerSection: ({ children }) => <section>{children}</section>,
  BannerContent: ({ children }) => <div>{children}</div>,
  BannerText: ({ children }) => <div>{children}</div>,
  BannerButton: ({ children }) => <button>{children}</button>,
  BannerIllustration: ({ children }) => <div>{children}</div>,
}));

describe("PromoBanner", () => {
  it("renderiza título y texto principal", () => {
    render(<PromoBanner />);
    expect(screen.getByText("La acción está en tus manos")).toBeInTheDocument();
    expect(
      screen.getByText("Unete a miles de usuarios que usan Crypto Data")
    ).toBeInTheDocument();
  });

  it("muestra el botón de acción", () => {
    render(<PromoBanner />);
    expect(screen.getByText("Unete Gratis →")).toBeInTheDocument();
  });

  it("incluye el texto adicional", () => {
    render(<PromoBanner />);
    expect(screen.getByText("No requiere tarjeta de crédito")).toBeInTheDocument();
  });

  it("renderiza la ilustración del cohete", () => {
    render(<PromoBanner />);
    expect(screen.getByAltText("Rocket illustration")).toBeInTheDocument();
  });
});
