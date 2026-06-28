import react from "react";
import { FeaturesSection, FeatureGrid, FeatureCard, FeatureIcon, FeatureTitle, FeatureText } from "./styles";
import ArrowImage from "../../../assets/arrow-trend-up-solid-full.svg"
import ShieldImage from "../../../assets/shield-halved-solid-full.svg";
import PieChartImage from "../../../assets/chart-pie-solid-full.svg";
import StarImage from "../../../assets/star-regular-full.svg";



const Features = () => {
  return (

    

    <FeaturesSection>

        
      <h2>La acción está en tus manos</h2>
      <p>Invierte y genera rendimientos, sin costo y 24/7</p>

      <FeatureGrid>
        <FeatureCard>
          <FeatureIcon src={ArrowImage} alt="Prices" />
          <FeatureTitle>Precios en tiempo real</FeatureTitle>
          <FeatureText>
            Obten precios en tiempo real y gráficas de miles de criptomonedas.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon src={ShieldImage} alt="Sentiment" />
          <FeatureTitle>Sentimiento de Mercado</FeatureTitle>
          <FeatureText>
            Haz un seguimiento del sentimiento de mercado  &amp; índice de miedo en tiempo real.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon src={PieChartImage} alt="Analytics" />
          <FeatureTitle>Metricas Avanzadas</FeatureTitle>
          <FeatureText>
            Acceso a metricas clave, datos e indicadores de mercado.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon src={StarImage} alt="Portfolio" />
          <FeatureTitle>Seguimiento de Portafolio</FeatureTitle>
          <FeatureText>
            Monitorea tu portafolio y genera ingresos.
          </FeatureText>
        </FeatureCard>
      </FeatureGrid>
    </FeaturesSection>
  );
};
export default Features;