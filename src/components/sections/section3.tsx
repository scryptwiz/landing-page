"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IMAGES from "@/constants/images";
import {fadeIn, scaleFadeIn, slideInLeft, textFadeUp} from "@/constants/animations/variants";

const BannerSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section
            className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center text-white mt-20 overflow-hidden"
            ref={ref}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={IMAGES.SECTION3_IMAGE}
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

            {/* Content (Centered) */}
            <motion.div
                className="relative z-10 px-6 md:px-12 lg:px-24 max-w-screen-xl w-full text-center"
                variants={scaleFadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.h1
                    className="text-heading font-heading font-bold"
                    variants={textFadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={0.3}
                >
                    LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
                </motion.h1>
                <motion.p
                    className="mt-6 text-sm md:text-base lg:text-lg"
                    variants={textFadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={0.5}
                >
                    Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus
                    amet.
                    Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna
                    arcu
                    vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
                </motion.p>
                <motion.p
                    className="mt-4 text-sm md:text-base lg:text-lg"
                    variants={textFadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={0.7}
                >
                    Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare
                    semper
                    in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla
                    luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula.
                    Tincidunt cursus vitae leo.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default BannerSection;
