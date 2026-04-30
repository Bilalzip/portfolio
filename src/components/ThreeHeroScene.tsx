import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type Burst = {
  id: number;
  createdAt: number;
  origin: [number, number, number];
  seed: number;
};

const BURST_LIFETIME_MS = 900;

function WaveMesh({ onBurst }: { onBurst: (point: THREE.Vector3) => void }) {
  const mesh = useRef<THREE.Mesh>(null);
  const geo = useMemo(() => new THREE.PlaneGeometry(20, 20, 60, 60), []);

  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    const pos = geo.attributes.position;
    const t = clock.getElapsedTime() * 0.4;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const dist = Math.sqrt((x - pointer.x * 3) ** 2 + (y - pointer.y * 3) ** 2);
      pos.setZ(i, Math.sin(x * 0.5 + t) * 0.4 + Math.cos(y * 0.5 + t) * 0.4 + Math.sin(dist * 0.8 - t) * 0.15);
    }

    pos.needsUpdate = true;
  });

  const handleClick = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      onBurst(event.point.clone());
    },
    [onBurst],
  );

  return (
    <mesh
      ref={mesh}
      geometry={geo}
      rotation={[-Math.PI / 2.5, 0, 0]}
      position={[0, -2, -3]}
      onPointerDown={handleClick}
    >
      <meshBasicMaterial color="#00d4ff" wireframe opacity={0.08} transparent />
    </mesh>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 300;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#e08a3a" transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

function SparkBurst({ burst }: { burst: Burst }) {
  const group = useRef<THREE.Group>(null);
  const starCount = 14;

  const stars = useMemo(() => {
    const random = (index: number) => {
      const value = Math.sin((index + 1) * 97.13 + burst.seed * 0.001) * 43758.5453;
      return value - Math.floor(value);
    };

    return Array.from({ length: starCount }, (_, index) => {
      const angle = (Math.PI * 2 * index) / starCount + random(index) * 0.45;
      const spread = 0.7 + random(index + 19) * 1.5;
      const lift = 0.15 + random(index + 31) * 0.55;
      const size = 0.04 + random(index + 43) * 0.05;
      const tint = index % 3;

      return {
        position: new THREE.Vector3(Math.cos(angle) * spread, Math.sin(angle) * spread + lift, random(index + 57) * 0.5 - 0.25),
        color: tint === 0 ? "#f59e0b" : tint === 1 ? "#fef3c7" : "#38bdf8",
        size,
      };
    });
  }, [burst.seed]);

  useFrame(() => {
    if (!group.current) return;

    const age = (performance.now() - burst.createdAt) / BURST_LIFETIME_MS;
    const progress = Math.min(age, 1);
    const eased = 1 - (1 - progress) * (1 - progress);
    const scale = 0.18 + eased * 1.45;

    group.current.position.set(...burst.origin);
    group.current.scale.setScalar(scale);
    group.current.rotation.z += 0.02;

    group.current.children.forEach((child) => {
      const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      material.opacity = (1 - progress) * 0.95;
    });
  });

  return (
    <group ref={group}>
      {stars.map((star, index) => (
        <mesh key={`${burst.id}-${index}`} position={star.position}>
          <octahedronGeometry args={[star.size, 0]} />
          <meshBasicMaterial color={star.color} transparent opacity={0.95} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig() {
  const { camera } = useThree();

  useFrame(({ pointer }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.5, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.3 + 1, 0.02);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

const ThreeHeroScene = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const handleBurst = useCallback((point: THREE.Vector3) => {
    setBursts((current) => [
      ...current,
      {
        id: current.length ? current[current.length - 1].id + 1 : 1,
        createdAt: performance.now(),
        origin: [point.x, point.y, point.z],
        seed: Math.random() * 100000,
      },
    ]);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = performance.now();
      setBursts((current) => current.filter((burst) => now - burst.createdAt < BURST_LIFETIME_MS));
    }, 120);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 1, 6], fov: 60 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
        <WaveMesh onBurst={handleBurst} />
        <Particles />
        {bursts.map((burst) => (
          <SparkBurst key={burst.id} burst={burst} />
        ))}
        <CameraRig />
      </Canvas>
    </div>
  );
};

export default ThreeHeroScene;
