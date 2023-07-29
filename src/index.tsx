import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ScrapContextProvider } from "./contexts/scrapContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScrapContextProvider>
      <App />
    </ScrapContextProvider>
  </React.StrictMode>
);
