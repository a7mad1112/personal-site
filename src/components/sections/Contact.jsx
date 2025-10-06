import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Button from "../ui/Button.jsx";
import GetInTouch from "./GetInTouch.jsx";
import AnimatedSvgLines from "../ui/AnimatedSvgLines.jsx";

const EMAILJS_SERVICE_ID = "service_pr9ll7d";
const EMAILJS_TEMPLATE_ID = "template_hfo82ri";
const EMAILJS_PUBLIC_KEY = "4sPbe0XmnJe4ohlBC";

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus({
        type: "success",
        msg: "Thanks! Your message has been sent.",
      });
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "Sorry, something went wrong. Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
      />
      <AnimatedSvgLines
        observeRef={sectionRef}
        opacity={0.45}
        duration={1500}
      />

      <Container>
        <SectionHeader
          title="Contact Me"
          subtitle="Leave me a message and let’s build something awesome"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Card className="relative overflow-hidden border border-[var(--border)] bg-[#0f0f0f]/80 p-6 lg:p-7 backdrop-blur">
            <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--accent)]/10 blur-2xl" />
            <span className="pointer-events-none absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-[var(--accent)]/10 blur-2xl" />
            <GetInTouch />
          </Card>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-[linear-gradient(135deg,rgba(255,106,0,.5),rgba(255,145,77,.25))] blur-[2px] opacity-70" />
            <div className="relative rounded-3xl border border-white/10 bg-[#180c07]/50 p-6 backdrop-blur md:p-8">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Send Me A Message
              </h3>

              <form ref={formRef} onSubmit={onSubmit} className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <InputFL
                    id="name"
                    name="from_name"
                    label="Your name"
                    autoComplete="name"
                    required
                  />
                  <InputFL
                    id="email"
                    name="reply_to"
                    type="email"
                    label="Your E-mail"
                    autoComplete="email"
                    required
                  />
                </div>

                <InputFL
                  id="subject"
                  name="subject"
                  label="Message subject"
                  required
                />
                <TextareaFL
                  id="message"
                  name="message"
                  label="Tell me how I can help you"
                  rows={6}
                  required
                />
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                <label className="mt-1 flex items-center gap-2 text-xs text-[var(--muted)]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/20 bg-transparent accent-[var(--accent)]"
                    defaultChecked
                  />
                  You agree to be contacted back via your provided email.
                </label>

                <div className="flex items-center gap-3 pt-2">
                  <Button
                    as="button"
                    type="submit"
                    className="px-6"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send"}
                  </Button>
                  <span className="text-xs text-[var(--muted)]">
                    I usually respond within 24–48 hrs.
                  </span>
                </div>

                {status && (
                  <p
                    className={[
                      "text-sm",
                      status.type === "success"
                        ? "text-emerald-400"
                        : "text-rose-400",
                    ].join(" ")}
                  >
                    {status.msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- Floating Label Inputs ----------------------- */

function InputFL({ id, label, className = "", ...props }) {
  return (
    <div className="group relative">
      <input
        id={id}
        {...props}
        placeholder=" "
        className={[
          "peer w-full rounded-xl border border-white/10 bg-[#151515]/70 px-4 py-3 text-white",
          "focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60 focus:border-[var(--accent)]/60",
          "transition placeholder:opacity-0",
          className,
        ].join(" ")}
      />
      <label
        htmlFor={id}
        className={[
          "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 px-1 text-sm text-[var(--muted)]",
          "bg-[#151515]/70 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm",
          "peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--accent)]",
          "peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs",
          "rounded-md",
        ].join(" ")}
      >
        {label}
      </label>
    </div>
  );
}

function TextareaFL({ id, label, className = "", ...props }) {
  return (
    <div className="group relative">
      <textarea
        id={id}
        placeholder=" "
        {...props}
        className={[
          "peer w-full rounded-xl border border-white/10 bg-[#151515]/70 px-4 py-3 text-white",
          "focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60 focus:border-[var(--accent)]/60",
          "transition placeholder:opacity-0",
          className,
        ].join(" ")}
      />
      <label
        htmlFor={id}
        className={[
          "pointer-events-none absolute left-3 top-4 px-1 text-sm text-[var(--muted)]",
          "bg-[#151515]/70 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--accent)]",
          "peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm",
          "peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs",
          "rounded-md",
        ].join(" ")}
      >
        {label}
      </label>
    </div>
  );
}
