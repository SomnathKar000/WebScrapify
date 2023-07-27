import express from "express";
import { scrapeController } from "./controllers/scrapeController";

const app = express();

const port = 5000;

app.post("/api/scrape", scrapeController);

app.listen(port, () => console.log(`Server running on port ${port}`));
