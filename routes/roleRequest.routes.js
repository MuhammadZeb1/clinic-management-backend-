import express from "express";
import {
  applyRole,
  getRoleRequests,
  approveRole,
  rejectRole,
} from "../controllers/roleRequest.controller.js";
import { protect } from "../middleware/auth.js";


const router = express.Router();

// USER APPLY
router.post("/", applyRole);

// ADMIN VIEW ALL REQUESTS
router.get("/", protect, getRoleRequests);

// ADMIN APPROVE
router.put("/:id/approve", protect, approveRole);

// ADMIN REJECT
router.put("/:id/reject", protect, rejectRole);

export default router;