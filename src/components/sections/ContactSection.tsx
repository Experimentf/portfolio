"use client";

import { useCallback } from "react";
import { globeState } from "@/lib/globeState";

const networkNodes = [
  {
    icon: "public",
    label: "GitHub",
    caption: "// github.com/divyanshf",
    href: "https://github.com/divyanshf",
  },
  {
    icon: "work",
    label: "LinkedIn",
    caption: "// linkedin.com/in/divyanshf",
    href: "https://www.linkedin.com/in/divyanshf/",
  },
  {
    icon: "alternate_email",
    label: "Email",
    caption: "// divyanshfofficial@gmail.com",
    href: "mailto:divyanshfofficial@gmail.com",
  },
];

export const ContactSection = () => {
  // Ref-callback: registers / clears the banner element in the module-level
  // globeState store so GlobeSceneRenderer can read it inside useFrame.
  const setBannerRef = useCallback((el: HTMLDivElement | null) => {
    globeState.setBanner(el);
  }, []);

  return (
    <section
      id='contact'
      className='relative w-full pt-32 md:pt-40 pb-0 scroll-mt-20 overflow-hidden'
    >
      <div className='relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]'>
        <header className='mb-16 text-center max-w-3xl mx-auto'>
          <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.22em] uppercase text-secondary'>
            // Initiate Connection
          </span>
          <h2 className='font-[family-name:var(--font-headline)] text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-[-0.04em] mt-4 mb-6'>
            Open a <span className='text-gradient-animate'>Channel</span>
          </h2>
          <p className='font-[family-name:var(--font-body)] text-[16px] leading-[1.65] text-on-surface-variant'>
            Direct line for collaborations, commissions, or quiet conversations
            about the future of the web.
          </p>
        </header>
      </div>

      {/* Contact body + earth banner share one relative wrapper so the SVG
          connection line can span from the coords panel down to Tokyo on the
          globe in a single overlay. */}
      <div className='relative z-10'>
        <div className='max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]'>
          <div className='relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16'>
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
              <h3
                id='direct-coordinates'
                className='font-[family-name:var(--font-mono)] text-[11px] tracking-[0.22em] uppercase text-secondary mb-4'
              >
                // Direct Coordinates
              </h3>
              <div className='glass-panel rounded-lg p-5 space-y-3'>
                <div
                  id='coord-tokyo'
                  className='flex items-center gap-3 relative'
                >
                  <span className='material-symbols-outlined text-primary text-[20px]'>
                    location_on
                  </span>
                  <span className='font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant'>
                    Tokyo, Japan
                  </span>
                  {/* Outbound signal dot anchored on the Tokyo row */}
                  <span
                    aria-hidden
                    className='ml-auto inline-flex items-center justify-center w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,219,233,0.9)] animate-pulse'
                  />
                </div>
                <div className='flex items-center gap-3'>
                  <span className='material-symbols-outlined text-primary text-[20px]'>
                    schedule
                  </span>
                  <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.14em] uppercase text-on-surface-variant'>
                    JST +09:00 // Standard Operating Hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of max-width inner container — earth banner below escapes it */}
        </div>

        {/* Full-bleed earth horizon banner — this div is a layout spacer whose
            screen position is tracked by GlobeSceneRenderer inside the single
            shared canvas. The globe renders via scissor into the fixed canvas
            at this div's viewport rect; no second WebGL context is created. */}
        <div
          ref={setBannerRef}
          className='relative w-full h-[260px] sm:h-[340px] md:h-[440px]'
        >
          {/* Soft vignette so the bottom of the banner fades into the page */}
          <div
            aria-hidden
            className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-surface-container-lowest/40'
          />
        </div>
      </div>
    </section>
  );
};
