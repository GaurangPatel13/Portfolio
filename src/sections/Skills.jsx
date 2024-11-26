import SkillsGrid from '../components/Skill';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
          My Skills
        </h2>
        {/* Render the SkillsGrid component here */}
        <SkillsGrid />
      </div>
    </section>
  );
};

export default Skills;
