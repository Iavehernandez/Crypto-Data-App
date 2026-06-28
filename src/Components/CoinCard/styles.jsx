import styled from "styled-components";

export const CardContainer = styled.div`

    width:320px;
    height: 260px;
    padding: 24px;
    border-radius: 28px;
    position: relative;
    background: rgba(15,15,20,0.65);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(0,0,0,0.35);
    overflow: hidden;
    transition: 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const TopSection = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;

`;

export const CoinImage = styled.div`

    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 12 px;

`;

export const CoinInfo = styled.div`

    display: flex;
    align-items: center;

`;

export const CoinSymbol = styled.p`

    color: #8a8a8a;
    font-size: 12px;
    margin: 0;

`;

export const CoinName = styled.h3 `

    color:  white;
    font-size: 19px;
    margin: 0;

`;

export const Price = styled.h2 ` 

    color: white;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;

`;

export const Percentage = styled.div ` 

    color:  ${(props) =>
    props.positive ? "#29F5A6" : "#FF5A5A"};

    font-weight: 600;

`;