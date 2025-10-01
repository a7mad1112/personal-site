// يسلّط لمعة متحركة فوق نص أساسي ثابت
// props:
// - text: النص
// - speed: مدة الدورة بالثواني (أبطأ = رقم أكبر)
// - className: كلاس للحاوية كلها (للأحجام وغيرها)
// - baseClass: كلاس للطبقة الأساسية (لون النص)

const ShinyText = ({
  text,
  speed = 3,
  className = "",
  baseClass = "text-[var(--muted)]",
  disabled = false,
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`${baseClass}`}>{text}</span>
      <span
        aria-hidden="true"
        className={[
          "absolute inset-0 pointer-events-none",
          "text-transparent bg-clip-text",
          disabled ? "" : "animate-[shine_linear_infinite]",
        ].join(" ")}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0) 45%, var(--accent) 50%, rgba(255,255,255,0) 55%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animationDuration,
        }}
      >
        {text}
      </span>
    </span>
  );
};

export default ShinyText;
