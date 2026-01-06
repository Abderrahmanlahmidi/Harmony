import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X, Info, CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";
import { cn } from "../../utils/cn";

const alertVariants = cva(
    "text-sm border transition-all duration-200",
    {
        variants: {
            variant: {
                info: "bg-primary/10 border-primary/20 text-primary-900",
                danger: "bg-danger/10 border-danger/20 text-danger-900",
                success: "bg-success/10 border-success/20 text-success-900",
                warning: "bg-warning/10 border-warning/20 text-warning-900",
            },
            layout: {
                default: "flex w-full items-start sm:items-center p-4 rounded-lg",
                pill: "inline-flex w-auto items-center p-1 pr-2 rounded-full",
            }
        },
        defaultVariants: {
            variant: "info",
            layout: "default",
        },
    }
);

/* Map internal variant names to standard icons */
const IconMap = {
    info: Info,
    danger: AlertCircle,
    success: CheckCircle2,
    warning: AlertTriangle,
};

export interface AlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof alertVariants>, "variant"> {
    onClose?: () => void;
    icon?: React.ReactNode;
    hideIcon?: boolean;
    variant?: any;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant = "info", layout = "default", children, onClose, icon, hideIcon = false, ...props }, ref) => {

        // Determine which icon to show
        const IconComponent = IconMap[(variant as keyof typeof IconMap) || "info"] || Info;
        const renderedIcon = icon === undefined ? <IconComponent className="w-5 h-5" /> : icon;

        return (
            <div
                ref={ref}
                role="alert"
                className={cn(alertVariants({ variant: variant as any, layout }), className)}
                {...props}
            >
                {!hideIcon && renderedIcon && (
                    <div className={`shrink-0 ${layout === 'pill' ? 'mr-2 ml-1' : 'mr-3'} mt-0.5 sm:mt-0 ${variant === 'info' ? 'text-primary' :
                        variant === 'danger' ? 'text-danger' :
                            variant === 'success' ? 'text-success' :
                                'text-warning'
                        }`}>
                        {renderedIcon}
                    </div>
                )}

                <div className="flex-1 text-sm font-medium">
                    {children}
                </div>

                {onClose && (
                    <button
                        type="button"
                        onClick={onClose}
                        className={cn(
                            "ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 shrink-0 transition-colors",
                            variant === 'info' ? "text-primary hover:bg-primary/20 focus:ring-primary/50" :
                                variant === 'danger' ? "text-danger hover:bg-danger/20 focus:ring-danger/50" :
                                    variant === 'success' ? "text-success hover:bg-success/20 focus:ring-success/50" :
                                        "text-warning hover:bg-warning/20 focus:ring-warning/50"
                        )}
                        aria-label="Close"
                    >
                        <X className="w-4 h-4" />
                        <span className="sr-only">Close</span>
                    </button>
                )}
            </div>
        );
    }
);
Alert.displayName = "Alert";

export { Alert };
