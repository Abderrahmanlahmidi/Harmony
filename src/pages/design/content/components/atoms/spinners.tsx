import { Spinner } from "../../../../../components/atoms/Spinner";
import { Button } from "../../../../../components/atoms/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../../../components/atoms/Card";
import CodeBlock from "../CodeBlock";
import { Badge } from "../../../../../components/atoms/Badge";
import { Loader2, RefreshCw, Loader, CircleDashed } from "lucide-react";

export default function SpinnersPage() {
    return (
        <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
            <header className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-4">
                    <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase italic">Feedback</Badge>
                    <Loader2 className="w-5 h-5 text-primary animate-spin" />
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
                    Spinners
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    Indicate an ongoing process or loading state to keep users informed about system activity.
                </p>
            </header>

            {/* Design Variants */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Sizes & Visuals</h2>
                    <p className="text-neutral-500 font-medium">Standardized sizes from micro-interactions to full-page loading states.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CodeBlock
                        title="Flexible Sizing"
                        description="From 12px to 48px to fit any context."
                        code={`<Spinner size="xs" />\n<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />\n<Spinner size="xl" />`}
                    >
                        <div className="flex items-center gap-8">
                            <Spinner size="xs" thickness="thick" />
                            <Spinner size="sm" thickness="thick" />
                            <Spinner size="md" thickness="thick" />
                            <Spinner size="lg" thickness="thick" />
                            <Spinner size="xl" thickness="thick" />
                        </div>
                    </CodeBlock>

                    <CodeBlock
                        title="Decorative Loaders"
                        description="Pass any Lucide icon as a prop to maintain size and color consistency."
                        code={`<Spinner icon={<Loader2 />} />\n<Spinner icon={<RefreshCw />} size="lg" />\n<Spinner icon={<CircleDashed />} size="xl" />`}
                    >
                        <div className="flex items-center gap-8">
                            <Spinner icon={<Loader2 />} size="sm" />
                            <Spinner icon={<Loader />} size="md" />
                            <Spinner icon={<RefreshCw />} size="lg" />
                            <Spinner icon={<CircleDashed />} size="xl" />
                        </div>
                    </CodeBlock>
                </div>
            </section>

            {/* Application Examples */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Implementation Cases</h2>
                    <p className="text-neutral-500 font-medium">Common patterns for integrating spinners into existing components.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CodeBlock
                        title="Native Button Support"
                        description="Direct use through the isLoading prop for seamless transitions."
                        code={`<Button isLoading>Processing</Button>\n<Button variant="outline" isLoading>Loading</Button>`}
                    >
                        <div className="flex flex-col gap-4">
                            <Button className="min-w-[140px]" isLoading>
                                Processing
                            </Button>
                            <Button variant="outline" className="min-w-[140px]" isLoading>
                                Loading
                            </Button>
                        </div>
                    </CodeBlock>

                    <CodeBlock
                        title="Within Cards"
                        description="Using spinners for asynchronous data loading inside containers."
                        code={`<Card className="p-8 flex justify-center">\n  <Spinner size="lg" />\n</Card>`}
                    >
                        <Card className="w-full max-w-[280px]">
                            <CardHeader>
                                <CardTitle className="text-lg text-neutral-900">Dashboard Metric</CardTitle>
                                <CardDescription>Fetching real-time data</CardDescription>
                            </CardHeader>
                            <CardContent className="h-24 flex items-center justify-center">
                                <Spinner size="lg" thickness="thick" />
                            </CardContent>
                        </Card>
                    </CodeBlock>
                </div>
            </section>

            {/* Full Page Overlay */}
            <section className="space-y-8">
                <CodeBlock
                    title="Fullscreen Experience"
                    description="Opaque or blurred overlays for critical loading states."
                    code={`<div className="bg-neutral-50/50 backdrop-blur-sm">\n  <Spinner size="xl" thickness="thick" />\n</div>`}
                >
                    <div className="relative w-full h-[200px] border border-neutral-200 rounded-2xl overflow-hidden bg-white dark:bg-neutral-50">
                        <div className="p-6 space-y-4">
                            <div className="h-4 w-3/4 bg-neutral-100 rounded animate-pulse" />
                            <div className="h-4 w-1/2 bg-neutral-100 rounded animate-pulse" />
                            <div className="h-20 w-full bg-neutral-50 rounded animate-pulse" />
                        </div>
                        <div className="absolute inset-0 bg-neutral-50/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
                            <Spinner size="xl" thickness="thick" />
                            <p className="text-xs font-black uppercase tracking-widest text-neutral-400">Restoring Session</p>
                        </div>
                    </div>
                </CodeBlock>
            </section>
        </div>
    );
}
