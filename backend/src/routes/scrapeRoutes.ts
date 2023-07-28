import { Router } from "express";
import { scrapeController } from "../controllers/scrapeController";

const router = Router();

router.route("/scrape").post(scrapeController);

export default router;
