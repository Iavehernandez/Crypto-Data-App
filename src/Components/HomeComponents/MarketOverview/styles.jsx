import styled from "styled-components";

export const MarketSection = styled.section`
  width: 95%;
  padding: 60px;
  color: #f5f5f7;
  margin: 0 auto;
  border-radius: 20px;
  background: rgba(15,15,20,0.65);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(0,0,0,0.35);
    overflow: hidden;
    margin-bottom: 100px;
    padding-bottom: 40px;
      backdrop-filter: blur(18px);

       @media (max-width: 575px) {
    padding: 20px;
     text-align: center;
  }

   overflow-x: auto;

   &::-webkit-scrollbar {
    height: 8px; 
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #9b61b4, #4f25b3);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(90deg, #a360d3, #6501de);
  }

  
`;

export const MarketContainer = styled.div`
  margin-bottom: 60px;
  

  h2{
   margin-bottom: 30px;
   font-size: 32px;
   font-weight: 700;

    @media (max-width: 575px) {
      font-size: 24px;
      text-align: center; 
    }
  }
`;

export const MarketTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;

  th, td {
    padding: 14px 20px;
    text-align: left;
  }

  th {
    color: rgba(245,245,247,0.8);
    font-weight: 600;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  td {
    border-bottom: 1px solid rgba(255,255,255,0.05);
    color: #f5f5f7;
    vertical-align: middle;
  }

  
`;

export const TableHeader = styled.tr`
  background: rgba(7, 7, 12, 0.65);
`;

export const TableRow = styled.tr`
  &:hover {
    background: rgba(255,255,255,0.03);
  }
`;

export const Positive = styled.span`
  color: #52c41a; 
  font-weight: 600;
`;

export const Negative = styled.span`
  color: #ff4d4f;
  font-weight: 600;
`;


