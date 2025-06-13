import { ErrorRequestHandler } from "express";
import logger from "../configs/logger";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.info(err.stack);

  res
    .status(err.status || 500)
    .json({ success: false, message: err.message || "Internal server error" });

  next();
};

export default errorHandler