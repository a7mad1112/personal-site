import Card from "../ui/Card.jsx";

export default function GetInTouch() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-2">Get In Touch</h3>
      <p className="text-sm text-[var(--muted)]">
        If you have any questions or want to work with me, drop me a note.
      </p>
      <ul className="mt-4 space-y-1 text-sm">
        <li>
          <span className="text-[var(--muted)]">Email:</span> you@email.com
        </li>
        <li>
          <span className="text-[var(--muted)]">Location:</span> Palestine
        </li>
      </ul>
    </Card>
  );
}
