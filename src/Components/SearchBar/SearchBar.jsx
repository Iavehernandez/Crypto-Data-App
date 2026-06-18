import React from 'react';
import {SearchBarStyle} from './styles';



const SearchBar = () => {

    return (

                <SearchBarStyle>
              
                        <input className="search" type="search" placeholder='Search for a coin' />
                 
                </SearchBarStyle>

    )
}

export default SearchBar;