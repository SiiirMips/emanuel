"use client";

import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedBeams() {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }
    });

    const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

    const fragmentShader = `
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      vec2 center = vec2(0.5, 0.0);
      
      // Create rays emanating from bottom center
      float angle = atan(uv.y - center.y, uv.x - center.x);
      float dist = length(uv - center);
      
      // Animated rays
      float rays = sin(angle * 20.0 + uTime * 0.5) * 0.5 + 0.5;
      rays *= smoothstep(1.5, 0.0, dist);
      
      // Add some noise for texture
      float n = noise(uv * 10.0 + uTime * 0.1);
      rays *= 0.8 + n * 0.2;
      
      // Gradient from bottom to top
      float gradient = 1.0 - uv.y;
      rays *= gradient * 0.5;
      
      // White color with transparency
      vec3 color = vec3(1.0, 1.0, 1.0) * rays;
      float alpha = rays * 0.3;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uTime: { value: 0 },
                    uResolution: { value: [window.innerWidth, window.innerHeight] }
                }}
                transparent={true}
                depthWrite={false}
            />
        </mesh>
    );
}

export function ThreeBackground() {
    return (
        <div className="absolute inset-0 w-full h-full bg-black">
            <Canvas
                camera={{ position: [0, 0, 1], fov: 75 }}
                gl={{
                    alpha: true,
                    antialias: false,
                    powerPreference: "high-performance"
                }}
                style={{ background: 'transparent' }}
            >
                <AnimatedBeams />
            </Canvas>
        </div>
    );
}
