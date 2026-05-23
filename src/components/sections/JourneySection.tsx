type Entry = {
  date: string;
  kicker: string;
  title: string;
  org: string;
  body: string;
  tags: string[];
  accent: "primary" | "secondary";
};

const entries: Entry[] = [
  {
    date: "Jan 2026 — Present",
    kicker: "Current Role",
    title: "Software Engineer II (MG3)",
    org: "Mercari, Inc. · Tokyo",
    body: "Co-leading a new AI-native web application from architecture to production — owning 50%+ of the frontend codebase. Leveraging AI tooling (MCPs, Claude skills) to accelerate development by 50%+, and driving monorepo-wide architectural updates for multi-application support. Mentoring new-grad engineers from onboarding through self-sufficiency.",
    tags: ["AI-Native", "Next.js", "Architecture", "Mentorship"],
    accent: "secondary",
  },
  {
    date: "Oct 2023 — Dec 2025",
    kicker: "Promoted MG1 → MG2",
    title: "Software Engineer I",
    org: "Mercari, Inc. · Tokyo",
    body: "Led 10+ marketplace seller features in Next.js and TypeScript for 20M+ users; drove a 30% uplift in job applications across Mercari Hallo. Redesigned complex seller flows with Jotai to slash re-renders, and engineered an AI-powered Slack workflow to automate the migration from legacy Context. Supported Go microservices to unblock cross-functional full-stack work.",
    tags: ["Next.js", "TypeScript", "Go", "Jotai"],
    accent: "primary",
  },
  {
    date: "Jan 2023 — Apr 2023",
    kicker: "Where it started",
    title: "Software Engineer Intern",
    org: "Mercari, Inc. · Tokyo",
    body: "Delivered 3+ production features in React and TypeScript 50% faster than the estimated timeline. Contributed to the web-wide migration from Gatsby to Next.js.",
    tags: ["React", "TypeScript", "Migration"],
    accent: "secondary",
  },
  {
    date: "May 2023",
    kicker: "University Graduation",
    title: "B.Tech. Computer Science",
    org: "IIIT Gwalior",
    body: "Graduated from the Indian Institute of Information Technology, Gwalior. Coursework across data structures, algorithms, OOP, databases, operating systems, and software engineering — and a steady habit of competitive programming on the side.",
    tags: ["Algorithms", "Systems", "C++"],
    accent: "primary",
  },
  {
    date: "Oct 2021 — Jan 2022",
    kicker: "First Internship",
    title: "Fullstack Developer Intern",
    org: "Shopout · Remote",
    body: "Built a live-stream platform on Agora SDK and Firebase serving 300+ users. Improved invoice-generation APIs with Node.js and MongoDB, automating client-side PDF creation.",
    tags: ["Node.js", "Firebase", "MongoDB"],
    accent: "secondary",
  },
];

const TimelineCard = ({ entry }: { entry: Entry }) => {
  const accentText =
    entry.accent === "secondary" ? "text-secondary" : "text-primary";
  const accentBorder =
    entry.accent === "secondary"
      ? "border-secondary/30 hover:border-secondary/60"
      : "border-primary/30 hover:border-primary/60";
  return (
    <div
      className={`glass-panel glass-panel-hover ${accentBorder} rounded-lg p-6 md:p-8`}
    >
      <span
        className={`font-[family-name:var(--font-mono)] text-[11px] tracking-[0.22em] uppercase ${accentText}`}
      >
        {entry.kicker}
      </span>
      <h3 className='font-[family-name:var(--font-headline)] text-2xl font-semibold mt-2 mb-1 text-on-surface'>
        {entry.title}
      </h3>
      <p className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.14em] uppercase text-on-surface-variant mb-4'>
        @ {entry.org}
      </p>
      <p className='font-[family-name:var(--font-body)] text-[15px] leading-[1.65] text-on-surface-variant mb-6'>
        {entry.body}
      </p>
      <div className='flex flex-wrap gap-2'>
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className='font-[family-name:var(--font-mono)] text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export const JourneySection = () => {
  return (
    <section
      id='journey'
      className='relative w-full py-32 md:py-40 scroll-mt-20'
    >
      <div className='relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]'>
        <header className='text-center max-w-3xl mx-auto mb-20 md:mb-28'>
          <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase text-primary'>
            // Career Log
          </span>
          <h2 className='font-[family-name:var(--font-headline)] text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] mt-4 mb-6'>
            The <span className='text-gradient-animate'>Journey</span>
          </h2>
          <p className='font-[family-name:var(--font-body)] text-[16px] leading-[1.65] text-on-surface-variant'>
            Tracing the path of continuous learning, professional growth, and
            technological exploration. From academic foundations to full-time
            engineering.
          </p>
        </header>

        <div className='relative max-w-4xl mx-auto'>
          <div className='pointer-events-none absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-px bg-gradient-to-b from-secondary/60 via-primary/40 to-secondary/0' />

          <ol className='space-y-16 md:space-y-24'>
            {entries.map((entry, i) => {
              const reverse = i % 2 === 1;
              const nodeColor =
                entry.accent === "secondary"
                  ? "bg-secondary shadow-[0_0_14px_rgba(235,178,255,0.9)]"
                  : "bg-primary shadow-[0_0_14px_rgba(0,219,233,0.9)]";
              return (
                <li
                  key={entry.title}
                  className={`relative grid md:grid-cols-2 md:gap-12 ${
                    reverse ? "md:[direction:rtl]" : ""
                  }`}
                >
                  <span
                    className={`absolute top-2 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ring-4 ring-background ${nodeColor}`}
                  />

                  <div
                    className={`pl-12 md:pl-0 md:[direction:ltr] ${
                      reverse ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <TimelineCard entry={entry} />
                  </div>

                  <div
                    className={`hidden md:flex items-start md:[direction:ltr] ${
                      reverse ? "justify-start pl-12" : "justify-end pr-12"
                    }`}
                  >
                    <span
                      className={`font-[family-name:var(--font-mono)] text-[13px] tracking-[0.22em] uppercase ${
                        entry.accent === "secondary"
                          ? "text-secondary"
                          : "text-primary"
                      }`}
                    >
                      {entry.date}
                    </span>
                  </div>

                  <span
                    className={`md:hidden pl-12 mt-3 font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase ${
                      entry.accent === "secondary"
                        ? "text-secondary"
                        : "text-primary"
                    }`}
                  >
                    {entry.date}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
