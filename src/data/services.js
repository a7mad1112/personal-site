import mobileDev from "../assets/animations/services/mobile-dev.json";
import webDev from "../assets/animations/services/web-dev.json";
import editDev from "../assets/animations/services/edit-dev.json";

export const services = [
  {
    front: {
      title: "Responsive Development",
      desc: "Pixel-perfect, accessible UI for all screens.",
      lottie: mobileDev,
    },
    back: {
      title: "Responsive Development",
      desc: "I convert your design into clean, semantic, and fully responsive HTML/CSS with accessibility in mind. From mobile-first layouts to fluid grids and components, you’ll get production-ready markup that performs and scales.",
    },
  },
  {
    front: {
      title: "Web App Development",
      desc: "React apps that are fast and scalable.",
      lottie: webDev,
    },
    back: {
      title: "Web App Development",
      desc: "I build modern React applications with robust state management, routing, and API integration. From architecture to deployment, I focus on performance, DX, and maintainable code that your team can iterate on.",
    },
  },
  {
    front: {
      title: "Editing & Re-design",
      desc: "Refactor, refresh, and elevate.",
      lottie: editDev,
    },
    back: {
      title: "Editing & Re-design",
      desc: "Have an existing website? I can refactor legacy code, fix layout or performance issues, and refresh the look and feel. Expect clearer structure, better UX, and improved lighthouse metrics.",
    },
  },
];
