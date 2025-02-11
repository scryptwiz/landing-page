"use client";
import React from "react";
import { blogPosts } from "@/constants/section/section4-data";
import { fadeInUp } from "@/constants/animations/variants";
import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Section4 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section ref={ref} className="w-full py-16 relative section4 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6 z-10 relative">
                <motion.h3
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="text-subheadingSm font-heading text-p2 mb-4"
                >
                    Lorem ipsum dolor sit amet
                </motion.h3>
                <motion.h2
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                    className="text-subheadingLg font-heading text-gray-900 mb-4"
                >
                    LOREM IPSUM DOLOR SIT
                </motion.h2>
                <motion.p
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                    className="text-s1 mb-8 max-w-xl"
                >
                    Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut
                    aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at
                    purus lectus.
                </motion.p>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <div className="w-full h-60 relative">
                                <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                                <a
                                    href={post.link}
                                    className="text-p2 font-semibold text-sm hover:underline transform transition-all duration-500"
                                >
                                    Learn More
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section4;
