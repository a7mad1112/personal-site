import Card from "../ui/Card.jsx";
import mailIcon from "../../assets/animations/mails/mail.json";
import LottieOnce from "../ui/LottieOnce.jsx";
export default function GetInTouch() {
  return (
    <Card className="relative border-0 bg-transparent p-0">
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
          <LottieOnce
            animationData={mailIcon}
            size={64}
            once
            trigger="inview"
          />
        </div>
        <div>
          <h3 className="mb-1 text-xl font-semibold text-white">
            Get In Touch
          </h3>
          <p className="text-sm text-[var(--muted)]">
            Have a question or a project in mind? Let’s talk.
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="opacity-70">Email:</span>
              <a
                href="mailto:ahmalawneh79@gmail.com"
                className="underline decoration-[var(--accent)]/40 decoration-2 underline-offset-2 hover:text-[var(--accent)]"
              >
                ahmalawneh79@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-70">Location:</span>
              <span>Palestine, Jenin</span>
            </li>
          </ul>

          {/* Social chips */}
          <div className="my-5 flex flex-wrap gap-2">
            <a
              href="https://www.linkedin.com/in/ahmedalalawneh/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80 hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/a7mad1112"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80 hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />
    </Card>
  );
}
