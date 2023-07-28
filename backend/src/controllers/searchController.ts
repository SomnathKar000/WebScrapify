import { Request, Response } from "express";
import { getSearchResults } from "../utils/googleSearch";
import { config } from "dotenv";

config();

export const searchController = async (req: Request, res: Response) => {
  const query = req.body.query;
  const apiKey = process.env.API_KEY!;
  const cx = process.env.CX!;
  if (!query) {
    throw new Error("No query provided");
  }
  try {
    const results = await getSearchResults(query, apiKey, cx);
    res.status(200).json({ success: true, results });
  } catch (error) {
    throw new Error("Error fetching search results");
  }
};
