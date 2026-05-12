import express from "express";
import dotenv from "dotenv";
import bootcamps from "./routes/bootcamps.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
});
