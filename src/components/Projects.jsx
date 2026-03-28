import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      name: "Multi Panel CRM System",
      company: "RDVision",
      description:
        "A scalable CRM platform designed to manage sales pipelines and customer relationships across multiple roles.",
      impact: "Improved sales tracking & team productivity",
      process: [
        "Lead generation and assignment",
        "Closers manage deal conversions",
        "Supervisors monitor sales performance",
      ],
      tech: ["React.js", "Spring Boot", "Tailwind CSS", "AWS"],
      link: "https://crm.swiftlymeds.com",
      type: "client"
    },

    {
      name: "Quiz & Hiring Platform",
      company: "RDVision",
      description:
        "A recruitment and assessment platform enabling HR teams to manage hiring workflows and evaluate candidates.",
      impact: "Streamlined hiring and candidate evaluation process",
      process: [
        "Job posting and applications",
        "Online quizzes for candidates",
        "Performance tracking system",
      ],
      tech: ["React.js", "Spring Boot", "MySQL", "AWS"],
      type: "client"
    },

    {
      name: "Pharmacy Management System (PMS)",
      company: "CURO24",
      description:
        "A system for pharmacies to manage inventory, billing, and prescriptions efficiently.",
      impact: "Reduced manual billing errors & improved inventory control",
      process: [
        "Medicine inventory management",
        "Prescription handling",
        "Billing & order processing",
      ],
      tech: ["React.js", "Spring Boot", "MySQL"],
      link: "https://pms.curo24.com",
      type: "client"
    },

    {
      name: "Lab Management System",
      company: "CURO24",
      description:
        "A platform for managing lab test workflows including sample collection and reporting.",
      impact: "Improved lab workflow efficiency and report generation",
      process: [
        "Patient registration",
        "Sample tracking",
        "Result generation",
      ],
      tech: ["React.js", "Spring Boot", "MySQL"],
      link: "https://lms.curo24.com",
      type: "client"
    },

    {
      name: "Field Executive Tracking App",
      company: "Curo24",
      description:
        "A mobile and web application to track field executives and manage operational activities.",
      impact: "Enhanced field tracking and performance monitoring",
      process: [
        "Executive onboarding",
        "Location tracking",
        "Task management",
      ],
      tech: ["React Native", "Spring Boot", "AWS"],
      type: "client"
    },

    {
      name: "Curo24 Healthcare App",
      company: "Curo24",
      description:
        "A healthcare platform for ordering medicines and booking lab tests using prescriptions.",
      impact: "Simplified medicine ordering & lab booking experience",
      process: [
        "Prescription upload",
        "Order processing",
        "Lab booking system",
      ],
      tech: ["React Native", "Spring Boot", "AWS"],
      link: "https://curo24.com",
      type: "client"
    },

    {
      name: "SwiftlyMeds E-commerce Platform",
      company: "RDVision",
      description:
        "An online pharmacy platform for browsing and purchasing medicines.",
      impact: "Enabled online medicine sales and inventory sync",
      process: [
        "Product browsing",
        "Cart & checkout",
        "Order management",
      ],
      tech: ["React.js", "Spring Boot", "AWS"],
      link: "https://swiftlymeds.com",
      type: "client"
    }
  ];

  return (
    <section id="projects" className="hero-bg py-28">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold">
            Client <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Production-level applications developed for real clients across CRM,
            healthcare, recruitment, and e-commerce domains.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#111c3a] border border-gray-700 p-8 rounded-xl 
              hover:border-cyan-400 
              hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] 
              hover:scale-[1.02] 
              transition duration-300"
            >

              {/* TAGS */}
              <div className="flex gap-2 mb-2">
                {index === 0 && (
                  <span className="text-xs text-cyan-400 border border-cyan-400 px-2 py-1 rounded">
                    🚀 Featured
                  </span>
                )}

                {project.type === "client" && (
                  <span className="text-xs text-green-400 border border-green-400 px-2 py-1 rounded">
                    💼 Client Project
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.name}
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                {project.company}
              </p>

              <p className="text-gray-300 mb-3">
                {project.description}
              </p>

              <p className="text-sm text-cyan-400 mb-4">
                ✔ {project.impact}
              </p>

              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                {project.process.map((step, i) => (
                  <li key={i}>• {step}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-400 rounded-full text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-5 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
                >
                  Live Project →
                </a>
              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}