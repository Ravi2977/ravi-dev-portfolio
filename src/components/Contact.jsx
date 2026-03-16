import { motion } from "framer-motion";

import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

export default function Contact() {

  const contacts = [

    {
      icon: <FaPhone className="text-cyan-400 text-2xl" />,
      title: "Phone",
      value: "+91 8604275934",
      link: "tel:+918604275934"
    },

    {
      icon: <FaEnvelope className="text-cyan-400 text-2xl" />,
      title: "Email",
      value: "mauryaravi599@gmail.com",
      link: "mailto:mauryaravi599@gmail.com"
    },

    {
      icon: <FaLinkedin className="text-cyan-400 text-2xl" />,
      title: "LinkedIn",
      value: "https://linkedin.com/in/ravi-maurya-1a37331b6/",
      link: "https://www.linkedin.com/in/ravi-maurya-1a37331b6/"
    },

    {
      icon: <FaGithub className="text-cyan-400 text-2xl" />,
      title: "GitHub",
      value: "https://github.com/Ravi2977",
      link: "https://github.com/Ravi2977"
    }

  ];


  return (
    <section id="contact" className="hero-bg py-28">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl font-semibold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Interested in working together or hiring me?
            Feel free to reach out through any platform below.
          </p>

        </motion.div>


        {/* CONTACT GRID */}

        <div className="grid md:grid-cols-2 gap-8">

          {contacts.map((contact, index) => (

            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-6 bg-[#111c3a] border border-gray-700 p-6 rounded-xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition"
            >

              {contact.icon}

              <div>

                <h4 className="text-sm text-gray-400">
                  {contact.title}
                </h4>

                <p className="text-white font-medium">
                  {contact.value}
                </p>

              </div>

            </motion.a>

          ))}

        </div>


        {/* CTA BUTTON */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >

          <a
            href="mailto:yourmail@gmail.com"
            className="inline-block px-8 py-4 bg-cyan-500 text-black rounded-lg font-medium hover:bg-cyan-400 transition"
          >
            Let's Work Together →
          </a>

        </motion.div>

      </div>

    </section>
  );
}