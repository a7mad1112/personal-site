export default function Icon({ name = "dot", className = "" }) {
  if (name === "dot")
    return (
      <span
        className={`inline-block h-2 w-2 rounded-full bg-[var(--accent)] ${className}`}
      />
    );
  return <span className={className}>★</span>;
}
