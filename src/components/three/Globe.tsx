"use client";

import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const TOKYO_LAT = 35.6762;
const TOKYO_LON = 139.6503;

// THREE.js SphereGeometry UV convention:
//   U=0 (texture left) → -X  (180° date line)
//   U=0.5 (center)     → +X  (0° prime meridian)
//   +Z                 → 90°W, -Z → 90°E
// Formula: x = cos(lat)·cos(lon), y = sin(lat), z = -cos(lat)·sin(lon)
const latLonToVec3 = (
  lat: number,
  lon: number,
  radius = 1,
): THREE.Vector3 => {
  const phi = (lat * Math.PI) / 180;
  const theta = (lon * Math.PI) / 180;
  return new THREE.Vector3(
    radius * Math.cos(phi) * Math.cos(theta),
    radius * Math.sin(phi),
    -radius * Math.cos(phi) * Math.sin(theta),
  );
};

const TokyoMarkers = ({
  surfaceRadius,
}: {
  surfaceRadius: number;
}) => {
  const haloRef = useRef<THREE.Mesh>(null);
  const regionRingRef = useRef<THREE.Mesh>(null);
  const beamRef = useRef<THREE.Mesh>(null);

  const tokyoLift = useMemo(
    () => latLonToVec3(TOKYO_LAT, TOKYO_LON, surfaceRadius + 0.005),
    [surfaceRadius],
  );

  const surfaceQuaternion = useMemo(() => {
    const normal = tokyoLift.clone().normalize();
    return {
      ring: new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        normal,
      ),
      beam: new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        normal,
      ),
    };
  }, [tokyoLift]);


  useEffect(() => {
    if (regionRingRef.current) {
      regionRingRef.current.quaternion.copy(surfaceQuaternion.ring);
    }
    if (beamRef.current) {
      beamRef.current.quaternion.copy(surfaceQuaternion.beam);
    }
  }, [surfaceQuaternion]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (haloRef.current) {
      const pulse = 1 + Math.sin(t * 2.2) * 0.4;
      haloRef.current.scale.setScalar(pulse);
      const mat = haloRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.65 - Math.sin(t * 2.2) * 0.25;
    }
    if (regionRingRef.current) {
      const mat = regionRingRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.5 + Math.sin(t * 1.5) * 0.2;
    }
  });

  return (
    <>
      {/* Region highlight ring tangent to sphere surface around Japan */}
      <mesh ref={regionRingRef} position={tokyoLift}/>

      {/* Tokyo dot */}
      <mesh position={tokyoLift}>
        <sphereGeometry args={[0.018, 16, 16]} />
        <meshBasicMaterial color='#dbfcff' />
      </mesh>

      {/* Pulsing halo */}
      <mesh position={tokyoLift} ref={haloRef}>
        <sphereGeometry args={[0.035, 20, 20]} />
        <meshBasicMaterial
          color='#00dbe9'
          transparent
          opacity={0.65}
          depthWrite={false}
        />
      </mesh>
    </>
  );
};

export const Earth = () => {
  const groupRef = useRef<THREE.Group>(null);
  const earthMap = useTexture("/textures/earth-day.jpg");

  earthMap.colorSpace = THREE.SRGBColorSpace;
  earthMap.anisotropy = 8;

  // In THREE.js SphereGeometry, lon=0 is at +X (not +Z).
  // To bring Tokyo's longitude to face the camera (+Z) we need -(lon + 90)°.
  const baseRotY = -(TOKYO_LON + 90) * Math.PI / 180;
  // Negative X tilt brings Japan (lat ~36°N) up toward the visible top cap.
  const baseRotX = -((90 - TOKYO_LAT - 30) * Math.PI) / 180;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = baseRotY + Math.sin(t * 0.12) * 0.04;
      groupRef.current.rotation.x = baseRotX + Math.sin(t * 0.16) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 128, 128]} />
        <meshBasicMaterial map={earthMap} />
      </mesh>

      {/* Inner atmosphere */}
      <mesh scale={1.025}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color='#00dbe9'
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* Outer atmosphere */}
      <mesh scale={1.08}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color='#00dbe9'
          transparent
          opacity={0.04}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      <TokyoMarkers surfaceRadius={1} />
    </group>
  );
};
