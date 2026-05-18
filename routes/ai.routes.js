import express from "express";
import { analyzeSymptoms } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/analyze", analyzeSymptoms);

export default router;