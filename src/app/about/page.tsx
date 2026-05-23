"use client";

import { useEffect, useRef } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";

type Skill = {
  index: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  accent: "primary" | "secondary";
};

const skills: Skill[] = [
  {
    index: "01",
    icon: "code_blocks",
    title: "Core Architecture",
    description:
      "Building robust, scalable foundations using modern frameworks and typed languages.",
    tags: ["React", "TypeScript", "Next.js"],
    accent: "primary",
  },
  {
    index: "02",
    icon: "view_in_ar",
    title: "Immersive Web",
    description:
      "Crafting 3D experiences and high-performance canvas rendering directly in the browser.",
    tags: ["Three.js", "WebGL", "GLSL"],
    accent: "secondary",
  },
  {
    index: "03",
    icon: "design_services",
    title: "Design Systems",
    description:
      "Bridging design and engineering with tokenized architectures and flawless UI translation.",
    tags: ["Figma", "Tailwind CSS", "Framer Motion"],
    accent: "primary",
  },
];

const networkNodes = [
  {
    icon: "public",
    label: "GitHub",
    caption: "// Repositories & Open Source",
    href: "https://github.com",
  },
  {
    icon: "work",
    label: "LinkedIn",
    caption: "// Professional History",
    href: "https://linkedin.com",
  },
  {
    icon: "alternate_email",
    label: "Twitter / X",
    caption: "// Thoughts & Micro-logs",
    href: "https://twitter.com",
  },
];

