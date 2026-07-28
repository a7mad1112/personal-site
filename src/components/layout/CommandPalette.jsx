import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { id: "home", label: "/home", section: "top" },
  { id: "resume", label: "/resume", action: "resume" },
  { id: "tech", label: "/tech-stack", section: "tech-stack" },
  { id: "services", label: "/services", section: "services" },
  { id: "experience", label: "/experience", section: "experience" },
  { id: "projects", label: "/projects", section: "projects" },
  { id: "contact", label: "/contact", section: "contact" },
];

export default function CommandPalette({ isOpen, setIsOpen }) {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    } else {
      setSearch("");
    }
  }, [isOpen]);

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (cmd) => {
    setIsOpen(false);
    if (cmd.action === "resume") {
      window.open("/resume.html", "_blank");
      return;
    }
    if (cmd.section === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.getElementById(cmd.section);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && filteredCommands.length > 0) {
      handleSelect(filteredCommands[0]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-4 border-b border-[var(--border)]">
              <span className="text-[var(--accent)] font-bold text-xl mr-3 mono">
                &gt;_
              </span>
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Type a command or search..."
                className="w-full bg-transparent outline-none text-white placeholder-gray-500 text-lg mono"
              />
              <div className="flex gap-2">
                <kbd className="hidden sm:inline-flex items-center justify-center rounded border border-[var(--border)] bg-white/5 px-2 text-xs font-medium text-gray-400 mono">
                  ESC
                </kbd>
              </div>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd)}
                    className="w-full flex items-center px-4 py-3 text-left rounded-lg hover:bg-white/5 transition-colors focus:bg-white/5 focus:outline-none text-gray-300 hover:text-white"
                  >
                    <span className="mono mr-4 text-gray-500">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium">{cmd.label}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-left text-red-400 text-sm mono">
                  bash: {search}: command not found
                </div>
              )}
            </div>
            
            <div className="bg-black/40 border-t border-[var(--border)] px-4 py-3 text-xs text-gray-500 flex justify-between items-center mono">
              <span>Navigate site</span>
              <span className="flex items-center gap-1">
                Press <kbd className="rounded border border-[var(--border)] bg-white/5 px-1 py-0.5">↑↓</kbd> to navigate
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
