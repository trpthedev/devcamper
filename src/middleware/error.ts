import type { Request, Response, NextFunction } from "express";
import { Error as MongooseError } from "mongoose";
import { MongoServerError } from "mongodb";
import { ErrorResponse } from "../utils/errorResponse.js";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    let error = { ...err } as ErrorResponse;
    error.message = err.message;

    console.log(err.stack)

    if(err instanceof MongooseError.CastError) {
        const message = `Resource not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    if (err instanceof MongoServerError && err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }

    if (err instanceof MongooseError.ValidationError) {
        const message = Object.values(err.errors).map(val => val.message).join(", ");
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    });
}
