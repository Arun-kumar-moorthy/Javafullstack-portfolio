import { useState } from "react";
import { navLinks } from "../constants/data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
            }
        })
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-bg-dark/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
                <a href="#" className="gradient-text !text-4xl !tracking-tighter font-black z-50 relative">
                    Arun.
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-primary transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white z-50 relative focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed inset-0 bg-bg-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden"
                        >
                            <ul className="flex flex-col gap-8 text-center">
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.id}
                                        custom={i}
                                        variants={linkVariants}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-2xl font-black text-white hover:text-primary transition-colors uppercase tracking-tighter"
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
