import styled from "styled-components";

export const FooterStyle = styled.footer`
  
    margin-top: 40px;
  color: #f5f5f7;
  padding: 60px 40px 30px;
  font-family: ${(props) => props.theme.fonts.base};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 20px;

  h2 {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    color: rgba(245, 245, 247, 0.7);
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #9b61b4;
      }
    }
  }

  .subscribe {
    display: flex;
    align-items: center;

    input {
      padding: 10px;
      border: none;
      border-radius: 4px;
      margin-right: 8px;
      flex: 1;
    }

    button {
      background: linear-gradient(90deg, #9b61b4, #4f25b3);
      border: none;
      border-radius: 4px;
      color: #fff;
      padding: 10px 16px;
      cursor: pointer;
      transition: filter 0.3s ease;

      &:hover {
        filter: brightness(0.85);
      }
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;

  p {
    font-size: 12px;
    color: rgba(245, 245, 247, 0.6);
  }
`;
