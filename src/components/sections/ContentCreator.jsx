import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Folder from "../ui/folder/Folder.jsx";
import { telegramPosts } from "../../data/telegramPosts.js";

const CHANNEL_TOPICS = [
  {
    title: "Engineering Roadmaps",
    tag: "Guides",
    desc: "Structured learning paths for backend architecture, APIs, modern frontend, and database systems.",
    icon: (
      <svg
        className="w-5 h-5 text-[var(--accent)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    link: "https://t.me/ProgrammerLevi",
  },
  {
    title: "Interview Prep & Traps",
    tag: "Code Snippets",
    desc: "Tricky JavaScript snippets, async gotchas, and core computer science interview concepts explained simply.",
    icon: (
      <svg
        className="w-5 h-5 text-[var(--accent)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    link: "https://t.me/ProgrammerLevi/80",
  },
  {
    title: "Free Tools & Resources",
    tag: "Toolbox",
    desc: "Curated developer utilities, cheatsheets, and production workflows to speed up daily engineering tasks.",
    icon: (
      <svg
        className="w-5 h-5 text-[var(--accent)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    link: "https://t.me/ProgrammerLevi/82",
  },
];

export default function ContentCreator() {
  const rm = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: rm ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const folderItems = telegramPosts.map((p) => {
    const imgSrc = p.img.startsWith("/") ? p.img : `/${p.img}`;
    return (
      <a
        key={p.link}
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        title={p.name}
        aria-label={p.name}
        className="block w-full h-full"
      >
        <div className="w-full h-full rounded-[12px] overflow-hidden">
          <img
            src={imgSrc}
            alt={p.name}
            draggable={false}
            className="w-full h-full object-cover align-middle"
          />
        </div>
      </a>
    );
  });

  return (
    <section id="content" className="py-24 relative">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
        >
          <SectionHeader
            kicker="Content Creator"
            title="ProgrammerLevi Community"
            subtitle="A growing Telegram channel sharing engineering roadmaps, interview prep, and technical guides"
          />

          {/* ── Top Hero Block: Intro & Action + Desktop Folder ── */}
          <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Info & Action */}
            <div className="lg:col-span-7 space-y-6">
              {/* Channel Header Pill */}
              <div className="inline-flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-2.5">
                <img
                  src="/telegram/programmerLevi.png"
                  alt="ProgrammerLevi"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[var(--accent)]"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    ProgrammerLevi
                  </h4>
                  <p className="text-xs text-[var(--accent)]">
                    Telegram Tech Channel
                  </p>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                I run{" "}
                <span className="text-[var(--accent)] font-semibold">
                  ProgrammerLevi
                </span>
                , a growing community dedicated to helping aspiring developers
                and university students master core software concepts, tackle
                technical interview questions, and discover modern engineering
                tools.
              </p>

              {/* Prominent Call to Action */}
              <div>
                <a
                  href="https://t.me/ProgrammerLevi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-[#0b0f19] hover:opacity-95 hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-all cursor-pointer group"
                >
                  <img
                    src="/telegram/telegram.svg"
                    alt="Telegram"
                    className="h-5 w-5"
                    loading="lazy"
                  />
                  <span>Join ProgrammerLevi on Telegram</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Folder (Visible on desktop) */}
            <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end">
              <Folder
                size={1.15}
                color="#F59E0B"
                items={folderItems}
                className="select-none"
                showHint={true}
                hintText="Click to explore posts"
              />
            </div>
          </div>

          {/* ── Topic Preview Cards (Responsive on Mobile & Desktop) ── */}
          <div className="mt-12">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-4">
              Popular Channel Topics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CHANNEL_TOPICS.map((topic) => (
                <a
                  key={topic.title}
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl bg-[var(--surface)]/80 backdrop-blur-sm border border-white/10 hover:border-[var(--accent)]/40 p-5 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-[var(--accent)]/40 transition-colors">
                        {topic.icon}
                      </div>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                        {topic.tag}
                      </span>
                    </div>

                    <h5 className="text-white font-bold text-base group-hover:text-[var(--accent)] transition-colors">
                      {topic.title}
                    </h5>

                    <p className="mt-1.5 text-xs text-white/70 leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[var(--accent)]">
                    <span>Explore on Telegram</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
