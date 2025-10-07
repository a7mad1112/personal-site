import { experiences } from "../../data/experiences";
import { motion } from "framer-motion";

const Badge = ({ children, variant = "primary" }) => {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide";
  const styles = {
    primary:
      "bg-[color:rgba(255,145,77,.15)] text-[var(--accent)] ring-1 ring-[color:rgba(255,145,77,.35)]",
    neutral: "bg-white/10 text-white/75 ring-1 ring-white/15",
  };
  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
};

const ExperienceItem = ({ item, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="relative pl-7 md:pl-10"
    >
      <span
        className="absolute left-0 top-0 h-full w-[2px] rounded-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,145,77,.9), rgba(255,145,77,.15))",
        }}
      />

      <span
        className="absolute -left-[6px] top-3 h-3 w-3 rounded-full shadow-[0_0_0_6px_rgba(255,145,77,.15)]"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div className="grid gap-2 rounded-2xl border border-[color:rgba(255,255,255,.08)] bg-[#292a2d] p-4 md:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base md:text-lg font-semibold tracking-tight">
            {item.title}
          </h3>
          {item.company && <Badge>{item.company}</Badge>}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
          {item.date && <Badge variant="neutral">{item.date}</Badge>}
          {item.type && (
            <>
              <span>•</span>
              <span className="capitalize">{item.type}</span>
            </>
          )}
        </div>

        {item.description && (
          <p className="text-sm leading-6 text-white/85">{item.description}</p>
        )}

        {item.achievements?.length > 0 && (
          <ul className="ml-4 list-disc space-y-1 text-sm text-white/85">
            {item.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        )}

        {item.certificate && (
          <div className="pt-2">
            <a
              href={item.certificate}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[color:rgba(255,145,77,.15)] px-3 py-1.5 text-sm font-medium text-[var(--accent)] ring-1 ring-[color:rgba(255,145,77,.35)] transition hover:bg-[color:rgba(255,145,77,.25)]"
            >
              View Certificate
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="opacity-90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M7 17L17 7M17 7H9M17 7V15"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.li>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 0%, rgba(255,145,77,.18), transparent 60%), radial-gradient(55% 60% at 80% 100%, rgba(255,145,77,.12), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Experience
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/70">
            Teaching, training, and hands-on development — highlighting my key
            professional milestones from the most recent to the earliest.
          </p>
        </div>

        <ol className="relative space-y-5">
          {experiences.map((exp, idx) => (
            <ExperienceItem key={exp.id ?? idx} item={exp} index={idx} />
          ))}
        </ol>
      </div>
    </section>
  );
}
