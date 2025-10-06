import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import { projects } from "../../data/projects.js";

export default function ClientProjects() {
  const clients = projects.clients || [];
  if (!clients.length) return null;

  return (
    <section id="client-projects" className="py-20">
      <Container>
        <SectionHeader
          kicker="Client Projects"
          title="Selected Client Work"
          subtitle="Real-world products built with care and performance in mind"
        />

        <div className="mt-10 space-y-10">
          {clients.map((proj) => (
            <article
              key={proj.id}
              className="
                grid lg:grid-cols-[1.2fr_1.5fr] gap-8
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
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>

                {/* meta row */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
                  {proj.tag && (
                    <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
                      {proj.tag}
                    </span>
                  )}
                  {proj.date && (
                    <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
                      {proj.date}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="order-2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">{proj.title}</h2>

                {proj.description && (
                  <p className="text-[var(--muted)] leading-relaxed whitespace-pre-line">
                    {proj.description.trim()}
                  </p>
                )}

                {/* Technologies */}
                {proj.technologies?.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {proj.technologies.map((tech) => (
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

                {/* Features */}
                {proj.features?.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Key Features
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-white/90">
                      {proj.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Team */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {proj.team?.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">
                        Team
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {proj.team.map((m) => (
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
                  )}
                </div>

                {/* Achievements */}
                {(proj.achievements?.current?.length ||
                  proj.achievements?.nextMilestones?.length) && (
                  <div className="grid lg:grid-cols-2 gap-6">
                    {proj.achievements?.current?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          Achievements / Progress
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-white/90">
                          {proj.achievements.current.map((a, idx) => (
                            <li key={idx}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {proj.achievements?.nextMilestones?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">
                          Next Milestones
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-white/90">
                          {proj.achievements.nextMilestones.map((m, idx) => (
                            <li key={idx}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
