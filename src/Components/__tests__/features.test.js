
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Features from "../HomeComponents/Features/Features";


jest.mock("../HomeComponents/Features/styles", () => ({
  FeaturesSection: ({ children }) => <section>{children}</section>,
  FeatureGrid: ({ children }) => <div>{children}</div>,
  FeatureCard: ({ children }) => <div>{children}</div>,
  FeatureIcon: (props) => <img {...props} />,
  FeatureTitle: ({ children }) => <h3>{children}</h3>,
  FeatureText: ({ children }) => <p>{children}</p>,
}));

describe("Features", () => {
  it("renderiza título y subtítulo", () => {
    render(<Features />);
    expect(screen.getByText("La acción está en tus manos")).toBeInTheDocument();
    expect(
      screen.getByText("Invierte y genera rendimientos, sin costo y 24/7")
    ).toBeInTheDocument();
  });

  it("muestra las cuatro tarjetas con títulos", () => {
    render(<Features />);
    expect(screen.getByText("Precios en tiempo real")).toBeInTheDocument();
    expect(screen.getByText("Sentimiento de Mercado")).toBeInTheDocument();
    expect(screen.getByText("Metricas Avanzadas")).toBeInTheDocument();
    expect(screen.getByText("Seguimiento de Portafolio")).toBeInTheDocument();
  });

  it("incluye los textos descriptivos", () => {
    render(<Features />);
    expect(
      screen.getByText(/Obten precios en tiempo real/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Haz un seguimiento del sentimiento/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Acceso a metricas clave/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Monitorea tu portafolio/)
    ).toBeInTheDocument();
  });
});
