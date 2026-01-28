import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(PointElement, LinearScale, Tooltip, Legend);

const LikelihoodRelevanceChart = ({ data }) => {
  if (!data.length)
    return <p className="text-gray-400 text-center">No relevance data</p>;

  const chartData = {
    datasets: [
      {
        label: "Likelihood vs Relevance",
        data: data.map(d => ({
          x: d.likelihood || 0,
          y: d.relevance || 0
        })),
        backgroundColor: "#ec4899"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx =>
            `Likelihood: ${ctx.raw.x}, Relevance: ${ctx.raw.y}`
        }
      }
    }
  };

  return <Scatter data={chartData} options={options} />;
};

export default LikelihoodRelevanceChart;
