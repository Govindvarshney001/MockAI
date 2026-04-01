import express from "express";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./config/connectDB.js";

const app = express();

app.get("/", (req, res) => res.json("Hello, World!"));

const PORT = process.env.PORT || 30000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server due to DB error");
    process.exit(1);
  }
};

start();
