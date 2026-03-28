import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";

import heroImage from "../assets/images/dev.png";

export default function Hero() {
    return (
        <section className="hero-bg min-h-[70vh] flex items-center pt-20" id="hero">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <p className="text-gray-300 text-lg">Hello 👋</p>

                    <h1 className="text-5xl font-semibold leading-tight">
                        I am <span className="text-cyan-400">Ravi Maurya</span>
                    </h1>

                    <h2 className="text-2xl text-gray-400 mt-4">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer (React + Spring Boot)",
                                2000,
                                "Building CRM & Business Management Systems",
                                2000,
                                "Helping Businesses Go Digital 🚀",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    {/* SOCIAL ICONS */}

                    <div className="flex gap-4 mt-3 mb-8 text-xl text-gray-400">

                        <a className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
                            href="https://www.linkedin.com/in/ravi-maurya-1a37331b6/"
                            target="_blank"
                        >

                            <FaLinkedin />
                        </a>

                        <div className="flex gap-4 mb-8 text-lg">

                            <a className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
                                href="https://github.com/Ravi2977"
                                target="_blank"
                            >
                                <FaGithub />
                            </a>

                        </div>
                        {/* 
                        <a className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition">

                            <FaTwitter />
                        </a>

                        <a className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition">

                            <FaInstagram />
                        </a> */}

                    </div>

                    {/* BUTTONS */}

                    <div className="flex gap-4">

                        <a className="border border-gray-500 cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-800" href="https://drive.google.com/file/d/1C0_4noQKsZHcxOvh1dQwM4NPPlC3JYun/view?usp=drive_link" target="_blank">
                            Resume
                        </a>

                        <a className="bg-blue-500 px-6 py-3 cursor-pointer rounded-lg hover:bg-blue-600"

                            href="#contact">
                            Let's Talk
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
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="w-[700px] lg:w-[800px] xl:w-[900px] drop-shadow-[0_0_100px_rgba(0,200,255,0.25)]"
                    />

                </motion.div>

            </div>

        </section>
    );
}