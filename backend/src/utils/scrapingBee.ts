import { config } from "dotenv";
import axios from "axios";
config();

const apiKey = process.env.ScrapingBeeApiKey!;
const scrapingBeeBaseUrl = "https://app.scrapingbee.com/api/v1";

export const scrapeUrl = async (url: string) => {
  try {
    const response = await axios.get(`${scrapingBeeBaseUrl}/scrape`, {
      params: {
        apiKey,
        url: encodeURIComponent(url),
      },
    });
    console.log(response.data);

    // return response.data;
    return url;
  } catch (error) {
    console.error("Error scraping URL:", error);
    throw new Error("Error scraping URL");
  }
};
