"use client";

import { FOOTER_DATA } from "@/constants/section/footer-data";
import { slideInLeft, fadeInUp } from "@/constants/animations/variants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <footer ref={ref} className="bg-p3 text-white py-10 px-6 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
                {/* Logo Section */}
                <div className="flex justify-center md:justify-start">
                    <motion.div
                        className="bg-gray-200 h-fit text-black px-4 md:px-12 py-2 md:py-3 font-bold text-sm md:text-lg z-20"
                        variants={slideInLeft}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        LOGO
                    </motion.div>
                </div>

                {/* Footer Links */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto"
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                        },
                    }}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {FOOTER_DATA.columns.map((column, colIndex) => (
                        <motion.div key={colIndex} variants={fadeInUp}>
                            <h3 className="font-bold text-lg mb-3">{column.title}</h3>
                            <ul className="space-y-2">
                                {column.links.map((text, rowIndex) => (
                                    <motion.li
                                        key={rowIndex}
                                        className="text-gray-400 text-sm"
                                        variants={fadeInUp}
                                    >
                                        {text}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
