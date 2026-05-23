import { getTranslations } from "next-intl/server";

type Skill = {
  index: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  accent: "primary" | "secondary";
};

export const ExpertiseSection = async () => {
  const t = await getTranslations("expertise");
  const skills = t.raw("skills") as Skill[];
  const titleStart = t("titleStart");
  const titleHighlight = t("titleHighlight");

  return (
    <section
      id='expertise'
      className='relative w-full py-32 md:py-40 scroll-mt-20'
    >
      <div className='relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]'>
        <header data-animate className='max-w-3xl mb-16 md:mb-20'>
          <div className='flex items-center gap-4 mb-4'>
            <span className='material-symbols-outlined text-primary text-[28px] drop-shadow-[0_0_12px_rgba(0,219,233,0.6)]'>
              memory
            </span>
            <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase text-primary'>
              {t("kicker")}
            </span>
          </div>
          <h2 className='font-[family-name:var(--font-headline)] text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] mb-6'>
            {titleStart && `${titleStart} `}
            <span className='text-gradient-animate'>{titleHighlight}</span>
          </h2>
          <p className='font-[family-name:var(--font-body)] text-[16px] leading-[1.65] text-on-surface-variant'>
            {t("description")}
          </p>
        </header>

        <div data-animate-children className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {skills.map((skill) => {
            const accentIcon =
              skill.accent === "primary" ? "text-primary" : "text-secondary";
            const tagClass =
              skill.accent === "primary"
                ? "bg-primary/10 border-primary/30 text-primary"
                : "bg-secondary/10 border-secondary/30 text-secondary";
            return (
              <article
                key={skill.title}
                className='glass-panel glass-panel-hover rounded-lg p-6 md:p-8 flex flex-col'
              >
                <div className='flex justify-between items-start mb-6'>
                  <span
                    className={`material-symbols-outlined ${accentIcon} text-[36px] drop-shadow-[0_0_14px_rgba(0,219,233,0.4)]`}
                  >
                    {skill.icon}
                  </span>
                  <span className='font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] uppercase text-on-surface-variant px-2 py-1 rounded-full border border-outline-variant/40'>
                    /{skill.index}
                  </span>
                </div>
                <h3 className='font-[family-name:var(--font-headline)] text-xl md:text-2xl font-semibold mb-3'>
                  {skill.title}
                </h3>
                <p className='font-[family-name:var(--font-body)] text-[14px] leading-[1.7] text-on-surface-variant mb-6 flex-1'>
                  {skill.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-[family-name:var(--font-mono)] text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full border ${tagClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
