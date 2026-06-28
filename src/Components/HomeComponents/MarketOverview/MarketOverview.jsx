import React from "react";
import { 
  MarketSection, 
  MarketContainer, 
  MarketTable, 
  TableHeader, 
  TableRow,  
  Negative,
  Positive
} from "./styles";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";


const btcData = [
  { day: 1, price: 100 }, { day: 2, price: 105 }, { day: 3, price: 102 },
  { day: 4, price: 110 }, { day: 5, price: 108 }, { day: 6, price: 112 }, { day: 7, price: 115 },
];
const ethData = [
  { day: 1, price: 50 }, { day: 2, price: 52 }, { day: 3, price: 51 },
  { day: 4, price: 54 }, { day: 5, price: 53 }, { day: 6, price: 55 }, { day: 7, price: 57 },
];
const usdtData = [
  { day: 1, price: 1 }, { day: 2, price: 1 }, { day: 3, price: 1 },
  { day: 4, price: 1 }, { day: 5, price: 1 }, { day: 6, price: 1 }, { day: 7, price: 1 },
];
const bnbData = [
  { day: 1, price: 200 }, { day: 2, price: 205 }, { day: 3, price: 198 },
  { day: 4, price: 210 }, { day: 5, price: 208 }, { day: 6, price: 212 }, { day: 7, price: 215 },
];
const solData = [
  { day: 1, price: 20 }, { day: 2, price: 22 }, { day: 3, price: 21 },
  { day: 4, price: 24 }, { day: 5, price: 23 }, { day: 6, price: 25 }, { day: 7, price: 27 },
];

const MarketOverview = () => {
  return (
    <MarketSection>
      <MarketContainer>
        <h2>Market Overview</h2>
        <MarketTable>
          <thead>
            <TableHeader>
              <th>Coin</th>
              <th>Price</th>
              <th>24H %</th>
              <th>7D %</th>
              <th>Market Cap</th>
              <th>24H Volume</th>
              <th>Last 7 Days</th>
            </TableHeader>
          </thead>
          <tbody>
            <TableRow>
              <td>Bitcoin (BTC)</td>
              <td>$1040834</td>
              <td><Negative>-0.99%</Negative></td>
              <td><Positive>+2.35%</Positive></td>
              <td>$208.52B</td>
              <td>$36.24B</td>
              <td>
                <ResponsiveContainer width={150} height={60}>
                  <LineChart data={btcData}>
                    <Line type="monotone" dataKey="price" stroke="#f7931a" strokeWidth={2.2} dot={false} />
                    <Tooltip contentStyle={{ background: "#1c1c1c", border: "none", color: "#fff" }} />
                  </LineChart>
                </ResponsiveContainer>
              </td>
            </TableRow>
            <TableRow>
              <td>Ethereum (ETH)</td>
              <td>$27437</td>
              <td><Negative>-0.96%</Negative></td>
              <td><Positive>+1.12%</Positive></td>
              <td>$330.74B</td>
              <td>$18.35B</td>
              <td>
                <ResponsiveContainer width={150} height={60}>
                  <LineChart data={ethData}>
                    <Line type="monotone" dataKey="price" stroke="#627eea" strokeWidth={2.2} dot={false} />
                    <Tooltip contentStyle={{ background: "#1c1c1c", border: "none", color: "#fff" }} />
                  </LineChart>
                </ResponsiveContainer>
              </td>
            </TableRow>
            <TableRow>
              <td>Tether (USDT)</td>
              <td>$17.49</td>
              <td><Negative>-0.73%</Negative></td>
              <td><Positive>+0.01%</Positive></td>
              <td>$112.23B</td>
              <td>$45.67B</td>
              <td>
                <ResponsiveContainer width={150} height={60}>
                  <LineChart data={usdtData}>
                    <Line type="monotone" dataKey="price" stroke="#26a17b" strokeWidth={2.2} dot={false} />
                    <Tooltip contentStyle={{ background: "#1c1c1c", border: "none", color: "#fff" }} />
                  </LineChart>
                </ResponsiveContainer>
              </td>
            </TableRow>
            <TableRow>
              <td>BNB (BNB)</td>
              <td>$9763.16</td>
              <td><Positive>+0.16%</Positive></td>
              <td><Negative>-1.23%</Negative></td>
              <td>$98.76B</td>
              <td>$2.45B</td>
              <td>
                <ResponsiveContainer width={150} height={60}>
                  <LineChart data={bnbData}>
                    <Line type="monotone" dataKey="price" stroke="#f3ba2f" strokeWidth={2.2} dot={false} />
                    <Tooltip contentStyle={{ background: "#1c1c1c", border: "none", color: "#fff" }} />
                  </LineChart>
                </ResponsiveContainer>
              </td>
            </TableRow>
            <TableRow>
              <td>Solana (SOL)</td>
              <td>$148.35</td>
              <td><Negative>-1.25%</Negative></td>
              <td><Positive>+5.67%</Positive></td>
              <td>$67.98B</td>
              <td>$3.21B</td>
              <td>
                <ResponsiveContainer width={150} height={60}>
                  <LineChart data={solData}>
                    <Line type="monotone" dataKey="price" stroke="#00ffb3" strokeWidth={2.2} dot={false} />
                    <Tooltip contentStyle={{ background: "#1c1c1c", border: "none", color: "#fff" }} />
                  </LineChart>
                </ResponsiveContainer>
              </td>
            </TableRow>
          </tbody>
        </MarketTable>
      </MarketContainer>

      
    </MarketSection>
  );
};

export default MarketOverview;
