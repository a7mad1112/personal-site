import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "./Container.jsx";
import Button from "../ui/Button.jsx";
import { smoothScrollTo } from "../../utils/scroll.js";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const isProgrammaticScroll = useRef(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = async (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    setActive(id);
    isProgrammaticScroll.current = true;
    await smoothScrollTo(target.offsetTop, 1200, 70);
    isProgrammaticScroll.current = false;
  };

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const onScroll = () => {
      if (isProgrammaticScroll.current) return;
      let current = "home";
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = sec.id;
          break;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shouldReduce = useReducedMotion();

  const navContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.12,
        delayChildren: shouldReduce ? 0 : 0.18,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <header className="sticky top-0 z-50 shadow-[0_2px_8px_var(--accent)] bg-[var(--bg)]/95 backdrop-blur">
      <Container className="flex h-16 lg:h-20 items-center justify-between">
        <motion.div
          variants={navContainer}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2"
        >
          <motion.a
            variants={fadeUp}
            href="#home"
            onClick={(e) => handleClick(e, "home")}
            className=""
          >
            <img src="logo.svg" alt="Logo" className="w-auto" />
          </motion.a>
        </motion.div>
        <motion.nav
          variants={navContainer}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-medium whitespace-nowrap"
        >
          {links.map((link) => (
            <motion.a
              key={link.id}
              variants={fadeUp}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={[
                "pb-1 transition-colors",
                active === link.id
                  ? "text-[var(--accent)] active-link"
                  : "text-white hover:text-[var(--accent)]",
              ].join(" ")}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.div
          variants={navContainer}
          initial="hidden"
          animate="visible"
          className="hidden lg:block"
        >
          <motion.div variants={fadeUp}>
            <Button href="#contact" onClick={(e) => handleClick(e, "contact")}>
              Hire Me
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </header>
  );
}
