"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import IMAGES from "@/constants/images";
import { section1Items } from "@/constants/section/section1-data";
import { MoveRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import {containerVariants, fadeInUp, slideInLeft, slideInRight} from "@/constants/animations/variants";

const Section1 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="left-container-spacing mb-5 mx-auto overflow-hidden max-w-screen-2xl"
        >
            <div className="flex-col flex shadow-custom">
                <div className="flex flex-col md:flex-row justify-between pt-10 px-6 md:px-10 relative">
                    {/* Left Content */}
                    <motion.div variants={slideInLeft} className="w-full md:w-1/2 xl:w-1/3 space-y-6 bg-white rounded-lg flex flex-col justify-center">
                        <motion.h3 variants={fadeInUp} className="text-subheadingSm font-heading text-p2">
                            Lorem ipsum dolor sit
                        </motion.h3>
                        <motion.h2 variants={fadeInUp} className="text-subheadingLg font-heading font-bold tracking-tight text-s1">
                            LOREM IPSUM DOLOR SIT AMET
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-s1">
                            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                        </motion.p>

                        {/* List Items */}
                        <motion.div variants={fadeInUp} className="space-y-7">
                            {section1Items.map((item, index) => (
                                <motion.div key={index} variants={fadeInUp} className="flex items-center gap-4">
                                    <Image src={item.src} alt={item.alt} width={80} height={80} className="rounded-lg object-cover" />
                                    <p className="text-s1">{item.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Image (Full Height of Left Content, 80-90% Width) */}
                    <motion.div variants={slideInRight} className="hidden md:flex w-full md:w-1/2 justify-end items-center relative">
                        <div className="w-[90%] 2xl:w-[60%] min-h-[800px] h-full relative">
                            <Image src={IMAGES.SECTION1_IMAGE} alt="Motorcycles" fill className="object-cover" />
                        </div>
                    </motion.div>
                </div>

                {/* Buttons & Contact */}
                <motion.div variants={fadeInUp}>
                    <div className="px-6 md:px-10 flex md:flex-row items-center gap-5 my-5">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="default" className="bg-p1 hover:bg-p1/90 h-10 text-white px-4 py-2 rounded-md font-semibold tracking-wider flex items-center gap-2">
                                Lorem Ipsum <MoveRight />
                            </Button>
                        </motion.div>

                        <span className="flex items-center gap-2 text-p1 font-bold">
                            <Phone /> <span>123456789</span>
                        </span>
                    </div>

                    {/* Gradient Bar */}
                    <div className="pr-6 md:pr-10">
                        <div className="w-full h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] via-60%" />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Section1;
