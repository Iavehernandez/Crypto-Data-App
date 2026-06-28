import styled from "styled-components";

export const SearchBarStyle = styled.div`
  position: relative;
  width: 340px;

  .search-form {
    position: relative;
    width: 100%;
  }

  .search {
    width: 100%;
    padding: 14px 18px;
    border-radius: 18px;
    border: 1px solid rgba(139, 92, 246, 0.18);

    background: rgba(20, 20, 30, 0.75);
    backdrop-filter: blur(18px);

    color: #f5f5f5;
    font-size: 14px;
    font-weight: 500;

    outline: none;
    transition: all 0.25s ease;

    box-shadow: 
      inset 0 0 0 1px rgba(255,255,255,0.02),
      0 8px 24px rgba(0,0,0,0.35);
  }

  .search::placeholder {
    color: rgba(255,255,255,0.35);
  }

  .search:focus {
    border: 1px solid #7c3aed;

    box-shadow:
      0 0 0 1px rgba(124,58,237,0.4),
      0 0 18px rgba(124,58,237,0.2);
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 56px;
  width: 100%;

  background: rgba(12, 12, 18, 0.95);
  backdrop-filter: blur(20px);

  border: 1px solid rgba(139, 92, 246, 0.15);

  border-radius: 20px;
  overflow: hidden;

  box-shadow:
    0 10px 40px rgba(0,0,0,0.45);

  z-index: 100;
`;

export const SearchItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 18px;

  border-bottom: 1px solid rgba(255,255,255,0.04);

  transition: all 0.2s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.05);
  }

  .coin-left {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .add-btn {
    border: none;
    cursor: pointer;

    padding: 8px 14px;
    border-radius: 12px;

    background: linear-gradient(
      135deg,
      #7c3aed,
      #4f46e5
    );

    color: white;
    font-size: 11px;
    font-weight: 600;

    transition: 0.25s ease;
  }

  .add-btn:hover {
    transform: scale(1.04);

    box-shadow:
      0 0 12px rgba(124,58,237,0.35);
  }
`;

export const CoinInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: white;
    font-size: 14px;
    font-weight: 600;
  }

  small {
    color: #8b5cf6;
    font-size: 12px;
    margin-top: 2px;
  }


  @media (max-width: 480px) {
    span {
      font-size: 12px;
    }
    small {
      font-size: 10px;
    }
  }

`;