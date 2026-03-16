import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

export default function Navbar() {

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (

    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 hero-bg backdrop-blur-md border-b border-gray-800"
    >

      <div className="max-w-[1300px] mx-auto px-8 py-5 flex items-center justify-between">

        {/* LOGO */}

        <a href="#hero" className="flex items-center gap-3">

          <motion.img
            src={logo}
            alt="Ravi Logo"
            whileHover={{ scale: 1.05 }}
            className="h-10 w-auto cursor-pointer"
          />

        </a>


        {/* NAV LINKS */}

        <div className="hidden md:flex items-center gap-10">

          {navItems.map((item, index) => (

            <motion.a
              key={index}
              href={item.link}
              whileHover={{ y: -2 }}
              className="text-gray-300 font-medium tracking-wide hover:text-white transition"
            >
              {item.name}
            </motion.a>

          ))}

        </div>


        {/* CTA BUTTON */}

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-block px-6 py-3 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-400 transition"
        >
          Hire Me
        </motion.a>

      </div>

    </motion.nav>
  );
}