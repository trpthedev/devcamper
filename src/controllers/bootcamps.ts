import type { Request, Response, NextFunction } from "express";

export const getBootcamps = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Show bootcamps",
    signature: req.signature, // Access the custom property added by the logger middleware
  });
};

export const getBootcamp = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Show bootcamp with id: " + req.params.id,
  });
};

export const createBootcamp = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Create bootcamps",
  });
};

export const updateBootcamp = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Update bootcamp with id: " + req.params.id,
  });
};

export const deleteBootcamp = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Delete bootcamp with id: " + req.params.id,
  });
};
