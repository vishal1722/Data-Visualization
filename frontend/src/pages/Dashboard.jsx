import { useEffect, useState } from "react";
import { fetchInsights } from "../api/api";
import Filters from "../components/Filters";
import IntensityChart from "../components/IntensityChart";
import CountryChart from "../components/CountryChart";
import LikelihoodRelevanceChart from "../components/LikelihoodRelevanceChart";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchInsights(filters)
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        📊 Data Visualization Dashboard
      </h1>

      <Filters setFilters={setFilters} />

      {loading ? (
        <p className="text-center text-gray-500">Loading data...</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="font-semibold mb-2">Intensity by Topic</h2>
              <IntensityChart data={data} />
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="font-semibold mb-2">Country Distribution</h2>
              <CountryChart data={data} />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-2">
              Likelihood vs Relevance
            </h2>
            <LikelihoodRelevanceChart data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
