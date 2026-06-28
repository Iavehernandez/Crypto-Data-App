import styled from 'styled-components';

const HeaderStyle = styled.header`

  color: ${props => props.theme.title.primary};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 100;

  .title-container {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  img { width: 50px; cursor: pointer; }
  h1 { margin: 0; font-size: 24px; }
  p { color: ${props => props.theme.title.secondary}; font-size: 14px; }

 
  .desktop-layout {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 18px;
    font-weight: 500;
  }

  a {
    color: ${props => props.theme.title.primary};
    text-decoration: none;
    padding: 8px 14px;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
  }

  a.active {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
    font-weight: 600;
  }

  a.active::after {
    content: "";
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
  }


  .icons {
    display: none;
    font-size: 28px;
    color: #fff;
    cursor: pointer;
    z-index: 300;
  }

  .menu-toggle {
    background: none;
    border: none;
    cursor: pointer;
  }

  .mobile-nav {
    display: none;
  }


  @media (max-width: 768px) {
    .desktop-layout { display: none; }
    .icons { display: flex; }

    .mobile-nav {
      flex-direction: column;
      gap: 16px;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 250px;
      background: rgba(15, 15, 20, 0.95);
      padding: 40px 20px;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 200;
    }

    .mobile-nav.open { display: flex; transform: translateX(0); }
    .mobile-nav.close { display: flex; transform: translateX(100%); }
  }
`;

export { HeaderStyle };
