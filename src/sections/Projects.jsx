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
        <section className="w-full relative overflow-hidden" id="projects">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        <span className="text-white">Featured</span>{" "}
                        <span className="gradient-text !text-[50px] md:!text-[75px] ml-2">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        A selection of my recent work and core development contributions.
                    </p>
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
