"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { logos } from "@/constants/section/logos-section";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { fadeInUp, slideInLeft, slideInRight } from "@/constants/animations/variants";
import {useInView} from "react-intersection-observer";

const section1 = logos.slice(0, 4);
const section2 = logos.slice(4, 8);
const section3 = logos.slice(8, 12);

const LogoSection = () => {
    const autoplayPlugins = [
        React.useRef(Autoplay({ delay: 1000, stopOnInteraction: false })).current,
        React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false })).current,
        React.useRef(Autoplay({ delay: 1000, stopOnInteraction: false })).current
    ];

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.section
            ref={ref}
            className="w-full py-16 bg-white text-center overflow-hidden"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="max-w-screen-2xl mx-auto">
                {/* Title */}
                <motion.h2
                    variants={fadeInUp}
                    className="font-subheadingSm font-bold text-s1 md:text-heading text-subheadingLg"
                >
                    LOREM IPSUM DOLOR SIT AMET <br/> CONSECTETUR. COMMODO LEO AMET.
                </motion.h2>

                {/* Mobile - Three Separate Carousels */}
                <div className="block md:hidden mt-8 space-y-6">
                    {[section1, section2, section3].map((section, index) => (
                        <Carousel
                            key={index}
                            opts={{ align: "start" }}
                            plugins={[autoplayPlugins[index]]}
                            className="w-full max-w-sm mx-auto"
                        >
                            <CarouselContent>
                                {section.map((logo, i) => (
                                    <CarouselItem key={i} className="basis-1/2">
                                        <Card className="shadow-none border-none">
                                            <CardContent className="flex items-center justify-center p-6">
                                                <motion.div
                                                    variants={fadeInUp}
                                                    className="relative w-[120px] h-[80px] max-w-full"
                                                >
                                                    <Image src={logo.src} alt={logo.alt} fill className="object-contain"/>
                                                </motion.div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    ))}
                </div>

                {/* Desktop - Three Rows with Auto-Sizing Images */}
                <div className="hidden md:flex flex-col gap-8 mt-8">
                    {[section1, section2, section3].map((section, index) => (
                        <motion.div
                            key={index}
                            className="grid grid-cols-4 gap-6 justify-items-center"
                            variants={index === 0 ? fadeInUp : index === 1 ? slideInLeft : slideInRight}
                        >
                            {section.map((logo, i) => (
                                <motion.div
                                    key={i}
                                    className="relative w-[140px] h-[80px] max-w-full"
                                    variants={fadeInUp}
                                >
                                    <Image src={logo.src} alt={logo.alt} fill className="object-contain"/>
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default LogoSection;
