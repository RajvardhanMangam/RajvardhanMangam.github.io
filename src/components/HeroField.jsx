import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// A slowly-breathing wireframe terrain, built from a displaced plane.
// Reads as topography / a scanned landscape — tying back to the
// remote-sensing and geospatial work in the projects below.
function TerrainField({ mouse }) {
  const meshRef = useRef();
  const materialRef = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(14, 9, 90, 60);
    return geo;
  }, []);

  const basePositions = useMemo(() => {
    return geometry.attributes.position.array.slice();
  }, [geometry]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const x = basePositions[ix];
      const y = basePositions[ix + 1];
      const wave =
        Math.sin(x * 0.55 + t * 0.35) * 0.32 +
        Math.cos(y * 0.5 + t * 0.28) * 0.32 +
        Math.sin((x + y) * 0.3 + t * 0.2) * 0.22;
      pos.setZ(i, wave);
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();

    if (meshRef.current) {
      meshRef.current.rotation.x = -1.05 + mouse.current.y * 0.12;
      meshRef.current.rotation.z = mouse.current.x * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -0.6, 0]}>
      <meshBasicMaterial
        ref={materialRef}
        color="#E8873A"
        wireframe
        transparent
        opacity={0.34}
      />
    </mesh>
  );
}

function DriftPoints({ mouse }) {
  const ref = useRef();
  const count = 420;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9 + 1.2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.015 + mouse.current.x * 0.05;
      ref.current.rotation.x = mouse.current.y * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#EDEAE1" size={0.014} transparent opacity={0.55} />
    </points>
  );
}

export default function HeroField() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    mouse.current = { x, y };
  };

  return (
    <div
      className="absolute inset-0"
      onPointerMove={handlePointerMove}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 1.6, 5.2], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <TerrainField mouse={mouse} />
        <DriftPoints mouse={mouse} />
      </Canvas>
    </div>
  );
}
