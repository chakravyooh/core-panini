"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";

type SceneProps = {
  scrollProgress: MotionValue<number>;
  reduced: boolean;
  strandCount: number;
};

const COLORS = {
  strand: 0x161618,
  strandEdge: 0x3a3a3f,
  form: 0x0a0a0b,
  formLit: 0x4a4a52,
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function Strands({
  count,
  reduced,
  loadTRef,
  pointerRef,
}: {
  count: number;
  reduced: boolean;
  loadTRef: React.MutableRefObject<number>;
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  const tubes = useMemo(() => {
    const convergence = new THREE.Vector3(0, 0, 0);
    const items: { geometry: THREE.TubeGeometry; delay: number; phase: number }[] = [];
    const span = 2.4;
    for (let i = 0; i < count; i++) {
      const t = count === 1 ? 0.5 : i / (count - 1);
      const yStart = (t - 0.5) * span;
      const xStart = -4.2;
      const zStart = (Math.sin(i * 1.7) * 0.6);
      const start = new THREE.Vector3(xStart, yStart, zStart);
      const ctrl = new THREE.Vector3(-1.6, yStart * 0.3, Math.cos(i * 2.1) * 0.8);
      const curve = new THREE.QuadraticBezierCurve3(start, ctrl, convergence.clone());
      const geometry = new THREE.TubeGeometry(curve, 48, 0.012, 6, false);
      items.push({ geometry, delay: i * 0.06, phase: i * 1.3 });
    }
    return items;
  }, [count]);

  useFrame((_, delta) => {
    if (reduced) return;
    loadTRef.current = Math.min(1, loadTRef.current + delta / 1.4);
    const t = loadTRef.current;
    if (matRef.current) {
      const reveal = easeOutCubic(Math.min(1, t / 0.5));
      matRef.current.opacity = reveal;
    }
    if (groupRef.current) {
      const time = performance.now() / 1000;
      groupRef.current.children.forEach((child, i) => {
        const phase = tubes[i]?.phase ?? 0;
        child.position.y = Math.sin(time * 0.5 + phase) * 0.03;
        child.position.x = Math.cos(time * 0.4 + phase) * 0.02 + pointerRef.current.x * 0.15;
        child.position.z = Math.sin(time * 0.3 + phase) * 0.02 + pointerRef.current.y * 0.1;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {tubes.map((tube, i) => (
        <mesh key={i} geometry={tube.geometry}>
          <meshStandardMaterial
            ref={i === 0 ? matRef : undefined}
            color={COLORS.strand}
            roughness={0.35}
            metalness={0.7}
            transparent
            opacity={reduced ? 1 : 0}
          />
        </mesh>
      ))}
    </group>
  );
}

function Obelisk({
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
    const points: THREE.Vector2[] = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.42, 0.0),
      new THREE.Vector2(0.36, 0.18),
      new THREE.Vector2(0.34, 1.55),
      new THREE.Vector2(0.14, 1.82),
      new THREE.Vector2(0.0, 2.1),
    ];
    const geo = new THREE.LatheGeometry(points, 6);
    geo.translate(0, -1.05, 0);
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (reduced) return;
    loadTRef.current = Math.min(1, loadTRef.current + delta / 1.4);
    const t = loadTRef.current;
    const sp = scrollProgress.get();

    const loadReveal = easeOutCubic(Math.min(1, Math.max(0, (t - 0.2) / 0.6)));
    const scrollFade = 1 - Math.min(1, sp / 0.8);

    if (matRef.current) {
      matRef.current.opacity = loadReveal * scrollFade;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (Math.PI * 2 / 40);
      meshRef.current.rotation.y += sp * (Math.PI / 2) * 0.02;
      meshRef.current.position.x = pointerRef.current.x * 0.3;
      meshRef.current.position.y = sp * 0.8;
      const s = 0.92 + 0.08 * easeOutCubic(Math.min(1, t / 0.8));
      meshRef.current.scale.setScalar(s);
      meshRef.current.visible = matRef.current ? matRef.current.opacity > 0.01 : true;
    }
    if (rimRef.current) {
      const time = performance.now() / 1000;
      const angle = time * (Math.PI * 2 / 20);
      rimRef.current.position.x = Math.cos(angle) * 3;
      rimRef.current.position.z = Math.sin(angle) * 3;
      rimRef.current.position.y = 0.8;
    }
  });

  return (
    <>
      <ambientLight intensity={0.12} />
      <directionalLight position={[3, 5, 4]} intensity={1.4} color={0xffffff} />
      <pointLight
        ref={rimRef}
        position={[3, 0.8, 0]}
        intensity={40}
        distance={12}
        decay={2}
        color={0xffffff}
      />
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          ref={matRef}
          color={COLORS.form}
          roughness={0.25}
          metalness={0.65}
          flatShading
          transparent
          opacity={reduced ? 1 : 0}
        />
      </mesh>
    </>
  );
}

function Scene({ scrollProgress, reduced, strandCount }: SceneProps) {
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
    <group>
      <Strands count={strandCount} reduced={reduced} loadTRef={loadTRef} pointerRef={pointerRef} />
      <Obelisk
        reduced={reduced}
        loadTRef={loadTRef}
        scrollProgress={scrollProgress}
        pointerRef={pointerRef}
      />
    </group>
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

export default function ConvergenceCanvas({
  scrollProgress,
  reduced,
}: {
  scrollProgress: MotionValue<number>;
  reduced: boolean;
}) {
  const supported = useMemo(() => hasWebGL(), []);
  const strandCount = useMemo(
    () => (typeof window !== "undefined" && window.innerWidth < 768 ? 3 : 6),
    []
  );

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
      <Scene
        scrollProgress={scrollProgress}
        reduced={reduced}
        strandCount={strandCount}
      />
    </Canvas>
  );
}
