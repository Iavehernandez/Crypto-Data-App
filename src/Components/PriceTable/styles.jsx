import styled from "styled-components";


export const TableContainer = styled.div`
  width: 90%;
  margin-top: 40px;
  padding: 20px;
  margin-bottom: 40px;

  background: rgba(15, 15, 20, 0.65);
  backdrop-filter: blur(18px);

  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.06);

  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);

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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: white;
  font-size: 14px;
`;

export const TableHead = styled.th`
  text-align: left;
  padding: 14px 16px;
  font-size: 12px;
  letter-spacing: 1px;
  opacity: 0.6;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`;

export const TableCell = styled.td`
  padding: 16px;
`;

export const CoinName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const PriceUp = styled.span`
  color: #00ff99;
`;

export const PriceDown = styled.span`
  color: #ff4d4d;
`;