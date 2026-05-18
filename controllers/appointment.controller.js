import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.json(appointment);
};

export const getAppointments = async (req, res) => {
  const data = await Appointment.find()
    .populate("patientId")
    .populate("doctorId");

  res.json(data);
};