import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  SearchBarStyle,
  SearchResults,
  SearchItem,
  CoinInfo
} from "./styles";

import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../../Redux/slices/watchList";
import { searchCoins } from "../../Redux/thunks/cryptoThunks";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.crypto);


  const searchHandler = useCallback(
    (value) => {
      if (value.trim().length >= 2) {
        dispatch(searchCoins(value));
      }
    },
    [dispatch]
  );

 
  const delayedSearch = useMemo(
    () => debounce(searchHandler, 700),
    [searchHandler]
  );

  useEffect(() => {
    return () => {
      delayedSearch.cancel();
    };
  }, [delayedSearch]);

  const handleAdd = (coin) => {
    dispatch(
      addToWatchlist({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        image: coin.thumb,
      })
    );
  };

  return (
    <SearchBarStyle>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            delayedSearch(value);
          }}
          className="search"
          type="search"
          placeholder="Search for a coin"
        />

        {results?.length > 0 && (
          <SearchResults>
            {results.slice(0, 5).map((coin) => (
              <SearchItem key={coin.id}>
                <div className="coin-left">
                  <img src={coin.thumb} alt={coin.name} />
                  <CoinInfo>
                    <span>{coin.name}</span>
                    <small>{coin.symbol.toUpperCase()}</small>
                  </CoinInfo>
                </div>

                <button
                  className="add-btn"
                  type="button"
                  onClick={() => handleAdd(coin)}
                >
                  + Portafolio
                </button>
              </SearchItem>
            ))}
          </SearchResults>
        )}
      </form>
    </SearchBarStyle>
  );
};

export default SearchBar;