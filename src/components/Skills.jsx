import { motion } from "framer-motion";

import {
  FaReact,
  FaJava,
  FaAws,
  FaGitAlt
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiDocker
} from "react-icons/si";

export default function Skills() {

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400 text-2xl" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-400 text-2xl" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-2xl" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-400 text-2xl" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-400 text-2xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400 text-2xl" /> },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native", icon: <SiReact className="text-cyan-400 text-2xl" /> },
      ],
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", icon: <FaAws className="text-yellow-400 text-2xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-400 text-2xl" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-400 text-2xl" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="hero-bg py-28">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl font-semibold mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to build scalable
            web and mobile applications.
          </p>

        </motion.div>

        {/* SKILL GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111c3a] border border-gray-700 p-6 rounded-xl hover:border-cyan-400 transition"
            >

              <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                {category.title}
              </h3>

              <div className="space-y-4">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                  >

                    {skill.icon}

                    <span>{skill.name}</span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}