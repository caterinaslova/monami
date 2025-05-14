'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three'

export default function Fondo3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Crear muchas pelotas (esferas)
    const bolas: THREE.Mesh[] = [];
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: '#39FF14' });

    for (let i = 0; i < 80; i++) {
      const bola = new THREE.Mesh(geometry, material);
      bola.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        Math.random() * -50 // bien al fondo
      );
      scene.add(bola);
      bolas.push(bola);
    }

    // Luz para verlas bien
    const light = new THREE.PointLight('#39FF14', 2, 100);
    light.position.set(0, 0, 10);
    scene.add(light);

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      bolas.forEach((b) => {
        b.position.z += 0.7; // se acercan

        if (b.position.z > camera.position.z) {
          b.position.z = -50; // reinicia desde el fondo
          b.position.x = (Math.random() - 0.5) * 10;
          b.position.y = (Math.random() - 0.5) * 10;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 bg-black" />;
}
