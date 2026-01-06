import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Settings, LogOut, Bell, ChevronDown, Shield, CreditCard } from "lucide-react";
import { cn } from "../utils/cn";

export interface ProfileDropdownProps {
    user: {
        name: string;
        email: string;
        avatar?: string;
    };
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const menuItems = [
        { icon: <User size={16} />, label: "View Profile", detail: "Personal information" },
        { icon: <Settings size={16} />, label: "Account Settings", detail: "Privacy and preferences" },
        { icon: <Bell size={16} />, label: "Notifications", detail: "Alerts and activity" },
        { icon: <Shield size={16} />, label: "Security", detail: "Password and 2FA" },
        { icon: <CreditCard size={16} />, label: "Billing", detail: "Subscription and plans" },
    ];

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center gap-3 p-2 rounded-2xl transition-all duration-300 outline-none",
                    "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                    isOpen && "bg-neutral-100 dark:bg-neutral-800 ring-2 ring-neutral-200 dark:ring-neutral-700"
                )}
            >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-neutral-50 overflow-hidden flex-shrink-0 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
                    {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-neutral-50 dark:text-neutral-900 font-bold text-sm leading-none tabular-nums">
                            {user.name.split(" ").map(n => n[0]).join("")}
                        </span>
                    )}
                </div>

                <div className="hidden sm:flex flex-col items-start pr-1">
                    <span className="text-sm font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
                        {user.name}
                    </span>
                    <span className="text-[0.65rem] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                        Enterprise Tier
                    </span>
                </div>

                <ChevronDown
                    size={16}
                    className={cn(
                        "text-neutral-400 transition-transform duration-300 mr-1",
                        isOpen && "rotate-180 text-neutral-900 dark:text-neutral-50"
                    )}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={cn(
                            "absolute right-0 mt-4 w-72 rounded-[2rem] overflow-hidden z-50",
                            "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl"
                        )}
                    >
                        {}
                        <div className="p-6 border-b border-neutral-100 dark:border-neutral-800/50 bg-neutral-50/50 dark:bg-neutral-800/30">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-neutral-900 dark:bg-neutral-50 flex items-center justify-center font-black text-white dark:text-neutral-900 text-lg">
                                    {user.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-black text-neutral-900 dark:text-neutral-50 leading-none mb-1 text-base">
                                        {user.name}
                                    </h4>
                                    <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium truncate max-w-[160px]">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {}
                        <div className="py-3 px-2">
                            {menuItems.map((item, index) => (
                                <button
                                    key={index}
                                    className={cn(
                                        "w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-left transition-all duration-200 group outline-none",
                                        "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                    )}
                                >
                                    <div className="w-8 h-8 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-neutral-900 dark:text-white leading-none mb-1">
                                            {item.label}
                                        </span>
                                        <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-medium">
                                            {item.detail}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {}
                        <div className="p-2 pt-0 border-t border-neutral-100 dark:border-neutral-800/50">
                            <button
                                className={cn(
                                    "w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all duration-200 group outline-none",
                                    "hover:bg-red-50 dark:hover:bg-red-950/20"
                                )}
                            >
                                <div className="w-8 h-8 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-500 font-bold group-hover:bg-red-500 group-hover:text-white transition-all">
                                    <LogOut size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-red-500 leading-none mb-1">
                                        Sign Out
                                    </span>
                                    <span className="text-[10px] text-red-400 dark:text-red-900/60 font-medium uppercase tracking-widest">
                                        Terminate Session
                                    </span>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
