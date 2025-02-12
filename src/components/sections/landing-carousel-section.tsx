"use client";

import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {slides} from "@/constants/section/landing-carousel-data";
import Autoplay from "embla-carousel-autoplay";


export default function LandingCarouselSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const plugin = React.useRef(
        Autoplay({delay: 2000, stopOnInteraction: false})
    );

    return (
        <section className="w-full py-16 flex flex-col items-center">
            <motion.h2
                initial={{opacity: 0, y: -30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="font-bold text-heading font-heading text-center mb-6"
            >
                LOREM IPSUM DOLOR SIT AMET
            </motion.h2>
            <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2, duration: 0.8}}
                className="text-s1 text-center max-w-2xl px-6"
            >
                Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit
                fringilla aliquam ultricies.
            </motion.p>

            <div className="w-full max-w-screen-2xl mt-8 px-5">
                <Carousel className="relative" plugins={[plugin.current]}>
                    <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={slide.id} className="flex flex-col md:flex-row items-center">
                                {/* Image Section */}
                                <motion.div
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5}}
                                    className="relative w-full md:w-3/5"
                                >
                                    <Image src={slide.image} alt={slide.title} width={800} height={500}
                                           className="rounded-r-lg shadow-md"/>
                                </motion.div>

                                {/* Text Section */}
                                <motion.div
                                    initial={{opacity: 0, x: 50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 0.3, duration: 0.6}}
                                    className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/5 -mt-6 md:mt-0 md:ml-6"
                                >
                                    <h3 className="font-semibold text-lg">{slide.title}</h3>
                                    <p className="text-s1/90 mt-2">{slide.description}</p>
                                    <Button variant="link" className="mt-4 text-blue-500">
                                        Read Full Story →
                                    </Button>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious
                        className="absolute opacity-40 focus:opacity-100 left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md"/>
                    <CarouselNext
                        className="absolute right-2 opacity-40 focus:opacity-100 top-1/2 transform -translate-y-1/2 bg-white shadow-md"/>
                </Carousel>
            </div>
        </section>
    );
}
