const express = require("express");

const healthRoute = require("./routes/health");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 A2KF Smart Pricing API");
});

app.use("/api/health", healthRoute);

module.exports = app;
