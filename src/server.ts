import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.send("Hello TRP!");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
});
