import { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import { LinearGradient } from "react-text-gradients";
import { myProjects } from "../constants/data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const carouselSlides = myProjects.map((project, index) => ({
            key: uuidv4(),
            content: <ProjectCard project={project} />,
            onClick: () => setSlideIndex(index),
        }));
        setSlides(carouselSlides);
    }, []);

    return (
        <section className="w-full flex justify-center py-20 overflow-hidden" id="projects">
            <div className="section-container w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter gradient-text">
                        Projects
                    </h2>
                    <p className="text-gray-400 text-lg mt-4">Selected works and contributions.</p>
                </motion.div>

                <div className="w-full h-[400px] md:h-[600px] mt-10 md:mt-20">
                    {slides.length > 0 && (
                        <Carousel
                            slides={slides}
                            goToSlide={slideIndex}
                            offsetRadius={2}
                            showNavigation={false}
                            animationConfig={config.gentle}
                        />
                    )}
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    {myProjects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setSlideIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${slideIndex === i ? "bg-primary w-8" : "bg-white/20 hover:bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
