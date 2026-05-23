type Project = {
  index: string;
  year: string;
  title: string;
  category: string;
  description: string;
  accent: "primary" | "secondary";
  icon: string;
};

const projects: Project[] = [
  {
    index: "01",
    year: "2024",
    title: "Nexus Core Platform",
    category: "Systems Architecture",
    description:
      "Redefining distributed state management through a monolithic UI structure. Nexus introduced a novel approach to client-side data orchestration within highly complex enterprise dashboards.",
    accent: "primary",
    icon: "hub",
  },
  {
    index: "02",
    year: "2024",
    title: "Prism Diagnostics",
    category: "WebGL Interactions",
    description:
      "Real-time spectral visualizations rendered directly in the browser using custom GLSL shaders — diagnostics that feel physical.",
    accent: "secondary",
    icon: "stacked_line_chart",
  },
  {
    index: "03",
    year: "2023",
    title: "Omni Tracker",
    category: "Data Visualization",
    description:
      "An adaptive analytics canvas: telemetry, geo-streams, and event timelines stitched into a single immersive operator console.",
    accent: "primary",
    icon: "radar",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
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

  return (
    <article
      className={`group relative overflow-hidden rounded-xl bg-surface-container-lowest/70 backdrop-blur-md border ${accentBorder} ${accentShadow} transition-all duration-500 hover:-translate-y-2`}
    >
      <div className='relative aspect-[16/10] w-full overflow-hidden'>
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
            // {project.index} — {project.year}
          </span>
        </div>
      </div>

      <div className='glass-panel p-6 md:p-7 border-0 rounded-none'>
        <div className='flex justify-between items-start gap-4'>
          <div>
            <span
              className={`inline-block font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] uppercase px-3 py-1 rounded-full ${
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
          </div>
          <button
            type='button'
            aria-label='Open project'
            className={`shrink-0 w-11 h-11 rounded-full border ${
              accent === "primary"
                ? "border-primary/40 text-primary hover:bg-primary/10"
                : "border-secondary/40 text-secondary hover:bg-secondary/10"
            } flex items-center justify-center transition-all duration-300 group-hover:rotate-[-45deg]`}
          >
            <span className='material-symbols-outlined text-[20px]'>
              arrow_forward
            </span>
          </button>
        </div>
        <p className='mt-4 font-[family-name:var(--font-body)] text-[15px] leading-[1.65] text-on-surface-variant'>
          {project.description}
        </p>
      </div>
    </article>
  );
};

export const ProjectsSection = () => {
  return (
    <section
      id='projects'
      className='relative w-full py-32 md:py-40 scroll-mt-20'
    >
      <div className='relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]'>
        <header className='max-w-3xl mb-20 md:mb-28'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='h-px w-10 bg-primary' />
            <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase text-primary'>
              Curated Works
            </span>
          </div>
          <h2 className='font-[family-name:var(--font-headline)] text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] mb-6'>
            Engineering /{" "}
            <span className='text-surface-variant'>The Void.</span>
          </h2>
          <p className='font-[family-name:var(--font-body)] text-[16px] leading-[1.65] text-on-surface-variant'>
            A selection of high-fidelity digital experiences and technical
            explorations. Prioritizing architectural integrity, immersive depth,
            and experimental interactions.
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-y-28 md:gap-x-6'>
          <div className='md:col-span-8'>
            <ProjectCard project={projects[0]} />
          </div>
          <div className='md:col-span-5 md:col-start-8 md:-mt-16'>
            <ProjectCard project={projects[1]} />
          </div>
          <div className='md:col-span-7 md:col-start-1'>
            <ProjectCard project={projects[2]} />
          </div>
        </div>

        <div className='mt-24 flex justify-center'>
          <button
            type='button'
            className='relative inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase px-8 py-4 rounded-full bg-primary text-on-primary btn-primary-glow transition-all duration-300 active:scale-95'
          >
            <span
              aria-hidden
              className='absolute inset-0 rounded-full bg-primary blur-2xl opacity-40'
            />
            <span className='relative flex items-center gap-3'>
              View Archive
              <span className='material-symbols-outlined text-[18px]'>
                arrow_forward
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
