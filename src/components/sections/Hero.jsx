import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import { socials } from "../../data/socials.js";
import Waves from "../ui/Waves.jsx";
import ShinyText from "../ui/ShinyText.jsx";
import TextType from "../ui/TextType.jsx";
import ProfileCard from "../ui/profileCard/ProfileCard.jsx";
import { smoothScrollTo } from "../../utils/scroll.js";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center"
    >
      {/* Background layer */}
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

      {/* Content ABOVE */}
      <Container className="relative z-10 grid md:grid-cols-2 items-center gap-10">
        {/* Left text content */}
        <div className="space-y-5">
          <ShinyText
            text="Welcome to my world"
            speed={5}
            className="text-base md:text-lg lg:text-xl font-medium mb-0"
            baseClass="text-[var(--muted)]"
          />
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
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
              showCursor={true}
              startOnVisible={true}
              cursorCharacter="|"
              className="text-[var(--accent)] text-2xl lg:text-3xl"
              // textColors={["#fff", "var(--accent)", "#9ca3af"]}
            />
          </h1>
          <p className="text-[var(--muted)] max-w-xl">
            I create fast, sleek front-end experiences. Let’s build something
            that actually moves your business.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#contact">Let’s Work Together</Button>
            <Button
              as="a"
              href={import.meta.env.BASE_URL + "AhmedAlawnehResume.pdf"}
              download="AhmedAlawnehResume.pdf"
              rel="noopener noreferrer"
              variant="outline"
            >
              Download CV
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
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
          </div>
        </div>
        {/* Right profile card */}
        <div className="relative z-10 flex justify-center md:justify-center lg:justify-end">
          <ProfileCard
            // content
            name="Ahmed Alawneh"
            title="Front End Developer"
            handle="a7mad1112"
            status="Available"
            contactText="Hire Me"
            avatarUrl="me.svg"
            miniAvatarUrl="me.svg"
            // behavior
            showUserInfo
            enableTilt
            enableMobileTilt={false}
            onContactClick={() => {
              const target = document.getElementById("contact");
              if (target) smoothScrollTo(target.offsetTop, 1000, 70);
            }}
            // style
            showBehindGradient={false}
            innerGradient="none"
            className={[
              "rounded-2xl",
              "border-[var(--border)]",
              "transition-colors duration-300",
              "focus-within:border-[var(--accent)] hover:border-[var(--accent)]",
              // responsive safe sizing:
              "w-full max-w-[18rem]",
              "sm:max-w-[20rem]",
              "md:max-w-[22rem]",
              "lg:max-w-[24rem]",
            ].join(" ")}
          />
        </div>
      </Container>
    </section>
  );
}
