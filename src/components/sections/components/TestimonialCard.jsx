import { useEffect, useRef, useState, useMemo } from "react";

function Avatar({ src, name }) {
  const initials = useMemo(() => {
    const n = (name || "").trim().split(" ");
    return ((n[0]?.[0] || "") + (n[1]?.[0] || "")).toUpperCase() || "A";
  }, [name]);
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--bg)]"
        loading="lazy"
      />
    );
  }

  return (
    <div className="h-12 w-12 rounded-full grid place-items-center bg-[var(--accent)] text-[#0b0b0b] font-bold ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--bg)]">
      {initials}
    </div>
  );
}

export default function TestimonialCard({ it: t, onOpen }) {
  const boxRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const check = () => setIsOverflow(el.scrollHeight > el.clientHeight + 2);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [t.feedback]);

  return (
    <article
      className={[
        "rounded-2xl bg-[#292a2d] border border-[var(--border)] p-6 flex flex-col",
        "h-[320px]",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <Avatar src={t.image} name={t.name} />
        <div>
          <h4 className="text-white font-semibold leading-tight">{t.name}</h4>
          <p className="text-xs text-[var(--muted)] leading-tight">{t.role}</p>
        </div>
      </div>

      <div className="mt-4 flex-1 flex flex-col">
        <div
          ref={boxRef}
          className={[
            "text-sm text-white/90 leading-relaxed bg-white/5 rounded-xl p-4",
            "border border-white/10",
            "clamp-6", // ← قصّ إلى 6 أسطر
          ].join(" ")}
        >
          <span className="text-[var(--accent)] text-xl align-top">“</span>
          {t.feedback}
          <span className="text-[var(--accent)] text-xl align-top">”</span>
        </div>

        {isOverflow && (
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={onOpen}
              className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-2)] transition cursor-pointer"
            >
              Details
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
