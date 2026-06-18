   import styled from 'styled-components';

  const SearchBarStyle = styled.div`
  input {
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-family: ${props => props.theme.fonts.base};
    width: 400px;
    background-color: ${props => props.theme.backgroundCards.secondaryInternal};
    outline: none;
    color: ${props => props.theme.title.primary};
    margin-right: 20px;
  }
`;
export {
    SearchBarStyle,
}