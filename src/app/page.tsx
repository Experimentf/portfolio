"use client";

import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <Canvas className='w-full h-full'>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color='hotpink' />
        </mesh>
      </Canvas>
    </div>
  );
}
