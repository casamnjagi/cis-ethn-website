"use client";

import { useState } from "react";
import KiembuKeyboard from "./KiembuKeyboard";
import { answerKiembuQuestion } from "../utils/kiembuSearch";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text:
        "Wĩ mwega! Welcome to the Kiembu Cultural AI Chatbot. Ask me about Kiembu language, culture, traditions, food, ceremonies, songs, dances, family, environment and other cultural knowledge.",
    },
  ]);

  // ==========================================================
  // INSERT KIEMBU CHARACTER
  // ==========================================================

  function insertCharacter(character: string) {
    setInput((previous) => previous + character);
  }

  // ==========================================================
  // ASK QUESTION
  // ==========================================================

  function handleAsk() {
    const question = input.trim();

    if (!question) {
      return;
    }

    // --------------------------------------------------------
    // USER MESSAGE
    // --------------------------------------------------------

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: question,
    };

    // --------------------------------------------------------
    // SEARCH KIEMBU KNOWLEDGE
    // --------------------------------------------------------

    const result = answerKiembuQuestion(question);

    // --------------------------------------------------------
    // BOT ANSWER
    // --------------------------------------------------------

    const botMessage: Message = {
      id: Date.now() + 1,
      sender: "bot",
      text: result.answer,
    };

    // --------------------------------------------------------
    // ADD MESSAGES
    // --------------------------------------------------------

    setMessages((previous) => [
      ...previous,
      userMessage,
      botMessage,
    ]);

    // --------------------------------------------------------
    // CLEAR INPUT
    // --------------------------------------------------------

    setInput("");
  }

  // ==========================================================
  // ENTER KEY
  // ==========================================================

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleAsk();
    }
  }

  // ==========================================================
  // CLEAR CHAT
  // ==========================================================

  function clearChat() {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text:
          "Chat cleared. Wĩ mwega! Ask another question about Kiembu culture or language.",
      },
    ]);

    setInput("");
  }

  // ==========================================================
  // UI
  // ==========================================================

  return (
    <div className="chatbot mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

      {/* ====================================================
          HEADER
      ==================================================== */}

      <div className="chat-header flex items-center justify-between gap-4 bg-green-800 px-6 py-5 text-white">

        <div>
          <h1 className="text-xl font-bold sm:text-2xl">
            Kiembu Cultural AI
          </h1>

          <p className="mt-1 text-sm text-green-100">
            Kiembu Language & Cultural Knowledge Assistant
          </p>
        </div>

        <button
          type="button"
          onClick={clearChat}
          className="shrink-0 rounded-lg border border-white/30 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
        >
          Clear Chat
        </button>

      </div>

      {/* ====================================================
          CHAT MESSAGES
      ==================================================== */}

      <div className="chat-messages h-[500px] space-y-5 overflow-y-auto bg-slate-50 p-5 sm:p-6">

        {messages.map((message) => (

          <div
            key={message.id}
            className={
              message.sender === "user"
                ? "flex justify-end"
                : "flex justify-start"
            }
          >

            <div
              className={
                message.sender === "user"
                  ? "max-w-[85%] sm:max-w-[75%]"
                  : "max-w-[90%] sm:max-w-[80%]"
              }
            >

              {/* MESSAGE LABEL */}

              <div
                className={
                  message.sender === "user"
                    ? "mb-1 text-right text-xs font-semibold text-slate-500"
                    : "mb-1 text-left text-xs font-semibold text-green-700"
                }
              >
                {message.sender === "user"
                  ? "You"
                  : "Kiembu AI"}
              </div>

              {/* MESSAGE */}

              <div
                className={
                  message.sender === "user"
                    ? "rounded-2xl rounded-br-md bg-green-700 px-5 py-4 leading-7 whitespace-pre-line text-white shadow-sm"
                    : "rounded-2xl rounded-bl-md border border-slate-200 bg-white px-5 py-4 leading-7 whitespace-pre-line text-slate-700 shadow-sm"
                }
              >
                {message.text}
              </div>

            </div>

          </div>

        ))}

      </div>

      {/* ====================================================
          KIEMBU KEYBOARD
      ==================================================== */}

      <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6">

        <KiembuKeyboard
          onCharacter={insertCharacter}
        />

      </div>

      {/* ====================================================
          INPUT AREA
      ==================================================== */}

      <div className="chat-input-area border-t border-slate-200 bg-white p-5 sm:p-6">

        <div className="flex items-end gap-3">

          <textarea
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask a question about Kiembu culture..."
            rows={3}
            className="min-w-0 flex-1 resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />

          <button
            type="button"
            onClick={handleAsk}
            disabled={!input.trim()}
            className="ask-button rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {input.trim() ? "Ask" : "✕"}
          </button>

        </div>

      </div>

      {/* ====================================================
          INPUT HINT
      ==================================================== */}

      <div className="input-hint border-t border-slate-100 bg-slate-50 px-5 py-3 text-center text-xs text-slate-500 sm:px-6">
        Press Enter to ask · Shift + Enter for a new line
      </div>

    </div>
  );
}