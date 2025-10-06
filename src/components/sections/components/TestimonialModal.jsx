import { useEffect } from "react";

export default function TestimonialModal({ open, onClose, t }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || !t) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 w-full h-full bg-black/60"
      />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-2xl rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xl">
          <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
            <div>
              <h3 className="text-white font-semibold">{t.name}</h3>
              <p className="text-xs text-[var(--muted)]">{t.role}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-xl leading-none px-2"
            >
              ×
            </button>
          </div>

          <div className="p-5 max-h-[70vh] overflow-y-auto">
            <p className="text-sm text-white/90 leading-relaxed">
              <span className="text-[var(--accent)] text-xl align-top">“</span>
              {t.feedback}
              <span className="text-[var(--accent)] text-xl align-top">”</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
