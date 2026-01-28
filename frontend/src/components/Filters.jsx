const Filters = ({ setFilters }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
      <input
        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        placeholder="End Year"
        onChange={e => setFilters(f => ({ ...f, end_year: e.target.value }))}
      />

      <input
        className="px-3 py-2 border rounded-lg"
        placeholder="Topic"
        onChange={e => setFilters(f => ({ ...f, topic: e.target.value }))}
      />

      <input
        className="px-3 py-2 border rounded-lg"
        placeholder="Sector"
        onChange={e => setFilters(f => ({ ...f, sector: e.target.value }))}
      />

      <input
        className="px-3 py-2 border rounded-lg"
        placeholder="Region"
        onChange={e => setFilters(f => ({ ...f, region: e.target.value }))}
      />

      <input
        className="px-3 py-2 border rounded-lg"
        placeholder="Country"
        onChange={e => setFilters(f => ({ ...f, country: e.target.value }))}
      />

      <input
        className="px-3 py-2 border rounded-lg"
        placeholder="PESTLE"
        onChange={e => setFilters(f => ({ ...f, pestle: e.target.value }))}
      />
    </div>
  );
};

export default Filters;
