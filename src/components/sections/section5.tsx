"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IMAGES from "@/constants/images";
import {fadeIn, scaleFadeIn, slideInLeft, textFadeUp} from "@/constants/animations/variants";

const Section5 = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section
            className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[500px] flex items-center justify-center text-center text-white mt-20 py-20 md:py-0 overflow-hidden"
            ref={ref}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={IMAGES.SECTION5_IMAGE}
                    alt="Banner Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    variants={fadeIn}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                />
            </div>

            {/* LOGO Button Animation */}
            <motion.div
                className="absolute top-5 left-5 md:top-10 md:left-10 bg-gray-200 text-black px-4 md:px-12 py-2 md:py-3 font-bold text-sm md:text-lg z-20"
                variants={slideInLeft}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                LOGO
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full text-center"
                variants={scaleFadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.h1
                    className="md:text-heading text-subheadingLg font-heading font-bold capitalize max-w-3xl mx-auto"
                    variants={textFadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={0.3}
                >
                    dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing
                </motion.h1>
            </motion.div>
        </section>
    );
};

export default Section5;
