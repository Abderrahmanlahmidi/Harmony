import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "../../utils/cn";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    toast: {
        success: (msg: string, duration?: number) => void;
        error: (msg: string, duration?: number) => void;
        warning: (msg: string, duration?: number) => void;
        info: (msg: string, duration?: number) => void;
    };
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const icons = {
    error: <AlertCircle className="h-5 w-5 text-red-400" />,
    success: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-400" />,
    info: <Info className="h-5 w-5 text-blue-400" />,
};

const styles = {
    error: "bg-red-950/20 border-red-800/30 text-red-200 backdrop-blur-md",
    success: "bg-emerald-950/20 border-emerald-800/30 text-emerald-200 backdrop-blur-md",
    warning: "bg-amber-950/20 border-amber-800/30 text-amber-200 backdrop-blur-md",
    info: "bg-blue-950/20 border-blue-800/30 text-blue-200 backdrop-blur-md",
};

const ToastMessage: React.FC<{ message: string; type: ToastType; onDismiss: () => void }> = ({ message, type, onDismiss }) => (
    <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={cn(
            "flex items-center justify-between p-4 mb-2 rounded-xl border shadow-2xl min-w-[320px]",
            styles[type]
        )}
    >
        <div className="flex items-center gap-3">
            {icons[type]}
            <span className="text-sm font-semibold tracking-tight">{message}</span>
        </div>
        <button
            onClick={onDismiss}
            className="text-white/40 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
        >
            <X className="h-4 w-4" />
        </button>
    </motion.div>
);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const showToast = useCallback((message: string, type: ToastType = "info", duration = 4000) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        if (duration !== Infinity) {
            setTimeout(() => removeToast(id), duration);
        }
    }, [removeToast]);

    const toast = {
        success: (msg: string, duration?: number) => showToast(msg, "success", duration),
        error: (msg: string, duration?: number) => showToast(msg, "error", duration),
        warning: (msg: string, duration?: number) => showToast(msg, "warning", duration),
        info: (msg: string, duration?: number) => showToast(msg, "info", duration),
    };

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div className="fixed top-24 right-6 z-[9999] w-80 space-y-3 pointer-events-none">
                <div className="flex flex-col items-end pointer-events-auto">
                    <AnimatePresence mode="popLayout">
                        {toasts.map((t) => (
                            <ToastMessage
                                key={t.id}
                                message={t.message}
                                type={t.type}
                                onDismiss={() => removeToast(t.id)}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within ToastProvider");
    return context;
};
