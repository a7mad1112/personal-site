import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Modal from "../ui/Modal.jsx";
import { projects } from "../../data/projects.js";

const TABS = [
  { id: "all", label: "All" },
  { id: "client", label: "Client Work" },
  { id: "senior", label: "AI & Graduation" },
  { id: "training", label: "Training" },
];

function getImageSrc(img) {
  if (!img) return "";
  return img.startsWith("/") ? img : `/${img}`;
}

function cleanTitle(title) {
  if (!title) return "";
  return title.trim();
}

function getSummary(proj) {
  if (proj.summary) return proj.summary;
  if (proj.overview) return proj.overview;
  if (proj.description) {
    return proj.description.replace(/\s+/g, " ").trim();
  }
  return "";
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const rm = useReducedMotion();

  // Combine and normalize all projects from data sources
  const allProjects = useMemo(() => {
    const list = [];

    // 1. Client Work
    (projects.clients || []).forEach((p) => {
      list.push({
        ...p,
        category: "client",
        categoryLabel: "Client Work",
      });
    });

    // 2. AI & Graduation (Senior Project)
    (projects.senior || []).forEach((p) => {
      list.push({
        ...p,
        category: "senior",
        categoryLabel: "AI & Graduation",
      });
    });

    // 3. Training Projects
    (projects.training || []).forEach((p) => {
      list.push({
        ...p,
        category: "training",
        categoryLabel: "Training",
      });
    });

    return list;
  }, []);

  // Filter projects by active tab
  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return allProjects;
    return allProjects.filter((p) => p.category === activeTab);
  }, [allProjects, activeTab]);

  return (
    <section id="projects" className="py-24 relative">
      <Container>
        <SectionHeader
          kicker="Portfolio"
          title="Featured Projects"
          subtitle="Production systems, AI engineering, and full-stack web applications"
        />

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const count =
              tab.id === "all"
                ? allProjects.length
                : allProjects.filter((p) => p.category === tab.id).length;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[var(--accent)] text-[#0b0f19] font-semibold shadow-md shadow-[var(--accent)]/20"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-black/20 text-[#0b0f19] font-bold"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Standardized Project Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.article
                layout
                key={proj.id}
                initial={{ opacity: 0, y: rm ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="group flex flex-col rounded-2xl bg-[var(--surface)] border border-white/10 hover:border-[var(--accent)]/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Preview Screenshot */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#12151e] border-b border-white/10 cursor-pointer"
                  onClick={() => setSelectedProject(proj)}
                >
                  <img
                    src={getImageSrc(proj.image)}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Category / Tag Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[var(--accent)] border border-[var(--accent)]/30">
                      {proj.tag || proj.categoryLabel}
                    </span>
                  </div>

                  {/* Date Badge */}
                  {proj.date && (
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white/70 border border-white/10">
                        {proj.date}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedProject(proj)}
                      className="text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors cursor-pointer line-clamp-1"
                      title={proj.title}
                    >
                      {cleanTitle(proj.title)}
                    </h3>

                    <p className="mt-2 text-sm text-white/70 line-clamp-2 leading-relaxed">
                      {getSummary(proj)}
                    </p>

                    {/* Top 3–4 Tech Tags */}
                    {proj.technologies?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {proj.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/5 text-white/80 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {proj.technologies.length > 4 && (
                          <span className="text-[11px] text-white/40 self-center pl-0.5">
                            +{proj.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Clean Action Buttons Footer */}
                  <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] hover:underline"
                        >
                          <span>Live Demo</span>
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {proj.repo && (
                        <a
                          href={proj.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-white/70 hover:text-white transition-colors"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                          </svg>
                          <span>Code ↗</span>
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(proj)}
                      className="inline-flex items-center gap-1 font-medium text-white/60 hover:text-[var(--accent)] hover:underline transition-colors cursor-pointer ml-auto"
                    >
                      <span>Details</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Sleek Detail Modal ── */}
        <Modal
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="space-y-6">
              {/* Screenshot */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#12151e] max-h-[380px] flex items-center justify-center">
                <img
                  src={getImageSrc(selectedProject.image)}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain max-h-[380px]"
                />
              </div>

              {/* Meta tags and links bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs pb-3 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 px-3 py-1 text-[var(--accent)] font-medium">
                    {selectedProject.tag || selectedProject.categoryLabel}
                  </span>
                  {selectedProject.date && (
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                      {selectedProject.date}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-black hover:opacity-90 transition-opacity"
                    >
                      <span>Live Demo</span>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 transition-colors"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description / Overview */}
              {(selectedProject.description || selectedProject.overview) && (
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">
                    Overview
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
                    {(
                      selectedProject.description || selectedProject.overview
                    ).trim()}
                  </p>
                </div>
              )}

              {/* Technologies */}
              {selectedProject.technologies?.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">
                    Technologies & Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {selectedProject.features?.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5 text-sm text-white/80">
                    {selectedProject.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Team & Supervisors */}
              {(selectedProject.team?.length > 0 ||
                selectedProject.supervisors?.length > 0) && (
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {selectedProject.team?.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">
                        Team
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.team.map((m, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                          >
                            {m.name || m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.supervisors?.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">
                        Academic Supervisors
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.supervisors.map((s, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-md border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-1 text-xs text-[var(--accent)]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Achievements & Next Milestones */}
              {(selectedProject.achievements?.current?.length > 0 ||
                selectedProject.achievements?.nextMilestones?.length > 0) && (
                <div className="grid sm:grid-cols-2 gap-5 pt-3 border-t border-white/10">
                  {selectedProject.achievements?.current?.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2 text-emerald-400">
                        Key Milestones & Progress
                      </h4>
                      <ul className="space-y-1.5 text-xs text-white/80">
                        {selectedProject.achievements.current.map((a, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-0.5 select-none font-bold">
                              ✓
                            </span>
                            <span className="leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.achievements?.nextMilestones?.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2 text-[var(--accent)]">
                        Next Planned Milestones
                      </h4>
                      <ul className="space-y-1.5 text-xs text-white/80">
                        {selectedProject.achievements.nextMilestones.map(
                          (m, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[var(--accent)] mt-0.5 select-none font-bold">
                                →
                              </span>
                              <span className="leading-relaxed">{m}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
}
