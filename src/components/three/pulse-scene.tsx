"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import type { Group, Mesh } from "three";

/**
 * An original, abstract 3D composition for Beacon Ridge's signature section —
 * NOT a literal hospital interior (unlike Demo's literal room). See
 * DESIGN.md "The 3D scene" for why: a literal OT/ward render risks reading
 * as clinically cold, or as an implied claim about real facilities this
 * fictional hospital doesn't have. A calm, orbiting composition of glass-like
 * spheres around a warm glowing core reads as "composed care, in motion"
 * without depicting anything clinical, while still demonstrating genuine
 * live/interactive, scroll-linked-camera 3D — the Premium tier's actual bar.
 *
 * The three orbit rings echo the three signature-experience beats
 * (Compassion / Expertise / Facilities) in the brand's harbor/mint/rose
 * accent colors.
 */

type Ring = {
  radius: number;
  count: number;
  size: number;
  color: string;
  speed: number;
  tilt: number;
};

const RINGS: Ring[] = [
  { radius: 2.3, count: 6, size: 0.22, color: "#5262C2", speed: 0.18, tilt: 0.15 },
  { radius: 3.2, count: 8, size: 0.16, color: "#2FAE94", speed: -0.12, tilt: -0.25 },
  { radius: 4.1, count: 10, size: 0.12, color: "#F2546B", speed: 0.09, tilt: 0.35 },
];

function OrbitRing({ ring, reducedMotion }: { ring: Ring; reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null);
  const spheres = useMemo(
    () =>
      Array.from({ length: ring.count }, (_, i) => {
        const angle = (i / ring.count) * Math.PI * 2;
        return [Math.cos(angle) * ring.radius, 0, Math.sin(angle) * ring.radius] as [
          number,
          number,
          number,
        ];
      }),
    [ring.count, ring.radius],
  );

  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y += ring.speed * delta;
  });

  return (
    <group ref={groupRef} rotation={[ring.tilt, 0, 0]}>
      {spheres.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[ring.size, 20, 20]} />
          <meshStandardMaterial
            color={ring.color}
            roughness={0.15}
            metalness={0.1}
            transparent
            opacity={0.85}
            emissive={ring.color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function Core({ reducedMotion }: { reducedMotion: boolean }) {
  const coreRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (reducedMotion || !coreRef.current || !glowRef.current) return;
    const t = clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 1.1) * 0.045;
    coreRef.current.scale.setScalar(pulse);
    glowRef.current.scale.setScalar(pulse * 1.35);
  });

  return (
    <group>
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.05, 24, 24]} />
        <meshBasicMaterial color="#8C7CF0" transparent opacity={0.16} depthWrite={false} />
      </mesh>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.85, 40, 40]} />
        <meshStandardMaterial
          color="#32408F"
          roughness={0.2}
          metalness={0.3}
          emissive="#5262C2"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}

type PulseSceneProps = { progress: number; reducedMotion: boolean };

export function PulseScene({ progress, reducedMotion }: PulseSceneProps) {
  const groupRef = useRef<Group>(null);
  const { camera } = useThree();

  useFrame((_, delta) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y += delta * 0.05;
    }

    // Scroll-linked camera dolly + gentle orbit, driven by GSAP ScrollTrigger
    // progress (0 -> 1) passed down from SceneCanvas. Holds still entirely
    // under reduced motion (progress stays at its last value, no animation
    // loop drives it there — see SceneCanvas).
    const targetY = 1.8 - progress * 1.1;
    const targetZ = 8.2 - progress * 2.4;
    const targetAngle = progress * Math.PI * 0.35;
    const targetX = Math.sin(targetAngle) * 1.6;

    camera.position.y += (targetY - camera.position.y) * 0.06;
    camera.position.z += (targetZ - camera.position.z) * 0.06;
    camera.position.x += (targetX - camera.position.x) * 0.06;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} />
      <pointLight position={[-4, -2, -3]} intensity={0.45} color="#8C7CF0" />
      <Core reducedMotion={reducedMotion} />
      {RINGS.map((ring, i) => (
        <OrbitRing key={ring.color + i} ring={ring} reducedMotion={reducedMotion} />
      ))}
      <Sparkles
        count={50}
        scale={9}
        size={2.2}
        speed={reducedMotion ? 0 : 0.2}
        color="#AFA3F7"
        opacity={0.45}
      />
    </group>
  );
}
