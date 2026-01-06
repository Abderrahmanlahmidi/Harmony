// components/docs/PageHeader.tsx
import {  Badge  } from "harmony-react-ui";
import React from "react";
import { cn } from "harmony-react-ui";


export interface PageHeaderProps {
  category: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  version?: string;
  badgeVariant?: "primary" | "secondary" | "success" | "danger" | "warning";
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  category,
  title,
  description,
  icon,
  version = "v1.0.0",
  badgeVariant = "primary",
  className,
}) => {
  return (
    <header className={cn("space-y-4", className)}>
      <div className="flex items-center gap-3">
        <Badge variant={badgeVariant} className="rounded-lg">
          {category}
        </Badge>
        <span className="text-neutral-400 font-mono text-sm">{version}</span>
      </div>
      <h1 className="text-5xl font-black text-neutral-900 tracking-tighter flex items-center gap-4">
        {icon && icon}
        {title}
      </h1>
      <p className="text-xl text-neutral-500 max-w-2xl font-medium leading-relaxed">
        {description}
      </p>
    </header>
  );
};



