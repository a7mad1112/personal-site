import Card from "../../ui/Card";

export default function TestimonialCard({ t, highlight = false }) {
  return (
    <Card className={`p-6 ${highlight ? "ring-1 ring-[var(--accent)]" : ""}`}>
      <div className="mb-4 flex items-center gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--accent)]"
        />
        <div>
          <p className="font-medium">{t.name}</p>
          <p className="text-xs text-[var(--muted)]">{t.role}</p>
        </div>
      </div>
      <p className="text-sm text-[var(--muted)]">{t.text}</p>
    </Card>
  );
}
