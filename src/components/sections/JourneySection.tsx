import { getTranslations } from "next-intl/server";

type Entry = {
  date: string;
  kicker: string;
  title: string;
  org: string;
  body: string;
  tags: string[];
  accent: "primary" | "secondary";
};

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
      <p
        className='font-[family-name:var(--font-body)] text-[15px] leading-[1.65] text-on-surface-variant mb-6 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-1 hover:[&_a]:text-primary/80 [&_a_svg]:shrink-0'
        dangerouslySetInnerHTML={{ __html: entry.body }}
      />
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

export const JourneySection = async () => {
  const t = await getTranslations("journey");
  const entries = t.raw("entries") as Entry[];
  const titleStart = t("titleStart");
  const titleHighlight = t("titleHighlight");

  return (
    <section
      id='journey'
      className='relative w-full py-32 md:py-40 scroll-mt-20'
    >
      <div className='relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]'>
        <header
          data-animate
          className='text-center max-w-3xl mx-auto mb-20 md:mb-28'
        >
          <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase text-primary'>
            {t("kicker")}
          </span>
          <h2 className='font-[family-name:var(--font-headline)] text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] mt-4 mb-6'>
            {titleStart && `${titleStart} `}
            <span className='text-gradient-animate'>{titleHighlight}</span>
          </h2>
          <p className='font-[family-name:var(--font-body)] text-[16px] leading-[1.65] text-on-surface-variant'>
            {t("description")}
          </p>
        </header>

        <div className='relative max-w-4xl mx-auto'>
          <div className='pointer-events-none absolute top-0 bottom-0 left-4 md:left-1/2 md:-translate-x-1/2 w-px bg-gradient-to-b from-secondary/60 via-primary/40 to-secondary/0' />

          <ol data-animate-children className='space-y-16 md:space-y-24'>
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
