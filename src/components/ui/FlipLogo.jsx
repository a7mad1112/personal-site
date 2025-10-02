// A square flip tile sized by LogoLoop's CSS var: --logoloop-logoHeight
export default function FlipLogo({ src, title }) {
  return (
    <span className="block h-[var(--logoloop-logoHeight)] w-[var(--logoloop-logoHeight)] [perspective:800px]">
      {/* Rotating plane */}
      <span
        className="
          flip-plane relative block h-full w-full
          transition-transform duration-700
          [transform-style:preserve-3d]
          group-hover/item:[transform:rotateY(180deg)]
          [&.is-flipped]:[transform:rotateY(180deg)]
        "
      >
        {/* Front */}
        <span
          className="absolute inset-0 grid place-items-center rounded-2xl border border-[var(--accent)] bg-[var(--surface)] shadow-sm"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt={title}
            className="max-h-[70%] max-w-[70%] object-contain"
            loading="lazy"
            draggable="false"
          />
        </span>

        {/* Back */}
        <span
          className="
            absolute inset-0 grid place-items-center rounded-2xl border border-[var(--accent)]
            bg-[var(--muted)] text-[10px] font-bold text-[var(--accent)]
            [transform:rotateY(180deg)]
          "
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          title={title}
        >
          {title}
        </span>
      </span>
    </span>
  );
}
