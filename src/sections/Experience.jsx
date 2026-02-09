import { motion } from "framer-motion";
import { workExperiences } from "../constants/data";
import { LinearGradient } from "react-text-gradients";

const Experience = () => {
    return (
        <section id="experience" className="w-full relative">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        <span className="text-white">My</span>{" "}
                        <span className="gradient-text !text-[50px] md:!text-[75px] ml-2">Journey</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        A timeline of my professional growth, from Electrical Engineering foundations to Java Full Stack Development.
                    </p>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2">
                    {workExperiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right md:left-[-50%]" : "md:pl-12 md:left-[0%]"
                                }`}
                        >
                            <div className="absolute top-0 w-4 h-4 rounded-full bg-[#00E5FF] border-4 border-bg-dark -left-[9px] md:left-auto md:right-[-9px] translate-y-2 shadow-[0_0_10px_#00E5FF]"
                                style={index % 2 !== 0 ? { left: '-9px' } : {}}></div>

                            <div className="glass-card">
                                <span className="text-[#00E5FF] font-bold text-xs uppercase tracking-widest mb-2 block">{exp.duration}</span>
                                <h3 className="text-2xl font-black mb-1">{exp.position}</h3>
                                <p className="text-gray-400 font-medium mb-4">{exp.company}</p>
                                <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300 uppercase tracking-tighter">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
