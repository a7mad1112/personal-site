import leviAvatar from "/levi-avatar.png";

const LeviChatbotIcon = ({ size = 32, className = "" }) => {
  return (
    <div
      className={`rounded-full overflow-hidden flex items-center justify-center shadow-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={leviAvatar}
        alt="Levi chatbot avatar"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default LeviChatbotIcon;
