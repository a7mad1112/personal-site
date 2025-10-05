import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./components/sections/Hero.jsx";
import TechStack from "./components/sections/TechStack.jsx";
import Services from "./components/sections/Services.jsx";
import SeniorProject from "./components/sections/SeniorProject.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import Contact from "./components/sections/Contact.jsx";

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
  return (
    <>
      <Navbar />
      <main className="bg-[var(--bg)] text-white">
        <Hero />
        <TechStack />
        <Services />
        <SeniorProject />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
