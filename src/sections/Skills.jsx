import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";
import SkillGlobe from "../components/SkillGlobe";

const Skills = () => {
    return (
        <section id="skills" className="w-full relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="section-container relative z-10 !py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-2 block">Tech Stack</span>
                    <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
                        <span className="text-white">My</span>{" "}
                        <span className="gradient-text !text-[50px] md:!text-[70px] ml-2">Skills</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A dynamic 3D overview of my technical expertise and professional tools.
                    </p>
                </motion.div>

                <div className="flex justify-center items-center py-10">
                    <SkillGlobe />
                </div>
            </div>
        </section>
    );
};

export default Skills;
