export default function Dots({ count, active = 0, onClick }) {
  return (
    <div className="flex justify-center gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          className={`h-2 w-2 rounded-full ${
            i === active ? "bg-[var(--accent)]" : "bg-white/30"
          }`}
          onClick={() => onClick?.(i)}
        />
      ))}
    </div>
  );
}
