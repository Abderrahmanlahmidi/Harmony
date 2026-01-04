import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export interface ProgressProps {
    value?: number;
    max?: number;
    variant?: "primary" | "secondary" | "success" | "danger" | "warning";
    size?: "sm" | "md" | "lg";
    label?: string;
    showValue?: boolean;
    indeterminate?: boolean;
    className?: string;
}

export const ProgressBar: React.FC<ProgressProps> = ({
    value = 0,
    max = 100,
    variant = "primary",
    size = "md",
    label,
    showValue = false,
    indeterminate = false,
    className
}) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const variants = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-success",
        danger: "bg-danger",
        warning: "bg-warning",
    };

    const heights = {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
    };

    return (
        <div className={cn("w-full space-y-2", className)}>
            {(label || showValue) && (
                <div className="flex justify-between items-end px-0.5">
                    {label && (
                        <span className="text-xs font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                            {label}
                        </span>
                    )}
                    {showValue && !indeterminate && size !== "lg" && (
                        <span className="text-xs font-bold text-neutral-900 dark:text-neutral-50 tabular-nums">
                            {Math.round(percentage)}%
                        </span>
                    )}
                </div>
            )}

            <div className={cn(
                "relative w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800",
                heights[size]
            )}>
                {indeterminate ? (
                    <motion.div
                        initial={{ left: "-40%" }}
                        animate={{ left: "100%" }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className={cn(
                            "absolute top-0 bottom-0 w-1/3 rounded-full",
                            variants[variant]
                        )}
                    />
                ) : (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={cn(
                            "absolute top-0 left-0 bottom-0 rounded-full flex items-center justify-end px-2",
                            variants[variant]
                        )}
                    >
                        {size === "lg" && showValue && percentage > 12 && (
                            <span className="text-[10px] font-black text-white whitespace-nowrap opacity-90 tabular-nums">
                                {Math.round(percentage)}%
                            </span>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

ProgressBar.displayName = "ProgressBar";
