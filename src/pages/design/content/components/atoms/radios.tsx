import { useState } from "react";
import { Radio, RadioGroup } from "../../../../../components/atoms/Radio";
import { Badge } from "../../../../../components/atoms/Badge";
import CodeBlock from "../CodeBlock";
import { CheckCircle2, List, Settings2 } from "lucide-react";

export default function RadiosPage() {
    const [selectedSize, setSelectedSize] = useState("md");
    const [selectedPlan, setSelectedPlan] = useState("pro");

    return (
        <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
            {/* HERO SECTION */}
            <header className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-4">
                    <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Atoms</Badge>
                    <Badge variant="neutral" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase italic border-neutral-300">Form</Badge>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
                    Radio.
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    A refined selection tool for mutually exclusive options. Features smooth animations, distinct sizing, and rich labeling.
                </p>
            </header>

            {/* BASIC SELECTION */}
            <section className="space-y-8">
                <CodeBlock
                    title="Basic Selection"
                    description="Simple radio buttons for mutually exclusive choices with descriptive text."
                    code={`import { Radio, RadioGroup } from "@/components/atoms/Radio";\n\n<RadioGroup label="Select your plan">\n  <Radio label="Free Plan" name="plan" description="Perfect for hobbyists." />\n  <Radio label="Pro Plan" name="plan" checked />\n</RadioGroup>`}
                >
                    <div className="p-4">
                        <RadioGroup label="Select your plan">
                            <Radio
                                label="Free Plan"
                                name="plan"
                                checked={selectedPlan === "free"}
                                onChange={() => setSelectedPlan("free")}
                                description="Perfect for individual hobbyists."
                            />
                            <Radio
                                label="Pro Plan"
                                name="plan"
                                checked={selectedPlan === "pro"}
                                onChange={() => setSelectedPlan("pro")}
                                description="Best for professional designers."
                            />
                            <Radio
                                label="Enterprise"
                                name="plan"
                                checked={selectedPlan === "enterprise"}
                                onChange={() => setSelectedPlan("enterprise")}
                                description="Advanced features for large teams."
                            />
                        </RadioGroup>
                    </div>
                </CodeBlock>
            </section>

            {/* SIZING SECTION */}
            <section className="space-y-8">
                <CodeBlock
                    title="Adaptive Sizing"
                    description="Available in three sizes to fit any layout requirement."
                    code={`<Radio size="sm" label="Small" />\n<Radio size="md" label="Medium" />\n<Radio size="lg" label="Large" />`}
                >
                    <div className="p-4 space-y-6">
                        <Radio
                            size="sm"
                            label="Small Radio"
                            name="size"
                            checked={selectedSize === "sm"}
                            onChange={() => setSelectedSize("sm")}
                        />
                        <Radio
                            size="md"
                            label="Medium (Default)"
                            name="size"
                            checked={selectedSize === "md"}
                            onChange={() => setSelectedSize("md")}
                        />
                        <Radio
                            size="lg"
                            label="Large Radio"
                            name="size"
                            checked={selectedSize === "lg"}
                            onChange={() => setSelectedSize("lg")}
                        />
                    </div>
                </CodeBlock>
            </section>

            {/* ERROR STATES */}
            <section className="space-y-8">
                <CodeBlock
                    title="Validation States"
                    description="Clear visual feedback for required selections or errors."
                    code={`<Radio label="Error State" error="Field required" />\n<Radio label="Disabled" disabled />`}
                >
                    <div className="p-4 space-y-8">
                        <Radio
                            label="Error State"
                            error="You must agree to the terms."
                            name="error-demo"
                        />
                        <Radio
                            label="Disabled Option"
                            disabled
                            description="This choice is currently unavailable."
                            name="disabled-demo"
                        />
                    </div>
                </CodeBlock>
            </section>

            {/* TECHNICAL SPECS */}
            <section className="space-y-8">
                <div className="space-y-2 border-b border-neutral-100 dark:border-neutral-700 pb-8 uppercase">
                    <h2 className="text-3xl font-black tracking-tighter text-neutral-900 leading-none italic">Technical Specs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-3xl space-y-4 shadow-sm">
                        <CheckCircle2 size={24} className="text-neutral-900" />
                        <h4 className="font-black text-neutral-900 uppercase leading-none text-sm">Framer Motion</h4>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">Hardware-accelerated animations for smooth selection transitions.</p>
                    </div>
                    <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-3xl space-y-4 shadow-sm">
                        <List size={24} className="text-neutral-900" />
                        <h4 className="font-black text-neutral-900 uppercase leading-none text-sm">Rich Labeling</h4>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">Integrated description and error support for contextual clarity.</p>
                    </div>
                    <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-3xl space-y-4 shadow-sm">
                        <Settings2 size={24} className="text-neutral-900" />
                        <h4 className="font-black text-neutral-900 uppercase leading-none text-sm">Custom Grouping</h4>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">Logical fieldset wrapper for accessibility and layout control.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
