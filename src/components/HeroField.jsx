import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Field() {
  const meshRef = useRef(null);
  const { positions, base, count } = useMemo(() => {
    const w = 46;
    const h = 30;
    const geo = new THREE.PlaneGeometry(26, 18, w, h);
    geo.rotateX(-Math.PI / 2.45);
    const pos = geo.attributes.position;
    const base = new Float32Array(pos.array.length);
    base.set(pos.array);
    return { positions: geo, base, count: pos.count };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = positions.attributes.position;
    for (let i = 0; i < count; i++) {
      const x = base[i * 3];
      const z = base[i * 3 + 2];
      const y =
        Math.sin(x * 0.35 + t * 0.6) * 0.55 +
        Math.cos(z * 0.4 + t * 0.45) * 0.55;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
    if (meshRef.current) meshRef.current.rotation.z = Math.sin(t * 0.05) * 0.02;
  });

  return (
    <mesh ref={meshRef} geometry={positions} position={[0, -2.4, -2]}>
      <meshBasicMaterial
        color="#3a3a40"
        wireframe
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

export default function HeroField() {
  return (
    <Canvas
      aria-hidden="true"
      className="!absolute inset-0"
      camera={{ position: [0, 3.4, 9], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Field />
    </Canvas>
  );
}
