import React from "react";
import { BannerStyled, Buttons, PrimaryBtn, RealCryptoStyled, SecondaryBtn, SpanTitleStyled, TextStyled, TitleStyled } from "./styles";
import DashboardPreview from "../../../assets/Dashboard Preview 2.png"
import DataImage from "../../../assets/database-solid-full.svg"
import SecureImage from "../../../assets/lock-solid-full.svg"
import ChartImage from "../../../assets/chart-area-solid-full.svg"
import { Link } from "react-router-dom";

const Banner = () => {
    return (

      <BannerStyled>
      <div className="hero-left">
        <RealCryptoStyled>Crypto en Tiempo Real</RealCryptoStyled>

        <TitleStyled>
          Analiza tu dinero <SpanTitleStyled>Invierte Inteligente.</SpanTitleStyled>
        </TitleStyled>

        <TextStyled>
          Crypto Data ofrece datos de mercado en tiempo real, análisis avanzados e información clave para ayudarte a desenvolverte en el mercado de las criptomonedas con confianza.
        </TextStyled>

        <Buttons>
          <PrimaryBtn as={Link} to="./dashboard" style={{textDecoration: "none"}}>Explora el Dashboard</PrimaryBtn>
          <SecondaryBtn>Más de Crypto Data</SecondaryBtn>
        </Buttons>

        <hr></hr>

        <div className="hero-stats">
          
          <span><img src={DataImage}></img>Datos en tiempo Real</span>
          <span><img src={SecureImage}></img>Seguro & Confiable</span>
          <span><img src={ChartImage}></img>Gráficas Avanzadas</span>
        </div>
      </div>

       <hr></hr>

      <div className="hero-right">
        <img src={DashboardPreview} alt="Dashboard Preview" />
      </div>


     
   </BannerStyled>


    );
};

export default Banner;