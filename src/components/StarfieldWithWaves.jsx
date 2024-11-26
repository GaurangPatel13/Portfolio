// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const StarfieldWithWaves = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Initialize Three.js Scene
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75, 
//       window.innerWidth / 600, // Adjust aspect ratio based on the new height (800px)
//       0.1, 
//       1000
//     );
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, 600); // Set the custom height here (800px)
//     mountRef.current.appendChild(renderer.domElement);

//     // Create Starfield
//     const starsGeometry = new THREE.BufferGeometry();
//     const starsCount = 1000;
//     const positions = new Float32Array(starsCount * 3);

//     for (let i = 0; i < starsCount * 3; i++) {
//       positions[i] = (Math.random() - 0.5) * 50; // Spread stars in a cube
//     }

//     starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//     const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
//     const stars = new THREE.Points(starsGeometry, starsMaterial);
//     scene.add(stars);

//     // Mouse Tracking for Waves
//     const cursor = { x: 0, y: 0 };
//     window.addEventListener("mousemove", (e) => {
//       cursor.x = (e.clientX / window.innerWidth) * 2 - 1;
//       cursor.y = -(e.clientY / window.innerHeight) * 2 + 1;
//     });

//     const waveEffect = new THREE.Mesh(
//       new THREE.SphereGeometry(0.3, 32, 32),
//       new THREE.MeshBasicMaterial({ color: 0x00aaff, transparent: true, opacity: 0.5 })
//     );
//     scene.add(waveEffect);

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate stars for motion
//       stars.rotation.y += 0.001;

//       // Update wave position
//       waveEffect.position.x = cursor.x * 5;
//       waveEffect.position.y = cursor.y * 5;

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener("mousemove", () => {});
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={mountRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -12 }} />;
// };

// export default StarfieldWithWaves;
