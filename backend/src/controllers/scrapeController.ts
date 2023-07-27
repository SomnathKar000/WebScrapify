import { Request, Response } from "express";

export const scrapeController = (req: Request, res: Response) => {
  res.send("searchController");
};
