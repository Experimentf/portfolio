"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/journey", label: "Journey" },
  { href: "/projects", label: "Projects" },
  { href: "/about#expertise", label: "Expertise" },
  { href: "/about#contact", label: "Contact" },
] as const;

export const TopNav = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    if (base === "/") return pathname === "/";
    return pathname.startsWith(base);
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-[0px_0px_20px_rgba(0,219,233,0.08)]'>
      <div className='flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] h-20 max-w-[var(--container-max)] mx-auto'>
        <Link
          href='/'
          className='font-[family-name:var(--font-headline)] text-[24px] md:text-[28px] font-bold text-primary tracking-tighter uppercase active:scale-95 transition-transform duration-200'
        >
          VOID.LABS
        </Link>

        <ul className='hidden md:flex items-center gap-[var(--spacing-gutter)]'>
          {links.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-[family-name:var(--font-mono)] text-[12px] tracking-[0.1em] uppercase px-2 py-1 rounded transition-all duration-300 ${
                    active
                      ? "text-primary font-bold border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center gap-2'>
          <button
            type='button'
            className='hidden md:flex items-center justify-center bg-primary text-on-primary font-[family-name:var(--font-mono)] text-[12px] tracking-[0.1em] uppercase px-6 py-2 rounded btn-primary-glow transition-all duration-300 active:scale-95'
          >
            Get CV
          </button>
          <button
            type='button'
            aria-label='Terminal'
            className='flex items-center justify-center p-2 text-primary border border-primary/30 rounded hover:bg-primary/10 transition-all duration-300 active:scale-95'
          >
            <span className='material-symbols-outlined text-[20px]'>
              terminal
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
