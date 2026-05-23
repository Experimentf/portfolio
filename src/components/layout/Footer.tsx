import { Logo } from "./Logo";

const socials = [
  { label: "GitHub", href: "https://github.com/divyanshf" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/divyanshf/" },
  { label: "LeetCode", href: "https://leetcode.com/divyanshf" },
  { label: "Email", href: "mailto:divyanshfofficial@gmail.com" },
] as const;

export const Footer = () => {
  return (
    <footer className='w-full py-12 bg-background/25 backdrop-blur-md backdrop-saturate-150 border-t border-white/5 shadow-[0px_-1px_20px_rgba(0,219,233,0.05)] relative z-10'>
      <div className='max-w-[var(--container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='flex flex-col items-center md:items-start gap-3'>
          <div className='flex items-center gap-3'>
            <Logo
              size={24}
              className='text-primary drop-shadow-[0_0_10px_rgba(0,219,233,0.45)]'
            />
            <span className='font-[family-name:var(--font-mono)] text-[12px] text-primary tracking-[0.32em] uppercase opacity-90'>
              Divyansh · Falodiya
            </span>
          </div>
          <p className='font-[family-name:var(--font-body)] text-[11px] text-on-tertiary-container tracking-wider uppercase'>
            © {new Date().getFullYear()} Divyansh Falodiya. Designed in the
            Void.
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
