import mobileDev from "../assets/animations/services/mobile-dev.json";
import webDev from "../assets/animations/services/web-dev.json";
import editDev from "../assets/animations/services/edit-dev.json";

export const services = [
  {
    title: "Full-Stack Web Engineering",
    desc: "End-to-end web applications combining robust backend services with responsive, high-performance user interfaces. Built with maintainable architecture and modern deployment standards.",
    tags: ["Full-Stack", "React & .NET / Node", "Clean Architecture"],
    lottie: webDev,
  },
  {
    title: "Backend Systems & APIs",
    desc: "Architecting secure, scalable RESTful APIs and backend services. Focused on efficient database modeling, clean business logic, authentication, and high-throughput reliability.",
    tags: ["RESTful APIs", ".NET Core & Node.js", "Database Engineering"],
    lottie: mobileDev,
  },
  {
    title: "System Optimization & Refactoring",
    desc: "Upgrading legacy codebases, resolving performance and query bottlenecks, and elevating overall system reliability with production-grade engineering practices.",
    tags: ["Code Modernization", "Performance Tuning", "Architecture Audit"],
    lottie: editDev,
  },
];
