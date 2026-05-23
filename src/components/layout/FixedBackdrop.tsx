"use client";

import { Scene } from "@/components/three/Scene";

export const FixedBackdrop = () => {
  return (
    <div
      aria-hidden
      className='fixed inset-0 z-0 pointer-events-none overflow-hidden'
    >
      <Scene />
      <div className='absolute top-[14%] left-[8%] w-[460px] h-[460px] rounded-full bg-primary/15 blur-[120px] mix-blend-screen opacity-60' />
      <div className='absolute bottom-[8%] right-[10%] w-[520px] h-[520px] rounded-full bg-secondary/12 blur-[140px] mix-blend-screen opacity-50' />
      <div className='absolute inset-0 bg-void-grid opacity-15' />
    </div>
  );
};
