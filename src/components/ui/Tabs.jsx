import { useState } from "react";

export default function Tabs({ tabs = [], onChange, initial = 0 }) {
  const [active, setActive] = useState(initial);
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t, i) => (
        <button
          key={t}
          className={`px-3 py-1.5 rounded-full border text-sm ${
            i === active
              ? "border-[var(--accent)] text-[var(--accent)]"
              : "border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          }`}
          onClick={() => {
            setActive(i);
            onChange?.(t, i);
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
