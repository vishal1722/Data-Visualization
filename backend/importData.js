const mongoose = require("mongoose");
const Insight = require("./models/Insight");
require("dotenv").config();

const data = require("./data/jsondata");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected for Import");

    await Insight.deleteMany();
    await Insight.insertMany(data);

    console.log("✅ DATA IMPORTED INTO ATLAS");
    process.exit();
  })
  .catch(err => {
    console.error("Import Error:", err);
    process.exit(1);
  });
