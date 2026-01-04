import { cn } from "../../utils/cn";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'neutral';
    icon: LucideIcon;
    className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    change,
    trend,
    icon: Icon,
    className
}) => {
    return (
        <div className={cn(
            "p-6 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-200 dark:border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 group",
            className
        )}>
            <div className="flex items-start justify-between">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-900/50 flex items-center justify-center text-neutral-500 group-hover:text-primary transition-colors">
                        <Icon size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">{title}</p>
                        <h3 className="text-3xl font-black text-neutral-900 tracking-tighter mt-1">{value}</h3>
                    </div>
                </div>
                <div className={cn(
                    "flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-black tracking-tight",
                    trend === 'up' && "bg-success/10 text-success",
                    trend === 'down' && "bg-danger/10 text-danger",
                    trend === 'neutral' && "bg-neutral-100 text-neutral-500"
                )}>
                    {trend === 'up' && <ArrowUpRight size={14} />}
                    {trend === 'down' && <ArrowDownRight size={14} />}
                    {change}
                </div>
            </div>

            <div className="mt-6 h-1 w-full bg-neutral-100 dark:bg-neutral-100/10 rounded-full overflow-hidden">
                <div
                    className={cn(
                        "h-full rounded-full transition-all duration-1000",
                        trend === 'up' ? "bg-success" : trend === 'down' ? "bg-danger" : "bg-primary"
                    )}
                    style={{ width: trend === 'neutral' ? '50%' : '75%' }}
                />
            </div>
        </div>
    );
};
