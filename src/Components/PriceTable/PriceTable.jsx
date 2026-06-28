import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  CoinName,
  PriceUp,
  PriceDown,
  TableContainer,
  
} from "../PriceTable/styles";

const PriceList = ({ coins = [] }) => {
  return (
    <TableContainer>
    <Table>
      <thead>
        <tr>
          <TableHead>Coin</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>24h %</TableHead>
          <TableHead>Market Cap</TableHead>
        </tr>
      </thead>

      <tbody>
        {coins.map((coin) => {
          const isPositive = coin.price_change_percentage_24h >= 0;

          return (
            <TableRow key={coin.id}>
              <TableCell>
                <CoinName>
                  <img src={coin.image} alt={coin.name} />
                  {coin.name}
                </CoinName>
              </TableCell>

              <TableCell>${coin.current_price}</TableCell>

              <TableCell>
                {isPositive ? (
                  <PriceUp>
                    +{coin.price_change_percentage_24h.toFixed(2)}%
                  </PriceUp>
                ) : (
                  <PriceDown>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </PriceDown>
                )}
              </TableCell>

              <TableCell>${coin.market_cap}</TableCell>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
    </TableContainer>
  );
};

export default PriceList;