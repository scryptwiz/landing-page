"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import IMAGES from "@/constants/images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OnRoadSection() {
    const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className="relative flex justify-center w-full overflow-x-hidden pt-56">
            <div className="w-full max-w-screen-2xl">
                <div className="flex flex-col lg:flex-row w-full pr-6 md:pr-10">
                    {/* Left Image Section */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={imageInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full md:w-1/2 h-[380px] md:h-[200px] lg:h-auto bg-s2"
                    >
                        <div className="absolute -top-20 z-30 w-full lg:w-[100%] h-[450px]">
                            <Image
                                src={IMAGES.ON_BIKE_TOGETHER}
                                alt="Two bikers shaking hands"
                                fill
                                className="object-cover shadow-lg"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Content Section */}
                    <motion.div
                        ref={contentRef}
                        initial={{ opacity: 0, x: 50 }}
                        animate={contentInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="relative w-full lg:w-1/2 bg-s2 flex flex-col justify-center p-6 md:p-12"
                    >
                        <h4 className="text-p1 text-sm md:text-base font-semibold">
                            Lorem ipsum
                        </h4>
                        <h2 className="text-subheadingLg font-heading font-bold text-s1">
                            LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. ENIM DONEC.
                        </h2>
                        <p className="text-s1 mt-4 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
                        </p>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-6">
                            {["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"].map((item, index) => (
                                <p key={index} className="font-semibold text-s1">
                                    {item}
                                </p>
                            ))}
                        </div>

                        <Button className="mt-6 bg-p1 text-white w-fit hover:bg-p1/90 px-6 py-3 rounded-md flex items-center gap-2">
                            Loerum Ipsum <ArrowRight size={16} />
                        </Button>
                    </motion.div>
                </div>
                <div className="pr-6 md:pr-10">
                    <div className="w-full h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] via-60%" />
                </div>
            </div>
        </section>
    );
}
