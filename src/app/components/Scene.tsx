import { Canvas } from "@react-three/fiber";

export const Scene = () => {
  return (
    <Canvas className='w-full h-full'>
      <ambientLight intensity={100} />
      <mesh>
        <circleGeometry />
        <meshStandardMaterial color='white' />
      </mesh>
    </Canvas>
  );
};
