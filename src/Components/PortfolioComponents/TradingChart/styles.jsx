
import styled from "styled-components";

export const ChartPanel = styled.div`
  background-color: rgba(15, 15, 20, 0.75);
  border-radius: 16px;
  padding: 25px;
  margin: 20px auto;
  width: 100%;
  max-width: 800px;   
  height: 300px;     
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);
  overflow: hidden;
`;

export const ChartTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.1); 
  padding-bottom: 8px;
`;
