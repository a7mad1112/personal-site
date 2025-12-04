// src/components/chatbot/LeviChatbot.jsx
import { useState, useEffect, useRef } from "react";
import LeviChatbotIcon from "./LeviChatbotIcon.jsx";
import ChatForm from "./ChatForm.jsx";
import ChatMessage from "./ChatMessage.jsx";

const API_URL =
  "https://fathomless-island-31099-2b10554a00d5.herokuapp.com/api/chat";

export default function LeviChatbot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [open, setOpen] = useState(false);

  const messagesRef = useRef(null);

  const generateBotResponse = async (history) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history }),
      });

      const data = await res.json();

      setChatHistory((prev) => {
        const withoutThinking =
          prev[prev.length - 1]?.text === "Thinking..."
            ? prev.slice(0, -1)
            : prev;

        return [...withoutThinking, { role: "model", text: data.reply }];
      });
    } catch (err) {
      console.error(err);
      setChatHistory((prev) => [
        ...prev.slice(0, -1),
        {
          role: "model",
          text: "Sorry, something went wrong while talking to Levi. Please try again.",
        },
      ]);
    }
  };

  useEffect(() => {
    if (!messagesRef.current) return;
    const el = messagesRef.current;
    el.scrollTop = el.scrollHeight;
  }, [chatHistory, open]);

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="
          fixed bottom-6 right-6 z-40
          flex items-center gap-2
          rounded-full border border-[var(--border)]
          bg-[#050816] px-3 py-2
          shadow-[0_18px_45px_rgba(0,0,0,0.7)]
          hover:border-[var(--accent)]/70 hover:bg-[#0b1020]
          transition-colors
        "
      >
        <LeviChatbotIcon size={36} />
        <span className="hidden sm:inline text-xs text-white/90">
          Chat with{" "}
          <span className="font-semibold text-[var(--accent)]">Levi</span>
        </span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-40 w-[min(380px,calc(100%-2rem))]">
          <div className="flex max-h-[70vh] flex-col rounded-2xl border border-[var(--border)] bg-[#050816]/95 backdrop-blur shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3 bg-black/60">
              <div className="flex items-center gap-3">
                <LeviChatbotIcon size={32} />
                <div>
                  <p className="text-sm font-semibold text-[var(--accent)]">Levi</p>
                  <p className="text-[11px] text-[var(--muted)]">
                    AI assistant about Ahmed&apos;s portfolio
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-7 w-7 rounded-full text-[var(--muted)] hover:bg:white/5 hover:text-white flex items-center justify-center text-xs"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div
              ref={messagesRef}
              className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm"
            >
              {/* initial message */}
              <div className="flex gap-3 text-sm">
                <LeviChatbotIcon size={28} className="mt-0.5" />
                <div className="max-w-[80%] rounded-2xl bg-[#111827] text-white/90 border border-[var(--border)] px-3 py-2 leading-relaxed text-[13px]">
                  Hey there 👋
                  <br />
                  I&apos;m{" "}
                  <span className="font-semibold text-[var(--accent)]">
                    Levi
                  </span>
                  , Ahmed&apos;s AI assistant.
                  <br />
                  Ask me anything about his skills, projects, experience, or how
                  he can help you.
                </div>
              </div>

              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat} />
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--border)] px-3 py-2 bg-black/40">
              <ChatForm
                chatHistory={chatHistory}
                setChatHistory={setChatHistory}
                generateBotResponse={generateBotResponse}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
