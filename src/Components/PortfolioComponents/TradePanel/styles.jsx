// TradeStyles.ts
import styled from "styled-components";

export const TradePanelContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

export const TradeButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 6px;
  font-weight: bold;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;

  &.buy {
    background-color: #2ecc71;
  }
  &.buy:hover {
    background-color: #27ae60;
  }

  &.sell {
    background-color: #e74c3c;
  }
  &.sell:hover {
    background-color: #c0392b;
  }
`;
