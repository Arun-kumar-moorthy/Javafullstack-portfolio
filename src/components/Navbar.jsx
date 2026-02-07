import { navLinks } from "../constants/data";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-bg-dark/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
                <a href="#" className="brand !text-4xl !tracking-tighter">
                    Arun<span className="text-primary">.</span>
                </a>
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
            </div>
        </nav>
    );
};

export default Navbar;
