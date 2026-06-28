import styled from "styled-components";

export const BannerSection = styled.section`
  width: 95%;
  padding: 60px;
  background: linear-gradient(135deg, #0d0d0f, #1a1a2e 40%, #4f25b3 80%, #9b61b4 100%);
  color: #f5f5f7;
  border-radius: 12px;
  margin: 40px auto;
 
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BannerText = styled.div`
  max-width: 600px;

  h2 {
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: rgba(245,245,247,0.85);
    margin-bottom: 20px;
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 14px;
    color: rgba(245,245,247,0.6);
    margin-left: 10px;
  }
`;

export const BannerButton = styled.button`
  background: linear-gradient(90deg, #9b61b4, #4f25b3);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    filter: brightness(0.85);
  }
`;

export const BannerIllustration = styled.div`
  img {
    width: 180px;
    height: auto;
  }
`;
