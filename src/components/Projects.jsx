import { motion } from "framer-motion";

export default function Projects() {

    const projects = [

        {
            name: "Multi Panel CRM System",
            company: "RDVision",
            description:
                "A scalable CRM platform designed for managing sales pipelines and customer relationships across multiple operational roles.",

            process: [
                "Lead generation and assignment",
                "Closers manage deal conversions",
                "Supervisors monitor sales performance",
                "Admin controls system configuration",
                "Inventory panel manages stock",
                "Project coordinator manages client onboarding"
            ],

            tech: ["React.js", "Spring Boot", "Tailwind CSS", "AWS"],
            link: "https://crm.swiftlymeds.com"
        },

        {
            name: "Quiz & Hiring Platform",
            company: "RDVision",
            description:
                "A recruitment and online assessment platform enabling HR teams to manage hiring workflows and evaluate candidates through role-based quizzes.",

            process: [
                "HR posts job opportunities",
                "Candidates apply through application forms",
                "Online quizzes conducted for specific roles",
                "Performance evaluation and candidate tracking",
                "Hiring workflow management"
            ],

            tech: ["React.js", "Spring Boot", "MySQL", "AWS"],
            
        },

        {
            name: "Pharmacy Management System (PMS)",
            company: "CURO24",
            description:
                "A software solution for pharmacies to manage inventory, billing, prescriptions and sales operations.",

            process: [
                "Medicine inventory management",
                "Prescription management",
                "Billing and order processing",
                "Stock monitoring and alerts"
            ],

            tech: ["React.js", "Spring Boot", "MySQL"],
            link: "https://pms.curo24.com"
        },

        {
            name: "Lab Management System",
            company: "CURO24",
            description:
                "A system for managing lab test workflows including sample collection, processing, and reporting.",

            process: [
                "Patient registration",
                "Test sample collection tracking",
                "Lab processing workflow",
                "Result generation and reporting"
            ],

            tech: ["React.js", "Spring Boot", "MySQL"],
            link: "https://lms.curo24.com"
        },

        {
            name: "Field Executive Tracking Application",
            company: "Curo24",
            description:
                "A mobile and web application designed to track field executives and monitor onboarding and operational activities.",

            process: [
                "Executive onboarding process",
                "Location based activity tracking",
                "Task assignment and reporting",
                "Performance monitoring dashboard"
            ],

            tech: ["React Native", "Spring Boot", "AWS"]
        },

        {
            name: "Curo24 Healthcare App",
            company: "Curo24",
            description:
                "A healthcare platform allowing users to order medicines and book lab tests by uploading prescriptions.",

            process: [
                "User uploads prescription",
                "Nearby pharmacies receive the request",
                "Medicine order processing",
                "Lab test booking and sample collection"
            ],

            tech: ["React Native", "Spring Boot", "AWS"],
            link: "https://curo24.com"
        },

        {
            name: "SwiftlyMeds E-commerce Platform",
            company: "RDVision",
            description:
                "An online pharmacy e-commerce platform enabling users to browse and purchase medicines online.",

            process: [
                "Medicine browsing and search",
                "Cart and checkout flow",
                "Order management",
                "Inventory synchronization"
            ],

            tech: ["React.js", "Spring Boot", "AWS"],
            link: "https://swiftlymeds.com"
        }

    ];


    return (
        <section id="projects" className="hero-bg  py-28">

            <div className="max-w-[1300px] mx-auto px-6">

                {/* TITLE */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >

                    <h2 className="text-4xl font-semibold">
                        My <span className="text-cyan-400">Projects</span>
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Real-world applications I built across CRM, Healthcare,
                        Recruitment Platforms, and Mobile Applications.
                    </p>

                </motion.div>


                {/* PROJECT CARDS */}

                <div className="grid md:grid-cols-2 gap-10">

                    {projects.map((project, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[#111c3a] border border-gray-700 p-8 rounded-xl hover:border-cyan-400 transition"
                        >

                            <h3 className="text-xl font-semibold mb-2">
                                {project.name}
                            </h3>

                            <p className="text-sm text-gray-400 mb-4">
                                {project.company}
                            </p>

                            <p className="text-gray-300 mb-4">
                                {project.description}
                            </p>


                            {/* PROCESS */}

                            <ul className="text-gray-400 text-sm space-y-1 mb-4">

                                {project.process.map((step, i) => (
                                    <li key={i}>• {step}</li>
                                ))}

                            </ul>


                            {/* TECH STACK */}

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

                            {/* VISIT BUTTON (ONLY IF LIVE) */}

                            {project.link && (

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-6 px-5 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
                                >
                                    Visit Project →
                                </a>

                            )}

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}