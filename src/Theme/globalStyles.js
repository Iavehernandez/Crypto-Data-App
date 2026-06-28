import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}

body{
    font-family: ${props => props.theme.fonts.base};
    background: ${props => props.theme.backgroundDegradient.background};
    min-height: 100vh;
}

body::before{

   content: "";

   position: fixed;

   width: 800px;
   height: 800px;

   background: radial-gradient(
      circle,
   
    rgba(53, 130, 247, 0.12) 0%,
     rgba(53, 130, 247, 0.06)40%,
   transparent 85%

   );

   bottom: -200px;
   left: -100px;
   filter: blur(60px);
   pointer-events: none;
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