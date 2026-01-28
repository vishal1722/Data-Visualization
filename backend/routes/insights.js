const express = require("express");
const router = express.Router();
const Insight = require("../models/Insight");

router.get("/", async (req, res) => {
  try {
    const filters = {};

    if (req.query.end_year) filters.end_year = req.query.end_year;
    if (req.query.topic) filters.topic = req.query.topic;
    if (req.query.region) filters.region = req.query.region;
    if (req.query.sector) filters.sector = req.query.sector;
    if (req.query.pestle) filters.pestle = req.query.pestle;
    if (req.query.source) filters.source = req.query.source;
    if (req.query.swot) filters.swot = req.query.swot;
    if (req.query.country) filters.country = req.query.country;
    if (req.query.city) filters.city = req.query.city;

    const data = await Insight.find(filters);
    res.json(data);
  } catch (error) {
    console.error("Error fetching insights:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
