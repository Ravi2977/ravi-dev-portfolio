import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import heroImage from "../assets/images/dev.png";
import { useState } from "react";

export default function Hero() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };
    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative hero-bg min-h-[80vh] flex items-center pt-20 overflow-hidden"
            id="hero"
        >
            <div
                className="fixed w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full pointer-events-none z-0"
                style={{
                    top: position.y - 150,
                    left: position.x - 150,
                }}
            ></div>
            {/* 🔥 BACKGROUND GLOW */}
            <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 relative z-10">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <p className="text-gray-400 text-lg mb-2">Hello 👋</p>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Ravi Maurya
                        </span>
                    </h1>

                    <h2 className="text-2xl text-gray-400 mt-4">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer (React + Spring Boot)",
                                2000,
                                "Building CRM & Business Systems",
                                2000,
                                "Helping Businesses Grow Digitally 🚀",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>

                    {/* 🔥 TRUST LINE */}
                    <p className="text-gray-500 mt-4 max-w-lg">
                        2+ years of experience building production-level applications for real clients across CRM, healthcare, and e-commerce.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 mt-6 text-lg">

                        <a
                            href="https://www.linkedin.com/in/ravi-maurya-1a37331b6/"
                            target="_blank"
                            className="w-11 h-11 flex items-center justify-center rounded-full 
              bg-white/5 border border-white/10 
              hover:border-cyan-400 hover:text-cyan-400 
              hover:scale-110 transition"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/Ravi2977"
                            target="_blank"
                            className="w-11 h-11 flex items-center justify-center rounded-full 
              bg-white/5 border border-white/10 
              hover:border-cyan-400 hover:text-cyan-400 
              hover:scale-110 transition"
                        >
                            <FaGithub />
                        </a>

                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-8 flex-wrap">

                        <a
                            href="https://drive.google.com/file/d/1C0_4noQKsZHcxOvh1dQwM4NPPlC3JYun/view?usp=drive_link"
                            target="_blank"
                            className="px-6 py-3 rounded-xl border border-gray-600 
              hover:border-cyan-400 hover:text-cyan-400 
              transition"
                        >
                            Download Resume
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-xl 
              bg-gradient-to-r from-cyan-400 to-blue-500 
              text-black font-medium 
              hover:scale-105 transition duration-300"
                        >
                            Let’s Work Together →
                        </a>

                    </div>

                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center md:justify-end"
                >

                    <motion.img
                        src={heroImage}
                        alt="developer"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="w-[500px] md:w-[600px] lg:w-[700px] 
            drop-shadow-[0_0_120px_rgba(0,200,255,0.25)]"
                    />

                </motion.div>

            </div>

        </section>
    );
}