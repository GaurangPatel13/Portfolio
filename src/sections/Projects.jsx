import { motion } from 'framer-motion';

const projects = [
  {
    title: "Text-to-Speech Converter",
    description: "A text-to-speech web app that converts written text into natural-sounding speech with customizable voice and language options.",
    image: "Images/Text-to-Speech.png",
    liveLink: "https://gaurangpatel13.github.io/Text-to-Speech/",
    sourceLink: "https://github.com/GaurangPatel13/Text-to-Speech",
  },
  {
    title: "Weather-App",
    description: "A weather app that provides real-time weather updates, forecasts, and detailed conditions based on user location. Try it out!",
    image: "Images/Weather-app.png",
    liveLink: "https://gaurangpatel13.github.io/Weather-App/",
    sourceLink: "https://github.com/GaurangPatel13/Weather-App",
  },
  {
    title: "Resume-Builder",
    description: "A resume builder app that allows users to easily create, customize, and download professional resumes with a user-friendly interface.",
    image: "Images/Resume-Builder.png",
    liveLink: "https://gaurangpatel13.github.io/resume-builder/",
    sourceLink: "https://github.com/GaurangPatel13/resume-builder",
  },
  {
    title: "SunFlix Entertainment App",
    description: "SunFlix is an entertainment app that offers a wide range of movies and TV shows for streaming, with a user-friendly interface and personalized recommendations.",
    image: "Images/SunFlix.png",
    liveLink: "https://sunflixentertainment.netlify.app/",
    sourceLink: "https://github.com/GaurangPatel13/entertainment-app",
  },
  // Add more projects as needed
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-16 lg:px-32">
      <h2 className="text-center text-4xl font-bold text-black mb-12">
        My Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-500"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.1, // Increased duration for smoother effect
            delay: index * 0.1, // Staggered entry for each card
            ease: "easeOut", // Smooth easing
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 filter hover:grayscale-0 grayscale hover:scale-110"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="mt-4 flex space-x-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                View Live
              </a>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-700 px-4 py-2 rounded hover:bg-green-600"
              >
                Source Code
              </a>
            </div>
          </div>
        </motion.div>
        
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
