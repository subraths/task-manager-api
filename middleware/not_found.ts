import { Request, Response } from "express";

const notFound = (req: Request, res: Response) =>
  res.status(404).json({ message: "route doesnot exist" });
export default notFound;
