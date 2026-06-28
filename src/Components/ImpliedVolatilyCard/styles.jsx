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
    props.$level === "High"
      ? "rgba(255,80,80,0.15)"
      : props.$level === "Medium"
      ? "rgba(255,200,0,0.15)"
      : "rgba(0,255,163,0.15)"};

  color: ${(props) =>
    props.$level === "High"
      ? "#ff4d4d"
      : props.$level === "Medium"
      ? "#ffd166"
      : "#00ffa3"};
`;

export const Bar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
`;

export const Fill = styled.div`
  height: 100%;
  width: ${(props) => props.$value}%;
  background: linear-gradient(90deg, #00ffa3, #00c2ff);
`;