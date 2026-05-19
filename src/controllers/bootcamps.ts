import type { Request, Response, NextFunction } from "express";
import { Bootcamp } from "../models/Bootcamp.js";

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

export const createBootcamp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : String(err);

        res.status(400).json({
            success: false,
            error: errorMessage
        });
    }

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
