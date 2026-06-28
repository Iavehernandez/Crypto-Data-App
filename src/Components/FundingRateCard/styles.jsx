import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  padding: 20px;
  border-radius: 24px;

  background: rgba(15,15,20,0.65);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  gap: 12px;
    transition: 0.3s ease;

   &:hover {
        transform: translateY(-5px);
    }
`;

export const Title = styled.h3`
  font-size: 14px;
  color: #aaa;
`;

export const Value = styled.h2`
  font-size: 26px;
  color: #fff;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: #777;
`;

export const Badge = styled.span`
  width: fit-content;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;

  background: ${(props) =>
    props.$type === "positive"
      ? "rgba(0,255,163,0.15)"
      : "rgba(255,80,80,0.15)"};

  color: ${(props) =>
    props.$type === "positive" ? "#00ffa3" : "#ff4d4d"};
`;