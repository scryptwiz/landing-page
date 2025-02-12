"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bolt, Star, Castle, Info } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
    {
        id: 1,
        icon: <Bolt className="w-8 h-8 text-blue-500" />,
        text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod.",
        name: "Jane Cooper",
        avatar: "/images/avatar1.jpg",
    },
    {
        id: 2,
        icon: <Star className="w-8 h-8 text-yellow-500" />,
        text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.",
        name: "Ralph Edwards",
        avatar: "/images/avatar2.jpg",
    },
    {
        id: 3,
        icon: <Castle className="w-8 h-8 text-indigo-500" />,
        text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium.",
        name: "Courtney Henry",
        avatar: "/images/avatar3.jpg",
    },
    {
        id: 4,
        icon: <Info className="w-8 h-8 text-blue-400" />,
        text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet.",
        name: "Cameron Williamson",
        avatar: "/images/avatar4.jpg",
    },
];

export default function TestimonialsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    );

    return (
        <section className="w-full bg-p1 py-16 flex flex-col items-center text-white px-4">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-4xl font-bold text-center"
            >
                Join other Sun Harvesters
            </motion.h2>
            <p className="mt-4 max-w-2xl text-center text-gray-200">
                Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            </p>

            <div className="relative w-full max-w-screen-2xl mt-8">
                <Carousel plugins={[plugin.current]} className="relative">
                    <CarouselContent className="items-center">
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <Card className="bg-white text-s1 p-6 rounded-xl shadow-md">
                                    <CardContent className="flex flex-col my-auto">
                                        {testimonial.icon}
                                        <p className="mt-4 text-s1/90">{testimonial.text}</p>
                                        <div className="mt-6 flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={testimonial.avatar} />
                                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{testimonial.name}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md text-gray-800" />
                    <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md text-gray-800" />
                </Carousel>
            </div>
        </section>
    );
}
