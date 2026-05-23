import { getTranslations } from "next-intl/server";

type ProjectLink = {
  label: string;
  href: string;
  icon: string;
};

type Project = {
  index: string;
  year: string;
  title: string;
  category: string;
  description: string;
  accent: "primary" | "secondary";
  icon: string;
  links: ProjectLink[];
};

const ProjectCard = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => {
  const accent = project.accent;
  const accentBg =
    accent === "primary" ? "from-primary/30" : "from-secondary/30";
  const accentBorder =
    accent === "primary"
      ? "border-primary/20 hover:border-primary/60"
      : "border-secondary/20 hover:border-secondary/60";
  const accentShadow =
    accent === "primary"
      ? "hover:shadow-[0_0_60px_-20px_rgba(0,219,233,0.5)]"
      : "hover:shadow-[0_0_60px_-20px_rgba(235,178,255,0.5)]";
  const accentIcon = accent === "primary" ? "text-primary" : "text-secondary";
  const alignment = project.accent === "primary" ? "md:mr-auto" : "md:ml-auto";

  const cardClass = `group md:max-w-xl relative flex flex-col h-full overflow-hidden rounded-xl bg-surface-container-lowest/70 backdrop-blur-md border ${accentBorder} ${accentShadow} transition-all duration-500 hover:-translate-y-2 ${alignment} ${className ?? ""}`;

  const chipBase =
    accent === "primary"
      ? "border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60"
      : "border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/60";

  return (
    <article className={cardClass}>
      <div className='relative aspect-[16/10] w-full overflow-hidden shrink-0'>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentBg} via-surface-container-low/40 to-surface-container-lowest`}
        />
        <div className='absolute inset-0 bg-void-grid opacity-30' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <span
            className={`material-symbols-outlined ${accentIcon} text-[120px] opacity-70 drop-shadow-[0_0_30px_rgba(0,219,233,0.4)] group-hover:scale-110 transition-transform duration-500`}
          >
            {project.icon}
          </span>
        </div>
        <div className='absolute top-4 left-4 flex items-center gap-2'>
          <span
            className={`font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] uppercase ${accentIcon}`}
          >
            {"//"} {project.index} — {project.year}
          </span>
        </div>
      </div>

      <div className='glass-panel p-6 md:p-7 border-0 rounded-none flex-1 flex flex-col'>
        <span
          className={`inline-block self-start font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] uppercase px-3 py-1 rounded-full ${
            accent === "primary"
              ? "bg-primary/10 border border-primary/30 text-primary"
              : "bg-secondary/10 border border-secondary/30 text-secondary"
          } mb-3`}
        >
          {project.category}
        </span>
        <h3 className='font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-semibold tracking-tight'>
          {project.title}
        </h3>
        <p className='mt-4 font-[family-name:var(--font-body)] text-[15px] leading-[1.65] text-on-surface-variant flex-1'>
          {project.description}
        </p>

        <div className='mt-6 flex flex-wrap gap-2'>
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noreferrer noopener'
              className={`inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border bg-surface-container-lowest/40 backdrop-blur-sm transition-all duration-300 active:scale-95 ${chipBase}`}
            >
              <span className='material-symbols-outlined text-[14px]'>
                {link.icon}
              </span>
              {link.label}
              <span className='material-symbols-outlined text-[14px] opacity-60'>
                arrow_outward
              </span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export const ProjectsSection = async () => {
  const t = await getTranslations("projects");
  const projects = t.raw("items") as Project[];
  const titleStart = t("titleStart");
  const titleHighlight = t("titleHighlight");

  return (
    <section
      id='projects'
      className='relative w-full py-32 md:py-40 scroll-mt-20'
    >
      <div className='relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]'>
        <header data-animate className='max-w-3xl mb-20 md:mb-28'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='h-px w-10 bg-primary' />
            <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase text-primary'>
              {t("kicker")}
            </span>
          </div>
          <h2 className='font-[family-name:var(--font-headline)] text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] mb-6'>
            {titleStart}{" "}
            <span className='text-surface-variant'>{titleHighlight}</span>
          </h2>
          <p className='font-[family-name:var(--font-body)] text-[16px] leading-[1.65] text-on-surface-variant'>
            {t("description")}
          </p>
        </header>

        <div
          data-animate-children
          className='flex flex-col gap-6 md:gap-8 items-stretch'
        >
          {projects.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>

        <div data-animate className='mt-24 flex justify-center'>
          <a
            href='https://github.com/divyanshf'
            target='_blank'
            rel='noreferrer noopener'
            className='relative inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase px-8 py-4 rounded-full bg-primary text-on-primary btn-primary-glow transition-all duration-300 active:scale-95'
          >
            <span
              aria-hidden
              className='absolute inset-0 rounded-full bg-primary blur-2xl opacity-40'
            />
            <span className='relative flex items-center gap-3'>
              {t("moreOnGithub")}
              <span className='material-symbols-outlined text-[18px]'>
                arrow_outward
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
