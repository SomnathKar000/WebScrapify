import { Request, Response } from "express";

export const searchController = (req: Request, res: Response) => {
  res.send("searchController");
};
