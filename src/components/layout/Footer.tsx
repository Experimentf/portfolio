const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Email", href: "mailto:hello@void.labs" },
] as const;

export const Footer = () => {
  return (
    <footer className='w-full py-12 bg-surface-container-lowest border-t border-outline-variant/20 relative z-10'>
      <div className='max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <span className='font-[family-name:var(--font-mono)] text-[14px] text-primary tracking-widest opacity-80'>
            VOID.LABS
          </span>
          <p className='font-[family-name:var(--font-body)] text-[12px] text-on-tertiary-container tracking-wider uppercase'>
            © 2024 Designed in the Void. All rights reserved.
          </p>
        </div>
        <ul className='flex flex-wrap justify-center gap-6'>
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target='_blank'
                rel='noreferrer noopener'
                className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.1em] uppercase text-on-tertiary-container hover:text-primary transition-colors duration-300'
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
