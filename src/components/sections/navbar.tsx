"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Menu, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_ITEMS = [
    {
        label: "Lorem Ipsum",
        href: "#",
        dropdown: true,
        items: [
            { label: "Option 1", href: "/?query='option1'" },
            { label: "Option 2", href: "/?query='option2'" },
        ],
    },
    {
        label: "Lorem Ipsum",
        href: "#",
        dropdown: true,
        items: [
            { label: "Feature A", href: "/?query='option2'" },
            { label: "Feature B", href: "/?query='option2'" },
        ],
    },
    {
        label: "Lorem Ipsum",
        href: "#",
        dropdown: true,
        items: [
            { label: "Service X", href: "/?query='option2'" },
            { label: "Service Y", href: "/?query='option2'" },
        ],
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
                scrolled ? "bg-s2 shadow-lg" : "bg-transparent"
            } text-white px-6 md:px-12 py-4`}
        >
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <motion.div
                        className="bg-gray-300 text-s1 px-4 py-2 font-bold text-lg cursor-pointer"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        LOGO
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {NAV_ITEMS.map((item, index) => (
                        <DropdownMenu key={index}>
                            <DropdownMenuTrigger asChild>
                                <span className="text-p1 flex items-center space-x-1 cursor-pointer select-none">
                                    <span>{item.label}</span>
                                    <ChevronDown size={16} />
                                </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="bg-white text-s1 w-48">
                                {item.items.map((dropdownItem, subIndex) => (
                                    <DropdownMenuItem key={subIndex} asChild>
                                        <Link href={dropdownItem.href}>{dropdownItem.label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ))}
                </div>

                {/* Sign In Button */}
                <Button className="hidden md:block bg-white hover:bg-p1 hover:text-white text-s1 shadow-lg">
                    Sign In
                </Button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    <Menu size={28} className="text-s1" />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <motion.div
                    className="md:hidden mt-4 space-y-4 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {NAV_ITEMS.map((item, index) => (
                        <DropdownMenu key={index}>
                            <DropdownMenuTrigger asChild>
                                <span className="text-p1 block cursor-pointer">{item.label}</span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="center" className="bg-white text-s1 w-40">
                                {item.items.map((dropdownItem, subIndex) => (
                                    <DropdownMenuItem key={subIndex} asChild>
                                        <Link href={dropdownItem.href}>{dropdownItem.label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ))}
                    <Button className="w-full bg-white hover:text-white hover:bg-p1 text-s1 shadow-lg">Sign In</Button>
                </motion.div>
            )}
        </motion.nav>
    );
}
