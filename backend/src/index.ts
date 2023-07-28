import express from "express";
import searchControllerRoute from "./routes/searchRoutes";
import scrapeControllerRoute from "./routes/scrapeRoutes";

const app = express();

const port = 5000;
app.use(express.json());

app.use("/api/v1", scrapeControllerRoute);
app.use("/api/v1", searchControllerRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
