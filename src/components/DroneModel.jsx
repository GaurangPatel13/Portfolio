import React, { useState, useEffect, useRef } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Vector3, MathUtils } from "three";

const DroneModel = ({ cursorPosition }) => {
  const { scene, loading, error } = useGLTF("/Models/buster_drone.glb");
  const groupRef = useRef();
  const { camera } = useThree(); // Get the camera from the context

  if (loading) {
    return <mesh><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="blue" /></mesh>;
  }

  if (error) {
    console.error("Error loading the model:", error);
    return <mesh><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="red" /></mesh>;
  }

  // Initial rotation to make the drone face forward (90 degrees rotated to the left)
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = MathUtils.degToRad(90); // 90 degrees rotation on Y-axis
    }
  }, []);

  // Smoothly rotate the model towards the cursor
  useEffect(() => {
    if (groupRef.current && cursorPosition) {
      const targetPosition = new Vector3(cursorPosition.x, cursorPosition.y, 0);

      // Convert the cursor position to world space using the camera from the context
      const worldTargetPosition = targetPosition.unproject(camera);

      // Calculate the difference in rotation around X and Y axes
      const targetRotationX = Math.atan2(-worldTargetPosition.y, worldTargetPosition.z); // Invert Y-axis for correct movement
      const targetRotationY = Math.atan2(worldTargetPosition.x, worldTargetPosition.z); // Standard Y rotation

      // Adjust the rotation for more sensitivity (optional - make the model rotate more)
      const sensitivity = 5; // Increased sensitivity to make it rotate more
      const xRotationSpeed = 0.1; // Smooth rotation speed for X-axis
      const yRotationSpeed = 0.5; // Smooth rotation speed for Y-axis

      // Apply smoothing and rotation (lerp to make the movement smooth)
      groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, targetRotationX * (sensitivity*1.2), xRotationSpeed);
      groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, targetRotationY * sensitivity, yRotationSpeed);
    }
  }, [cursorPosition, camera]); // Make sure to use `camera` as a dependency

  return (
    <group ref={groupRef} scale={[2, 2, 2]} position={[0, 1, 0]}>
      <primitive object={scene} />
    </group>
  );
};

const DroneCanvas = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Handle mouse move
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Normalize the mouse position to a range from -1 to 1
    const x = (clientX / width) * 2 - 1;
    const y = -(clientY / height) * 2 + 1;

    setCursorPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        display: "block",
        backgroundColor: "black"
      }}
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <DroneModel cursorPosition={cursorPosition} />
      <OrbitControls enableDamping={true} />
    </Canvas>
  );
};

export default DroneCanvas;
