import { getAIResponse } from "../services/ai.service.js";
import DiagnosisLog from "../models/DiagnosisLog.js";

export const analyzeSymptoms = async (req, res) => {
  const { symptoms, age, gender } = req.body;

  const prompt = `
  Symptoms: ${symptoms}
  Age: ${age}
  Gender: ${gender}

  Give:
  - Diseases
  - Risk level
  - Tests
  `;

  const ai = await getAIResponse(prompt);

  const log = await DiagnosisLog.create({
    symptoms,
    aiResponse: ai,
    riskLevel: "medium",
  });

  res.json({ ai, log });
};