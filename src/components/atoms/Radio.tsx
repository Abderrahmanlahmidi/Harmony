import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    description?: string;
    error?: string | boolean;
    size?: "sm" | "md" | "lg";
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ className, label, description, error, size = "md", id, ...props }, ref) => {
        const generatedId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

        const sizes = {
            sm: "w-4 h-4",
            md: "w-5 h-5",
            lg: "w-6 h-6",
        };

        const innerSizes = {
            sm: "w-1.5 h-1.5",
            md: "w-2 h-2",
            lg: "w-2.5 h-2.5",
        };

        return (
            <div className={cn("flex flex-col gap-1.5", className)}>
                <label
                    htmlFor={generatedId}
                    className={cn(
                        "group flex items-start gap-3 cursor-pointer select-none",
                        props.disabled && "cursor-not-allowed opacity-50"
                    )}
                >
                    <div className="relative flex items-center justify-center pt-0.5">
                        <input
                            type="radio"
                            id={generatedId}
                            ref={ref}
                            className="peer sr-only"
                            {...props}
                        />

                        {/* Outer Circle */}
                        <div className={cn(
                            "rounded-full border-2 transition-all duration-200",
                            sizes[size],
                            "border-neutral-300 bg-white dark:bg-neutral-800 dark:border-neutral-700",
                            "peer-checked:border-primary peer-hover:border-primary/50",
                            "peer-focus-visible:ring-4 peer-focus-visible:ring-primary/10",
                            error && "border-danger dark:border-danger"
                        )} />

                        {/* Inner Dot */}
                        <motion.div
                            initial={false}
                            animate={{
                                scale: props.checked ? 1 : 0,
                                opacity: props.checked ? 1 : 0
                            }}
                            className={cn(
                                "absolute rounded-full bg-primary",
                                innerSizes[size]
                            )}
                        />
                    </div>

                    <div className="flex flex-col">
                        {label && (
                            <span className={cn(
                                "font-bold transition-colors duration-200 leading-tight text-neutral-900",
                                error && "text-danger",
                                size === "sm" && "text-sm",
                                size === "md" && "text-base",
                                size === "lg" && "text-lg"
                            )}>
                                {label}
                            </span>
                        )}
                        {description && (
                            <span className={cn(
                                "text-neutral-500 font-medium transition-colors duration-200",
                                size === "sm" && "text-xs",
                                size === "md" && "text-sm",
                                size === "lg" && "text-base"
                            )}>
                                {description}
                            </span>
                        )}
                    </div>
                </label>

                {typeof error === "string" && (
                    <p className="text-xs font-bold text-danger ml-8 animate-in fade-in slide-in-from-top-1">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Radio.displayName = "Radio";

// Radio Group for better architecture
export interface RadioGroupProps {
    children: React.ReactNode;
    label?: string;
    error?: string;
    className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, label, error, className }) => {
    return (
        <fieldset className={cn("space-y-4", className)}>
            {label && (
                <legend className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-neutral-400 mb-4 px-1">
                    {label}
                </legend>
            )}
            <div className="space-y-3">
                {children}
            </div>
            {error && (
                <p className="text-xs font-bold text-danger animate-in fade-in slide-in-from-top-1">
                    {error}
                </p>
            )}
        </fieldset>
    );
};
