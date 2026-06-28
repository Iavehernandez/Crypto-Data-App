import styled from "styled-components";

export const FeaturesSection = styled.section`
  width: 100%;
  padding: 80px 60px;
 
  color: #f5f5f7;
  text-align: center;
  

  h2 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: rgba(245, 245, 247, 0.7);
    margin-bottom: 40px;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
`;

export const FeatureCard = styled.div`
  
  border-radius: 16px;
  padding: 30px;
  text-align: left;
  transition: transform 0.3s ease;

   background: rgba(15,15,20,0.65);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(0,0,0,0.35);
    overflow: hidden;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const FeatureIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const FeatureText = styled.p`
  font-size: 14px;
  color: rgba(245, 245, 247, 0.8);
  line-height: 1.6;
`;
