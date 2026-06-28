
import styled from "styled-components";

export const ProfitLossPanel = styled.div`
  background-color:  rgba(15,15,20,0.65);
  border-radius: 12px;
  padding: 20px;
  flex: 1;
   min-height: 120px;
  min-width: 250px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);
  overflow: hidden;



  @media (max-width: 575px) {
    width: 100%;   
    margin: 15px auto;
    padding: 16px;
  }

`;

export const ProfitLossTitle = styled.h3`
   color: #A1A1AA;
  font-size: 14px;
  margin: 0;
`;

export const ProfitLossValue = styled.div`
  color: #F5F5F7;
  font-size: 20px;
  margin-top: 10px;

`;

export const ProfitLossChange = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.positive ? "#2ecc71" : "#e74c3c")};
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;


  @media (max-width: 575px) {
    font-size: 12px;
    justify-content: center;
    margin-top: 12px;
  }

`;
