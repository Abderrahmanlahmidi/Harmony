import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, X, Loader2, Command } from "lucide-react";
import { cn } from "../utils/cn";

export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    onClear?: () => void;
    showShortcut?: boolean;
    shortcut?: string;
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
    ({ className, size = "md", isLoading, onClear, showShortcut = true, shortcut = "K", ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);
        const [value, setValue] = useState(props.value || props.defaultValue || "");
        const inputRef = useRef<HTMLInputElement>(null);

        const handleClear = () => {
            setValue("");
            onClear?.();
            if (inputRef.current) {
                inputRef.current.focus();
            }
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
            props.onChange?.(e);
        };

        const sizes = {
            sm: "h-9 pl-10 pr-3 text-sm",
            md: "h-11 pl-12 pr-4 text-base",
            lg: "h-14 pl-14 pr-5 text-lg",
        };

        const iconSizes = {
            sm: 16,
            md: 18,
            lg: 20,
        };

        const iconPositions = {
            sm: "left-3.5",
            md: "left-4",
            lg: "left-5",
        };

        return (
            <div className={cn("relative w-full group", className)}>
                <div
                    className={cn(
                        "relative flex items-center transition-all duration-300 rounded-2xl border-2 overflow-hidden",
                        "bg-white dark:bg-neutral-50 border-neutral-200 dark:border-neutral-200",
                        isFocused && "border-primary ring-4 ring-primary/5"
                    )}
                >
                    {}
                    <div className={cn(
                        "absolute pointer-events-none flex items-center justify-center transition-colors duration-300",
                        iconPositions[size],
                        isFocused ? "text-primary" : "text-neutral-400 group-hover:text-neutral-500"
                    )}>
                        {isLoading ? (
                            <Loader2 size={iconSizes[size]} className="animate-spin text-primary" />
                        ) : (
                            <SearchIcon size={iconSizes[size]} />
                        )}
                    </div>

                    <input
                        {...props}
                        ref={(node) => {
                            if (typeof ref === "function") ref(node);
                            else if (ref) (ref as any).current = node;
                            (inputRef as any).current = node;
                        }}
                        value={value}
                        onChange={handleChange}
                        onFocus={(e) => {
                            setIsFocused(true);
                            props.onFocus?.(e);
                        }}
                        onBlur={(e) => {
                            setIsFocused(false);
                            props.onBlur?.(e);
                        }}
                        className={cn(
                            "w-full bg-transparent border-none outline-none text-neutral-900 dark:text-neutral-900 placeholder-neutral-400 font-medium",
                            sizes[size]
                        )}
                        type="text"
                    />

                    {}
                    <div className="absolute right-2 flex items-center gap-2">
                        <AnimatePresence>
                            {value && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    onClick={handleClear}
                                    className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-100 rounded-full text-neutral-400 hover:text-neutral-600 transition-colors"
                                >
                                    <X size={iconSizes[size] - 2} strokeWidth={3} />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        {showShortcut && !isFocused && !value && (
                            <div className="hidden md:flex items-center gap-1 px-1.5 py-1 bg-neutral-100 dark:bg-neutral-200 rounded-lg border border-neutral-200 dark:border-neutral-300 opacity-60">
                                <Command size={10} className="text-neutral-500" />
                                <span className="text-[10px] font-black text-neutral-500 uppercase">{shortcut}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
);

SearchBar.displayName = "SearchBar";
