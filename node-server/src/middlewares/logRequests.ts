import { NextFunction, Request, Response } from "express";
import logger from "../configs/logger";

const logRequests = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Recieved method ${req.method} from ${req.url}`);
  next();
};

export default logRequests;
