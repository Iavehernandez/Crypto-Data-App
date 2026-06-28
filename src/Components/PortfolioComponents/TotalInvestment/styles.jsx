
import styled from "styled-components";

export const TotalInvestmentPanel = styled.div`
  background-color: rgba(15,15,20,0.65);
  border-radius: 12px;
  padding: 20px;
  margin-left: 40px;
  width: 75%;
  max-width: 350px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);

  @media (max-width: 575px) {
    width: 100%;      
    max-width: none;     
    margin: 15px auto;
    padding: 16px;
    flex-direction: column; 
    gap: 12px;
  }
`;

export const TotalInvestmentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TotalInvestmentTitle = styled.h3`
  color: #A1A1AA;
  font-size: 14px;
  margin: 0;
`;

export const TotalInvestmentValue = styled.div`
  color: #fff;
  font-size: 20px;
    margin-top: 10px;
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: conic-gradient(#9b59b6 0% 50%, #2ecc71 50% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
