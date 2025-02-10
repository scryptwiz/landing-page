import type {Metadata} from "next";
import {Inter, Roboto_Condensed} from "next/font/google";
import "./globals.css";
import React from "react";

const robotoCondensed = Roboto_Condensed({
    variable: "--font-roboto-condensed",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
    title: "Landing Page",
    description: "Kelvin's Landing Page",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${robotoCondensed.variable} ${inter.variable}  antialiased`}>
                {children}
            </body>
        </html>
    );
}
