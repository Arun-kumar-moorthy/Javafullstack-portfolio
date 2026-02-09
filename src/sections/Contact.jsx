import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";
import { FiMail, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
    return (
        <section id="contact" className="w-full relative overflow-hidden">
            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        <span className="text-white">Let's</span>{" "}
                        <span className="gradient-text !text-[50px] md:!text-[75px] ml-2">Connect</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        I'm always open to discussing new projects, entry-level opportunities, or just chatting about Java and backend engineering.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <div className="space-y-6">
                            <a href="mailto:arunkmoorthy5@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                                    <FiMail className="text-xl group-hover:text-primary" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest block">Email</span>
                                    <span className="text-lg font-bold group-hover:text-primary transition-colors">arunkmoorthy5@gmail.com</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/arunkumar-moorthy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#0077b5] group-hover:bg-[#0077b5]/10 transition-all">
                                    <FiLinkedin className="text-xl group-hover:text-[#0077b5]" />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest block">LinkedIn</span>
                                    <span className="text-lg font-bold">arunkumar-moorthy</span>
                                </div>
                            </a>

                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com/Arun-kumar-moorthy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all">
                                    <FiGithub className="text-xl" />
                                </a>
                                <a href="https://www.instagram.com/ak_soul_shine/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#e1306c] hover:bg-[#e1306c]/10 transition-all">
                                    <FiInstagram className="text-xl" />
                                </a>
                                <a href="https://wa.me/93613020125" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#25d366] hover:bg-[#25d366]/10 transition-all">
                                    <FaWhatsapp className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-card p-10"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">FullName</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="Ex: John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="Ex: john@example.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Your Message</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="How can I help you?"></textarea>
                            </div>
                            <button type="button" className="btn btn-primary w-full">Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
