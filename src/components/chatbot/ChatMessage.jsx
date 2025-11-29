import LeviChatbotIcon from "./LeviChatbotIcon.jsx";

const ChatMessage = ({ chat }) => {
  const isBot = chat.role === "model";

  return (
    <div
      className={`flex gap-3 ${
        isBot ? "justify-start" : "justify-end"
      } text-sm`}
    >
      {isBot && <LeviChatbotIcon size={28} className="bot-avatar mt-0.5" />}

      <p
        className={`max-w-[80%] rounded-2xl px-3 py-2 leading-relaxed ${
          isBot
            ? "bg-[#111827] text-white/90 border border-[var(--border)]"
            : "bg-[var(--accent)] text-black"
        }`}
      >
        {chat.text}
      </p>

      {!isBot && (
        <div className="w-7 h-7 rounded-full bg-[var(--accent)]/20 border border-[var(--border)] flex items-center justify-center text-[10px] text-[var(--muted)]">
          You
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
