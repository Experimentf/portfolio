"use client";

import { Canvas } from "@react-three/fiber";
import { ParticleField } from "@/components/three/ParticleField";

export const Scene = () => {
  return (
    <Canvas
      className='w-full h-full'
      camera={{ position: [0, 0, 1000], fov: 70, near: 0.1, far: 5000 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <fog attach='fog' args={["#131313", 1, 3500]} />
      <ambientLight intensity={0.4} />
      <ParticleField count={2500} radius={1800} />
    </Canvas>
  );
};
