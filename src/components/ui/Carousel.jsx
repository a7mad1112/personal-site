import { useState } from "react";

export default function Carousel({ items = [], renderItem, className = "" }) {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % items.length);
  const prev = () => setIdx((idx - 1 + items.length) % items.length);

  if (!items.length) return null;

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        {renderItem(items[idx], idx)}
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="rounded-full border border-[var(--border)] px-3 py-1 text-sm"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="rounded-full border border-[var(--border)] px-3 py-1 text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}
