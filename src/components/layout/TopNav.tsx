"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Logo } from "./Logo";

const LOCALES = [
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
] as const;

export const TopNav = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("home");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const links = [
    { id: "journey", label: t("links.journey") },
    { id: "projects", label: t("links.projects") },
    { id: "expertise", label: t("links.expertise") },
    { id: "contact", label: t("links.contact") },
  ] as const;

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
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langOpen]);

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-background/25 backdrop-blur-md backdrop-saturate-150 border-b border-white/5 shadow-[0px_0px_20px_rgba(0,219,233,0.08)]'>
      <div className='flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] h-20 max-w-[var(--container-max)] mx-auto'>
        <a
          href='#home'
          aria-label={t("homeAriaLabel")}
          className='group relative inline-flex items-center justify-center text-primary transition-transform duration-200 active:scale-95'
        >
          <span
            aria-hidden
            className='absolute inset-0 rounded-full bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          />
          <Logo
            size={28}
            className='relative drop-shadow-[0_0_10px_rgba(0,219,233,0.55)] group-hover:drop-shadow-[0_0_16px_rgba(0,219,233,0.9)] transition-all duration-300'
          />
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
          {/* Language picker */}
          <div ref={langRef} className='relative'>
            <button
              onClick={() => setLangOpen((o) => !o)}
              aria-label='Select language'
              aria-expanded={langOpen}
              className='inline-flex items-center justify-center w-9 h-9 rounded-full text-on-surface-variant hover:text-primary hover:bg-white/5 transition-all duration-300'
            >
              <span className='material-symbols-outlined text-[20px]'>translate</span>
            </button>

            {langOpen && (
              <div className='absolute right-0 top-full mt-2 w-36 glass-panel rounded-lg py-1 shadow-lg border border-white/10'>
                {LOCALES.map(({ code, label }) => {
                  const active = locale === code;
                  return (
                    <button
                      key={code}
                      onClick={() => {
                        router.replace(pathname, { locale: code });
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 font-[family-name:var(--font-mono)] text-[12px] tracking-[0.1em] uppercase transition-colors duration-200 ${
                        active
                          ? "text-primary"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                      }`}
                    >
                      {label}
                      {active && (
                        <span className='material-symbols-outlined text-[14px]'>check</span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <a
            href='https://drive.google.com/file/d/1B0EwlzfWRb_jDUI_jxVY0mviMlXSo3EC/view?usp=drive_link'
            target='_blank'
            rel='noreferrer noopener'
            className='hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-[family-name:var(--font-mono)] text-[12px] tracking-[0.1em] uppercase px-6 py-2 rounded btn-primary-glow transition-all duration-300 active:scale-95'
          >
            {t("resume")}
          </a>
        </div>
      </div>
    </nav>
  );
};
