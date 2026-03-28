import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  FaReact,
  FaJava,
  FaAws
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiReact
} from "react-icons/si";

export default function About() {

  const [selectedTech, setSelectedTech] = useState(null);

  const techStack = [
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400 text-2xl" />,
      experience: "2+ Years",
      started: "2023",
      learningTime: "1 Month (Basics) + 1 Month (Advanced)",
      projects: 12,
      level: 85,
      description:
        "Developed scalable and high-performance web applications including CRM, LMS, PMS, E-commerce platforms, and portfolio websites. Experienced in component-based architecture, API integration, performance optimization, and state management using Redux. Strong focus on responsive UI/UX and clean code practices."
    },
    {
      name: "React Native",
      icon: <SiReact className="text-cyan-400 text-2xl" />,
      experience: "1 Year",
      started: "2024",
      learningTime: "1.5 Months",
      projects: 5,
      level: 80,
      description:
        "Built cross-platform mobile applications with seamless UI/UX and real-time API integration. Worked on production-level apps with optimized performance, reusable components, and smooth navigation across Android devices."
    },
    {
      name: "Java",
      icon: <FaJava className="text-red-400 text-2xl" />,
      experience: "2+ Years",
      started: "2023",
      learningTime: "2 Months",
      projects: 10,
      level: 85,
      description:
        "Strong expertise in Core Java, OOP principles, and backend logic design. Implemented robust business logic, exception handling, and multi-layered architectures for scalable enterprise applications."
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-green-400 text-2xl" />,
      experience: "2+ Years",
      started: "2023",
      learningTime: "2 Months",
      projects: 8,
      level: 88,
      description:
        "Designed and developed scalable RESTful APIs and backend systems using Spring Boot. Implemented authentication (JWT), role-based access, database integration, and production-ready microservice-style architectures."
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-400 text-2xl" />,
      experience: "2+ Years",
      started: "2023",
      learningTime: "1 Month",
      projects: 10,
      level: 82,
      description:
        "Designed optimized relational databases with proper normalization and indexing. Wrote complex queries, handled large datasets, and improved performance through query optimization and efficient schema design."
    },
    {
      name: "AWS",
      icon: <FaAws className="text-yellow-400 text-2xl" />,
      experience: "1 Year",
      started: "2024",
      learningTime: "1 Month",
      projects: 8,
      level: 65,
      description:
        "Deployed and managed backend services on AWS including EC2, S3, and cloud hosting. Experienced in server deployment, environment configuration, and maintaining scalable cloud infrastructure."
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-400 text-2xl" />,
      experience: "1.5 Years",
      started: "2023",
      learningTime: "2 Weeks",
      projects: 6,
      level: 70,
      description:
        "Implemented centralized state management in complex React applications. Managed global states, API data flow, and improved application scalability using Redux Toolkit."
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
      experience: "2 Years",
      started: "2023",
      learningTime: "2 Weeks",
      projects: 15,
      level: 92,
      description:
        "Created modern, responsive, and pixel-perfect UI designs using Tailwind CSS. Expert in utility-first styling, custom theming, and building clean, maintainable frontend layouts."
    }
  ];

  return (
    <section id="about" className="hero-bg py-28">

      <div className="max-w-[1300px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl font-semibold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-5">
            I’m a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> with
            <span className="text-cyan-400 font-semibold"> 2+ years of experience</span> building
            scalable web and mobile applications using
            <span className="text-white"> React.js, Spring Boot, MySQL, and AWS</span>.
          </p>


          <p className="text-gray-400 leading-relaxed mb-4">
            I specialize in developing real-world business solutions like
            <span className="text-white"> CRM systems, billing software, and company websites</span>
            that help businesses <span className="text-white">automate operations, save time, and increase revenue</span>.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I have delivered multiple production-level projects with clean UI, optimized backend performance,
            and scalable architecture. I collaborate with teams to build complete digital solutions and am
            actively open to <span className="text-white">freelance projects and full-time opportunities</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">

            <div className="px-6 py-3 bg-cyan-500/10 border border-cyan-400 rounded-lg">
              <span className="text-cyan-400 font-semibold">
                2+ Years Experience
              </span>
            </div>

            <div className="px-6 py-3 bg-green-500/10 border border-green-400 rounded-lg">
              <span className="text-green-400 font-semibold">
                Available for Freelance
              </span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE TECH STACK */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-5"
        >

          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedTech(tech)}
              className="cursor-pointer flex items-center gap-4 bg-[#111c3a] border border-gray-700 p-4 rounded-xl hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition"
            >
              {tech.icon}
              <span className="text-gray-200">{tech.name}</span>
            </motion.div>
          ))}

          <div className="mt-6 text-gray-300 space-y-2">
            <p>✔ Built CRM & business management systems</p>
            <p>✔ 10+ full-stack projects completed</p>
            <p>✔ Focused on scalable & user-friendly applications</p>
          </div>

        </motion.div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="bg-[#0f172a] w-[90%] max-w-xl p-6 rounded-2xl border border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.2)]"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl text-cyan-400 font-semibold flex gap-2 items-center justify-center">
                  {selectedTech.icon} {selectedTech.name}
                </h3>

                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              {/* DETAILS */}
              <div className="space-y-3 text-gray-300">

                <p><span className="text-white font-medium">Experience:</span> {selectedTech.experience}</p>
                <p><span className="text-white font-medium">Started:</span> {selectedTech.started}</p>
                <p><span className="text-white font-medium">Learning Time:</span> {selectedTech.learningTime}</p>
                <p><span className="text-white font-medium">Projects:</span> {selectedTech.projects}</p>

                <p className="text-gray-400 mt-2">
                  {selectedTech.description}
                </p>

              </div>

              {/* PROGRESS BAR */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-1">Expertise Level</p>

                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedTech.level}%` }}
                    transition={{ duration: 0.6 }}
                    className="bg-cyan-400 h-2 rounded-full"
                  />
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}