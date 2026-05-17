import express from "express";
import dotenv from "dotenv";
import bootcamps from "./routes/bootcamps.js";
import { logger } from "./middleware/logger.js";
import { connectDB } from "./db.js";

dotenv.config();

connectDB();

const app = express();

app.use(logger);

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT ?? 3000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
});

process.on("unhandledRejection", (err: Error) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

