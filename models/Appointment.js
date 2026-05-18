import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    date: Date,

    status: {
      type: String,
      enum: ["pending", "confirmed", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);