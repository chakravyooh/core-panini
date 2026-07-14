"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";

type SceneProps = {
  scrollProgress: MotionValue<number>;
  reduced: boolean;
};

const COLOR_FORM = 0x0a0a0b;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function Monolith({
  reduced,
  loadTRef,
  scrollProgress,
  pointerRef,
}: {
  reduced: boolean;
  loadTRef: React.MutableRefObject<number>;
  scrollProgress: MotionValue<number>;
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const rimRef = useRef<THREE.PointLight>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(0.8, 0);
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (reduced) return;
    loadTRef.current = Math.min(1, loadTRef.current + delta / 1.4);
    const t = loadTRef.current;
    const sp = scrollProgress.get();

    const loadReveal = easeOutCubic(Math.min(1, Math.max(0, (t - 0.15) / 0.6)));
    const scrollFade = 1 - Math.min(1, sp / 0.8);

    if (matRef.current) {
      matRef.current.opacity = loadReveal * scrollFade;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (Math.PI * 2 / 40);
      meshRef.current.rotation.x = Math.sin(performance.now() / 1000 * 0.15) * 0.08;
      meshRef.current.position.x = 0.1 + pointerRef.current.x * 0.15;
      meshRef.current.position.y = sp * 0.4 - pointerRef.current.y * 0.08;
      const s = 0.92 + 0.08 * easeOutCubic(Math.min(1, t / 0.8));
      meshRef.current.scale.setScalar(s);
      meshRef.current.visible = matRef.current ? matRef.current.opacity > 0.01 : true;
    }
    if (rimRef.current) {
      const angle = performance.now() / 1000 * (Math.PI * 2 / 20);
      rimRef.current.position.x = Math.cos(angle) * 3.5;
      rimRef.current.position.z = Math.sin(angle) * 3.5;
      rimRef.current.position.y = 1.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.08} />
      <directionalLight position={[2.5, 4, 3]} intensity={1.1} color={0xffffff} />
      <pointLight
        ref={rimRef}
        position={[3.5, 1.2, 0]}
        intensity={35}
        distance={14}
        decay={2}
        color={0xffffff}
      />
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          ref={matRef}
          color={COLOR_FORM}
          roughness={0.22}
          metalness={0.7}
          flatShading
          transparent
          opacity={reduced ? 1 : 0}
        />
      </mesh>
    </>
  );
}

function Scene({ scrollProgress, reduced }: SceneProps) {
  const loadTRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        pointerRef.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <Monolith
      reduced={reduced}
      loadTRef={loadTRef}
      scrollProgress={scrollProgress}
      pointerRef={pointerRef}
    />
  );
}

function hasWebGL() {
  if (typeof window === "undefined") return false;
  try {
    const c = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (c.getContext("webgl") || c.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function MonolithCanvas({
  scrollProgress,
  reduced,
}: {
  scrollProgress: MotionValue<number>;
  reduced: boolean;
}) {
  const supported = useMemo(() => hasWebGL(), []);

  if (!supported) return null;

  return (
    <Canvas
      aria-hidden
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5], fov: 38 }}
      performance={{ min: 0.5 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene scrollProgress={scrollProgress} reduced={reduced} />
    </Canvas>
  );
}
