import { getTranslations } from "next-intl/server";

export const HeroSection = async () => {
  const t = await getTranslations("hero");
  return (
    <section
      id='home'
      className='relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20 scroll-mt-20'
    >
      <div className='relative z-10 flex flex-col items-center text-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-5xl'>
        <div className='inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-md'>
          <span className='w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(235,178,255,0.8)]' />
          <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.18em] uppercase text-secondary'>
            {t("badge")}
          </span>
        </div>

        <h1 className='font-[family-name:var(--font-headline)] text-[44px] sm:text-[64px] md:text-[88px] font-bold leading-[0.98] tracking-[-0.045em] mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.06)]'>
          <span className='block'>DIVYANSH</span>
          <span className='block text-gradient-animate'>FALODIYA</span>
        </h1>

        <div className='flex items-center gap-3 mb-8'>
          <span className='h-px w-10 bg-primary/60' />
          <span className='font-[family-name:var(--font-mono)] text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-on-surface-variant'>
            {t("tagline")}
          </span>
          <span className='h-px w-10 bg-primary/60' />
        </div>

        <p className='font-[family-name:var(--font-body)] text-[16px] md:text-[17px] leading-[1.65] text-on-surface-variant max-w-2xl drop-shadow-md'>
          {t("bio")}
        </p>
      </div>

      <a
        href='#journey'
        aria-label={t("scrollLabel")}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-80 hover:opacity-100 transition-opacity duration-300'
      >
        <span className='font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] uppercase text-on-surface-variant'>
          {t("scrollLabel")}
        </span>
        <div className='w-6 h-10 border border-outline-variant rounded-full flex justify-center p-1 backdrop-blur-sm'>
          <div className='w-1 h-2 bg-primary rounded-full animate-scroll-dot shadow-[0_0_8px_rgba(0,219,233,0.9)]' />
        </div>
      </a>
    </section>
  );
};
