import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Sand particle component
function SandParticles({ count = 2000, progress = 0 }) {
  const particlesRef = useRef();
  
  // Create particle positions
  const { positions, velocities, inTopChamber } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const inTopChamber = new Array(count).fill(true);
    
    // Initialize particles in top chamber
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.3 + Math.random() * 0.2;
      const height = 0.2 + Math.random() * 0.3;
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      
      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;
    }
    
    return { positions, velocities, inTopChamber };
  }, [count]);
  
  useFrame((state, delta) => {
    if (!particlesRef.current) return;
    
    const positions = particlesRef.current.geometry.attributes.position.array;
    
    // Update each particle
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      let x = positions[idx];
      let y = positions[idx + 1];
      let z = positions[idx + 2];
      
      // Top chamber bounds (conical shape)
      const topRadius = 0.5;
      const topHeight = 0.6;
      const topY = 0.3;
      const distFromCenter = Math.hypot(x, z);
      const relativeY = y - topY;
      
      // Check if particle is in top chamber
      const maxRadiusAtY = topRadius * (1 - relativeY / topHeight);
      const inTop = relativeY > 0 && relativeY < topHeight && distFromCenter < maxRadiusAtY;
      
      if (inTop && inTopChamber[i]) {
        // Particle is in top chamber - check if it should fall through neck
        const neckY = 0.05;
        const neckRadius = 0.03;
        
        if (y < neckY && distFromCenter < neckRadius) {
          // Particle passes through neck
          inTopChamber[i] = false;
          velocities[i * 3 + 1] = -0.5; // Start falling
        } else if (y > neckY) {
          // Particle moves down in top chamber
          velocities[i * 3 + 1] -= delta * 0.3; // Gravity
        }
      } else if (!inTopChamber[i]) {
        // Particle is falling or in bottom chamber
        const bottomY = -0.3;
        const bottomHeight = 0.6;
        const bottomRadius = 0.5;
        const relativeBottomY = y - bottomY;
        
        // Check if particle hits bottom or pile
        const maxRadiusAtBottomY = bottomRadius * (relativeBottomY / bottomHeight);
        const pileHeight = Math.max(0, (1 - progress) * 0.4); // Pile grows as sand accumulates
        const angleOfRepose = 0.6; // Sand pile angle
        
        if (relativeBottomY < pileHeight) {
          // Particle is on or below pile surface
          const pileRadius = pileHeight * angleOfRepose;
          if (distFromCenter < pileRadius) {
            // Particle is on pile - adjust position to pile surface
            const targetY = bottomY + pileHeight - (distFromCenter / angleOfRepose);
            if (y < targetY) {
              y = targetY;
              velocities[i * 3 + 1] = 0;
            } else {
              velocities[i * 3 + 1] *= 0.9; // Damping
            }
          } else {
            // Particle is outside pile - continue falling
            velocities[i * 3 + 1] -= delta * 0.5;
          }
        } else if (relativeBottomY < bottomHeight && distFromCenter < maxRadiusAtBottomY) {
          // Particle is in bottom chamber, falling
          velocities[i * 3 + 1] -= delta * 0.5;
        } else {
          // Particle hit bottom or side
          velocities[i * 3 + 1] = 0;
        }
        
        // Apply velocity
        y += velocities[i * 3 + 1] * delta;
        
        // Add slight horizontal movement for realism
        velocities[i * 3] *= 0.95;
        velocities[i * 3 + 2] *= 0.95;
        x += velocities[i * 3] * delta;
        z += velocities[i * 3 + 2] * delta;
      }
      
      // Update positions
      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#fdd835"
        sizeAttenuation={true}
        transparent
        opacity={0.9}
      />
    </points>
  );
}

// Glass container component
function GlassContainer() {
  const topChamberRef = useRef();
  const bottomChamberRef = useRef();
  const neckRef = useRef();
  
  // Create glass material
  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      transmission: 0.95,
      opacity: 0.1,
      transparent: true,
      roughness: 0.1,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      ior: 1.5,
      thickness: 0.05,
    });
  }, []);
  
  // Top chamber geometry (inverted cone)
  const topGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const radius = 0.5;
    const height = 0.6;
    shape.moveTo(0, 0);
    shape.lineTo(radius, 0);
    shape.lineTo(0.03, height);
    shape.lineTo(0, height);
    shape.lineTo(0, 0);
    
    const geometry = new THREE.LatheGeometry(
      [
        new THREE.Vector2(0.5, 0),
        new THREE.Vector2(0.03, 0.6),
        new THREE.Vector2(0, 0.6),
      ],
      32
    );
    return geometry;
  }, []);
  
  // Bottom chamber geometry (cone)
  const bottomGeometry = useMemo(() => {
    const geometry = new THREE.LatheGeometry(
      [
        new THREE.Vector2(0.03, 0),
        new THREE.Vector2(0.5, 0.6),
        new THREE.Vector2(0, 0.6),
      ],
      32
    );
    return geometry;
  }, []);
  
  // Neck geometry (cylinder)
  const neckGeometry = useMemo(() => {
    return new THREE.CylinderGeometry(0.03, 0.03, 0.1, 16);
  }, []);
  
  return (
    <group>
      {/* Top chamber */}
      <mesh
        ref={topChamberRef}
        geometry={topGeometry}
        material={glassMaterial}
        position={[0, 0.3, 0]}
      />
      
      {/* Neck */}
      <mesh
        ref={neckRef}
        geometry={neckGeometry}
        material={glassMaterial}
        position={[0, 0.05, 0]}
      />
      
      {/* Bottom chamber */}
      <mesh
        ref={bottomChamberRef}
        geometry={bottomGeometry}
        material={glassMaterial}
        position={[0, -0.3, 0]}
      />
    </group>
  );
}

// Stand component
function Stand() {
  const standMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#5d4037',
      roughness: 0.7,
      metalness: 0.3,
    });
  }, []);
  
  return (
    <group>
      {/* Top plate */}
      <mesh
        position={[0, 0.65, 0]}
        material={standMaterial}
      >
        <cylinderGeometry args={[0.55, 0.55, 0.02, 32]} />
      </mesh>
      
      {/* Bottom plate */}
      <mesh
        position={[0, -0.65, 0]}
        material={standMaterial}
      >
        <cylinderGeometry args={[0.55, 0.55, 0.02, 32]} />
      </mesh>
      
      {/* Left pillar */}
      <mesh
        position={[-0.5, 0, 0]}
        material={standMaterial}
      >
        <boxGeometry args={[0.05, 1.3, 0.05]} />
      </mesh>
      
      {/* Right pillar */}
      <mesh
        position={[0.5, 0, 0]}
        material={standMaterial}
      >
        <boxGeometry args={[0.05, 1.3, 0.05]} />
      </mesh>
    </group>
  );
}

// Main hourglass scene
function HourglassScene({ progress = 0 }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[1.5, 0, 2]} fov={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.5} />
      
      <Stand />
      <GlassContainer />
      <SandParticles count={2000} progress={progress} />
      
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={5}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      <Environment preset="sunset" />
    </>
  );
}

// Main component
const ThreeHourglass = ({ progress = 0 }) => {
  return (
    <div style={{ width: '100%', height: '400px', margin: '2rem 0' }}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <HourglassScene progress={progress} />
      </Canvas>
    </div>
  );
};

export default ThreeHourglass;

