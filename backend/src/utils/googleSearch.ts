import axios from "axios";

export const getSearchResults = async (
  query: string,
  apiKey: string,
  cx: string
) => {
  try {
    const apiUrl = "https://www.googleapis.com/customsearch/v1";
    const response = await axios.get(apiUrl, {
      params: {
        key: apiKey,
        cx,
        q: query,
      },
    });

    const results = response.data.items.slice(0, 5).map((item: any) => ({
      title: item.title,
      url: item.link,
    }));

    return results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
