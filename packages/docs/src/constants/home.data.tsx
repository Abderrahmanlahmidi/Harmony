import { Layers, ShieldCheck, Zap, Palette } from "lucide-react";
import React from "react";

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
