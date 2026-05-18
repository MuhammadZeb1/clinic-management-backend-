import express from "express";
import { getStats } from "../controllers/analytics.controller.js";

const router = express.Router();

router.get("/", getStats);

export default router;