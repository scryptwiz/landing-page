"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import IMAGES from "@/constants/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleCheck, MoveRight } from "lucide-react";

export default function HeroSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section
            ref={ref}
            className="max-w-screen-2xl flex flex-row items-center justify-between min-h-dvh mx-auto w-full hero-section overflow-hidden container-spacing"
        >
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full lg:w-1/2 2xl:w-1/3 space-y-12"
            >
                <div className="flex flex-col gap-3">
                    <motion.h1
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-heading font-heading font-bold"
                    >
                        Lorem ipsum dolor sit amet
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-lg text-gray-600"
                    >
                        Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus
                        id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique
                        posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
                    </motion.p>
                </div>

                {/* Input Field */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col gap-3"
                >
                    <div className="flex w-full gap-3 md:w-2/3">
                        <Input
                            type="text"
                            placeholder="example@mail.com"
                            className="w-full p-4 h-12 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant={"default"}
                                className="bg-p1 hover:bg-p1/90 h-12 text-white px-4 py-2 rounded-md font-semibold tracking-wider"
                            >
                                Subscribe <MoveRight />
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                        className="flex items-center gap-1.5"
                    >
                        <CircleCheck size={32} color="#ffffff" className="fill-p2" />
                        <p>No credit required!</p>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute right-0 top-0 h-full w-1/2 hidden lg:block"
            >
                <div className="hero-image-container">
                    <Image
                        src={IMAGES.HERO}
                        alt="Motorcycle Riders"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>
            </motion.div>
        </section>
    );
}
