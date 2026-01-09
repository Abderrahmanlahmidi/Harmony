import { Layers, ShieldCheck, Zap, Palette, Cpu, Smartphone, Globe } from "lucide-react";
import React from "react";
import { easeOut } from "framer-motion";

export const FAVICON_PATH = "/favicon.svg";

export const CONTAINER_VARIANTS = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

export const ITEM_VARIANTS = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: easeOut }
    }
};

export const TECH_STACK = [
    { name: "React v19", icon: React.createElement(Cpu, { className: "text-primary" }) },
    { name: "Tailwind v4", icon: React.createElement(Smartphone, { className: "text-secondary" }) },
    { name: "Framer Motion", icon: React.createElement(Globe, { className: "text-success" }) },
    { name: "Lucide Icons", icon: React.createElement(ShieldCheck, { className: "text-warning" }) },
];

export const FEATURE_CARDS = [
    {
        title: "Atomic Design",
        description: "Built on atomic principles for maximum reusability and clean architectural structure.",
        icon: React.createElement(Layers, { className: "w-6 h-6" }),
        color: "text-primary",
        bg: "bg-primary/10"
    },
    {
        title: "Type Safe",
        description: "100% TypeScript coverage ensures your components are bug-free and documented by default.",
        icon: React.createElement(ShieldCheck, { className: "w-6 h-6" }),
        color: "text-secondary",
        bg: "bg-secondary/10"
    },
    {
        title: "Fast Delivery",
        description: "Optimized for next-generation tools like Vite and Tailwind CSS 4 for instant dev feedback.",
        icon: React.createElement(Zap, { className: "w-6 h-6" }),
        color: "text-warning",
        bg: "bg-warning/10"
    },
    {
        title: "Theme Ready",
        description: "Deeply integrated dark mode and accessibility features built right into the core variables.",
        icon: React.createElement(Palette, { className: "w-6 h-6" }),
        color: "text-success",
        bg: "bg-success/10"
    }
];
