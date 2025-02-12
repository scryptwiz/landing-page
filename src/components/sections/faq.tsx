"use client";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { faq } from "@/constants/section/faq-data";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Faq = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="bg-s2 overflow-hidden">
            <motion.div
                className="max-w-screen-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="relative z-2 py-20">
                    <h3 className="text-subheadingLg px-5 md:px-5 md:text-heading font-bold font-heading max-w-640 max-lg:max-w-xl">
                        FREQUENTLY ASKED QUESTIONS (FAQs)
                    </h3>
                </div>

                <div className="relative flex-1">
                    {faq.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="relative z-2 border-t-2 py-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div
                                className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
                                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                            >
                                <div className="flex-1">
                                    <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
                                        {index < 10 ? "0" : ""}
                                        {index}
                                    </div>
                                    <div
                                        className={`h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center ${
                                            activeId === item.id ? "max-lg:text-p1" : ""
                                        }`}
                                    >
                                        {item.question}
                                    </div>
                                </div>

                                <motion.div
                                    className={`relative flex size-12 items-center justify-center rounded-full border-0 shadow-400 transition-all duration-500 hover:border-2 group-hover:border-s1/80`}
                                    animate={{ rotate: activeId === item.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeId === item.id ? <Minus size={16} /> : <Plus size={16} />}
                                </motion.div>
                            </div>

                            <SlideDown>
                                {activeId === item.id && (
                                    <motion.div
                                        className="body-3 px-7 py-3.5 max-w-2xl"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </SlideDown>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Faq;
