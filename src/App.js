import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './Theme/globalStyles';
import Theme from './Theme';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';


const App = () => {
return (
  <ThemeProvider theme={Theme} >
    <GlobalStyles />
    <div className="App">
      <Header />
      <Home />
    </div>
  </ThemeProvider>
)
}

export default App;