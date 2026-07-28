import { useState } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./components/sections/Hero.jsx";
import TechStack from "./components/sections/TechStack.jsx";
import Services from "./components/sections/Services.jsx";
import SeniorProject from "./components/sections/SeniorProject.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import Contact from "./components/sections/Contact.jsx";
import ClientProjects from "./components/sections/ClientProjects.jsx";
import TrainingProjects from "./components/sections/TrainingProjects.jsx";
import Experience from "./components/sections/Experience.jsx";
import ContentCreator from "./components/sections/ContentCreator.jsx";
import Awards from "./components/sections/Awards.jsx";
import LeviChatbot from "./components/chatbot/LeviChatbot.jsx";
import CommandPalette from "./components/layout/CommandPalette.jsx";
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});
export default function App() {
  const [isPaletteOpen, setPaletteOpen] = useState(false);

  return (
    <>
      <CommandPalette isOpen={isPaletteOpen} setIsOpen={setPaletteOpen} />
      <div className="ambient-bg">
        <div className="bg-aurora a1"></div>
        <div className="bg-aurora a2"></div>
        <div className="bg-aurora a3"></div>
        <div className="bg-grid"></div>
      </div>
      <Navbar setPaletteOpen={setPaletteOpen} />
      <main className="text-white">
        <Hero />
        <TechStack />
        <Services />
        <Experience />
        <Awards />
        <ClientProjects />
        <SeniorProject />
        <TrainingProjects />
        <Testimonials />
        <ContentCreator />
        <Contact />
      </main>
      <Footer />
      {/* Levi floating chatbot */}
      <LeviChatbot />
    </>
  );
}
