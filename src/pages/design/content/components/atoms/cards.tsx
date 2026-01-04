import { Card, CardDescription, CardFooter, CardHeader, CardTitle, CardImage, CardSubtitle } from "../../../../../components/atoms/Card";
import CodeBlock from "../CodeBlock";
import { Button } from "../../../../../components/atoms/Button";
import { Badge } from "../../../../../components/atoms/Badge";
import { ArrowRight, Play, Heart, Share2, MoreHorizontal } from "lucide-react";

export default function CardsPage() {
    return (
        <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
            <header className="space-y-6 max-w-2xl">
                <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Components</Badge>
                <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
                    Cards
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    A versatile surface for grouping content and actions. Our card system is built on a foundation of elevation, depth, and reactivity.
                </p>
            </header>

            {/* Design Variants */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Design Architecture</h2>
                    <p className="text-neutral-500 font-medium">Choose from carefully calibrated styles to define your UI hierarchy.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CodeBlock
                        title="Standard Elevations"
                        description="Default and Elevated variants for primary and secondary layers."
                        code={`<Card variant="default">...</Card>\n<Card variant="elevated">...</Card>`}
                    >
                        <div className="flex flex-col sm:flex-row gap-6 w-full">
                            <Card className="flex-1 min-h-[140px] p-6 justify-center">
                                <CardTitle className="text-lg">Layer 01</CardTitle>
                                <CardDescription>Default surface</CardDescription>
                            </Card>
                            <Card variant="elevated" className="flex-1 min-h-[140px] p-6 justify-center text-primary">
                                <CardTitle className="text-lg text-primary">Layer 02</CardTitle>
                                <CardDescription>Elevated surface</CardDescription>
                            </Card>
                        </div>
                    </CodeBlock>

                    <CodeBlock
                        title="Special Contexts"
                        description="Outline and Glass variants for high-density or rich media backgrounds."
                        code={`<Card variant="outline">...</Card>\n<Card variant="glass">...</Card>`}
                    >
                        <div className="flex flex-col sm:flex-row gap-6 w-full">
                            <Card variant="outline" className="flex-1 min-h-[140px] p-6 justify-center">
                                <CardTitle className="text-lg">Wireframe</CardTitle>
                                <CardDescription>Outline variant</CardDescription>
                            </Card>
                            <Card variant="glass" className="flex-1 min-h-[140px] p-6 justify-center bg-primary/5 border-primary/10">
                                <CardTitle className="text-lg text-primary">Frosted</CardTitle>
                                <CardDescription>Glass variant</CardDescription>
                            </Card>
                        </div>
                    </CodeBlock>
                </div>
            </section>

            {/* Premium Content Layouts */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Content Layouts</h2>
                    <p className="text-neutral-500 font-medium">Highly composable components for diverse data structures.</p>
                </div>

                <CodeBlock
                    title="Newsletter Interaction"
                    description="Combining titles, icons, and nested buttons."
                    code={`<Card hoverable className="max-w-md">
  <CardHeader>
    <CardSubtitle>Daily Insight</CardSubtitle>
    <CardTitle>The Future of AI</CardTitle>
  </CardHeader>
  <CardFooter>
    <Button>Read More</Button>
  </CardFooter>
</Card>`}
                >
                    <Card hoverable className="max-w-md w-full overflow-hidden border-primary/20 bg-primary/5 dark:bg-primary/5">
                        <CardHeader className="flex-row items-start justify-between">
                            <div className="space-y-1">
                                <CardSubtitle>Tech Trends 2026</CardSubtitle>
                                <CardTitle className="text-2xl">Hyper-Agentic Systems</CardTitle>
                                <CardDescription>Exploring how autonomous AI is reshaping workflows.</CardDescription>
                            </div>
                            <Button variant="outline" size="sm" className="w-10 h-10 p-0 rounded-full">
                                <Share2 className="w-4 h-4" />
                            </Button>
                        </CardHeader>
                        <CardFooter className="border-none pt-0">
                            <Button size="sm" className="gap-2 px-6 rounded-full">
                                Read Article <ArrowRight className="w-4 h-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                </CodeBlock>
            </section>

            {/* Media Integration */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Media Integration</h2>
                    <p className="text-neutral-500 font-medium">Perfect for dashboards, e-commerce, and rich content delivery.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <CodeBlock
                        title="Entertainment Feed"
                        description="Video aspect ratio with interactive overlays."
                        code={`<Card hoverable overflow="hidden">
  <CardImage src="..." aspectRatio="video" />
  <CardHeader>...</CardHeader>
</Card>`}
                    >
                        <Card hoverable className="w-full max-w-sm group shadow-2xl shadow-primary/5">
                            <div className="relative overflow-hidden">
                                <CardImage
                                    src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
                                    aspectRatio="video"
                                />
                                <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform shadow-xl">
                                        <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                                    <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider">12:45</div>
                                </div>
                            </div>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg leading-snug">Designing Motion Systems for the Modern Web</CardTitle>
                                <div className="flex items-center gap-3 mt-3">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200" />
                                    <div className="text-xs font-bold">Studio Alpha</div>
                                </div>
                            </CardHeader>
                            <CardFooter className="justify-between border-none pt-4">
                                <div className="flex gap-4">
                                    <Heart className="w-4 h-4 text-neutral-400 hover:text-danger cursor-pointer transition-colors" />
                                    <Share2 className="w-4 h-4 text-neutral-400 cursor-pointer hover:text-primary transition-colors" />
                                </div>
                                <div className="text-[0.6rem] font-black text-neutral-400 uppercase tracking-widest">Sponsored</div>
                            </CardFooter>
                        </Card>
                    </CodeBlock>

                    <CodeBlock
                        title="Dynamic States"
                        description="Built-in support for loading and hover animations."
                        code={`<Card loading />\n<Card hoverable />`}
                    >
                        <div className="flex flex-col gap-4 w-full px-4">
                            <Card loading className="w-full h-24" />
                            <Card hoverable className="w-full p-4 flex items-center gap-4 cursor-pointer border-primary/20 bg-primary/5">
                                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                                    <Share2 className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold">Interactive Row</div>
                                    <div className="text-xs text-neutral-500 font-medium">Click to explore details</div>
                                </div>
                                <MoreHorizontal className="text-neutral-300" />
                            </Card>
                        </div>
                    </CodeBlock>
                </div>
            </section>
        </div>
    );
}

