import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }} // 🔥 EXIT ANIMATION
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-[#0B132B] flex flex-col items-center justify-center z-[999] overflow-hidden"
    >

      {/* GLOW */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-[450px] h-[450px] bg-cyan-400/20 blur-[140px] rounded-full"
      />

      {/* LOGO */}
      <motion.img
        src={logo}
        alt="logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-[180px] md:w-[220px] drop-shadow-[0_0_60px_rgba(0,255,255,0.6)] z-10"
      />

      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
      >
        Ravi Maurya
      </motion.h1>

      {/* TAGLINE */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-2 text-gray-400 text-sm"
      >
        Full Stack Developer • 2+ Years Experience
      </motion.p>

    </motion.div>
  );
}