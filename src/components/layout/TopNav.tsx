"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "expertise", label: "Expertise" },
  { id: "contact", label: "Contact" },
] as const;

export const TopNav = () => {
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const sectionIds = ["home", ...links.map((l) => l.id)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-[0px_0px_20px_rgba(0,219,233,0.08)]'>
      <div className='flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] h-20 max-w-[var(--container-max)] mx-auto'>
        <a
          href='#home'
          aria-label='Divyansh Falodiya — Home'
          className='group inline-flex items-center gap-3 text-primary transition-transform duration-200 active:scale-95'
        >
          <span className='relative inline-flex items-center justify-center'>
            <span
              aria-hidden
              className='absolute inset-0 rounded-full bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            />
            <Logo
              size={28}
              className='relative drop-shadow-[0_0_10px_rgba(0,219,233,0.55)] group-hover:drop-shadow-[0_0_16px_rgba(0,219,233,0.9)] transition-all duration-300'
            />
          </span>
          <span className='hidden sm:inline font-[family-name:var(--font-mono)] text-[11px] tracking-[0.32em] uppercase text-on-surface-variant group-hover:text-primary transition-colors duration-300'>
            Divyansh<span className='text-primary'> · </span>Falodiya
          </span>
        </a>

        <ul className='hidden md:flex items-center gap-[var(--spacing-gutter)]'>
          {links.map(({ id, label }) => {
            const active = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`font-[family-name:var(--font-mono)] text-[12px] tracking-[0.1em] uppercase px-2 py-1 rounded transition-all duration-300 ${
                    active
                      ? "text-primary font-bold border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center gap-2'>
          <a
            href='https://drive.google.com/file/d/1B0EwlzfWRb_jDUI_jxVY0mviMlXSo3EC/view?usp=drive_link'
            target='_blank'
            rel='noreferrer noopener'
            className='hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-[family-name:var(--font-mono)] text-[12px] tracking-[0.1em] uppercase px-6 py-2 rounded btn-primary-glow transition-all duration-300 active:scale-95'
          >
            Get CV
          </a>
          <a
            href='mailto:divyanshfofficial@gmail.com'
            aria-label='Email Divyansh'
            className='flex items-center justify-center p-2 text-primary border border-primary/30 rounded hover:bg-primary/10 transition-all duration-300 active:scale-95'
          >
            <span className='material-symbols-outlined text-[20px]'>
              alternate_email
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};
