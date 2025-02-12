"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MoveRight } from "lucide-react";

// Validation Schema
const schema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email format"),
    phone: z.string().regex(/^\+?\d{7,15}$/, "Invalid phone number"),
    timeframe: z.string().min(1, "Time Frame is required"),
    size: z.string().min(1, "Size is required"),
    quantity: z.string().min(1, "Quantity is required"),
    project: z.string().min(10, "Project description must be at least 10 characters"),
});

export default function RequestQuoteForm() {
    const [submitted, setSubmitted] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        setSubmitted(true);
    };

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full py-16 flex justify-center overflow-hidden"
        >
            <div className="max-w-screen-lg w-full px-6">
                <h2 className="font-heading text-subheadingSm text-center mb-6">REQUEST A QUOTE</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" type="text" placeholder="Your Name" {...register("name")} />
                            {errors.name?.message && typeof errors.name.message === "string" && <motion.p className="text-red-500 text-sm">{errors.name.message}</motion.p>}
                        </div>
                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" type="email" placeholder="Your Email" {...register("email")} />
                            {errors.email?.message && typeof errors.email.message === "string" && <motion.p className="text-red-500 text-sm">{errors.email.message}</motion.p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="Your Phone Number" {...register("phone")} />
                            {errors.phone?.message && typeof errors.phone.message === "string" && <motion.p className="text-red-500 text-sm">{errors.phone.message}</motion.p>}
                        </div>
                        <div>
                            <Label htmlFor="timeframe">Time Frame *</Label>
                            <Select onValueChange={(value) => setValue("timeframe", value)}>
                                <SelectTrigger id="timeframe">
                                    <SelectValue placeholder="Choose Time Frame" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1week">1 Week</SelectItem>
                                    <SelectItem value="2weeks">2 Weeks</SelectItem>
                                    <SelectItem value="1month">1 Month</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.timeframe?.message && typeof errors.timeframe.message === "string" && <motion.p className="text-red-500 text-sm">{errors.timeframe.message}</motion.p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="size">Size *</Label>
                            <Select onValueChange={(value) => setValue("size", value)}>
                                <SelectTrigger id="size">
                                    <SelectValue placeholder="Choose Size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="small">Small</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="large">Large</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.size?.message && typeof errors.size.message === "string" && <motion.p className="text-red-500 text-sm">{errors.size.message}</motion.p>}
                        </div>
                        <div>
                            <Label htmlFor="quantity">Quantity *</Label>
                            <Select onValueChange={(value) => setValue("quantity", value)}>
                                <SelectTrigger id="quantity">
                                    <SelectValue placeholder="Choose Quantity" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="5">5</SelectItem>
                                    <SelectItem value="10">10</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.quantity?.message && typeof errors.quantity.message === "string" && <motion.p className="text-red-500 text-sm">{errors.quantity.message}</motion.p>}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="project">Please Describe Your Project *</Label>
                        <Textarea id="project" placeholder="Choose a project type" rows={4} {...register("project")} />
                        {errors.project?.message && typeof errors.project.message === "string" && <motion.p className="text-red-500 text-sm">{errors.project.message}</motion.p>}
                    </div>

                    <p className="text-sm text-center text-gray-500">
                        By submitting this form you agree to our{" "}
                        <a href="#" className="text-p2 underline">Terms of Service</a> and{" "}
                        <a href="#" className="text-p2 underline">Privacy Policy</a>.
                    </p>

                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            variant="default"
                            className="bg-p1 hover:bg-p1/90 h-10 text-white px-4 py-2 rounded-md font-semibold tracking-wider flex items-center gap-2"
                        >
                            Lorem Ipsum <MoveRight />
                        </Button>
                    </div>

                    {submitted && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-green-500 text-center font-semibold"
                        >
                            🎉 Your request has been submitted successfully!
                        </motion.p>
                    )}
                </form>
            </div>
        </motion.section>
    );
}
