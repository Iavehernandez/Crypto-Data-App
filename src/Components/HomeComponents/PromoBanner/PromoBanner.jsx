import React from "react";
import { 
  BannerSection, 
  BannerContent, 
  BannerText, 
  BannerButton, 
  BannerIllustration 
} from "./styles";
import BannerImage from "../../../assets/rocket-3d-illustration-spaceship-icon-isolated-png.webp"

const PromoBanner = () => {
  return (
    <BannerSection>
      <BannerContent>
        <BannerText>
          <h2>La acción está en tus manos</h2>
          <p>
            Unete a miles de usuarios que usan Crypto Data
          </p>
          <BannerButton>
            Unete Gratis →
          </BannerButton>
          <span>No requiere tarjeta de crédito</span>
        </BannerText>

        <BannerIllustration>
          <img src={BannerImage} alt="Rocket illustration" />
        </BannerIllustration>
      </BannerContent>
    </BannerSection>
  );
};

export default PromoBanner;
