import axios from "axios";
import { parse } from "parse5";

const ScrapingBeeApiKey = process.env.REACT_APP_SCRAP_KEY;
const scrapingBeeBaseUrl = "https://app.scrapingbee.com/api/v1";

export const scrapeUrls = async (urls: string) => {
  const response = await axios.get(scrapingBeeBaseUrl, {
    params: {
      api_key: ScrapingBeeApiKey,
      url: urls,
    },
  });
  const document = parse(response.data);
  const bodyNode = findBodyNode(document);

  if (!bodyNode) {
    return "";
  }
  return getTextFromNode(document);
};
const findBodyNode = (node: any): any => {
  if (node.nodeName === "body") {
    return node;
  }

  if (node.childNodes && node.childNodes.length > 0) {
    for (const childNode of node.childNodes) {
      const bodyNode = findBodyNode(childNode);
      if (bodyNode) {
        return bodyNode;
      }
    }
  }

  return null;
};
const getTextFromNode = (node: any): string => {
  if (node.nodeName === "#text") {
    return node.value.trim();
  }
  let text = "";
  if (node.childNodes && node.childNodes.length > 0) {
    for (const childNode of node.childNodes) {
      text += getTextFromNode(childNode);
    }
  }

  return text;
};
