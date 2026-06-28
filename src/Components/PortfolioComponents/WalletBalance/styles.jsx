import styled from "styled-components";

export const WalletCard = styled.div`
  background: rgba(15,15,20,0.65);
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  font-family: ${props => props.theme.fonts.base};
  display: flex;
  flex-direction: row; 
  align-items: center;
  gap: 16px; 
  width: 20%;
  margin-left: 40px;
  margin-top: 25px;
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);
  overflow: hidden;

  img {
    width: 50px;
    flex-shrink: 0;
  }

  .wallet-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  h2 {
    font-size: 14px;
    margin: 0;
    color: ${props => props.theme.title.secondary};
  }

  p {
    font-size: 22px;
    margin-top: 10px;
  }

   @media (max-width: 575px) {
    width: 100%;     
    margin: 15px auto;
    padding: 16px;
    gap: 12px;

    img {
      width: 40px;    
    }

    h2 {
      font-size: 12px;
    }

    p {
      font-size: 18px;
    }
  }
`;
