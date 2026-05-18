import Patient from "../models/patiantModel.js";
import Appointment from "../models/Appointment.js";

export const getStats = async (req, res) => {
  const patients = await Patient.countDocuments();
  const appointments = await Appointment.countDocuments();

  res.json({
    totalPatients: patients,
    totalAppointments: appointments,
  });
};