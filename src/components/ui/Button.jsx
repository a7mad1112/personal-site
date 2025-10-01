export default function Button({
  variant = "solid",
  as = "a",
  className = "",
  children,
  ...props
}) {
  const Comp = as;
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition";
  const solid = "bg-[var(--accent)] text-black hover:opacity-90";
  const outline =
    "border border-[var(--border)] text-white hover:border-[var(--accent)] hover:text-[var(--accent)]";
  const ghost = "text-white hover:text-[var(--accent)]";

  const variantClass =
    variant === "outline" ? outline : variant === "ghost" ? ghost : solid;

  return (
    <Comp className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </Comp>
  );
}
