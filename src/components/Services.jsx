import { motion } from "framer-motion";

export default function Services() {

  const services = [

    {
      title: "Web Development",
      description:
        "Modern, fast, and responsive websites built using React.js and Tailwind CSS for businesses and startups.",
      features: [
        "Responsive UI/UX",
        "SEO-friendly design",
        "Fast performance",
        "Custom business websites"
      ]
    },

    {
      title: "CRM & Business Software",
      description:
        "Custom CRM, billing, and management systems to automate your business operations and increase productivity.",
      features: [
        "Customer & sales management",
        "Inventory & billing system",
        "Admin dashboards",
        "Reports & analytics"
      ]
    },

    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications using React Native for Android with smooth UI and real-time features.",
      features: [
        "Android apps",
        "IOS apps",
        "API integration",
        "Real-time data",
        "Clean UI/UX"
      ]
    },

    {
      title: "Backend & API Development",
      description:
        "Scalable backend systems using Spring Boot with secure APIs and optimized performance.",
      features: [
        "REST API development",
        "Authentication (JWT)",
        "Database design",
        "AWS deployment"
      ]
    }

  ];

  return (
    <section id="services" className="hero-bg py-28">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold">
            My <span className="text-cyan-400">Services</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I help businesses build scalable digital solutions to automate operations,
            improve efficiency, and grow online.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {services.map((service, index) => (

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

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {service.description}
              </p>

              <ul className="text-gray-400 text-sm space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}