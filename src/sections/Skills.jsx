import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";
import SkillGlobe from "../components/SkillGlobe";

const Skills = () => {
    return (
        <section id="skills" className="w-full relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        <span className="text-white">Technical</span>{" "}
                        <span className="gradient-text !text-[50px] md:!text-[75px] ml-2">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        A dynamic 3D overview of my software development skills, tools, and technical proficiencies.
                    </p>
                </motion.div>

                <div className="flex justify-center items-center py-4">
                    <SkillGlobe />
                </div>
            </div>
        </section>
    );
};

export default Skills;
