import Prescription from "../models/prescriptionModel.js";

/* ================= CREATE ================= */
export const createPrescription = async (req, res) => {
  try {
    const data = await Prescription.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= GET ALL ================= */
export const getPrescriptions = async (req, res) => {
  try {
    const data = await Prescription.find()
      .populate("doctorId", "name")
      .populate("patientId", "name");

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= GET SINGLE ================= */
export const getPrescriptionById = async (req, res) => {
  try {
    const data = await Prescription.findById(req.params.id)
      .populate("doctorId", "name")
      .populate("patientId", "name");

    if (!data) {
      return res.status(404).json({ error: "Prescription not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= GET BY PATIENT ================= */
export const getPatientPrescriptions = async (req, res) => {
  try {
    const data = await Prescription.find({
      patientId: req.params.patientId,
    })
      .populate("doctorId", "name")
      .populate("patientId", "name");

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= DELETE ================= */
export const deletePrescription = async (req, res) => {
  try {
    const data = await Prescription.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};