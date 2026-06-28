import styled from "styled-components";

export const Container = styled.div`
    width: 320px;
    height: 260px;
    padding: 24px;
    border-radius: 28px;
    position: relative;
    background: rgba(15,15,20,0.65);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 8px 32px rgba(0,0,0,0.35);
    overflow: hidden;
    transition: 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const TopSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Score = styled.h2`
    color: white;
    font-size: 38px;
    font-weight: 600;
    margin: 0;
`;

export const Gauge = styled.div`
    width: 220px;
    height: 110px;
    position: relative;
    margin: auto;
    overflow: hidden;
`;

export const Arc = styled.div`
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 16px solid transparent;
    border-top-color: ${(props) => props.color};
    top: 0;
    left: 0;
    transform: rotate(${(props) => props.rotate});
`;

export const Needle = styled.div`
    position: absolute;
    width: 3px;
    height: 80px;
    background: white;
    bottom: 0;
    left: 50%;
    transform-origin: bottom center;
    transform: rotate(${(props) => props.rotation}deg);
    transition: 1s ease;
    box-shadow: 0 0 10px rgba(255,255,255,0.35);
`;

export const CenterDot = styled.div`
    width: 14px;
    height: 14px;
    background: white;
    border-radius: 50%;
    position: absolute;
    bottom: -7px;
    left: 47%;
`;

export const Label = styled.p`
    text-align: center;
    margin-top: 18px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ score }) =>
        score <= 24
            ? "#FF5A5A"
            : score <= 44
            ? "#FF9F43"
            : score <= 55
            ? "#FFD93D"
            : score <= 74
            ? "#29F5A6"
            : "#9B5CFF"};
`;