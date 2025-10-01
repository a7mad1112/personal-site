import { useState, useMemo } from "react";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Tabs from "../ui/Tabs.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { projects, projectTabs } from "../../data/projects.js";

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tag === activeTag);
  }, [activeTag]);

  return (
    <section id="portfolio" className="py-20">
      <Container>
        <SectionHeader
          title="My Projects"
          subtitle="Check out my latest work"
        />
        <div className="mb-6">
          <Tabs tabs={projectTabs} onChange={(t) => setActiveTag(t)} />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
