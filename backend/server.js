const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 A2KF Smart Pricing está online!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "A2KF Smart Pricing",
    version: "1.0.0"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
