const mongoose = require("mongoose");

const InsightSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  end_year: Number,
  country: String,
  topic: String,
  region: String,
  city: String,
  sector: String,
  pestle: String,
  source: String,
  swot: String
});

module.exports = mongoose.model("Insight", InsightSchema);
