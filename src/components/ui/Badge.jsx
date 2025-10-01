export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)] ${className}`}
    >
      {children}
    </span>
  );
}
