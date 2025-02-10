"use client";

import {useEffect} from "react";
import {motion} from "motion/react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function Home() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: zodResolver(formSchema)});

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
    };

    console.log(errors)

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-blue-600 text-white">
                <motion.div
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className="text-center"
                >
                    <h1 className="text-6xl font-bold">Welcome to WebbyWolf</h1>
                    <p className="text-xl mt-4">Building high-quality, pixel-perfect web experiences.</p>
                    <Button className="mt-6">Get Started</Button>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1.2}}
                    className="absolute bottom-0 w-full flex justify-center"
                >
                    {/*<Image*/}
                    {/*    // src="https://placehold.co/400x600.png"*/}
                    {/*    alt="Hero Section Image"*/}
                    {/*    width={600}*/}
                    {/*    height={400}*/}
                    {/*    className="rounded-lg shadow-lg transform -skew-y-3 blur-sm"*/}
                    {/*/>*/}
                </motion.div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl font-semibold"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                    >
                        About Us
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.2}}
                    >
                        We specialize in creating smooth, interactive, and responsive web applications.
                    </motion.p>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["Responsive Design", "Smooth Animations", "High Performance"].map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{scale: 1.05}}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: index * 0.2}}
                            className="bg-white p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold">{feature}</h3>
                            <p className="mt-2 text-gray-600">
                                {index === 0 && "Seamless experience across all devices."}
                                {index === 1 && "Enhancing user experience with Framer Motion."}
                                {index === 2 && "Optimized for fast loading and seamless interactions."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 px-6">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg"
                >
                    <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type="text" placeholder="Name" {...register("name")} className="mb-2"/>
                        {/*{errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}*/}

                        <Input type="email" placeholder="Email" {...register("email")} className="mb-2"/>
                        {/*{errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}*/}

                        <Textarea placeholder="Message" {...register("message")} className="mb-2"/>
                        {/*{errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}*/}

                        <Button type="submit">Submit</Button>
                    </form>
                </motion.div>
            </section>
        </div>
    );
}
