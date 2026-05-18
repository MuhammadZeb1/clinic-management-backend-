import mongoose from "mongoose";

const diagnosisSchema = new mongoose.Schema(
  {
    symptoms: String,
    aiResponse: Object,
    riskLevel: String,
  },
  { timestamps: true }
);

export default mongoose.model("DiagnosisLog", diagnosisSchema);