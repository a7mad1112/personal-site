import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import { socials } from "../../data/socials.js";
import Waves from "../ui/Waves.jsx";
import ShinyText from "../ui/ShinyText.jsx";
import TextType from "../ui/TextType.jsx";
import { smoothScrollTo } from "../../utils/scroll.js";

export default function Hero() {
  const rm = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: rm ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: rm ? 0 : 0.08,
        delayChildren: rm ? 0 : 0.15,
      },
    },
  };
  const float = {
    initial: { y: 0 },
    animate: rm
      ? { y: 0 }
      : {
          y: [0, -6, 0],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        },
    whileHover: rm
      ? {}
      : { y: -8, transition: { duration: 0.25, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center pt-24 pb-20 md:py-0"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Waves
          lineColor="rgba(255,145,77,0.15)"
          backgroundColor="transparent"
          waveSpeedX={0.012}
          waveSpeedY={0.006}
          waveAmpX={250}
          waveAmpY={105}
          xGap={28}
          yGap={56}
          friction={0.92}
          tension={0.008}
          maxCursorMove={80}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>
      <Container className="relative z-10 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-5"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]"></span>
            </span>
            <ShinyText
              text="From Jenin, Palestine 🇵🇸"
              speed={5}
              className="text-base md:text-lg font-medium mb-0 mono"
              baseClass="text-[var(--muted)]"
            />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            Hello I’m{" "}
            <span className="text-[var(--accent)]">Ahmed Alawneh</span>,<br />
            <span className="flex items-center gap-2 text-[var(--accent)] text-2xl lg:text-3xl mono">
              <span className="text-gray-500 font-bold">$</span>
              <TextType
                text={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "Building Digital Solutions",
                ]}
                typingSpeed={75}
                deletingSpeed={40}
                pauseDuration={1500}
                showCursor
                startOnVisible
                cursorCharacter="▊"
                className=""
              />
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[var(--muted)] max-w-xl text-lg">
            Results-driven Software Engineer dedicated to developing seamless and efficient digital solutions. Experienced in crafting robust backend systems, APIs, and responsive frontends. Passionate about writing clean, maintainable code, applying design patterns, and utilizing modern deployment frameworks to solve complex problems at scale.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
            <Button href="#projects" onClick={(e) => smoothScrollTo(document.getElementById("client-projects")?.offsetTop || 0, 1000, 70)}>
              Explore my work
            </Button>
            <a
              href="/resume.html"
              target="_blank"
              className="group relative px-6 py-2.5 rounded bg-transparent text-white font-medium hover:text-[var(--accent)] transition-colors overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] inline-flex items-center justify-center"
            >
              <span className="relative z-10 mono">Resume</span>
              <div className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 pt-2"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="relative z-10 flex justify-center md:justify-center lg:justify-end"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={float}
            initial="initial"
            animate="animate"
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center"
          >
            {/* Glowing background blob */}
            <div className="absolute inset-0 bg-[var(--accent)] opacity-20 blur-3xl rounded-full transform -translate-y-4 translate-x-4 mix-blend-screen"></div>
            
            {/* Main image container */}
            <div className="relative w-full h-full rounded-2xl lg:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10 group bg-black/40 backdrop-blur-sm p-2">
              <div className="relative w-full h-full rounded-xl lg:rounded-[1.5rem] overflow-hidden border border-[var(--border)]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10"></div>
                
                {/* Subtle colored overlay that disappears on hover */}
                <div className="absolute inset-0 bg-[var(--accent)]/10 mix-blend-overlay z-20 group-hover:opacity-0 transition-opacity duration-700"></div>
                
                <img 
                  src="/Ahmed.jpg" 
                  alt="Ahmed Alawneh"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 z-30 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-white tracking-wide">Available for Work</span>
            </div>
            
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 z-30 p-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 shadow-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </Container>
      {!rm && (
        <motion.button
          onClick={() => {
            const target = document.getElementById("tech-stack");
            if (target) {
              smoothScrollTo(target.offsetTop - 60, 1000, 70);
            }
          }}
          aria-label="Scroll down"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300 cursor-pointer p-2 flex flex-col items-center gap-2 group"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-9 border-2 border-current rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-current rounded-full" />
          </motion.div>
        </motion.button>
      )}
    </section>
  );
}
