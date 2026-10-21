import { experiences } from "../../data/experiences";
import { motion } from "framer-motion";
import { useState } from "react";

const Badge = ({ children, variant = "primary" }) => {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide";
  const styles = {
    primary:
      "bg-[color:rgba(255,145,77,.15)] text-[var(--accent)] ring-1 ring-[color:rgba(255,145,77,.35)]",
    neutral: "bg-white/10 text-white/75 ring-1 ring-white/15",
    current:
      "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/35",
  };
  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
};

const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-70">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      fill="currentColor"
    />
  </svg>
);

const Quote = ({ children, dir = "rtl" }) => (
  <div
    dir={dir}
    className="relative rounded-lg border-r-2 border-[var(--accent)] bg-white/[.03] p-3 text-xs md:text-sm leading-relaxed text-white/85"
  >
    <span className="block">{children}</span>
  </div>
);

const typeIcon = {
  Teaching: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[var(--accent)]">
      <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 14v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 11.5v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Internship: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[var(--accent)]">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m2 0v-2m14 2v-2M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Company: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[var(--accent)]">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m2 0v-2m14 2v-2M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

/* ─── Organization Logo with Fallback Icon ─── */
const CompanyLogo = ({ logo, name, type }) => {
  const [hasError, setHasError] = useState(false);

  if (logo && !hasError) {
    return (
      <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white p-1 ring-1 ring-white/20 shadow-sm overflow-hidden">
        <img
          src={logo}
          alt={`${name || "Organization"} logo`}
          className="w-full h-full object-contain"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[color:rgba(255,145,77,.1)] ring-1 ring-[color:rgba(255,145,77,.2)]">
      {typeIcon[type] || typeIcon.Company}
    </div>
  );
};

/* ─── Shared Role Description & Achievements ─── */
const RoleDescription = ({ description, achievements }) => {
  const [expanded, setExpanded] = useState(false);

  const hasAchievements = Array.isArray(achievements) && achievements.length > 0;
  const hasDescription = Boolean(description && description.trim());

  if (!hasAchievements && !hasDescription) return null;

  const hasMore =
    (hasAchievements && achievements.length > 2) ||
    (hasDescription && hasAchievements) ||
    (hasDescription && description.length > 140);

  return (
    <div className="mt-2.5">
      {!expanded ? (
        <div>
          {hasAchievements ? (
            <ul className="space-y-1.5 text-sm text-white/75">
              {achievements.slice(0, 2).map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-white/40 mt-1 text-xs select-none">―</span>
                  <span className="leading-6">{a}</span>
                </li>
              ))}
            </ul>
          ) : hasDescription ? (
            <p className="text-sm leading-6 text-white/75 line-clamp-2">
              {description}
            </p>
          ) : null}

          {hasMore && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="mt-1.5 text-xs font-medium text-white/50 hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              ...more
            </button>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.2 }}
          className="space-y-2.5 overflow-hidden"
        >
          {hasDescription && (
            <p className="text-sm leading-6 text-white/80">
              {description}
            </p>
          )}
          {hasAchievements && (
            <ul className="space-y-1.5 text-sm text-white/80">
              {achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-white/40 mt-1 text-xs select-none">―</span>
                  <span className="leading-6">{a}</span>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="mt-2 text-xs font-medium text-white/50 hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            Show less
          </button>
        </motion.div>
      )}
    </div>
  );
};

/* ─── Shared Role Actions (Certificate & Feedback) ─── */
const RoleActions = ({ certificate, feedbacks }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const hasFeedback = Array.isArray(feedbacks) && feedbacks.length > 0;

  if (!certificate && !hasFeedback) return null;

  return (
    <div className="mt-3.5 pt-3 border-t border-white/[.06]">
      <div className="flex flex-wrap items-center gap-2.5">
        {certificate && (
          <a
            href={certificate}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[color:rgba(255,145,77,.12)] px-3 py-1.5 text-xs font-medium text-[var(--accent)] ring-1 ring-[color:rgba(255,145,77,.3)] hover:bg-[color:rgba(255,145,77,.22)] transition-colors"
          >
            <span>View Certificate</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              className="opacity-80"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H9M17 7V15"
              />
            </svg>
          </a>
        )}

        {hasFeedback && (
          <button
            type="button"
            onClick={() => setShowFeedback((s) => !s)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/[.04] px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 hover:bg-white/[.08] hover:text-white hover:ring-white/20 transition-colors cursor-pointer"
            aria-expanded={showFeedback}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              className={`transition-transform duration-200 ${
                showFeedback ? "rotate-180" : ""
              }`}
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              {showFeedback ? "Hide" : "View"} student feedback ({feedbacks.length})
            </span>
          </button>
        )}
      </div>

      {hasFeedback && showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-3"
        >
          <div className="rounded-xl border border-white/[.08] bg-[#1f2023] p-3.5 space-y-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/[.06] text-xs text-white/50">
              <span className="font-medium text-white/70">Student Testimonials</span>
              <span>{feedbacks.length} reviews</span>
            </div>
            <div className="grid gap-2" dir="rtl">
              {feedbacks.map((fb, i) => (
                <Quote key={i} dir="rtl">
                  {fb}
                </Quote>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

/* ─── Role Item inside Group (Pipeline Track style) ─── */
const PipelineRole = ({ role, isFirst, isLast, index }) => {
  return (
    <div className="relative flex items-stretch gap-4 md:gap-5">
      {/* ── Pipeline Track (Continuous line & dot aligned with company icon) ── */}
      <div className="relative flex flex-col items-center shrink-0 w-10 md:w-11">
        {/* Line coming from above */}
        <span
          className={`w-[2px] ${isFirst ? "h-3" : "h-2.5"} bg-white/20 shrink-0`}
        />

        {/* Pipeline Dot */}
        <span
          className={`relative z-10 h-3 w-3 rounded-full shrink-0 ${
            role.isCurrent
              ? "bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,.25)]"
              : "bg-white/60 ring-4 ring-[#292a2d]"
          }`}
        />

        {/* Line going DOWN to next role — hidden on last role */}
        {!isLast && <span className="w-[2px] flex-1 bg-white/20" />}
      </div>

      {/* ── Role Content ── */}
      <motion.div
        initial={{ opacity: 0, x: -6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.25, delay: index * 0.05 }}
        className={`flex-1 min-w-0 ${!isLast ? "pb-6 md:pb-7" : "pb-1"}`}
      >
        {/* Title row */}
        <div className="flex flex-wrap items-center gap-2 pt-0.5">
          <h4 className="text-sm md:text-base font-semibold tracking-tight text-white">
            {role.title}
          </h4>
          {role.isCurrent && <Badge variant="current">Present</Badge>}
        </div>

        {/* Employment Type */}
        {role.employmentType && (
          <p className="text-xs text-white/60 mt-0.5">{role.employmentType}</p>
        )}

        {/* Date & Duration */}
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-white/50">
          {role.date && <span>{role.date}</span>}
          {role.duration && (
            <>
              <span className="text-white/30">·</span>
              <span>{role.duration}</span>
            </>
          )}
        </div>

        {/* Location */}
        {role.location && (
          <p className="mt-0.5 flex items-center gap-1 text-xs text-white/45">
            <PinIcon />
            <span>{role.location}</span>
          </p>
        )}

        {/* Description & achievements */}
        <RoleDescription
          description={role.description}
          achievements={role.achievements}
        />

        {/* Actions (certificate / feedback if any) */}
        <RoleActions
          certificate={role.certificate}
          feedbacks={role.feedbacks}
        />
      </motion.div>
    </div>
  );
};

/* ─── Grouped Experience (Company Header + Pipeline Track) ─── */
const GroupedExperience = ({ group, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="relative pl-7 md:pl-10"
    >
      {/* vertical line for the outer timeline */}
      <span
        className="absolute left-0 top-0 h-full w-[2px] rounded-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,145,77,.9), rgba(255,145,77,.15))",
        }}
      />
      {/* outer dot */}
      <span
        className="absolute -left-[6px] top-3 h-3 w-3 rounded-full shadow-[0_0_0_6px_rgba(255,145,77,.15)]"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div className="rounded-2xl border border-[color:rgba(255,255,255,.08)] bg-[#292a2d] p-5 md:p-6">
        {/* Company header */}
        <div className="flex items-start gap-4 md:gap-5 mb-1">
          {/* Company logo */}
          <CompanyLogo
            logo={group.logo}
            name={group.company}
            type="Company"
          />
          <div className="flex-1 min-w-0 pt-0.5">
            <h3 className="text-base md:text-lg font-bold tracking-tight text-white">
              {group.company}
            </h3>
            {group.totalDuration && (
              <p className="text-xs text-white/50 mt-0.5">
                {group.totalDuration}
              </p>
            )}
          </div>
        </div>

        {/* Pipeline Roles */}
        <div>
          {group.roles.map((role, roleIdx) => (
            <PipelineRole
              key={role.id}
              role={role}
              isFirst={roleIdx === 0}
              isLast={roleIdx === group.roles.length - 1}
              index={roleIdx}
            />
          ))}
        </div>
      </div>
    </motion.li>
  );
};

/* ─── Single Experience Item (Consistent with Grouped Style) ─── */
const ExperienceItem = ({ item, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="relative pl-7 md:pl-10"
    >
      {/* vertical line for the outer timeline */}
      <span
        className="absolute left-0 top-0 h-full w-[2px] rounded-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,145,77,.9), rgba(255,145,77,.15))",
        }}
      />
      {/* outer dot */}
      <span
        className="absolute -left-[6px] top-3 h-3 w-3 rounded-full shadow-[0_0_0_6px_rgba(255,145,77,.15)]"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div className="rounded-2xl border border-[color:rgba(255,255,255,.08)] bg-[#292a2d] p-5 md:p-6">
        <div className="flex items-start gap-4 md:gap-5">
          {/* Organization logo */}
          <CompanyLogo
            logo={item.logo}
            name={item.company || item.title}
            type={item.type}
          />

          <div className="flex-1 min-w-0">
            {/* Title row */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <h3 className="text-base md:text-lg font-bold tracking-tight text-white">
                {item.title}
              </h3>
              {item.isCurrent && <Badge variant="current">Present</Badge>}
            </div>

            {/* Company name */}
            {item.company && (
              <p className="text-xs md:text-sm font-medium text-white/80 mt-0.5">
                {item.company}
              </p>
            )}

            {/* Employment Type */}
            {(item.employmentType || item.type) && (
              <p className="text-xs text-white/60 mt-0.5">
                {item.employmentType || item.type}
              </p>
            )}

            {/* Date & Duration */}
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-white/50">
              {item.date && <span>{item.date}</span>}
              {item.duration && (
                <>
                  <span className="text-white/30">·</span>
                  <span>{item.duration}</span>
                </>
              )}
            </div>

            {/* Location */}
            {item.location && (
              <p className="mt-0.5 flex items-center gap-1 text-xs text-white/45">
                <PinIcon />
                <span>{item.location}</span>
              </p>
            )}

            {/* Description & achievements */}
            <RoleDescription
              description={item.description}
              achievements={item.achievements}
            />

            {/* Actions: Certificate and Feedback */}
            <RoleActions
              certificate={item.certificate}
              feedbacks={item.feedbacks}
            />
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 0%, rgba(255,145,77,.18), transparent 60%), radial-gradient(55% 60% at 80% 100%, rgba(255,145,77,.12), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Experience
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/70 max-w-2xl">
            My journey from Full Stack training to teaching and mentoring other developers. Highlighting key professional milestones in building robust backend systems, APIs, and responsive frontends.
          </p>
        </div>

        <ol className="relative space-y-5">
          {experiences.map((exp, idx) =>
            exp.isGroup ? (
              <GroupedExperience key={exp.id} group={exp} index={idx} />
            ) : (
              <ExperienceItem key={exp.id ?? idx} item={exp} index={idx} />
            )
          )}
        </ol>
      </div>
    </section>
  );
}

