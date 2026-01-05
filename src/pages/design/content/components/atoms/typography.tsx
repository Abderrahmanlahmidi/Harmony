import { Type } from 'lucide-react'
import { Typography } from "../../../../../components/atoms/Typography.tsx";
import CodeBlock from "../CodeBlock";

const TYPOGRAPHY_EXAMPLES = [
    {
        variant: "display" as const,
        title: "Display",
        description: "Reserved for large, impactful headlines and hero sections.",
        code: `<Typography variant="display">\n  Exceptional products start here.\n</Typography>`,
        content: "Exceptional products start here."
    },
    {
        variant: "heading" as const,
        title: "Heading",
        description: "Primary headers for sections and page content.",
        code: `<Typography variant="heading">\n  Section Headline\n</Typography>`,
        content: "Section Headline"
    },
    {
        variant: "bodyLarge" as const,
        title: "Body Large",
        description: "Introductory paragraphs or large lead text.",
        code: `<Typography variant="bodyLarge">\n  Harmony is a system built for speed and clarity.\n</Typography>`,
        content: "Harmony is a system built for speed and clarity."
    },
    {
        variant: "bodyMedium" as const,
        title: "Body Medium",
        description: "Standard body text for descriptions and content.",
        code: `<Typography variant="bodyMedium">\n  This is the foundation for all descriptive elements.\n</Typography>`,
        content: "This is the foundation for all descriptive elements."
    },
    {
        variant: "caption" as const,
        title: "Caption",
        description: "Meta info, labels, and technical data.",
        code: `<Typography variant="caption">\n  Version 1.0.0 • Released 2024\n</Typography>`,
        content: "Version 1.0.0 • Released 2024"
    }
] as const;

export default function TypographyPage() {
    return (
        <div className="space-y-16 max-w-7xl mx-auto p-12 pb-40">
            <header className="space-y-6 max-w-3xl">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                        <Type size={24} />
                    </div>
                    <div className="h-8 w-px bg-neutral-200" />
                    <span className="text-sm font-black uppercase tracking-widest text-neutral-400">Foundation</span>
                </div>
                <h1 className="text-7xl font-black tracking-tighter text-neutral-900 leading-tight italic">
                    Typography.
                </h1>
                <p className="text-xl text-neutral-500 font-medium leading-relaxed">
                    A flexible typographic system that provides clear hierarchy and professional readability across all interfaces.
                </p>
            </header>

            <section className="space-y-12">
                <div className="grid gap-12">
                    {TYPOGRAPHY_EXAMPLES.map((example, index) => (
                        <div key={index} className="space-y-4">
                            <CodeBlock
                                title={example.title}
                                description={example.description}
                                code={example.code}
                            >
                                <Typography variant={example.variant}>
                                    {example.content}
                                </Typography>
                            </CodeBlock>
                        </div>
                    ))}
                </div>
            </section>

            {/* Scale Section */}
            <section className="bg-neutral-50 dark:bg-neutral-50 rounded-[40px] p-12 border border-neutral-200 dark:border-neutral-200/50 space-y-8 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                    <h2 className="text-3xl font-black tracking-tighter text-neutral-900 italic uppercase">Type Scale</h2>
                    <p className="text-neutral-500 max-w-xl font-medium">Every variant is calculated to maintain a perfect vertical rhythm and visual balance.</p>
                </div>

                <div className="grid border-t border-neutral-200 dark:border-neutral-200/20 pt-8 gap-4">
                    {TYPOGRAPHY_EXAMPLES.map((t, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 border-b border-neutral-200 dark:border-neutral-200/10">
                            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{t.variant}</span>
                            <span className="text-xs font-mono text-secondary font-bold">Poppins</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
