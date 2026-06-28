import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './Theme/globalStyles';
import Theme from './Theme';
import Header from './Components/Header/Header';
import Dashboard from './Pages/Dashboard/Dashboard';
import Portfolio from './Pages/Portfolio/Portfolio';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer'


const App = () => {
return (
  <ThemeProvider theme={Theme} >
    <GlobalStyles />

    <div className="App">
      <Header />
      

      <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/portfolio" element={<Portfolio></Portfolio>} />
     

      </Routes>

      <Footer></Footer>
    </div>
  </ThemeProvider>
)
}

export default App;