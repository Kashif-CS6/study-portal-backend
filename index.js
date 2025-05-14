import express from "express";
import { configDotenv } from "dotenv";
import { ConnectDB } from "./db/index.js";

configDotenv();

const app = express();

const PORT = process.env.PORT || 5190;

app.get("/", (req, res) => {
  res.send("Server Running Successfully!");
});

app.listen(PORT, () => {
  ConnectDB();
  console.log(`Server Running on http://localhost:${PORT}`);
});
