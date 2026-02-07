import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full py-12 border-t border-white/5 bg-bg-dark">
            <div className="section-container flex flex-col md:flex-row justify-between items-center gap-10">
                {/* Left side: Resume Download */}
                <div className="order-2 md:order-1">
                    <a
                        href="/Arun_Kumar_Resume.pdf"
                        download="Arun_Kumar_Resume.pdf"
                        className="bg-[#ff9720] text-black px-8 py-3 rounded-lg font-bold text-sm tracking-wide hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,151,32,0.3)]"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Center/Right: Social Links */}
                <div className="flex items-center gap-8 order-1 md:order-2">
                    <a href="https://github.com/Arun-kumar-moorthy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-all duration-300 transform hover:scale-110">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/arunkumar-moorthy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-all duration-300 transform hover:scale-110">
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href="https://www.instagram.com/ak_soul_shine/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-all duration-300 transform hover:scale-110">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://wa.me/93613020125" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-all duration-300 transform hover:scale-110">
                        <FaWhatsapp size={24} />
                    </a>
                </div>
            </div>

            <div className="section-container mt-10 pt-10 border-t border-white/5 text-center">
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">
                    &copy; {new Date().getFullYear()} <span className="text-gray-300 font-bold">Arun Kumar</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
