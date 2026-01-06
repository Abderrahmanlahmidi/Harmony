import React, { useState } from "react";
import { cn } from "../utils/cn.ts";

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: "default" | "filled";
    size?: "sm" | "md" | "lg";
    label?: string;
    error?: string | boolean;
    success?: string | boolean;
    helperText?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            variant = "default",
            size = "md",
            label,
            error,
            success,
            helperText,
            startIcon,
            endIcon,
            fullWidth = false,
            disabled,
            id,
            onFocus,
            onBlur,
            ...props
        },
        ref
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

        const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);
            onFocus?.(e);
        };

        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);
            onBlur?.(e);
        };

        const containerClasses = cn(
            "flex flex-col gap-1.5 transition-all duration-200",
            fullWidth ? "w-full" : "w-auto max-w-sm"
        );

        const inputWrapperClasses = cn(
            "relative flex items-center transition-all duration-200 rounded-xl border-2",

            variant === "default" && "bg-white dark:bg-neutral-50 border-neutral-200 dark:border-neutral-200",
            variant === "filled" &&
            "bg-neutral-50 dark:bg-neutral-100 border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-200",

            isFocused &&
            !error &&
            !success &&
            "border-primary ring-4 ring-primary/10 dark:ring-primary/20",

            error &&
            "border-danger text-danger focus-within:ring-4 focus-within:ring-danger/10 dark:focus-within:ring-danger/20",

            success &&
            !error &&
            "border-success text-success focus-within:ring-4 focus-within:ring-success/10 dark:focus-within:ring-success/20",

            disabled && "opacity-50 pointer-events-none dark:bg-neutral-100 bg-neutral-800",
            className
        );

        const inputClasses = cn(
            "w-full bg-transparent border-none outline-none text-neutral-900 dark:text-neutral-900 placeholder-neutral-400 dark:placeholder-neutral-400 disabled:cursor-not-allowed",
            "transition-colors duration-200",
            size === "sm" && "px-3 py-1.5 text-sm h-9",
            size === "md" && "px-4 py-2.5 text-base h-11",
            size === "lg" && "px-5 py-3.5 text-lg h-14",
            startIcon && "pl-10",
            endIcon && "pr-10"
        );

        const iconClasses = cn(
            "absolute pointer-events-none flex items-center justify-center transition-colors duration-200",
            error || success ? "text-current" : "text-neutral-400 dark:text-neutral-500",
            size === "sm" && "h-4 w-4",
            size === "md" && "h-5 w-5",
            size === "lg" && "h-6 w-6"
        );

        return (
            <div className={containerClasses}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className={cn(
                            "text-sm font-medium transition-colors duration-200 ml-1",
                            error
                                ? "text-danger"
                                : success
                                    ? "text-success"
                                    : "text-neutral-700 dark:text-neutral-700"
                        )}
                    >
                        {label}
                    </label>
                )}

                <div className={inputWrapperClasses}>
                    {startIcon && (
                        <div
                            className={cn(
                                "absolute left-3 flex items-center justify-center",
                                iconClasses
                            )}
                        >
                            {startIcon}
                        </div>
                    )}

                    <input
                        ref={ref}
                        id={inputId}
                        disabled={disabled}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={inputClasses}
                        {...props}
                    />

                    {endIcon && (
                        <div
                            className={cn(
                                "absolute right-3 flex items-center justify-center",
                                iconClasses
                            )}
                        >
                            {endIcon}
                        </div>
                    )}
                </div>

                {(helperText ||
                    typeof error === "string" ||
                    typeof success === "string") && (
                        <p
                            className={cn(
                                "text-xs ml-1 transition-all duration-200",
                                error
                                    ? "text-danger"
                                    : success
                                        ? "text-success"
                                        : "text-neutral-500 dark:text-neutral-500"
                            )}
                        >
                            {typeof error === "string"
                                ? error
                                : typeof success === "string"
                                    ? success
                                    : helperText}
                        </p>
                    )}
            </div>
        );
    }
);

Input.displayName = "Input";
