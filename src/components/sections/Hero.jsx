import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import { socials } from "../../data/socials.js";
import Waves from "../ui/Waves.jsx";
import ShinyText from "../ui/ShinyText.jsx";
import TextType from "../ui/TextType.jsx";
import ProfileCard from "../ui/profileCard/ProfileCard.jsx";
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
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center"
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
          <motion.div variants={fadeUp}>
            <ShinyText
              text="Welcome to my world"
              speed={5}
              className="text-base md:text-lg lg:text-xl font-medium mb-0"
              baseClass="text-[var(--muted)]"
            />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            Hello I’m{" "}
            <span className="text-[var(--accent)]">Ahmed Alawneh</span>,<br />
            <TextType
              text={[
                "Front End Developer",
                "I build beautiful UIs",
                "Clean code, modern design",
              ]}
              typingSpeed={75}
              deletingSpeed={40}
              pauseDuration={1500}
              showCursor
              startOnVisible
              cursorCharacter="|"
              className="text-[var(--accent)] text-2xl lg:text-3xl"
            />
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[var(--muted)] max-w-xl">
            I create fast, sleek front-end experiences. Let’s build something
            that actually moves your business.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button href="#contact">Let’s Work Together</Button>
            <Button
              as="a"
              href={import.meta.env.BASE_URL + "Ahmed_Alawneh.docx"}
              download="Ahmed_Alawneh.docx"
              rel="noopener noreferrer"
              variant="outline"
            >
              Download CV
            </Button>
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
            whileHover="whileHover"
          >
            <ProfileCard
              name="Ahmed Alawneh"
              title="Front End Developer"
              handle="a7mad1112"
              status="Available"
              contactText="Hire Me"
              avatarUrl="/me.svg"
              miniAvatarUrl="/me.svg"
              showUserInfo
              enableTilt
              enableMobileTilt={false}
              showBehindGradient={false}
              innerGradient={`linear-gradient(145deg, rgba(22,22,22,.95) 0%, rgba(255,145,77,.08) 100%)`}
              className="pc-theme-orng w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-[24rem]"
              onContactClick={() => {
                const el = document.getElementById("contact");
                if (el) smoothScrollTo(el.offsetTop, 1000, 70);
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
      {!rm && (
        <motion.div
          aria-hidden
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[var(--muted)]"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            ↓
          </motion.span>
        </motion.div>
      )}
    </section>
  );
}
