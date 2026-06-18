import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}

body{
    font-family: ${props => props.theme.fonts.base};
    background: ${props => props.theme.backgroundDegradient.background};
    min-height: 100vh;
}
* {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
}
    hr{
        border: 0.1px solid ${props => props.theme.colors.line};
        margin: 5px 0;
    }

`

 export default GlobalStyles;