import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoinChart } from "../../Redux/thunks/cryptoThunks";
import { ChartWrapper } from "./styles";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Chart = ({ coinId }) => {
  const dispatch = useDispatch();
  const { chart, loading, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    if (coinId) {
      dispatch(fetchCoinChart(coinId));
    }
  }, [coinId, dispatch]);

  if (loading) return <p>Loading Chart...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!chart) return <p>No chart data</p>;


  const prices = chart.prices.map((item) => item[1]);
  const averagePrice = prices.reduce((a, b) => a + b, 0) / prices.length;

  const chartData = {
    labels: prices.map((_, index) => index),
    datasets: [
      {
        data: prices,
        borderColor: "#2EE6A6",
        borderWidth: 2,
        tension: 0.5,
        pointRadius: 0,
        fill: false,
      },
      {
        data: Array(prices.length).fill(averagePrice),
        borderColor: "rgba(255,255,255,0.2)",
        borderDash: [5, 5],
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false, grid: { display: false } },
      y: { display: false, grid: { display: false } },
    },
  };

  return (
    <ChartWrapper>
      <Line data={chartData} options={options} />
    </ChartWrapper>
  );
};

export default Chart;
