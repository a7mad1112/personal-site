export default function SectionHeader({
  id,
  kicker,
  title,
  subtitle,
  align = "center",
}) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div id={id} className={`${alignClass} mb-10`}>
      {kicker && (
        <p className="text-[var(--accent)] uppercase tracking-widest text-xs">
          {kicker}
        </p>
      )}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm text-[var(--muted)]">{subtitle}</p>
      )}
      <div
        className={`${
          align === "left" ? "" : "mx-auto"
        } mt-4 h-0.5 w-24 bg-[var(--accent)]`}
      />
    </div>
  );
}
