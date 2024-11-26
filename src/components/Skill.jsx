import { FaReact, FaJsSquare, FaCss3Alt, FaNodeJs, FaDatabase, FaHtml5, FaGithub } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiExpress, SiRedux, SiNetlify } from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Skill proficiency data (percentage)
const skillProficiency = {
  React: 90,
  JavaScript: 85,
  CSS: 95,
  NodeJS: 70,
  MongoDB: 93,
  HTML: 95,
  Tailwind: 80,
  MySQL: 80,
  Express: 75,
  Redux: 80,
  Netlify: 85,
  GitHub: 90,
};

const skillIcons = {
  React: <FaReact className="text-4xl sm:text-5xl text-blue-500" />,
  JavaScript: <FaJsSquare className="text-4xl sm:text-5xl text-yellow-500" />,
  CSS: <FaCss3Alt className="text-4xl sm:text-5xl text-blue-400" />,
  NodeJS: <FaNodeJs className="text-4xl sm:text-5xl text-green-500" />,
  MongoDB: <FaDatabase className="text-4xl sm:text-5xl text-green-600" />,
  HTML: <FaHtml5 className="text-4xl sm:text-5xl text-red-500" />,
  Tailwind: <RiTailwindCssFill className="text-4xl sm:text-5xl text-blue-500" />,
  MySQL: <SiMysql className="text-4xl sm:text-5xl text-[#00758f]" />,
  Express: <SiExpress className="text-4xl sm:text-5xl text-black" />,
  Redux: <SiRedux className="text-4xl sm:text-5xl text-[#764abc]" />,
  Netlify: <SiNetlify className="text-4xl sm:text-5xl text-[#00c7b7]" />,
  GitHub: <FaGithub className="text-4xl sm:text-5xl text-black" />,
};

const Skill = ({ skillName }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="skill p-3 sm:p-4 bg-white dark:bg-gray-700 rounded-md shadow-md sm:rounded-lg sm:shadow-lg transform transition-all duration-300 sm:hover:scale-105 sm:hover:shadow-xl sm:hover:bg-gradient-to-r sm:hover:from-blue-500 sm:hover:to-purple-600 sm:hover:text-white"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      {/* Display the skill icon */}
      <div className="icon mb-2 sm:mb-3">{skillIcons[skillName]}</div>

      {/* Display the skill name */}
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">{skillName}</h3>

      {/* Progress Bar for Skill Proficiency */}
      <div className="progress mt-2 sm:mt-3">
        <motion.div
          className="progress-bar h-2 rounded-full bg-gray-200 dark:bg-gray-600"
          initial={{ width: 0 }}
          animate={{ width: `100%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div
            className="progress-fill h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
            style={{ width: `${skillProficiency[skillName]}%` }}
          ></div>
        </motion.div>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">{skillProficiency[skillName]}% Proficient</p>
      </div>
    </motion.div>
  );
};

const SkillsGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-6">
    {Object.keys(skillProficiency).map(skill => (
      <Skill key={skill} skillName={skill} />
    ))}
  </div>
);

export default SkillsGrid;
