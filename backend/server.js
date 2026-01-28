const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://thakarevishal286_db_user:Vishal17@cluster0.6xfinar.mongodb.net/dashboard?retryWrites=true&w=majority"
  )
  .then(() => console.log(" MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

app.use("/api/insights", require("./routes/insights"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
