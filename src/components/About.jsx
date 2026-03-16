import { motion } from "framer-motion";

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

  const techStack = [
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-2xl" /> },
    { name: "React Native", icon: <SiReact className="text-cyan-400 text-2xl" /> },
    { name: "Java", icon: <FaJava className="text-red-400 text-2xl" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-400 text-2xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-2xl" /> },
    { name: "AWS", icon: <FaAws className="text-yellow-400 text-2xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400 text-2xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> }
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

            I’m a <span className="text-cyan-400 font-semibold">Full Stack Developer </span>
            with <span className="text-cyan-400 font-semibold">2+ years of experience </span>
            building scalable web and mobile applications.

            My core expertise includes developing modern applications using
            <span className="text-white font-medium"> React.js, React Native, Java, and Spring Boot</span>,
            along with deploying reliable backend systems on
            <span className="text-white font-medium"> AWS Cloud</span>.

          </p>

          <p className="text-gray-400 leading-relaxed">

            Along with my professional experience, I also work as a
            <span className="text-white font-medium"> freelance full stack developer</span>.
            I collaborate with a small team consisting of
            <span className="text-white font-medium"> frontend developers, backend developers and SEO specialists </span>
            to deliver complete digital solutions for startups and businesses.

            Together we build scalable platforms including
            web applications, mobile applications and modern business websites.

          </p>

          {/* SERVICES LINE */}

          <p className="text-gray-400 mt-4">
            Services we provide include
            <span className="text-white font-medium">
              {" "}Web Application Development, Mobile Apps,
              Business Websites and SEO optimization.
            </span>
          </p>

          {/* EXPERIENCE + FREELANCE BADGES */}

          <div className="mt-8 flex flex-wrap gap-4">

            {/* EXPERIENCE */}

            <div className="px-6 py-3 bg-cyan-500/10 border border-cyan-400 rounded-lg">
              <span className="text-cyan-400 font-semibold">
                2+ Years Professional Experience
              </span>
            </div>

            {/* FREELANCE */}

            <div className="px-6 py-3 bg-green-500/10 border border-green-400 rounded-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition">
              <span className="text-green-400 font-semibold">
                Available for Freelance Projects
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
              className="flex items-center gap-4 bg-[#111c3a] border border-gray-700 p-4 rounded-xl hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition"
            >

              {tech.icon}

              <span className="text-gray-200">
                {tech.name}
              </span>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}