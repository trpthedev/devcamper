import type { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  req.signature = "TRP";
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};