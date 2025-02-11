"use client"
import Image from "next/image";
import IMAGES from "@/constants/images";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export default function AppPromoSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="px-6 lg:px-20 py-12 bg-s2">
            <div className="max-w-screen-2xl flex flex-col-reverse lg:flex-row items-center justify-between mx-auto">
                {/* Left Section - Text Content */}
                <motion.div
                    className="lg:w-1/2 text-center lg:text-left space-y-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h5 className="text-p2 font-heading text-subheadingSm">Lorem Ipsum</h5>
                    <h2 className="text-subheadingLg font-heading font-bold">
                        Lorem Ipsum Dolor <br className="sm:block hidden"/> Sit Amet
                    </h2>
                    <p className="text-s1 max-w-xl">
                        Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
                        suspendisse convallis. Urna a urna lectus donec felis risus dui
                        pellentesque. Pellentesque ultricies ipsum.
                    </p>

                    {/* Store Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-4 mt-6"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                            },
                        }}
                    >
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            <Image
                                src={IMAGES.LOGOS.GOOGLE_PLAY}
                                alt="Get it on Google Play"
                                width={160}
                                height={48}
                                className="cursor-pointer"
                            />
                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            <Image
                                src={IMAGES.LOGOS.APPLE_STORE}
                                alt="Download on the App Store"
                                width={160}
                                height={48}
                                className="cursor-pointer"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Section - Optimized Image */}
                <motion.div
                    className="lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Image
                        src={IMAGES.SECTION6_IMAGE}
                        alt="Hand holding phone"
                        width={500}
                        height={500}
                        className="w-full max-w-lg object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}
