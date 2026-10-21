import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Container from "./Container.jsx";
import Button from "../ui/Button.jsx";
import { smoothScrollTo } from "../../utils/scroll.js";

export default function Navbar({ setPaletteOpen }) {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
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
    setMobileOpen(false);
    isProgrammaticScroll.current = true;
    await smoothScrollTo(target.offsetTop, 1200, 70);
    isProgrammaticScroll.current = false;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg)]/85 backdrop-blur-md">
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
            <img src="logo.svg" alt="Logo" className="w-auto h-8 lg:h-9" />
          </motion.a>
        </motion.div>

        {/* Desktop Nav */}
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
                "pb-1 transition-colors relative",
                active === link.id
                  ? "text-[var(--accent)] active-link"
                  : "text-white/80 hover:text-[var(--accent)]",
              ].join(" ")}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        {/* Desktop Actions */}
        <motion.div
          variants={navContainer}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center gap-4"
        >
          <motion.div variants={fadeUp}>
            <button 
              onClick={() => setPaletteOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] hover:border-gray-500 transition-colors text-sm text-gray-300 mono"
            >
              <span>Search</span>
              <kbd className="rounded bg-white/10 px-1 font-sans text-xs">⌘K</kbd>
            </button>
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <a
              href="/resume.html"
              target="_blank"
              className="inline-flex items-center px-4 py-2 rounded-md bg-[var(--surface)] border border-[var(--border)] hover:border-gray-500 hover:text-white transition-colors text-sm font-medium text-gray-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <Button href="#contact" onClick={(e) => handleClick(e, "contact")}>
              Hire Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-white/10 bg-[var(--bg)]/95 backdrop-blur-xl overflow-hidden"
          >
            <Container className="py-4 space-y-4">
              <nav className="flex flex-col space-y-1">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    className={[
                      "px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
                      active === link.id
                        ? "text-[var(--accent)] bg-[var(--accent)]/10 font-semibold"
                        : "text-white/80 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setPaletteOpen(true);
                  }}
                  className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm text-gray-300 mono"
                >
                  <span>Search</span>
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-sans text-xs">⌘K</kbd>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="/resume.html"
                    target="_blank"
                    className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-sm font-medium text-gray-200 hover:text-white transition-colors"
                  >
                    Resume
                  </a>
                  <Button
                    href="#contact"
                    onClick={(e) => handleClick(e, "contact")}
                    className="w-full justify-center text-center"
                  >
                    Hire Me
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
