import axios from "axios";

export const getAIResponse = async (prompt) => {
  try {
    const res = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      {
        params: { key: process.env.GEMINI_API_KEY },
      }
    );

    return res.data;
  } catch (err) {
    console.log("AI failed");
    return null;
  }
};