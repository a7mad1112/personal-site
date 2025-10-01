import Card from "../../ui/Card";

export default function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[16/10] bg-black/20">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-xs text-[var(--muted)]">
          <span>{project.title}</span>
          <span>{project.date}</span>
        </div>
        <div className="mt-2 text-xs text-[var(--accent)]">{project.tag}</div>
      </div>
    </Card>
  );
}
