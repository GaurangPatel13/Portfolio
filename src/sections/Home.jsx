import React from "react";
import { motion } from "framer-motion";
import DroneCanvas from "../components/DroneModel"; // Import DroneCanvas component

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center text-white relative overflow-hidden"
    >
      {/* Add the DroneCanvas */}
      <motion.div 
        className="absolute top-10 left-0 w-full h-full -z-10"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 0}}
        viewport={{ once: true }} // Trigger once when the element is in view
        transition={{ duration: 1, delay: 0.7 }}
        >
        <DroneCanvas />
      </motion.div>

      {/* Home Section Content */}
      <motion.h1
        className="text-5xl mt-36 sarina-regular font-extrabold text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        viewport={{ once: true }} // Trigger once when the element is in view
        transition={{ duration: 1, delay: 0.3 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.h2
        className="text-2xl mt-10 font-sans text-center bg-gradient-to-r from-teal-300 to-pink-500 text-transparent bg-clip-text"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }} // Trigger once when the element is in view
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm a <span className="font-bold">Developer</span>,{" "}
        <span className="font-bold">Designer</span>, and{" "}
        <span className="font-bold">Creator</span>.
      </motion.h2>

      <motion.div
        className="mt-8"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        viewport={{ once: true }} // Trigger once when the element is in view
        transition={{ duration: 1, delay: 0.7 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 hover:bg-white hover:text-purple-500 font-semibold rounded-lg shadow-lg transition bg-transparent text-white border-2 border-white"
        >
          See My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
