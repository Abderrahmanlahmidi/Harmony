import React from 'react';
import {cn} from "../utils/cn.ts";


export interface TypographyProps {
    variant?: 'display' | 'heading' | 'bodyLarge' | 'bodyMedium' | 'caption';
    className?: string;
    children: React.ReactNode;
    showLabel?: boolean;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    ({ variant = 'bodyMedium', className, children, showLabel = false, ...props }, ref) => {
        const variants = {
            display: "text-6xl font-bold text-neutral-900 leading-tight",
            heading: "text-4xl font-semibold text-neutral-900 leading-snug",
            bodyLarge: "text-xl text-neutral-600 leading-relaxed",
            bodyMedium: "text-base text-neutral-600 leading-relaxed font-light",
            caption: "text-xs font-mono text-neutral-400 uppercase tracking-widest",
        };

        const Tag = variant === 'display' ? 'h1' :
            variant === 'heading' ? 'h2' :
                variant === 'bodyLarge' ? 'p' :
                    variant === 'bodyMedium' ? 'p' :
                        variant === 'caption' ? 'span' : 'p';

        return (
            <div className="space-y-1">
                {showLabel && variant !== 'caption' && (
                    <Typography variant="caption" className="mb-2">
                        {variant === 'display' ? 'Display 2XL' :
                            variant === 'heading' ? 'Heading XL' :
                                variant === 'bodyLarge' ? 'Body Large' :
                                    variant === 'bodyMedium' ? 'Body Medium' : ''}
                    </Typography>
                )}
                <Tag
                    ref={ref as any}
                    className={cn(variants[variant], className)}
                    {...props}
                >
                    {children}
                </Tag>
            </div>
        );
    }
);

Typography.displayName = 'Typography';
