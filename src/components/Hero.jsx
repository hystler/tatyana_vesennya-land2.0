import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Lightformer, Environment, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';

// The rotating abstract geometry
function AbstractShape() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <torusKnotGeometry args={[1, 0.3, 256, 64]} />
        <meshPhysicalMaterial 
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

// Scene with lighting and background elements
function Scene() {
  return (
    <>
      <color attach="background" args={['#050505']} />
      
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#8A2BE2" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#DDA0DD" />
      
      {/* 3D Objects */}
      <AbstractShape />
      <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.3} color="#DDA0DD" />
      
      {/* Environment for reflections */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#8A2BE2" />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} color="#DDA0DD" />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} color="#8A2BE2" />
        </group>
      </Environment>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-deep-black">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-white mb-4">
            TATYANA <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-lilac">VESENNYA</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-xl text-gray-400 font-sans font-extralight tracking-[0.3em] md:tracking-[0.5em] uppercase mt-2"
          >
            3D VISUALIZER
          </motion.p>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-neon-purple/50 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
