import { createContext, useContext, useReducer } from "react";
import { codeState, reducer } from "../reducers/scrapReducer";
import { getSearchResults } from "../utils/api";
import { scrapeUrls } from "../utils/scraper";

interface codeContextProps extends codeState {
  getResults: (query: string) => void;
}

const initialState: codeState = {
  links: [],
  results: [],
  linkLoading: false,
  resultLoading: false,
  alert: {
    open: false,
    type: "",
    message: "",
  },
};
export const scrapContext = createContext<codeContextProps | null>(null);

export const ScrapContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getLinks = async (prompt: string) => {
    const links: string[] = await getSearchResults(prompt);
    dispatch({
      type: "GET_LINKS",
      payload: links,
    });
    return links;
  };
  const getResults = async (prompt: string) => {
    try {
      const links = await getLinks(prompt);
      const scrapedTexts = [];

      for (const link of links) {
        const result = await scrapeUrls(link);
        scrapedTexts.push(result);
      }
      dispatch({
        type: "SET_RESULTS",
        payload: scrapedTexts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createAlert = (message: string, type: string) => {
    dispatch({
      type: "CREATE_ALERT",
      payload: {
        message,
        type,
      },
    });
  };
  return (
    <scrapContext.Provider value={{ ...state, getResults }}>
      {children}
    </scrapContext.Provider>
  );
};

export const useScrapContext = () => {
  const context = useContext(scrapContext);
  if (!context) {
    throw new Error("useCodeContext must be used within CodeContextProvider");
  }
  return context;
};
