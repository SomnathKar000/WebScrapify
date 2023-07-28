import { config } from "dotenv";
import axios from "axios";
config();

const apiKey = process.env.ScrapingBeeApiKey!;
const scrapingBeeBaseUrl = "https://app.scrapingbee.com/api/v1";

export const scrapeUrl = async (urls: string[]) => {
  try {
    const response: any[] = await Promise.all(
      urls.map(async (url) => {
        const data = await axios.get(scrapingBeeBaseUrl, {
          params: {
            api_key: apiKey,
            url,
          },
        });
        return data.data;
      })
    );

    return response;
  } catch (error) {
    console.error("Error scraping URL:", error);
    throw new Error("Error scraping URL");
  }
};
