"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingPolygons() {
  const meshRef = useRef<THREE.Group>(null);
  const count = 50;

  const polygons = useMemo(() => {
    const shapes: {
      position: [number, number, number];
      rotation: [number, number, number];
      scale: number;
      speed: number;
      geometry: "octahedron" | "icosahedron" | "tetrahedron" | "dodecahedron";
    }[] = [];

    const geometries: Array<"octahedron" | "icosahedron" | "tetrahedron" | "dodecahedron"> = [
      "octahedron",
      "icosahedron",
      "tetrahedron",
      "dodecahedron",
    ];

    for (let i = 0; i < count; i++) {
      shapes.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15 - 5,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: Math.random() * 0.3 + 0.08,
        speed: Math.random() * 0.2 + 0.05,
        geometry: geometries[Math.floor(Math.random() * geometries.length)],
      });
    }
    return shapes;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <group ref={meshRef}>
      {polygons.map((poly, i) => (
        <FloatingShape key={i} {...poly} index={i} />
      ))}
    </group>
  );
}

function FloatingShape({
  position,
  rotation,
  scale,
  speed,
  geometry,
  index,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  geometry: "octahedron" | "icosahedron" | "tetrahedron" | "dodecahedron";
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime;
      meshRef.current.position.y =
        position[1] + Math.sin(t * speed + index) * 0.4;
      meshRef.current.rotation.x = rotation[0] + t * speed * 0.4;
      meshRef.current.rotation.z = rotation[2] + t * speed * 0.2;
    }
  });

  const GeometryComponent = {
    octahedron: <octahedronGeometry args={[1, 0]} />,
    icosahedron: <icosahedronGeometry args={[1, 0]} />,
    tetrahedron: <tetrahedronGeometry args={[1, 0]} />,
    dodecahedron: <dodecahedronGeometry args={[1, 0]} />,
  }[geometry];

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {GeometryComponent}
      <meshStandardMaterial
        color="#00ff88"
        transparent
        opacity={0.15}
        wireframe
        emissive="#00ff88"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function GridPlane() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = (state.clock.elapsedTime * 0.2) % 2;
    }
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[50, 50, 25, 25]} />
      <meshBasicMaterial
        color="#00ff88"
        wireframe
        transparent
        opacity={0.04}
      />
    </mesh>
  );
}

function DataStreams() {
  const ref = useRef<THREE.Group>(null);
  const count = 15;

  const streams = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      x: (Math.random() - 0.5) * 20,
      z: (Math.random() - 0.5) * 20 - 3,
      speed: Math.random() * 0.5 + 0.2,
      height: Math.random() * 8 + 4,
    }));
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.children.forEach((child, i) => {
        const stream = streams[i];
        if (child instanceof THREE.Mesh) {
          const t = state.clock.elapsedTime * stream.speed;
          child.position.y = ((t * 2) % (stream.height + 4)) - 2;
          if (child.material instanceof THREE.MeshBasicMaterial) {
            child.material.opacity = 0.1 + Math.sin(t * 2) * 0.05;
          }
        }
      });
    }
  });

  return (
    <group ref={ref}>
      {streams.map((stream, i) => (
        <mesh key={i} position={[stream.x, 0, stream.z]}>
          <boxGeometry args={[0.02, stream.height, 0.02]} />
          <meshBasicMaterial color="#00ff88" transparent opacity={0.1} />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ff88" />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ff00ff" />
        <FloatingPolygons />
        <GridPlane />
        <DataStreams />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/85 to-[#050508]" />
    </div>
  );
}
