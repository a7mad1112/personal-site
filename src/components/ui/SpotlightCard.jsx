// src/components/ui/SpotlightCard.jsx
import { useRef, useState } from "react";

// Minimal base styles so you can fully theme it with className
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 229, 255, 0.2)",
}) {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const onMove = (e) => {
    if (!ref.current || isFocused) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const show = () => setOpacity(0.6);
  const hide = () => setOpacity(0);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onFocus={() => {
        setIsFocused(true);
        show();
      }}
      onBlur={() => {
        setIsFocused(false);
        hide();
      }}
      onMouseEnter={show}
      onMouseLeave={hide}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* spotlight layer (behind content) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}
