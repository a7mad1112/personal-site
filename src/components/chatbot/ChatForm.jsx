import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMsg = inputRef.current.value.trim();
    if (!userMsg) return;

    inputRef.current.value = "";

    // update history
    const newHistory = [...chatHistory, { role: "user", text: userMsg }];

    setChatHistory([...newHistory, { role: "model", text: "Thinking..." }]);

    await generateBotResponse(newHistory);
  };

  return (
    <form
      action="#"
      className="flex items-center gap-2"
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        id="chatbot-input"
        type="text"
        className="flex-1 rounded-2xl border border-[var(--border)] bg-[#050816] px-3 py-2 text-xs text-white placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60"
        placeholder="Ask Levi anything about Ahmed..."
        required
      />
      <button
        type="submit"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[13px] font-semibold text-black hover:bg-[var(--accent-2)] transition-colors"
      >
        ↑
      </button>
    </form>
  );
};

export default ChatForm;
