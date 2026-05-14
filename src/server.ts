import express from "express";
import dotenv from "dotenv";
import bootcamps from "./routes/bootcamps.js";

dotenv.config();

const app = express();

const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  req.signature = "TRP";
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};

app.use(logger);

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
});
