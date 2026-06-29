const express = require("express");

const app = express();

// O Render define a variável PORT automaticamente
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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
