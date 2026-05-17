import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

function MiniSpiral() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.4, 64, 16, 2, 3]} />
      <meshStandardMaterial
        color="#B79A6A"
        metalness={0.8}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function Header() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 100], [0, 12]);
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-40 border-b border-brand-card/0 flex items-center justify-between px-6 md:px-12 py-4"
      style={{
        backdropFilter: useTransform(blur, b => `blur(${b}px)`),
        backgroundColor: useTransform(bgOpacity, o => `rgba(19, 17, 14, ${o})`), // updated to match #13110E
        borderBottomColor: useTransform(bgOpacity, o => `rgba(23, 19, 17, ${o})`)
      }}
    >
      <div className="w-12 h-12 cursor-pointer">
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.5]} shadows={false}>
          <ambientLight intensity={1.5} color="#E7DFD2" />
          <MiniSpiral />
        </Canvas>
      </div>
      <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-sans text-brand-secondary">
        <a href="#about" className="hover:text-brand-primary transition-colors">Обо мне</a>
        <a href="#portfolio" className="hover:text-brand-primary transition-colors">Проекты</a>
        <a href="#contact" className="hover:text-brand-primary transition-colors">Контакты</a>
      </nav>
    </motion.header>
  );
}
