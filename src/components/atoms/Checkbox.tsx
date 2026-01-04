import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import { Check, Minus } from "lucide-react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    description?: string;
    error?: string | boolean;
    size?: "sm" | "md" | "lg";
    indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, description, error, size = "md", indeterminate, id, onChange, ...props }, ref) => {
        const generatedId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
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
            sm: "w-4 h-4 rounded-md",
            md: "w-5 h-5 rounded-lg",
            lg: "w-6 h-6 rounded-xl",
        };

        const iconSizes = {
            sm: 10,
            md: 12,
            lg: 14,
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
                            id={generatedId}
                            onChange={handleChange}
                            ref={(node) => {
                                if (node) {
                                    node.indeterminate = !!indeterminate;
                                }
                                if (typeof ref === "function") {
                                    ref(node);
                                } else if (ref) {
                                    ref.current = node;
                                }
                            }}
                            className="peer sr-only"
                            {...props}
                        />

                        {/* Box */}
                        <div className={cn(
                            "flex items-center justify-center border-2 transition-all duration-200",
                            sizes[size],
                            "border-neutral-300 bg-white dark:bg-neutral-800 dark:border-neutral-700",
                            "peer-checked:border-primary peer-checked:bg-primary",
                            "peer-indeterminate:border-primary peer-indeterminate:bg-primary",
                            "peer-hover:border-primary/50",
                            "peer-focus-visible:ring-4 peer-focus-visible:ring-primary/10",
                            error && "border-danger dark:border-danger"
                        )}>
                            <AnimatePresence mode="wait">
                                {indeterminate ? (
                                    <motion.div
                                        key="indeterminate"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                    >
                                        <Minus
                                            size={iconSizes[size]}
                                            strokeWidth={4}
                                            className="text-white"
                                        />
                                    </motion.div>
                                ) : internalChecked ? (
                                    <motion.div
                                        key="check"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                    >
                                        <Check
                                            size={iconSizes[size]}
                                            strokeWidth={4}
                                            className="text-white"
                                        />
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
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
                    <p className="text-xs font-bold text-danger ml-8 animate-in fade-in slide-in-from-top-1">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Checkbox.displayName = "Checkbox";

// Checkbox Group
export interface CheckboxGroupProps {
    children: React.ReactNode;
    label?: string;
    error?: string;
    className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ children, label, error, className }) => {
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
