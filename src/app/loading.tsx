"use client";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-p1">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-white"
            >
                <Loader2 className="w-12 h-12 animate-spin text-white" />
                <p className="mt-4 text-lg font-semibold">Loading...</p>
            </motion.div>
        </div>
    );
}
