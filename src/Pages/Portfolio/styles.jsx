import styled from "styled-components";

export const TitleStyled = styled.div`
  margin-left: 40px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: ${(props) => props.theme.title.primary};
    margin-bottom: 4px;
  }

  p {
    font-size: 16px;
    color: ${(props) => props.theme.title.secondary};
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export const CoinCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;             
  max-width: 600px;        
  gap: 6px;
  margin: 15px auto;
  padding: 20px;
  background: rgba(20, 20, 25, 0.75);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #f5f5f7;
  font-size: 14px;
  line-height: 1.4;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgba(20, 20, 25, 0.9);
    transform: translateY(-3px);
    cursor: pointer;
  }

  span:first-child {
    font-weight: 600;
    font-size: 16px;
    color: #fff;
  }
`;

export const PortfolioLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 30px;

  .top {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    > * {
      flex: 1;              
      min-width: 250px;      
      max-width: 400px;    
    }

        @media (max-width: 768px) {
    flex-direction: column;  
    align-items: center;      
    gap: 30px;
   
  }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    margin-top: 30px;
    width: 100%;
  }


`;
