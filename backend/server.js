
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.use(cors({
  origin: [
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "https://armaan0885.github.io"
  ]
}));

app.use(express.json({ limit: "20kb" }));

app.get("/", (req, res) => {
  res.json({ status: "online", app: "NeuralDesk API" });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Please enter a message." });
    }

    if (message.length > 10000 || !Array.isArray(history) || history.length > 20) {
      return res.status(400).json({ error: "Message or conversation is too long." });
    }

    const contents = [];

    for (const item of history) {
      if (
        item &&
        ["user", "model"].includes(item.role) &&
        typeof item.content === "string"
      ) {
        contents.push({
          role: item.role,
          parts: [{ text: item.content.slice(0, 10000) }]
        });
      }
    }

    contents.push({
      role: "user",
      parts: [{ text: message.trim() }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents
    });

    res.json({
      reply: response.text || "I couldn't generate a response. Please try again."
    });
  } catch (error) {
    console.error("Gemini request failed:", error.message);
    res.status(500).json({
      error: "The AI request failed. Please try again."
    });
  }
});

app.listen(PORT, () => {
  console.log(`NeuralDesk API running on port ${PORT}`);
});
