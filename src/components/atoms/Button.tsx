import React from 'react';
import { cn } from '../../utils/cn.ts';
import { Spinner } from './Spinner.tsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, fullWidth = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
        const baseStyles = cn(
            "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
            fullWidth ? "w-full" : "w-auto"
        );

        const variants = {
            primary: "bg-primary text-white hover:bg-primary-hover shadow-primary/20 focus:ring-primary/50",
            secondary: "bg-secondary text-white hover:bg-secondary-hover shadow-secondary/20 focus:ring-secondary/50",
            outline: "border-2 border-neutral-200 bg-transparent hover:bg-neutral-100 text-neutral-700 hover:border-neutral-300 focus:ring-neutral-200",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        const spinnerVariant = variant === 'outline' ? 'primary' : 'white';

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading && (
                    <Spinner
                        size="sm"
                        variant={spinnerVariant}
                        className={cn("mr-2", variant === 'outline' ? 'border-primary/20 border-t-primary' : 'border-white/20 border-t-white')}
                    />
                )}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';
