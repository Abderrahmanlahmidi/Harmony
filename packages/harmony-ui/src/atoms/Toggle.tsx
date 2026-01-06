import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    description?: string;
    error?: string | boolean;
    size?: "sm" | "md" | "lg";
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
    ({ className, label, description, error, size = "md", id, onChange, ...props }, ref) => {
        const generatedId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;
        const [internalChecked, setInternalChecked] = React.useState(props.checked ?? props.defaultChecked ?? false);

        React.useEffect(() => {
            if (props.checked !== undefined) {
                setInternalChecked(props.checked);
            }
        }, [props.checked]);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (props.checked === undefined) {
                setInternalChecked(e.target.checked);
            }
            onChange?.(e);
        };

        const sizes = {
            sm: {
                track: "w-8 h-4",
                thumb: "w-3 h-3",
                translate: 16,
            },
            md: {
                track: "w-10 h-5",
                thumb: "w-4 h-4",
                translate: 20,
            },
            lg: {
                track: "w-12 h-6",
                thumb: "w-5 h-5",
                translate: 24,
            },
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
                            type="checkbox"
                            role="switch"
                            id={generatedId}
                            onChange={handleChange}
                            ref={ref}
                            className="peer sr-only"
                            {...props}
                        />

                        {}
                        <div className={cn(
                            "relative flex items-center rounded-full transition-all duration-300",
                            sizes[size].track,
                            "bg-neutral-200 dark:bg-neutral-700",
                            "peer-checked:bg-primary",
                            "peer-focus-visible:ring-4 peer-focus-visible:ring-primary/10",
                            error && "ring-2 ring-danger/50"
                        )}>
                            {}
                            <motion.div
                                initial={false}
                                animate={{
                                    x: internalChecked ? sizes[size].translate : 2,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30
                                }}
                                className={cn(
                                    "absolute bg-white rounded-full shadow-sm shadow-black/10 transition-colors",
                                    sizes[size].thumb,
                                    internalChecked ? "bg-white" : "bg-white dark:bg-neutral-100"
                                )}
                            />
                        </div>
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
                    <p className="text-xs font-bold text-danger ml-11 animate-in fade-in slide-in-from-top-1">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Toggle.displayName = "Toggle";
