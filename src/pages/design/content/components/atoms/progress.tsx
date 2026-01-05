import { useState, useEffect } from "react";
import { ProgressBar } from "../../../../../components/atoms/ProgressBar";
import { Badge } from "../../../../../components/atoms/Badge";
import CodeBlock from "../CodeBlock";
import { Activity, CheckCircle2, Zap } from "lucide-react";

export default function ProgressPage() {
    const [progress, setProgress] = useState(30);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
            {/* HERO SECTION */}
            <header className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-4">
                    <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Atoms</Badge>
                    <Badge variant="neutral" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase italic border-neutral-300">Feedback</Badge>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
                    Progress Bar.
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    A visual indicator for task completion and system loading states. Features semantic color variants and smooth indeterminate animations.
                </p>
            </header>

            {/* BASIC USAGE */}
            <section className="space-y-8">
                <CodeBlock
                    title="Dynamic Loading"
                    description="Standard progress bars with values and labels."
                    code={`import { ProgressBar } from "@/components/atoms/ProgressBar";\n\n<ProgressBar value={45} label="Uploading..." showValue />\n<ProgressBar value={100} variant="success" label="Complete" showValue />`}
                >
                    <div className="p-4 space-y-8 bg-white dark:bg-transparent rounded-3xl">
                        <ProgressBar value={progress} label="Dynamic Progress" showValue />
                        <ProgressBar value={100} variant="success" label="System Ready" showValue />
                        <ProgressBar value={65} variant="warning" label="Storage Capacity" showValue />
                    </div>
                </CodeBlock>
            </section>

            {/* VARIANTS */}
            <section className="space-y-8">
                <CodeBlock
                    title="Semantic Variants"
                    description="Use different colors to convey status and meaning."
                    code={`<ProgressBar variant="primary" value={50} />\n<ProgressBar variant="secondary" value={60} />\n<ProgressBar variant="danger" value={20} />`}
                >
                    <div className="p-4 space-y-6">
                        <ProgressBar variant="primary" value={80} label="Primary (System)" />
                        <ProgressBar variant="secondary" value={70} label="Secondary (Action)" />
                        <ProgressBar variant="success" value={100} label="Success (Done)" />
                        <ProgressBar variant="warning" value={45} label="Warning (Caution)" />
                        <ProgressBar variant="danger" value={25} label="Danger (Critical)" />
                    </div>
                </CodeBlock>
            </section>

            {/* SIZING & INDETERMINATE */}
            <section className="space-y-8">
                <CodeBlock
                    title="Scale & Motion"
                    description="Adaptive heights and complex loading states."
                    code={`<ProgressBar size="sm" value={50} />\n<ProgressBar size="lg" value={50} />\n<ProgressBar indeterminate label="Fetching Data" />`}
                >
                    <div className="p-4 space-y-10">
                        <div className="space-y-4">
                            <ProgressBar size="sm" value={100} label="Small High-density" />
                            <ProgressBar size="md" value={100} label="Medium Standard" />
                            <ProgressBar size="lg" value={100} label="Large Impact" />
                        </div>
                        <ProgressBar indeterminate variant="secondary" label="Indeterminate (Global Search)" />
                    </div>
                </CodeBlock>
            </section>

        </div>
    );
}
