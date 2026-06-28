import React from "react";
import { FooterStyle, FooterContent, FooterColumn, FooterBottom } from "./styles";

const Footer = () => {
  return (
    <FooterStyle>
      <FooterContent>
        <FooterColumn>
          <h2>Crypto Data</h2>
          <p>
            Tu fuente más confiable de datos de criptomonedas e indicadores de mercado
          </p>
        </FooterColumn>

        <FooterColumn>
          <h3>Producto</h3>
          <ul>
            <li>Dashboard</li>
            <li>Portafolio</li>
            <li>Crypto</li>
            <li>API</li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Empresa</h3>
          <ul>
            <li>Nosotros</li>
            <li>Contacto</li>
            <li>Políticas de Privacidad</li>
            <li>Términos</li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Recursos</h3>
          <ul>
            <li>Documentación</li>
            <li>Blog</li>
            <li>Soporte</li>
          
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h3>Enterate</h3>
          <p>Obten lo último en indices y actualizaciones </p>
          <div className="subscribe">
            <input type="email" placeholder="Escribe tu Email" />
            <button>→</button>
          </div>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <p>© 2024 Crypto Data. Todos los Derechos Reservados</p>
      </FooterBottom>
    </FooterStyle>
  );
};

export default Footer;
