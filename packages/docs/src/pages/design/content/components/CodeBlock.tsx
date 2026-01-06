import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "harmony-react-ui";


interface CodeBlockProps {
    children: React.ReactNode;
    code: string;
    title?: string;
    description?: string;
}

export default function CodeBlock({ children, code, title, description }: CodeBlockProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white dark:bg-neutral-50 transition-all duration-200">
            {(title || description) && (
                <div className="p-6 border-b border-neutral-200">
                    {title && <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-900">{title}</h3>}
                    {description && <p className="text-neutral-600 dark:text-neutral-600 mt-1">{description}</p>}
                </div>
            )}

            {/* Preview Area */}
            <div className="p-8 bg-neutral-50/50 min-h-[160px] flex items-center justify-center border-b border-neutral-200">
                <div className="w-full flex justify-center">{children}</div>
            </div>

            {/* Control Bar */}
            <div className="px-4 py-2 bg-white dark:bg-neutral-50 flex justify-between items-center">
                <div className="text-xs font-medium text-neutral-500">
                    Preview
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleCopy}
                        className="p-2 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-500 hover:text-neutral-900"
                        title="Copy code"
                    >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-500 hover:text-neutral-900 flex items-center gap-2 text-sm font-medium"
                    >
                        <span>{isOpen ? "Hide Code" : "Show Code"}</span>
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>
            </div>

            {/* Code Area */}
            <div
                className={cn(
                    "grid transition-all duration-200 ease-in-out bg-neutral-950",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden">
                    <pre className="p-6 overflow-x-auto text-sm font-mono text-neutral-50 dark:text-neutral-400 leading-relaxed">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
}





