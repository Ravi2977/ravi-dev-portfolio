import { motion } from "framer-motion";

export default function Experience() {

  const experiences = [

    {
      company: "Curo24",
      role: "Full Stack Developer",
      duration: "2025 - 2026",
      description:
        "Working on healthcare platforms and mobile applications for medicine ordering and lab services.",

      highlights: [
        "Developed Curo24 healthcare application",
        "Built prescription upload and medicine ordering workflow",
        "Integrated nearby pharmacy order system",
        "Implemented lab test booking and sample collection workflow",
        "Developed field executive tracking application"
      ],

      tech: [
        "Java",
        "Spring Boot",
        "React Native",
        "React.js",
        "AWS"
      ]
    },

    {
      company: "RDVision",
      role: "Full Stack Developer",
      duration: "2024 - 2025",
      description:
        "Worked on multiple enterprise platforms including CRM systems, hiring platforms and e-commerce applications.",

      highlights: [
        "Built multi-panel CRM system with roles like closer, supervisor, admin and inventory manager",
        "Developed online quiz and hiring platform for recruitment",
        "Worked on SwiftlyMeds e-commerce platform",
        "Designed scalable backend APIs using Spring Boot"
      ],

      tech: [
        "Java",
        "Spring Boot",
        "React.js",
        "Tailwind CSS",
        "AWS"
      ]
    },

    {
      company: "Tata Strive",
      role: "Full Stack Developer Intern",
      duration: "2023 - 2024",
      description:
        "Worked on multiple full stack development projects and improved backend API development skills.",

      highlights: [
        "Built full stack applications using Java and React",
        "Developed REST APIs",
        "Worked with relational databases"
      ],

      tech: [
        "Java",
        "React.js",
        "MySQL"
      ]
    }

  ];


  return (
    <section id="experience" className=" hero-bg py-28">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl font-semibold">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4">
            My professional journey building scalable web and mobile applications.
          </p>

        </motion.div>


        {/* TIMELINE */}

        <div className="relative border-l border-gray-700">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-14 ml-8"
            >

              {/* TIMELINE DOT */}

              <span className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full border-4 border-[#0B132B]"></span>


              {/* CARD */}

              <div className="bg-[#111c3a] border border-gray-700 p-6 rounded-xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition">

                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-cyan-400 text-sm mb-2">
                  {exp.company} • {exp.duration}
                </p>

                <p className="text-gray-300 mb-4">
                  {exp.description}
                </p>


                {/* HIGHLIGHTS */}

                <ul className="text-gray-400 text-sm space-y-1 mb-4">

                  {exp.highlights.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}

                </ul>


                {/* TECH STACK */}

                <div className="flex flex-wrap gap-2">

                  {exp.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-400 rounded-full text-cyan-400"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}