import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
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
        msg: "Thank you! Your message has been sent successfully. I'll get back to you shortly.",
      });
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "Sorry, something went wrong. Please try again or reach out directly via email.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
    >
      <AnimatedSvgLines
        observeRef={sectionRef}
        opacity={0.35}
        duration={1500}
      />

      <Container>
        <SectionHeader
          kicker="Get In Touch"
          title="Contact Me"
          subtitle="Have a question, an opportunity, or a project in mind? Let’s connect."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-start">
          {/* ── Left Column: Direct Contact Information ── */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[var(--surface)]/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for New Opportunities
              </div>
              <h3 className="text-xl font-bold text-white">Let’s Talk</h3>
              <p className="mt-1.5 text-sm text-white/70 leading-relaxed">
                Whether you have an engineering role, a backend consulting
                need, or a question, feel free to reach out anytime.
              </p>
            </div>

            {/* Direct Contact Links */}
            <ul className="space-y-4 pt-2">
              {/* Email */}
              <li className="flex items-start gap-3.5">
                <div className="shrink-0 p-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--accent)]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-medium text-white/50">
                    Email
                  </span>
                  <a
                    href="mailto:ahmalawneh79@gmail.com"
                    className="text-sm font-semibold text-white hover:text-[var(--accent)] transition-colors break-all"
                  >
                    ahmalawneh79@gmail.com
                  </a>
                </div>
              </li>

              {/* LinkedIn */}
              <li className="flex items-start gap-3.5">
                <div className="shrink-0 p-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--accent)]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-medium text-white/50">
                    LinkedIn
                  </span>
                  <a
                    href="https://www.linkedin.com/in/ahmedalalawneh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-[var(--accent)] transition-colors"
                  >
                    linkedin.com/in/ahmedalalawneh
                  </a>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3.5">
                <div className="shrink-0 p-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--accent)]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-medium text-white/50">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Jenin, Palestine 🇵🇸
                  </span>
                </div>
              </li>
            </ul>

            {/* Quick Chat Chips */}
            <div className="pt-4 border-t border-white/10">
              <span className="block text-xs font-medium text-white/50 mb-2.5">
                Direct Messaging
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://wa.me/970595809023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
                >
                  <span>WhatsApp</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://t.me/ProgrammerLevi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 hover:border-sky-500/50 hover:text-sky-400 transition-colors"
                >
                  <span>Telegram</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://github.com/a7mad1112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-colors"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── Right Column: Streamlined 3-Field Contact Form ── */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[var(--surface)]/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">
              Send Me A Message
            </h3>
            <p className="text-sm text-white/70 mb-6">
              Fill in your details below and I’ll get back to you within 24–48
              hours.
            </p>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
              <input
                type="hidden"
                name="subject"
                value="New message from portfolio contact form"
              />
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <div className="grid sm:grid-cols-2 gap-4">
                {/* 1. Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-white/70 mb-1.5"
                  >
                    Your Name <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="from_name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                  />
                </div>

                {/* 2. Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-white/70 mb-1.5"
                  >
                    Your Email <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="reply_to"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="e.g. john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                  />
                </div>
              </div>

              {/* 3. Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-white/70 mb-1.5"
                >
                  Your Message <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, team opportunity, or inquiry..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-none"
                />
              </div>

              {/* Submit Button & Response Time */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-bold text-[#0b0f19] hover:opacity-95 hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {sending ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-[#0b0f19]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>→</span>
                    </>
                  )}
                </button>

                <span className="text-xs text-white/50">
                  Usually replies within 24–48 hrs
                </span>
              </div>

              {/* Status Alert */}
              {status && (
                <div
                  className={`mt-4 rounded-xl p-4 text-xs sm:text-sm font-medium border ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/30 text-rose-400"
                  }`}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
