import { Router } from "express";
import { searchController } from "../controllers/searchController";

const router = Router();

router.route("/search").post(searchController);

export default router;
