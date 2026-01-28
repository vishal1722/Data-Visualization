import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CountryChart = ({ data }) => {
  if (!data.length)
    return <p className="text-gray-400 text-center">No country data</p>;

  const counts = {};
  data.forEach(d => {
    if (d.country) counts[d.country] = (counts[d.country] || 0) + 1;
  });

  const chartData = {
    labels: Object.keys(counts),
    datasets: [
      {
        data: Object.values(counts),
        backgroundColor: [
          "#ef4444",
          "#22c55e",
          "#3b82f6",
          "#facc15",
          "#a855f7"
        ]
      }
    ]
  };

  return <Pie data={chartData} />;
};

export default CountryChart;
