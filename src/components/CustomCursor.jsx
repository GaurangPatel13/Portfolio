import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the device is a mobile device
    const checkIfMobile = () => {
      const touchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(touchDevice);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isMobile]);

  if (isMobile) return null; // Disable the cursor on mobile

  return (
    <motion.div
      className="custom-cursor"
      initial={{ opacity: 0 }}
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        opacity: 1,
        scale: hovered ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgba(255, 0, 150, 0.8)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
