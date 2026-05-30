import type { Request, Response, NextFunction } from "express";
import { Error as MongooseError } from "mongoose";
import { ErrorResponse } from "../utils/errorResponse.js";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    let error = { ...err } as ErrorResponse;
    error.message = err.message;

    console.log(err.stack)

    if(err instanceof MongooseError.CastError) {
        const message = `Resource not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    });
}
