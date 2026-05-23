"use client";

import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { ParticleField } from "@/components/three/ParticleField";
import { Earth } from "@/components/three/Globe";
import { globeState } from "@/lib/globeState";

// Renders the globe into a secondary THREE.Scene using the same WebGL
// renderer/context as the particle canvas. A priority-1 useFrame takes over
// all rendering for that frame so we control the exact draw order:
//   1. clear canvas
//   2. render particle scene (full viewport)
//   3. if banner visible: clear that area, render globe scene with scissor
//
// Because any non-zero-priority useFrame subscriber tells R3F to skip its
// automatic render, we must call renderer.render(scene, camera) for particles
// ourselves — that's the gl.render(scene, camera) call below.
const GlobeSceneRenderer = () => {
  const { gl, scene, camera } = useThree();
  const [globeScene] = useState(() => new THREE.Scene());
  const globeCamera = useMemo(() => {
    const cam = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    cam.position.set(0, 0.4, 4.2);
    return cam;
  }, []);

  // Disable auto-clear so our manual clear+render sequence isn't overridden.
  useEffect(() => {
    gl.autoClear = false;
    return () => {
      gl.autoClear = true;
    };
  }, [gl]);

  useFrame(({ gl: renderer, scene: mainScene, camera: mainCam, size }) => {
    renderer.autoClear = false;

    // ── Step 1: clear the full canvas ──────────────────────────────────────
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, size.width, size.height);
    renderer.clear(true, true, false);

    // ── Step 2: render particle field ──────────────────────────────────────
    renderer.render(mainScene, mainCam);

    // ── Step 3: render globe when banner div is in the viewport ────────────
    const bannerEl = globeState.getBanner();
    if (!bannerEl) return;

    const rect = bannerEl.getBoundingClientRect();
    // Skip if completely outside viewport
    if (
      rect.width <= 0 ||
      rect.height <= 0 ||
      rect.bottom <= 0 ||
      rect.top >= size.height
    ) return;

    // Extend from the banner's visible top all the way to the viewport bottom so
    // the earth continues behind the footer's glass panel instead of cutting off
    // at the banner div's lower edge.
    const visTop = Math.max(0, rect.top);
    const extH = size.height - visTop;
    if (extH <= 0) return;

    globeCamera.aspect = rect.width / extH;
    globeCamera.updateProjectionMatrix();

    // x=rect.left, y=0 in THREE.js coords (Y=0 is canvas bottom = viewport bottom).
    // The extended region covers from banner-top to viewport-bottom.
    const x = rect.left;
    const y = 0;
    const w = rect.width;

    // Clear the extended area first so particles don't show through the
    // transparent sky/space portions of the globe.
    renderer.setScissorTest(true);
    renderer.setScissor(x, y, w, extH);
    renderer.clear(true, true, false);

    renderer.setViewport(x, y, w, extH);
    renderer.render(globeScene, globeCamera);

    // Restore full-canvas viewport and disable scissor for the next frame.
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, size.width, size.height);
  }, 1); // priority > 0 → R3F skips its auto-render; we do it above instead

  return createPortal(
    <Suspense fallback={null}>
      {/* Low ambient so the night side stays dark */}
      <ambientLight intensity={0.12} />
      {/* Main sun — warm, directly over the Japan-facing hemisphere */}
      <directionalLight position={[1, 3, 5]} intensity={3.5} color='#ffe6c8' />
      {/* Soft fill from above so land detail isn't totally crushed */}
      <directionalLight position={[-1, 4, 2]} intensity={0.6} color='#d0e8ff' />
      {/* Violet rim from behind for the atmosphere glow */}
      <pointLight position={[-4, -1, -4]} intensity={0.8} color='#ebb2ff' />
      <group position={[0, -0.9, 0]} scale={2.05}>
        <Earth />
      </group>
    </Suspense>,
    globeScene,
  );
};

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
      <GlobeSceneRenderer />
    </Canvas>
  );
};
