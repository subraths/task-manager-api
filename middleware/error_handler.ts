import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

const errorHandler = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({ message: err });
};

export default errorHandler;
