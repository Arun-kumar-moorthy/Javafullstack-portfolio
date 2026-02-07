import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "Arun Kumar";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 150);
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background ambient shapes */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta/20 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-4 tracking-wider uppercase">
                        <span className="name">HI, I AM</span>{" "}
                        <span className="brand !text-[40px] md:!text-[60px] ml-2">
                            {text}
                        </span>
                    </h2>
                    <h1 className="hero-title mb-8 tracking-tighter">
                        Java Full Stack<br />Developer
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12">
                        Transitioning from Electrical Engineering with a passion for building scalable
                        backend systems and interactive web experiences.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Let's Talk</a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative lines or shapes could go here */}
        </section>
    );
};

export default Hero;
