import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// ─── 3D Scene Components ────────────────────────────────────────────────────

function MineralSpiral({ velocity }) {
  const mainRef = useRef();
  const innerWireRef = useRef();
  const bgFormsRef = useRef();
  const rotation = useRef([0, 0, 0]);

  useFrame((state, delta) => {
    if (!mainRef.current) return;

    rotation.current[0] += velocity.current[0] * delta;
    rotation.current[1] += velocity.current[1] * delta;

    // Main spiral
    mainRef.current.rotation.x = rotation.current[0];
    mainRef.current.rotation.y = rotation.current[1];

    // Inner wire-mesh (rotates faster and opposite slightly)
    if (innerWireRef.current) {
      innerWireRef.current.rotation.x = -rotation.current[0] * 1.5;
      innerWireRef.current.rotation.y = rotation.current[1] * 1.8;
    }

    // Background floating forms
    if (bgFormsRef.current) {
      bgFormsRef.current.rotation.z += delta * 0.05;
      bgFormsRef.current.rotation.y -= delta * 0.03;
    }

    // Slow ambient rotation
    rotation.current[1] += delta * 0.08;

    // Inertia decay
    velocity.current[0] *= 0.93;
    velocity.current[1] *= 0.93;

    // Update caustics shader time uniform
    if (mainRef.current.userData.shader) {
      mainRef.current.userData.shader.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <group>
      {/* Background abstract mineral forms */}
      <mesh ref={bgFormsRef} position={[0, 0, -4]} scale={3}>
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#CFC2B1"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>

      {/* Main spiral — Patinated Bronze/Brass */}
      <mesh ref={mainRef}>
        <torusKnotGeometry args={[1, 0.38, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#B79A6A"
          metalness={0.8}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={0.2}
          onBeforeCompile={(shader) => {
            shader.uniforms.uTime = { value: 0 };
            shader.fragmentShader = shader.fragmentShader.replace(
              '#include <common>',
              `#include <common>\nuniform float uTime;`
            );
            shader.fragmentShader = shader.fragmentShader.replace(
              '#include <color_fragment>',
              `
              float dotNV = dot(normalize(vNormal), normalize(vViewPosition));
              float rim = smoothstep(0.1, 0.9, dotNV);

              // Patina noise effect
              float patina = sin(vNormal.x * 12.0 + uTime * 0.5) * cos(vNormal.y * 12.0) * 0.15;
              
              // Dark warm bronze to bright gold/sand
              vec3 darkBronze = vec3(0.25, 0.18, 0.12);
              vec3 brightBrass = vec3(0.72, 0.60, 0.42);
              
              diffuseColor.rgb = mix(darkBronze, brightBrass, rim + patina);
              #include <color_fragment>
              `
            );
            mainRef.current.userData.shader = shader;
          }}
        />
      </mesh>

      {/* Inner fine wire-mesh */}
      <mesh ref={innerWireRef} scale={0.9}>
        <torusKnotGeometry args={[1, 0.15, 64, 16, 2, 5]} />
        <meshStandardMaterial
          color="#E7DFD2"
          wireframe
          transparent
          opacity={0.15}
          emissive="#B79A6A"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function Scene({ velocity }) {
  return (
    <>
      {/* Background color removed; relying on global App wrapper */}

      {/* Warm, rich lighting */}
      <ambientLight intensity={0.4} />
      <spotLight
        position={[8, 8, 8]}
        angle={0.25}
        penumbra={1}
        intensity={1.8}
        color="#E7DFD2"
      />
      <pointLight position={[-8, -8, -8]} intensity={1} color="#A79E93" />
      <pointLight position={[0, 4, 4]} intensity={2.5} color="#B79A6A" distance={15} />

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
        <MineralSpiral velocity={velocity} />
      </Float>

      {/* Warm ambient particles */}
      <Sparkles
        count={60}
        scale={10}
        size={2}
        speed={0.1}
        opacity={0.3}
        color="#B79A6A"
      />

      <Environment preset="city" />
    </>
  );
}

// ─── Split headline with per-letter hover ───────────────────────────────────

const SplitText = ({ text }) => {
  return (
    <div className="flex flex-wrap justify-start overflow-visible">
      {text.split('').map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: 0 }}
          whileHover={{
            y: -8,
            transition: { type: 'spring', stiffness: 400, damping: 14 },
          }}
          className="inline-block cursor-default whitespace-pre select-none"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

// ─── Hero ───────────────────────────────────────────────────────────────────

export default function Hero() {
  const velocity = useRef([0, 0]);
  const lastPointerPos = useRef([0, 0]);
  const isDragging = useRef(false);

  const onPointerDown = (e) => {
    isDragging.current = true;
    lastPointerPos.current = [e.clientX, e.clientY];
  };
  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastPointerPos.current[0];
    const dy = e.clientY - lastPointerPos.current[1];
    velocity.current[1] += dx * 0.012;
    velocity.current[0] += dy * 0.012;
    lastPointerPos.current = [e.clientX, e.clientY];
  };
  const onPointerUp = () => { isDragging.current = false; };

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-brand-bg select-none flex"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* ── Two-column editorial layout ── */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row h-full relative z-10">
        
        {/* LEFT: text block — approx 45% width */}
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-8 md:px-16 pointer-events-auto relative z-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="text-brand-accent font-sans uppercase tracking-[0.35em] text-sm mb-7"
          >
            Автор визуальных концепций среды
          </motion.p>

          {/* Headline — editorial size, one line on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.4rem,4vw,5rem)] font-serif font-normal text-brand-primary leading-[1.05] mb-8"
          >
            <SplitText text="TATYANA" />
            <SplitText text="VESENNYA" />
          </motion.div>

          {/* Body text — large, high contrast */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.9 }}
            className="text-xl text-brand-primary font-serif font-light italic leading-snug mb-6"
          >
            Пространства, которые начинают ощущаться ещё до реализации
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.2 }}
            className="text-base text-brand-mineral font-sans font-light leading-relaxed max-w-md"
          >
            Визуальные концепции для архитектуры, ландшафта, событий и private-пространств.
            От атмосферы и идеи — до сильной проектной подачи.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 2.0 }}
            className="flex items-center gap-4 mt-14"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent/60 to-transparent" />
            <span className="text-[10px] text-brand-accent uppercase tracking-[0.35em] opacity-50">
              Scroll
            </span>
          </motion.div>
        </div>

        {/* RIGHT: 3D canvas — approx 55% width */}
        <div className="w-full md:w-[55%] h-full relative z-10 cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
            <Scene velocity={velocity} />
          </Canvas>
        </div>

      </div>
    </section>
  );
}
