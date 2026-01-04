import React from "react";
import { cn } from "../../utils/cn";
import {
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    Search,
    Filter
} from "lucide-react";
import { ButtonIcon } from "../atoms/ButtonIcon";

interface Column<T> {
    header: string;
    accessor: keyof T | ((item: T) => React.ReactNode);
    className?: string;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    title?: string;
    description?: string;
    selectable?: boolean;
}

export function DataTable<T extends { id: string | number }>({
    data,
    columns,
    title,
    description,
    selectable = false
}: DataTableProps<T>) {
    return (
        <div className="bg-white dark:bg-neutral-50 rounded-[32px] border border-neutral-200 dark:border-neutral-200 overflow-hidden shadow-sm">
            {(title || description) && (
                <div className="p-8 border-b border-neutral-100 flex items-center justify-between flex-wrap gap-4">
                    <div className="space-y-1">
                        <h3 className="text-2xl font-black text-neutral-900 tracking-tighter italic uppercase">{title}</h3>
                        <p className="text-neutral-500 font-medium">{description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-neutral-100 dark:bg-neutral-100/50 rounded-xl text-sm font-medium border-transparent focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none min-w-[240px]"
                            />
                        </div>
                        <ButtonIcon icon={<Filter size={18} />} variant="outline" size="md" />
                    </div>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-neutral-50/50 dark:bg-neutral-100/30">
                            {selectable && (
                                <th className="p-5 border-b border-neutral-100 w-10">
                                    <input type="checkbox" className="rounded-md border-neutral-300 text-primary focus:ring-primary" />
                                </th>
                            )}
                            {columns.map((col, idx) => (
                                <th
                                    key={idx}
                                    className={cn(
                                        "p-5 text-xs font-black uppercase tracking-widest text-neutral-400 border-b border-neutral-100",
                                        col.className
                                    )}
                                >
                                    {col.header}
                                </th>
                            ))}
                            <th className="p-5 border-b border-neutral-100 w-10" />
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {data.map((item) => (
                            <tr key={item.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-100/20 transition-colors group">
                                {selectable && (
                                    <td className="p-5">
                                        <input type="checkbox" className="rounded-md border-neutral-300 text-primary focus:ring-primary shadow-sm" />
                                    </td>
                                )}
                                {columns.map((col, colIdx) => (
                                    <td key={colIdx} className={cn("p-5 text-sm font-medium text-neutral-600", col.className)}>
                                        {typeof col.accessor === 'function'
                                            ? col.accessor(item)
                                            : (item[col.accessor] as React.ReactNode)}
                                    </td>
                                ))}
                                <td className="p-5 text-right">
                                    <button className="p-2 hover:bg-neutral-100 rounded-lg text-neutral-400 hover:text-neutral-900 transition-all opacity-0 group-hover:opacity-100">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-6 bg-neutral-50/50 border-t border-neutral-100 flex items-center justify-between">
                <p className="text-sm font-bold text-neutral-400">
                    Showing <span className="text-neutral-900">1</span> to <span className="text-neutral-900">{data.length}</span> of <span className="text-neutral-900">{data.length}</span> results
                </p>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-black text-neutral-500 hover:bg-neutral-100 disabled:opacity-50 transition-all" disabled>
                        <ChevronLeft size={16} /> Previous
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-black bg-neutral-900 text-neutral-50 shadow-lg shadow-neutral-900/10">1</button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-black text-neutral-500 hover:bg-neutral-100">2</button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-black text-neutral-500 hover:bg-neutral-100">3</button>
                    </div>
                    <button className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-black text-neutral-900 hover:bg-neutral-100 transition-all">
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
