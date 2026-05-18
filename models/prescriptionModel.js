import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    medicines: [
      {
        name: String,
        dosage: String,
        instructions: String,
      },
    ],

    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Prescription", prescriptionSchema);