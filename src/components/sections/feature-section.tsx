"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import IMAGES from "@/constants/images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FeatureSection() {
    const [activeTab, setActiveTab] = useState("Research");

    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className="relative overflow-hidden">
            <div
                className="max-w-screen-2xl flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12 py-32 mx-auto"
            >
                <div className="absolute inset-0 -z-10 bg-stars-pattern bg-cover bg-center opacity-80"></div>

                {/* Left Content */}
                <motion.div
                    ref={textRef}
                    initial={{ opacity: 0, x: -50 }}
                    animate={textInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 flex-1"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-text-s1">
                        LOREM IPSUM DOLOR SIT AMET
                    </h2>

                    {/* Tabs */}
                    <div className="mt-4 flex border border-gray-300 rounded-lg overflow-hidden w-full max-w-sm">
                        {["Research", "Plan", "Design"].map((tab) => (
                            <button
                                key={tab}
                                className={`flex-1 py-2 text-center border-gray-300 text-sm md:text-base font-medium transition-all ${
                                    activeTab === tab
                                        ? "bg-p1/20"
                                        : "text-s1 hover:bg-s2"
                                }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mt-4 max-w-lg text-sm md:text-base">
                        Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
                        pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
                        ac turpis at amet. Purus malesuada placerat arcu at enim elit in
                        accumsan.
                    </p>

                    {/* Link Button */}
                    <Button
                        variant="link"
                        className="mt-4 text-p1 font-semibold flex items-center gap-2"
                    >
                        Check tools <ArrowRight size={16} />
                    </Button>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    ref={imageRef}
                    initial={{ opacity: 0, x: 50 }}
                    animate={imageInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="relative z-10 flex-1 flex justify-center"
                >
                    <Image
                        src={IMAGES.HANDSHAKE}
                        alt="Handshake"
                        width={500}
                        height={300}
                        className="shadow-md"
                    />
                </motion.div>
            </div>
        </section>
    );
}
