import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import {
  ProfitLossPanel,
  ProfitLossTitle,
  ProfitLossValue,
  ProfitLossChange,
} from "./styles";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const ProfitLoss = () => {
  

  const history = useSelector(
    (state) => state.portfolio.history
  );


  const totalProfit = history.reduce(
    (acc, trade) => acc + (trade.profit || 0),
    0
  );

  const positive = totalProfit >= 0;

  const chartData = useMemo(() => {
    return {
      labels: history.map((t) => t.name || "trade"),
      datasets: [
        {
          data: history.map((t) => t.profit),
          borderColor: positive ? "#2ecc71" : "#e74c3c",
          backgroundColor: "transparent",
          tension: 0.3,
          pointRadius: 2,
        },
      ],
    };
  }, [history, positive]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <ProfitLossPanel>
      <ProfitLossTitle>Ganancia / Pérdida</ProfitLossTitle>

      <ProfitLossValue>
        {totalProfit.toLocaleString("es-MX", {
          style: "currency",
          currency: "MXN",
        })}
      </ProfitLossValue>

      <ProfitLossChange positive={positive}>
        {positive ? "▲" : "▼"}{" "}
        {history.length > 0
          ? ((totalProfit / history.length) || 0).toFixed(2)
          : 0}
      </ProfitLossChange>

      <div style={{ flex: 1 }}>
        <Line data={chartData} options={options} />
      </div>
    </ProfitLossPanel>
  );
};

export default ProfitLoss;