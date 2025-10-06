import { useEffect } from "react";

export default function Modal({ open, onClose, children, title }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) {
      document.addEventListener("keydown", onKey);
      // lock page scroll
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="
          relative z-10 w-full max-w-[900px]
          rounded-2xl bg-[var(--surface)] border border-[var(--border)]
          shadow-xl
          max-h-[85vh]  /* <-- limit height */
          overflow-y-auto overscroll-contain  /* <-- make it scrollable */
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 p-4 md:p-5 bg-[var(--surface)]/95 backdrop-blur border-b border-[var(--border)]">
          {title && (
            <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          )}
          <button
            onClick={onClose}
            className="rounded-md px-3 py-1 text-sm text-[var(--muted)] hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>
  );
}
