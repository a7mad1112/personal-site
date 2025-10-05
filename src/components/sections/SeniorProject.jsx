// src/components/sections/SeniorProject.jsx
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import { projects } from "../../data/projects.js";

export default function SeniorProject() {
  const senior = projects.senior?.[0];
  if (!senior) return null;

  return (
    <section id="senior-project" className="py-20">
      <Container>
        <SectionHeader
          kicker="Senior Project"
          title="Jawed AI — Intelligent Quran Recitation Feedback"
          subtitle="A detailed look at my graduation project"
        />

        {/* Card */}
        <div
          className="
            mt-10 grid lg:grid-cols-[1.1fr_1.4fr] gap-8
            rounded-3xl bg-[var(--surface)] border border-[var(--border)]
            p-6 md:p-8 lg:p-10
          "
        >
          {/* Cover image */}
          <div className="order-1">
            <div
              className="
                relative overflow-hidden rounded-2xl
                border border-[var(--border)]
                bg-[#191919]
              "
            >
              <img
                src={senior.image}
                alt={senior.title}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            {/* Small tag/date row */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
              {senior.tag && (
                <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
                  {senior.tag}
                </span>
              )}
              {senior.date && (
                <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
                  {senior.date}
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="order-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">{senior.title}</h2>

            <p className="text-[var(--muted)] leading-relaxed whitespace-pre-line">
              {senior.description.trim()}
            </p>

            {/* Technologies */}
            {senior.technologies?.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {senior.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        inline-flex items-center rounded-full
                        border border-[var(--border)]
                        bg-[#292a2d] text-white/90
                        px-3 py-1 text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Team */}
            {senior.team?.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Team Members
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {senior.team.map((m) => (
                      <span
                        key={m.name}
                        className="
                          inline-flex items-center rounded-full
                          border border-[var(--border)]
                          px-3 py-1 text-sm text-[var(--muted)]
                        "
                      >
                        {m.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Supervisors */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Supervisors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {senior.supervisors.map((s) => (
                      <span
                        key={s}
                        className="
                          inline-flex items-center rounded-full
                          border border-[var(--border)]
                          px-3 py-1 text-sm text-[var(--muted)]
                        "
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Achievements */}
            {senior.achievements?.current?.length > 0 && (
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Achievements / Progress
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-white/90">
                    {senior.achievements.current.map((a, idx) => (
                      <li key={idx}>{a}</li>
                    ))}
                  </ul>
                </div>

                {/* Next milestones (if provided) */}
                {senior.achievements.nextMilestones?.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Next Milestones
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-white/90">
                      {senior.achievements.nextMilestones.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
