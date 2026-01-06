import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { cn } from "../utils/cn";

export type ModalVariant = "info" | "success" | "warning" | "danger";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    variant?: ModalVariant;
    children?: React.ReactNode;
}

const icons = {
    info: <Info className="w-8 h-8 text-info" />,
    success: <CheckCircle2 className="w-8 h-8 text-success" />,
    warning: <AlertTriangle className="w-8 h-8 text-warning" />,
    danger: <AlertCircle className="w-8 h-8 text-danger" />,
};

const variantStyles = {
    info: "bg-info-light border-info/20 dark:bg-info/10 dark:border-info/30",
    success: "bg-success-light border-success/20 dark:bg-success/10 dark:border-success/30",
    warning: "bg-warning-light border-warning/20 dark:bg-warning/10 dark:border-warning/30",
    danger: "bg-danger-light border-danger/20 dark:bg-danger/10 dark:border-danger/30",
};

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    variant = "info",
    children,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-neutral-900/60 dark:bg-neutral-50/60 backdrop-blur-md"
                    />

                    {}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={cn(
                            "relative w-full max-w-lg bg-neutral-50 rounded-[2.5rem] shadow-2xl overflow-hidden z-[101]",
                        )}
                    >
                        {}
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 p-2 rounded-xl text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-all z-10 active:scale-90"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 pb-4">
                            <div className="flex items-start gap-4 mb-6">
                                <div className={cn(
                                    "p-3 rounded-2xl flex-shrink-0 border transition-colors",
                                    variantStyles[variant]
                                )}>
                                    {icons[variant]}
                                </div>
                                <div className="space-y-1 pt-1">
                                    <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                                        {title}
                                    </h3>
                                    {description && (
                                        <p className="text-neutral-500 font-medium leading-relaxed italic">
                                            {description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {children && (
                                <div className="mt-4 text-neutral-600">
                                    {children}
                                </div>
                            )}
                        </div>

                        {}
                        <div className="p-8 pt-4 flex items-center justify-end gap-3 border-t border-neutral-100">
                            <button
                                onClick={onClose}
                                className="px-6 py-3 rounded-xl font-bold text-neutral-400 hover:bg-neutral-100 transition-all font-bold"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onClose}
                                className={cn(
                                    "px-8 py-3 rounded-xl font-black text-white transition-all shadow-lg active:scale-95",
                                    variant === "info" && "bg-info hover:bg-info-hover",
                                    variant === "success" && "bg-success hover:bg-success-hover ",
                                    variant === "warning" && "bg-warning hover:bg-warning-hover ",
                                    variant === "danger" && "bg-danger hover:bg-danger-hover",
                                )}
                            >
                                Confirm
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
