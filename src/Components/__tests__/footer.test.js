
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer/Footer";


jest.mock("../Footer/styles", () => ({
  FooterStyle: ({ children }) => <footer>{children}</footer>,
  FooterContent: ({ children }) => <div>{children}</div>,
  FooterColumn: ({ children }) => <div>{children}</div>,
  FooterBottom: ({ children }) => <div>{children}</div>,
}));

describe("Footer", () => {
  it("renderiza el título principal", () => {
    render(<Footer />);
    expect(screen.getByText("Crypto Data")).toBeInTheDocument();
  });

  it("muestra las secciones principales", () => {
    render(<Footer />);
    expect(screen.getByText("Producto")).toBeInTheDocument();
    expect(screen.getByText("Empresa")).toBeInTheDocument();
    expect(screen.getByText("Recursos")).toBeInTheDocument();
    expect(screen.getByText("Enterate")).toBeInTheDocument();
  });

  it("incluye elementos de lista", () => {
    render(<Footer />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Nosotros")).toBeInTheDocument();
    expect(screen.getByText("Documentación")).toBeInTheDocument();
  });

  it("incluye campo de suscripción y copyright", () => {
    render(<Footer />);
    expect(screen.getByPlaceholderText("Escribe tu Email")).toBeInTheDocument();
    expect(
      screen.getByText("© 2024 Crypto Data. Todos los Derechos Reservados")
    ).toBeInTheDocument();
  });
});
