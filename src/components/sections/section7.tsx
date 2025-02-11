"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import IMAGES from "@/constants/images";

export default function Section7() {
    return (
        <section className="relative bg-p1/20 pt-16 px-4 sm:px-6 lg:px-12 overflow-hidden h-[400px] md:h-[860px]">
            <div className="relative max-w-screen-2xl mx-auto flex flex-col h-full md:flex-row gap-12">

                {/* Background Image - Spans max-width but adjusts height to content */}
                <Image
                    src={IMAGES.GROUPED_BIKE}
                    alt="Background Bike Images"
                    fill
                    className="absolute top-0 left-0 w-full h-fit object-cover opacity-30 md:opacity-100 pointer-events-none"
                />

                {/* Content Wrapper */}
                <motion.div
                    className="relative z-10 w-full md:max-w-sm lg:max-w-sm text-center md:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-s1/50 text-sm font-semibold tracking-wide">NO LIMITS</h3>
                    <h2 className="text-3xl sm:text-4xl font-bold text-s1 mt-2 leading-tight">
                        LOREM IPSUM DOLOR SIT AMET
                    </h2>
                    <p className="text-s1 mt-4">
                        Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor pharetra
                        tempor quis arcu. Ipsum nullam.
                    </p>
                    <Button className="mt-6 bg-p1 hover:bg-p1/90 text-white px-6 py-3">
                        Loerum Ipsum →
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
