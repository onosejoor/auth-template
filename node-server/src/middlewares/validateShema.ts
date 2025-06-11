import logger from "../configs/logger";
import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";


export default function validateSchema(schema: ZodSchema<any, any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        logger.info(error.errors);
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        res.status(400).json({
          success: false,
          message: "Invalid data",
          details: errorMessages,
        });
        return;
      }
      res.status(500).json({ success: false, message: "Internal error" });
    }
  };
}