export default function AboutPage() {
  const parallaxA = useRef<HTMLDivElement>(null);
  const parallaxB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      if (parallaxA.current) {
        parallaxA.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (parallaxB.current) {
        parallaxB.current.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <TopNav />
      <main className='relative w-full overflow-hidden pt-32 pb-32'>
        {/* Ambient parallax glows */}
        <div
          aria-hidden
          className='pointer-events-none fixed inset-0 z-0 overflow-hidden'
        >
          <div
            ref={parallaxA}
            className='absolute top-[12%] left-[8%] w-[460px] h-[460px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen opacity-60 transition-transform duration-300 ease-out'
          />
          <div
            ref={parallaxB}
            className='absolute bottom-[8%] right-[6%] w-[520px] h-[520px] rounded-full bg-secondary/15 blur-[140px] mix-blend-screen opacity-55 transition-transform duration-300 ease-out'
          />
          <div className='absolute inset-0 bg-void-grid opacity-20' />
        </div>

        <div className='relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]'>
          {/* Identity & Origin */}
          <section className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center'>
            <div className='md:col-span-7'>
              <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase text-primary'>
                // Identity & Origin
              </span>
              <h1 className='font-[family-name:var(--font-headline)] text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] mt-4 mb-8'>
                Architecting the{" "}
                <span className='text-primary drop-shadow-[0_0_20px_rgba(0,219,233,0.45)]'>
                  Digital Void.
                </span>
              </h1>
              <div className='glass-panel rounded-lg p-6 md:p-8 space-y-4'>
                <p className='font-[family-name:var(--font-body)] text-[15px] leading-[1.7] text-on-surface-variant'>
                  I am a creative technologist specializing in immersive web
                  experiences. My work bridges the gap between raw data and
                  fluid, cinematic interactions. I believe the browser is an
                  infinite canvas, and through meticulous engineering, we can
                  craft spaces that feel tactile, luminous, and alive.
                </p>
                <p className='font-[family-name:var(--font-body)] text-[15px] leading-[1.7] text-on-surface-variant'>
                  Based in the intersection of design systems and WebGL, I
                  construct digital artifacts that prioritize performance
                  without compromising visual fidelity. The aesthetic is
                  deliberate: high contrast, absolute precision, and an embrace
                  of the vast, dark unknown.
                </p>
              </div>
            </div>
            <div className='md:col-span-5'>
              <div className='glass-panel relative aspect-square rounded-xl overflow-hidden flex items-center justify-center'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20' />
                <div className='absolute inset-0 bg-void-grid opacity-30' />
                <span className='material-symbols-outlined text-primary text-[180px] opacity-80 drop-shadow-[0_0_40px_rgba(0,219,233,0.5)]'>
                  psychology
                </span>
                <div className='absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-[family-name:var(--font-mono)] tracking-[0.22em] uppercase text-on-surface-variant'>
                  <span>// SIGNAL.0xA1</span>
                  <span>STATUS: ONLINE</span>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise */}
          <section id='expertise' className='mt-32 md:mt-40 scroll-mt-32'>
            <header className='flex items-center gap-4 mb-12'>
              <span className='material-symbols-outlined text-primary text-[32px] drop-shadow-[0_0_12px_rgba(0,219,233,0.6)]'>
                memory
              </span>
              <h2 className='font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-semibold tracking-[-0.02em]'>
                Technical{" "}
                <span className='text-gradient-animate'>Arsenal</span>
              </h2>
            </header>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {skills.map((skill) => {
                const accentIcon =
                  skill.accent === "primary"
                    ? "text-primary"
                    : "text-secondary";
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
          </section>

          {/* Contact */}
          <section id='contact' className='mt-32 md:mt-40 scroll-mt-32'>
            <header className='mb-12 text-center'>
              <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase text-secondary'>
                // Initiate Connection
              </span>
              <h2 className='font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-semibold tracking-[-0.02em] mt-3'>
                Open a <span className='text-gradient-animate'>Channel</span>
              </h2>
            </header>

            <div className='relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16'>
              {/* Vertical divider */}
              <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-secondary/0' />

              <form className='glass-panel rounded-lg p-6 md:p-8 flex flex-col gap-6'>
                <p className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.18em] uppercase text-primary'>
                  &gt; System ready. Awaiting input...
                </p>

                <label className='flex flex-col gap-2'>
                  <span className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-on-surface-variant'>
                    Identifier [Name]
                  </span>
                  <input
                    type='text'
                    placeholder='Enter your designation'
                    className='input-glow w-full'
                  />
                </label>

                <label className='flex flex-col gap-2'>
                  <span className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-on-surface-variant'>
                    Comm Link [Email]
                  </span>
                  <input
                    type='email'
                    placeholder='user@domain.com'
                    className='input-glow w-full'
                  />
                </label>

                <label className='flex flex-col gap-2'>
                  <span className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-on-surface-variant'>
                    Payload [Message]
                  </span>
                  <textarea
                    placeholder='Transmit your request here...'
                    rows={4}
                    className='input-glow w-full resize-none'
                  />
                </label>

                <button
                  type='button'
                  className='self-start mt-2 inline-flex items-center gap-2 bg-primary text-on-primary font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase px-7 py-3 rounded btn-primary-glow transition-all duration-300 active:scale-95'
                >
                  Transmit Data
                  <span className='material-symbols-outlined text-[18px]'>
                    send
                  </span>
                </button>
              </form>

              <div className='flex flex-col gap-8'>
                <div>
                  <h3 className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.22em] uppercase text-secondary mb-4'>
                    // Network Nodes
                  </h3>
                  <ul className='space-y-4'>
                    {networkNodes.map((node) => (
                      <li key={node.label}>
                        <a
                          href={node.href}
                          target='_blank'
                          rel='noreferrer noopener'
                          className='glass-panel glass-panel-hover group flex items-center gap-4 rounded-lg p-4 md:p-5'
                        >
                          <span className='material-symbols-outlined text-primary text-[28px]'>
                            {node.icon}
                          </span>
                          <span className='flex flex-col flex-1'>
                            <span className='font-[family-name:var(--font-headline)] text-lg font-semibold'>
                              {node.label}
                            </span>
                            <span className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.16em] uppercase text-on-surface-variant'>
                              {node.caption}
                            </span>
                          </span>
                          <span className='material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300'>
                            arrow_outward
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.22em] uppercase text-secondary mb-4'>
                    // Direct Coordinates
                  </h3>
                  <div className='glass-panel rounded-lg p-5 space-y-3'>
                    <div className='flex items-center gap-3'>
                      <span className='material-symbols-outlined text-primary text-[20px]'>
                        location_on
                      </span>
                      <span className='font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant'>
                        Sector 7G, The Grid (Remote Earth)
                      </span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='material-symbols-outlined text-primary text-[20px]'>
                        schedule
                      </span>
                      <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.14em] uppercase text-on-surface-variant'>
                        UTC -05:00 // Standard Operating Hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
