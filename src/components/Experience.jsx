import { motion } from "framer-motion";

export default function Experience() {

  const experiences = [

    {
      company: "Curo24",
      role: "Full Stack Developer",
      duration: "2025 - Present",
      description:
        "Working on production-level healthcare platforms and mobile applications focused on medicine ordering, lab services, and operational efficiency.",

      impact: "Improved healthcare service accessibility and operational workflows",

      highlights: [
        "Developed Curo24 healthcare application used for medicine ordering and lab bookings",
        "Built prescription upload and real-time order processing system",
        "Integrated nearby pharmacy system for faster fulfillment",
        "Implemented lab test booking and sample collection workflow",
        "Developed field executive tracking system for operational monitoring"
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
        "Built multiple business-focused applications including CRM systems, hiring platforms, and e-commerce solutions for real clients.",

      impact: "Enhanced business operations, sales tracking, and hiring workflows",

      highlights: [
        "Built multi-panel CRM system with role-based access (Admin, Supervisor, Closers, Inventory)",
        "Developed online quiz and hiring platform for recruitment automation",
        "Worked on SwiftlyMeds e-commerce platform for online pharmacy",
        "Designed scalable backend APIs and optimized system performance"
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
        "Gained hands-on experience in full stack development by building applications and strengthening backend and database skills.",

      impact: "Built strong foundation in full stack development and API design",

      highlights: [
        "Developed full stack applications using Java and React",
        "Built REST APIs and handled backend logic",
        "Worked with MySQL databases and data modeling"
      ],

      tech: [
        "Java",
        "React.js",
        "MySQL"
      ]
    }

  ];


  return (
    <section id="experience" className="hero-bg py-28">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            2+ years of experience building production-level applications for real clients 
            across healthcare, CRM, and e-commerce domains.
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

              {/* DOT */}
              <span className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full border-4 border-[#0B132B]"></span>

              {/* CARD */}
              <div className="bg-[#111c3a] border border-gray-700 p-6 rounded-xl 
              hover:border-cyan-400 
              hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] 
              hover:scale-[1.02] 
              transition duration-300">

                {/* ROLE */}
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>

                {/* COMPANY */}
                <p className="text-cyan-400 text-sm mb-2">
                  {exp.company} • {exp.duration}
                </p>

                {/* DESCRIPTION */}
                <p className="text-gray-300 mb-3">
                  {exp.description}
                </p>

                {/* IMPACT */}
                <p className="text-sm text-cyan-400 mb-4">
                  ✔ {exp.impact}
                </p>

                {/* HIGHLIGHTS */}
                <ul className="text-gray-400 text-sm space-y-1 mb-4">
                  {exp.highlights.slice(0, 4).map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>

                {/* TECH */}
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