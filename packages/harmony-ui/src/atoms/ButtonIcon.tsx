import React from 'react';
import {cn} from "../utils/cn.ts";


export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon: React.ReactNode;
    label?: string;
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, icon, label, children, disabled, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

        const variants = {
            primary: "bg-primary text-white hover:bg-primary-hover shadow-primary/20 focus:ring-primary/50",
            secondary: "bg-secondary text-white hover:bg-secondary-hover shadow-secondary/20 focus:ring-secondary/50",
            outline: "border-2 border-neutral-200 bg-transparent hover:bg-neutral-50 text-neutral-700 hover:border-neutral-300 focus:ring-neutral-200",
            ghost: "bg-transparent hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 focus:ring-neutral-200",
        };

        const sizes = {
            sm: "p-2",
            md: "p-3",
            lg: "p-4",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading || disabled}
                title={label}
                {...props}
            >
                {isLoading ? (
                    <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    icon
                )}
            </button>
        );
    }
);

ButtonIcon.displayName = 'ButtonIcon';
