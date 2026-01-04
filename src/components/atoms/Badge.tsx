import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "neutral" | "primary" | "secondary" | "success" | "warning" | "danger" | "outline";
    size?: "sm" | "md" | "lg";
    rounded?: "full" | "md" | "sm";
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "default", size = "md", rounded = "full", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border ring-offset-white dark:ring-offset-neutral-950",

                    size === "sm" && "text-[10px] px-2 py-0.5",
                    size === "md" && "text-xs px-2.5 py-0.5",
                    size === "lg" && "text-sm px-3 py-1",

                    rounded === "full" && "rounded-full",
                    rounded === "md" && "rounded-md",
                    rounded === "sm" && "rounded-sm",

                    variant === "default" &&
                    "border-transparent bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",

                    variant === "neutral" &&
                    "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700",

                    variant === "primary" &&
                    "border-transparent bg-primary text-white hover:bg-primary/80",

                    variant === "secondary" &&
                    "border-transparent bg-secondary text-white hover:bg-secondary/80",

                    variant === "success" &&
                    "border-transparent bg-success text-white hover:bg-success/80",

                    variant === "warning" &&
                    "border-transparent bg-warning text-white hover:bg-warning/80",

                    variant === "danger" &&
                    "border-transparent bg-danger text-white hover:bg-danger/80",

                    variant === "outline" &&
                    "text-neutral-50 dark:text-neutral-900 dark:hover:text-neutral-50 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800",

                    className
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = "Badge";

export { Badge };
