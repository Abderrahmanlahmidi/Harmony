import { Type } from 'lucide-react'
import { Typography } from "../../../components/atoms/Typography.tsx";

const TYPOGRAPHY_EXAMPLES = [
    {
        variant: "display" as const,
        label: "Display 2XL",
        content: "Almost before we knew it, we had left the ground.",
        className: "space-y-1 border-b border-neutral-100 pb-6"
    },
    {
        variant: "heading" as const,
        label: "Heading XL",
        content: "The quick brown fox jumps over the lazy dog.",
        className: "space-y-1 border-b border-neutral-100 pb-6"
    },
    {
        variant: "bodyLarge" as const,
        label: "Body Large",
        content: "Design is not just what it looks like and feels like. Design is how it works. Our typography is focused on readability and professional aesthetics.",
        className: "space-y-1 border-b border-neutral-100 pb-6"
    },
    {
        variant: "bodyMedium" as const,
        label: "Body Medium",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        className: "space-y-1"
    }
] as const;

const TYPOGRAPHY_CONFIG = {
    pageTitle: "Typography",
    pageDescription: "Using typography to give our work hierarchy, clarity, and personality.",
    icon: {
        component: Type,
        className: "w-8 h-8 text-secondary"
    }
} as const;

export default function TypographyPage() {
    return (
        <div className="space-y-12 pb-20">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold text-neutral-900 tracking-tight flex items-center gap-3">
                    <TYPOGRAPHY_CONFIG.icon.component className={TYPOGRAPHY_CONFIG.icon.className} />
                    {TYPOGRAPHY_CONFIG.pageTitle}
                </h1>
                <Typography variant="bodyLarge">
                    {TYPOGRAPHY_CONFIG.pageDescription}
                </Typography>
            </header>

            <section className="space-y-10">
                <div className="bg-white p-10 rounded-3xl border border-neutral-200 space-y-8">
                    {TYPOGRAPHY_EXAMPLES.map((example, index) => (
                        <div key={index} className={example.className}>
                            <Typography variant={example.variant} showLabel>
                                {example.content}
                            </Typography>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}