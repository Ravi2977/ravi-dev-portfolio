import axios from "axios";

const BASE_URL = "https://calldrift.com/chat-with-ravi"


// 🚀 NEW STREAM API
export const streamApi = async (message, conversationId, onChunk) => {
  try {
    const response = await fetch(`${BASE_URL}/stream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ConversationId: conversationId, // ⚠️ must match backend
      },
      body: JSON.stringify(message),
    });

    if (!response.body) {
      throw new Error("Streaming not supported");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;

      const chunk = decoder.decode(value, { stream: true });

      if (chunk) {
        onChunk(chunk); // 👈 send chunk to UI
      }
    }
  } catch (error) {
    console.error("Stream API Error:", error);
  }
};