import axios from "axios";

export const getSearchResults = async (query: string) => {
  const apiKey = process.env.REACT_APP_API_KEY!;
  const cx = process.env.REACT_APP_CX!;
  const apiUrl = "https://www.googleapis.com/customsearch/v1";
  const response = await axios.get(apiUrl, {
    params: {
      key: apiKey,
      cx,
      q: query,
    },
  });
  const results = response.data.items.slice(0, 5).map((item: any) => item.link);
  return results;
};
