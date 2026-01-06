// Progress.tsx
import React from "react";
import { cn } from "../utils/cn";


export interface ProgressProps {
  value: number;
  max?: number;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  label?: string;
  showValue?: boolean;
  striped?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = "primary",
  size = "md",
  label,
  showValue = false,
  striped = false,
  className,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variants = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    success: "bg-success",
    danger: "bg-danger",
    warning: "bg-warning",
    info: "bg-info",
  };

  const sizes = {
    xs: "h-1",
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
    xl: "h-6",
  };

  const trackSizes = {
    xs: "h-1",
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
    xl: "h-6",
  };

  return (
    <div className={cn("w-full space-y-2", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && (
            <span className="text-sm font-medium text-neutral-700">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm font-medium text-neutral-700">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div className="relative">
        <div
          className={cn(
            "w-full rounded-full overflow-hidden",
            trackSizes[size],
            "bg-neutral-200"
          )}
        >
          <div
            className={cn(
              "h-full rounded-full transition-all duration-300",
              variants[variant],
              sizes[size],
              striped && "progress-striped"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

// CSS for striped effect
const style = document.createElement("style");
style.textContent = `
  .progress-striped {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1rem 1rem;
  }
`;
document.head.appendChild(style);
