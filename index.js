import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import prescriptionRoutes from "./routes/prescription.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import roleRequestRoutes from "./routes/roleRequest.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

dotenv.config(); // 👈 load env

connectDB(); // 👈 MongoDB connect

const app = express();

app.use(
  cors({
    origin: "https://clinic-management-frontend-nine.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/role-requests", roleRequestRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(process.env.PORT || 4000, () =>
  console.log("Server is running")
);