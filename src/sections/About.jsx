import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="mt-5 flex flex-col items-center justify-center space-y-8 px-4"
      >
        {/* Profile Image */}
        <motion.div
          className="relative sm:w-52 sm:h-52 w-40 h-40 rounded-full font-sans overflow-hidden border-4 border-blue-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="Images/myprofilepic.jpg"
            alt="Gaurang Patel"
            className="w-full h-full object-cover"
          />
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-blue-500 opacity-10 blur-xl"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-black drop-shadow-md mix-blend-multiply">
            About Me
          </h2>
          <p className="text-lg text-gray-800 mt-4 leading-relaxed drop-shadow-sm">
            Hey there! I’m{" "}
            <span className="text-blue-600 font-semibold text-2xl">
              Gaurang Patel
            </span>
            . I’m a designer and developer passionate about building immersive
            and interactive web experiences that leave a lasting impression. At
            the crossroads of{" "}
            <span className="font-bold">design</span>,{" "}
            <span className="font-bold">technology</span>, and{" "}
            <span className="font-bold">user experience</span>, I thrive on
            transforming ideas into seamless, impactful digital solutions.
            <br />
            <br />
            With a versatile skill set that includes{" "}
            <span className="font-bold">React</span>,{" "}
            <span className="font-bold">Three.js</span>,{" "}
            <span className="font-bold">Tailwind CSS</span>,{" "}
            <span className="font-bold">Node.js</span>, and{" "}
            <span className="font-bold">Database Management</span>, I craft
            dynamic interfaces, 3D visualizations, and robust back-end systems.
            Whether it’s designing responsive front-end experiences or
            optimizing back-end architectures, I’m all about delivering
            innovation with precision.
            <br />
            <br />
            When I’m not creating, you’ll find me exploring cutting-edge
            technologies, brainstorming creative concepts, or diving into
            projects that challenge the status quo. Let’s collaborate and build
            something extraordinary together!
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://drive.google.com/file/d/10IkeNPtkIpigOI2knG7Y2pu2wEN2ifbq/view?usp=sharing"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
