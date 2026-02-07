import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
    return (
        <div className="w-[300px] md:w-[450px] aspect-[4/5] md:aspect-video glass-card overflow-hidden group flex flex-col p-0">
            <div
                className="w-full h-1/2 flex items-center justify-center relative overflow-hidden"
                style={project.logoStyle}
            >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <span className="text-6xl md:text-8xl drop-shadow-2xl">{project.title.charAt(0)}</span>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl md:text-3xl font-black mb-2 tracking-tighter card-title">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm line-clamp-3 mb-4">
                    {project.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag.id} className="text-[10px] md:text-xs font-bold text-[#00E5FF] bg-[#00E5FF]/10 px-2 py-1 rounded">
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
