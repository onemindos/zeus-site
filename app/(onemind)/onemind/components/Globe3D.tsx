"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Particle field — represents sensor/data points on the fabric
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#8B0000"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

// Arc lines — represents data connections between nodes
function ArcLines() {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions: number[] = [];
    const arcCount = 40;

    for (let i = 0; i < arcCount; i++) {
      const phi1 = Math.random() * Math.PI;
      const theta1 = Math.random() * Math.PI * 2;
      const phi2 = Math.random() * Math.PI;
      const theta2 = Math.random() * Math.PI * 2;
      const r = 2.05;

      const x1 = r * Math.sin(phi1) * Math.cos(theta1);
      const y1 = r * Math.cos(phi1);
      const z1 = r * Math.sin(phi1) * Math.sin(theta1);

      const x2 = r * Math.sin(phi2) * Math.cos(theta2);
      const y2 = r * Math.cos(phi2);
      const z2 = r * Math.sin(phi2) * Math.sin(theta2);

      // Arc via midpoint
      const segments = 20;
      for (let j = 0; j < segments; j++) {
        const t1 = j / segments;
        const t2 = (j + 1) / segments;
        const mid = 1.3;

        positions.push(
          THREE.MathUtils.lerp(x1, x2, t1) * (1 + mid * Math.sin(Math.PI * t1) * 0.2),
          THREE.MathUtils.lerp(y1, y2, t1) * (1 + mid * Math.sin(Math.PI * t1) * 0.2),
          THREE.MathUtils.lerp(z1, z2, t1) * (1 + mid * Math.sin(Math.PI * t1) * 0.2),
          THREE.MathUtils.lerp(x1, x2, t2) * (1 + mid * Math.sin(Math.PI * t2) * 0.2),
          THREE.MathUtils.lerp(y1, y2, t2) * (1 + mid * Math.sin(Math.PI * t2) * 0.2),
          THREE.MathUtils.lerp(z1, z2, t2) * (1 + mid * Math.sin(Math.PI * t2) * 0.2)
        );
      }
    }

    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.06;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#8B0000" transparent opacity={0.3} />
    </lineSegments>
  );
}

// The globe itself
function Globe() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08;
  });

  return (
    <mesh ref={ref}>
      {/* PLACEHOLDER_DRONE_MODEL: Replace this sphere with a globe texture */}
      {/* Add: import { useTexture } from "@react-three/drei" */}
      {/* const texture = useTexture("/img/earth-dark.jpg") */}
      {/* Then use <meshStandardMaterial map={texture} /> */}
      <sphereGeometry args={[2, 64, 64]} />
      <MeshDistortMaterial
        color="#0a0c0e"
        wireframe={false}
        distort={0.08}
        speed={0.5}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}

// Wireframe grid overlay
function GlobeWireframe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.05;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2.02, 32, 32]} />
      <meshBasicMaterial color="#8B0000" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

// Orbit ring — represents satellite/drone orbit path
function OrbitRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  const dotRef = useRef<THREE.Mesh>(null);
  const angle = useRef(0);

  useFrame((_, delta) => {
    angle.current += delta * 0.5;
    if (dotRef.current) {
      dotRef.current.position.x = Math.cos(angle.current) * 2.6;
      dotRef.current.position.z = Math.sin(angle.current) * 2.6;
      dotRef.current.position.y = Math.sin(angle.current * 0.3) * 0.4;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + 0.3;
    }
  });

  return (
    <>
      <mesh ref={ringRef}>
        <torusGeometry args={[2.6, 0.004, 8, 128]} />
        <meshBasicMaterial color="#b91c1c" transparent opacity={0.5} />
      </mesh>
      {/* PLACEHOLDER_DRONE_GLB: Replace this box with drone.glb model */}
      {/* Use: import { useGLTF } from "@react-three/drei" */}
      {/* const { scene } = useGLTF("/models/drone.glb") */}
      {/* Then: <primitive ref={dotRef} object={scene} scale={0.1} /> */}
      <mesh ref={dotRef}>
        <boxGeometry args={[0.08, 0.02, 0.08]} />
        <meshBasicMaterial color="#ff2222" />
      </mesh>
    </>
  );
}

export default function Globe3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#8B0000" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffffff" />

        <Globe />
        <GlobeWireframe />
        <ParticleField />
        <ArcLines />
        <OrbitRing />
      </Canvas>
    </div>
  );
}
