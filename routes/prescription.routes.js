import express from "express";
import {
  createPrescription,
  getPrescriptions,
  getPrescriptionById,
  getPatientPrescriptions,
  deletePrescription
} from "../controllers/prescription.controller.js";

const router = express.Router();

// CREATE
router.post("/", createPrescription);

// GET ALL
router.get("/", getPrescriptions);

// GET SINGLE
router.get("/:id", getPrescriptionById);

// GET BY PATIENT
router.get("/patient/:patientId", getPatientPrescriptions);

// DELETE
router.delete("/:id", deletePrescription);

export default router;