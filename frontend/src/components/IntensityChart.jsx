import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const IntensityChart = ({ data }) => {
  if (!data.length)
    return <p className="text-gray-400 text-center">No intensity data</p>;

  const topData = data.slice(0, 10);

  const chartData = {
    labels: topData.map(d => d.topic || "Unknown"),
    datasets: [
      {
        label: "Intensity",
        data: topData.map(d => d.intensity || 0),
        backgroundColor: "#3b82f6",
        borderRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default IntensityChart;
