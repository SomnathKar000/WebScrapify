import { Request, Response } from "express";

import { scrapeUrl } from "../utils/scrapingBee";

export const scrapeController = async (req: Request, res: Response) => {
  const urls = req.body.urls;
  if (!urls) {
    throw new Error("No urls provided");
  }
  try {
    const data = await scrapeUrl(urls);
    res.status(200).json({ success: true, data });
  } catch (error) {
    // console.log(error);
    throw new Error("Error fetching search results");
  }
};
