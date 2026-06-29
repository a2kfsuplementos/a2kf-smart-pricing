const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 A2KF Smart Pricing API");
});

module.exports = app;
