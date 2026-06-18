import React from 'react';
import {HeaderStyle} from './styles';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {

    return (
        <HeaderStyle>
            <div>
                 <h1> Crypto Data  </h1>
                <p> Hello Welcome to Crypto Data </p>  
            </div>

            <nav>
                <a>Dashboard</a>
                <a>Favorites</a>
                <a>Portfolio</a>
            </nav>
          
          <SearchBar></SearchBar>
        
         
        </HeaderStyle>
    )

}

export default Header;