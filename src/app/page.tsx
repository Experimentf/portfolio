"use client";

import Link from "next/link";
import { Scene } from "./components/Scene";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className='relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20'>
        <div className='absolute inset-0 z-0'>
          <Scene />
        </div>
        <AmbientBackdrop />

        <div className='relative z-10 flex flex-col items-center text-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-4xl mt-12 md:mt-0'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-md'>
            <span className='w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(235,178,255,0.8)]' />
            <span className='font-[family-name:var(--font-mono)] text-[12px] tracking-[0.18em] uppercase text-secondary'>
              Early-Career Innovator
            </span>
          </div>

          <h1 className='font-[family-name:var(--font-headline)] text-[48px] md:text-[80px] font-bold leading-[1.05] tracking-[-0.04em] mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.06)]'>
            BUILDING IN
            <br />
            <span className='text-gradient-animate'>THE VOID</span>
          </h1>

          <p className='font-[family-name:var(--font-body)] text-[16px] leading-[1.6] text-on-surface-variant max-w-2xl mb-12 drop-shadow-md'>
            Bridging the gap between pure logic and immersive design. Crafting
            futuristic WebGL environments and digital artifacts that push the
            boundaries of spatial interaction and front-end architecture.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
            <Link
              href='/journey'
              className='bg-primary text-on-primary font-[family-name:var(--font-mono)] text-[12px] tracking-[0.18em] uppercase px-8 py-4 rounded btn-primary-glow transition-all duration-300 active:scale-95 flex items-center justify-center gap-2'
            >
              Enter Experience
              <span className='material-symbols-outlined text-[18px]'>
                arrow_forward
              </span>
            </Link>
            <Link
              href='/projects'
              className='bg-transparent border border-outline-variant text-on-background font-[family-name:var(--font-mono)] text-[12px] tracking-[0.18em] uppercase px-8 py-4 rounded hover:border-primary/50 hover:bg-primary/5 backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center justify-center gap-2'
            >
              View Matrix
              <span className='material-symbols-outlined text-[18px]'>
                grid_view
              </span>
            </Link>
          </div>
        </div>

        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-80 hover:opacity-100 transition-opacity duration-300'>
          <span className='font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] uppercase text-on-surface-variant'>
            Scroll to explore
          </span>
          <div className='w-6 h-10 border border-outline-variant rounded-full flex justify-center p-1 backdrop-blur-sm'>
            <div className='w-1 h-2 bg-primary rounded-full animate-scroll-dot shadow-[0_0_8px_rgba(0,219,233,0.9)]' />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
