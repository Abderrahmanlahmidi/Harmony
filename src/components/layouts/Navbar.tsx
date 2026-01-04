import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Layout, Github, Sun, Moon } from "lucide-react";
import { cn } from "../../utils/cn";
import { useDarkMode } from "../../hooks/useDarkMode";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Components", href: "#components" },
    { label: "Documentation", href: "#docs" },
    { label: "Templates", href: "#templates" },
    { label: "Showcase", href: "#showcase" },
];

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDarkMode, toggleTheme } = useDarkMode();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[50] transition-all duration-300 px-6 py-4",
                scrolled
                    ? "bg-white/70 dark:bg-neutral-50/70 backdrop-blur-xl shadow-lg py-3"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-neutral-900 dark:bg-neutral-900 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                        <Layout className="w-6 h-6 text-neutral-50" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-neutral-900 dark:text-neutral-900">
                        HARMONY
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-bold text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all"
                    >
                        <Github size={20} />
                    </a>
                    <button className="px-6 py-2.5 bg-neutral-900 text-neutral-50 rounded-xl font-black text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-neutral-900/10">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-xl text-neutral-900 hover:bg-neutral-100 transition-all"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-6 right-6 mt-4 p-6 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-200 dark:border-neutral-200 shadow-2xl md:hidden z-[60]"
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-neutral-600 hover:text-neutral-900 p-2 rounded-xl hover:bg-neutral-100 transition-all"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="h-px bg-neutral-100 my-2" />
                            <div className="flex items-center justify-between px-2">
                                <span className="font-bold text-neutral-900">Switch Theme</span>
                                <button
                                    onClick={toggleTheme}
                                    className="p-3 rounded-xl bg-neutral-100 text-neutral-900"
                                >
                                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                            </div>
                            <button className="w-full py-4 bg-neutral-900 text-neutral-50 rounded-2xl font-black text-lg mt-4 shadow-xl">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
