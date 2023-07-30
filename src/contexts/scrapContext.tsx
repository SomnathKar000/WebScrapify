import React, { createContext, useContext, useReducer } from "react";
import { codeState, reducer } from "../reducers/scrapReducer";
import { getSearchResults } from "../utils/api";
import { scrapeUrls } from "../utils/scraper";

interface codeContextProps extends codeState {
  getResults: (query: string) => void;
  openAlert: (type: string, message: string) => void;
  closeAlert: () => void;
}

const initialState: codeState = {
  links: [],
  results: [],
  loading: false,

  alert: {
    open: false,
    type: "error",
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
    startLoading();
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
      openAlert("Links scraped successfully", "success");
      stopLoading();
    } catch (error) {
      console.log(error);
      stopLoading();
      openAlert("Error while scraping the links", "error");
    }
  };
  const stopLoading = () => {
    dispatch({
      type: "STOP_LOADING",
      payload: {},
    });
  };
  const startLoading = () => {
    dispatch({
      type: "START_LOADING",
      payload: {},
    });
  };

  const openAlert = (message: string, type: string) => {
    const alertType = ["error", "warning", "info", "success"].includes(type)
      ? type
      : "error";

    dispatch({
      type: "CREATE_ALERT",
      payload: {
        message,
        type: alertType,
      },
    });
  };
  const closeAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch({
      type: "CLOSE_ALERT",
      payload: {},
    });
  };
  return (
    <scrapContext.Provider
      value={{ ...state, closeAlert, getResults, openAlert }}
    >
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
