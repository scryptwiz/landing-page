"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Ghost } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-s1 text-white">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
            >
                <Ghost className="w-16 h-16 text-p1" />
                <h1 className="mt-4 text-3xl font-bold">Oops! Page Not Found</h1>
                <p className="mt-2 text-gray-400">The page you are looking for doesn't exist.</p>
                <Button
                    onClick={() => router.push("/")}
                    className="mt-6 bg-p1 hover:bg-p1/90 text-white px-6 py-2 rounded-md"
                >
                    Go Home
                </Button>
            </motion.div>
        </div>
    );
}
