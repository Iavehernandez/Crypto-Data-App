
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartPanel, ChartTitle } from "./styles";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ChartTrading = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  const chartData = {
    labels: data.map((point) =>
      new Date(point[0]).toLocaleDateString("es-MX", { day: "numeric", month: "short" })
    ),
    datasets: [
      {
        label: "Trading",
        data: data.map((point) => point[1]),
        borderColor: "#9b59b6", 
        backgroundColor: "rgba(155, 89, 182, 0.2)",
        tension: 0.4, 
        pointRadius: 3,
        pointHoverRadius: 6,
        pointBackgroundColor: "#9b59b6",
        fill: true, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e1e2f",
        titleColor: "#fff",
        bodyColor: "#ccc",
        borderColor: "#9b59b6",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: "#ccc", font: { size: 12 } },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        ticks: { color: "#ccc", font: { size: 12 } },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return (
    <ChartPanel>
      <ChartTitle>Evolución del portafolio</ChartTitle>
      <Line data={chartData} options={options} />
    </ChartPanel>
  );
};

export default ChartTrading;
