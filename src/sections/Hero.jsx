import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "HI, I AM  ARUN KUMAR";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background ambient shapes */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-magenta/10 rounded-full blur-[140px] animate-pulse delay-700" />

            <div className="section-container flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2
                        className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase"
                        style={{
                            color: '#FFFFFF',
                            textShadow: '0 0 15px rgba(255,255,255,0.4)',
                            WebkitTextFillColor: '#FFFFFF'
                        }}
                    >
                        {text}
                        <span className="animate-blink ml-1 border-r-4 border-white"></span>
                    </h2>
                    <h1 className="hero-title mb-8 tracking-tighter">
                        Java Full Stack<br />Developer
                    </h1>
                    <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                        I specialize in Java Full Stack Development using Java, Spring Boot, React, and MySQL to build scalable, secure, and responsive web applications. My Electrical Engineering background strengthens my logical thinking, debugging skills, and ability to design efficient systems.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <a href="#projects" className="btn btn-primary !px-10 !py-3.5 text-base">View Projects</a>
                        <a href="#contact" className="btn btn-outline !px-10 !py-3.5 text-base">Let's Talk</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
