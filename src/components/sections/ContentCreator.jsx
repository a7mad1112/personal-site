import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Folder from "../ui/folder/Folder.jsx";
import { telegramPosts } from "../../data/telegramPosts.js";

export default function ContentCreator() {
  const rm = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: rm ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const folderItems = telegramPosts.map((p) => (
    <a
      key={p.link}
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      title={p.name}
      aria-label={p.name}
      className="block w-full h-full "
    >
      <div className="w-full h-full rounded-[12px] overflow-hidden">
        <img
          src={p.img}
          alt={p.name}
          draggable={false}
          className="w-full h-full object-cover align-middle"
        />
      </div>
    </a>
  ));

  return (
    <section id="content" className="py-20 bg-[var(--surface)]">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
        >
          <SectionHeader
            kicker="Content Creator"
            title="ProgrammerLevi Channel"
            subtitle="A Telegram community sharing learning resources, tech insights, and job opportunities."
          />

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left text block */}
            <motion.div
              className="flex-1 space-y-4 text-[var(--muted)]"
              variants={fadeUp}
            >
              <p className="text-white/90 leading-relaxed">
                I run{" "}
                <span className="text-[var(--accent)] font-medium">
                  ProgrammerLevi
                </span>
                , a growing Telegram channel dedicated to helping students and
                developers stay updated with technical content, tutorials, and
                real-world opportunities. The goal is to empower learners with
                valuable resources and bridge the gap between education and the
                tech industry.
              </p>

              <a
                href="https://t.me/ProgrammerLevi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-5 py-2 text-[var(--accent)] transition-all"
              >
                <img
                  src="telegram/telegram.svg"
                  alt="Telegram"
                  className="h-8 w-8"
                  loading="lazy"
                />
                Join ProgrammerLevi
              </a>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center md:justify-end mr-8"
              variants={fadeUp}
            >
              <Folder
                size={1.15}
                color="#F59E0B"
                items={folderItems}
                className="select-none"
                showHint={true}
                hintText="Click to explore posts"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
