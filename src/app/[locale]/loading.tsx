import { Logo } from "@/components/layout/Logo";

export default function Loading() {
  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center'>
        <div className='relative flex items-center justify-center'>
          {/* Sonar rings */}
          <span
            aria-hidden
            className='animate-sonar absolute w-20 h-20 rounded-full border border-primary/50'
          />
          <span
            aria-hidden
            className='animate-sonar-delayed absolute w-20 h-20 rounded-full border border-primary/35'
          />

          {/* Brand logo */}
          <Logo
            size={72}
            className='animate-logo-breathe relative z-10 text-primary'
          />
        </div>
      </div>
    </>
  );
}
