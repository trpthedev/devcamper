import type { Request, Response, NextFunction } from "express";
import { Bootcamp } from "../models/Bootcamp.js";
import { ErrorResponse } from "../utils/errorResponse.js";

export const getBootcamps = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({
            success: true,
            data: bootcamps
        });
    } catch (err: unknown){
        next(err);
    }   
};

export const getBootcamp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if (!bootcamp) {
            return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404));
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (err: unknown) {
       next(err);
    }   

};

export const createBootcamp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (err: unknown) {
        next(err);
    }

};

export const updateBootcamp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!bootcamp) {
            return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (err: unknown) {
        next(err);
    }

};

export const deleteBootcamp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err: unknown) {
        next(err);
    }

};
