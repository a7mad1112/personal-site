import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import { awards } from "../../data/awards.js";

const ExtIcon = (props) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 5h5v5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 14L19 5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M19 13v6a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h6"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

export default function Awards() {
  const rm = useReducedMotion();

  const cardV = {
    hidden: { opacity: 0, y: rm ? 0 : 14, filter: rm ? "none" : "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  if (!awards?.length) return null;

  return (
    <section id="awards" className="py-20">
      <Container>
        <SectionHeader
          kicker="Recognition"
          title="Awards & Leadership"
          subtitle="Moments I’m proud of — competitions, impact work, and community roles."
        />

        <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {awards.map((a) => (
            <motion.article
              key={a.id}
              variants={cardV}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-12% 0px" }}
              className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-5 md:p-6 hover:border-[var(--accent)]/70 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {a.title}
                </h3>
                {a.placement && (
                  <span className="shrink-0 text-xs px-2.5 py-1 rounded-full border border-[var(--border)] bg-white/5 text-white/90">
                    {a.placement}
                  </span>
                )}
              </div>

              <div className="mt-2 text-xs text-[var(--muted)] space-x-2">
                <span>{a.organization}</span>
                {a.date && <span>• {a.date}</span>}
              </div>

              {a.summary && (
                <p className="mt-3 text-sm text-white/90 leading-relaxed">
                  {a.summary}
                </p>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[#292a2d] text-white/90 px-3 py-1 text-xs">
                  {a.placement?.includes("Place") ? "Award" : "Leadership"}
                </span>

                {a.linkedInLink && (
                  <a
                    href={a.linkedInLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/60 px-3 py-1 text-xs text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
                    aria-label={`View LinkedIn post for ${a.title}`}
                  >
                    <ExtIcon className="opacity-90" />
                    View post
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
