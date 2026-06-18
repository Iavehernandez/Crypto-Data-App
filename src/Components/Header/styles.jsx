import styled from 'styled-components';

 const HeaderStyle = styled.header`
    color: ${props => props.theme.title.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.base};
    font-weight: 600;
    font-size: 32px;
    margin-left: 20px;

    p{
        color: ${props => props.theme.title.secondary};
        font-size: 18px;
        font-weight: 400;
        margin-top: 10px;
    }
    nav{
        font-size: 18px;
        color: ${props => props.theme.title.primary};
        display: flex;
        gap: 30px;
        align-items: center;
        cursor: pointer;
        font-weight: 500;

    a{
    transition: color 0.3s ease;}


  a:hover {
    color: rgba(241, 240, 240, 0.69);
  }

    }


    input {
        border: none;
        border-radius: 10px;
        padding: 10px;
        font-family: ${props => props.theme.fonts.base};
        display: flex;
        width: 400px;
        background-color: ${props => props.theme.backgroundCards.secondaryInternal};
        outline: none;
        color: ${props => props.theme.title.primary};
        margin-right: 20px;
    }
`

export {
    HeaderStyle,
}

