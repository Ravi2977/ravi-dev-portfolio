import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="max-w-[1300px] mx-auto px-5 md:px-8 py-4 md:py-5 flex items-center justify-between">

        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="Ravi Logo"
            whileHover={{ scale: 1.05 }}
            className="h-9 md:h-10 w-auto cursor-pointer"
          />
        </a>

        {/* DESKTOP NAV */}
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

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-6 pb-6 bg-black/90 backdrop-blur-md"
          >
            <div className="flex flex-col gap-6 mt-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 text-lg hover:text-white transition"
                >
                  {item.name}
                </a>
              ))}

              {/* CTA BUTTON MOBILE */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 bg-cyan-500 text-black font-medium rounded-lg text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}