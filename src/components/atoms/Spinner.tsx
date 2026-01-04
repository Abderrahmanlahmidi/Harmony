import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "primary" | "secondary" | "white" | "current";
    thickness?: "thin" | "normal" | "thick";
    icon?: React.ReactNode;
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
    ({ className, size = "md", variant = "primary", thickness = "normal", icon, ...props }, ref) => {
        const sizes = {
            xs: "w-3 h-3",
            sm: "w-4 h-4",
            md: "w-6 h-6",
            lg: "w-8 h-8",
            xl: "w-12 h-12",
        };

        const iconSizes = {
            xs: 12,
            sm: 16,
            md: 24,
            lg: 32,
            xl: 48,
        };

        const variants = {
            primary: "border-primary/20 border-t-primary text-primary",
            secondary: "border-secondary/20 border-t-secondary text-secondary",
            white: "border-white/20 border-t-white text-white",
            current: "border-current/20 border-t-current text-current",
        };

        const thicknesses = {
            thin: "border-2",
            normal: "border-[3px]",
            thick: "border-4",
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "animate-spin transition-all duration-300 flex items-center justify-center shrink-0",
                    !icon && "rounded-full",
                    !icon && variants[variant],
                    !icon && thicknesses[thickness],
                    icon && variants[variant].split(' ').pop(), // Just take the text color for icons
                    sizes[size],
                    className
                )}
                {...props}
                role="status"
            >
                {icon ? (
                    React.isValidElement(icon) ? (
                        React.cloneElement(icon as React.ReactElement<any>, {
                            size: iconSizes[size],
                            className: cn((icon as React.ReactElement<any>).props.className)
                        })
                    ) : (
                        icon
                    )
                ) : (
                    <span className="sr-only">Loading...</span>
                )}
            </div>
        );
    }
);

Spinner.displayName = "Spinner";

export { Spinner };
