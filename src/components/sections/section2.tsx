"use client";

import {useInView} from "react-intersection-observer";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import IMAGES from "@/constants/images";
import {MoveRight} from "lucide-react";
import {motion} from "motion/react";
import {section2Items} from "@/constants/section/section2-data";
import {containerVariants, fadeInUp, slideInLeft, slideInRight} from "@/constants/animations/variants";

const Section2 = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="left-container-spacing mt-20 mb-5 mx-auto overflow-hidden max-w-screen-2xl"
        >
            <div className="flex-col flex">
                <div className="flex flex-col md:flex-row justify-between pt-10 pl-10 bg-white relative">
                    {/* Left Content */}
                    <motion.div variants={slideInLeft}
                                className="w-full md:w-1/2 2xl:w-1/3 space-y-6 bg-white rounded-lg flex flex-col justify-center">
                        <motion.h3 variants={fadeInUp} className="text-subheadingSm font-heading text-p2">
                            Lorem ipsum dolor sit amet
                        </motion.h3>
                        <motion.h2 variants={fadeInUp}
                                   className="text-subheadingLg font-heading font-bold tracking-tight text-s1">
                            LOREM IPSUM DOLOR SIT AMET CONSECTETUR.
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-s1">
                            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in
                            vitae faucibus.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="space-y-10">
                            {section2Items.map((item, index) => (
                                <motion.div key={index} variants={fadeInUp} className="flex gap-2">
                                    <div className="flex-shrink-0">
                                        <Image src={item.src} alt={item.alt} width={35} height={35}
                                               className="rounded-lg object-cover"/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-subheadingSm font-semibold">{item.title}</p>
                                        <p className="text-s1">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div variants={slideInRight}
                                className="hidden md:flex w-full md:w-1/2 justify-end items-center relative">
                        <div className="w-[100%] lg:w-[90%] 2xl:w-[60%] max-h-[600px] h-full my-auto relative">
                            <Image src={IMAGES.SECTION2_IMAGE} alt="Discussion" fill
                                   className="object-cover object-top"/>
                        </div>
                    </motion.div>
                </div>

                {/* Gradient Bar */}
                <motion.div variants={fadeInUp} className="mt-10">
                    <div className="w-full h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] via-60%"/>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Section2;
