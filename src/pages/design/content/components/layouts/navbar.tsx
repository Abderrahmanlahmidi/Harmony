
import CodeBlock from "../CodeBlock";
import { Badge } from "../../../../../components/atoms/Badge";
import { Navigation, MousePointer, Smartphone, Monitor } from "lucide-react";

export default function NavbarPage() {
    return (
        <div className="space-y-12 pb-20">
            <header className="space-y-4">
                <div className="flex items-center gap-3">
                    <Badge variant="primary" className="rounded-lg">Layout</Badge>
                    <span className="text-neutral-400 font-mono text-sm">v1.0.0</span>
                </div>
                <h1 className="text-5xl font-black text-neutral-900 tracking-tighter flex items-center gap-4">
                    <Navigation className="w-10 h-10 text-primary" />
                    Navbar
                </h1>
                <p className="text-xl text-neutral-500 max-w-2xl font-medium leading-relaxed">
                    A responsive, multi-functional navigation bar with theme switching, glassmorphism support, and animated mobile states.
                </p>
            </header>

            {/* PREVIEW */}
            <section className="space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                    <h2 className="text-2xl font-black text-neutral-900 italic uppercase">Interactive Preview</h2>
                    <div className="flex gap-2">
                        <div className="p-2 bg-neutral-100 rounded-lg text-neutral-400"><Monitor size={18} /></div>
                        <div className="p-2 hover:bg-neutral-100 rounded-lg text-neutral-400 transition-colors"><Smartphone size={18} /></div>
                    </div>
                </div>

                <div className="relative h-[200px] bg-neutral-100/50 rounded-3xl border-2 border-dashed border-neutral-300 flex items-center justify-center overflow-hidden">
                    <p className="text-neutral-400 font-bold italic">Navbar is fixed to viewport. Scroll documentation to see behavior.</p>
                </div>
            </section>

            {/* USAGE */}
            <section className="space-y-8">
                <CodeBlock
                    title="Implementation"
                    description="The Navbar uses Framer Motion for backdrop transitions and Lucide icons for actions."
                    code={`import { Navbar } from "@/components/layouts/Navbar";\n\n<Navbar />`}
                >
                    <div className="p-8 bg-neutral-900 rounded-3xl">
                        <div className="flex items-center gap-4 text-white">
                            <MousePointer className="text-primary animate-bounce" />
                            <span className="font-bold">Check the top of this page to see the Navbar in action.</span>
                        </div>
                    </div>
                </CodeBlock>
            </section>

            {/* TECHNICAL SPECS */}
            <section className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-neutral-200 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Navigation size={20} />
                    </div>
                    <h3 className="font-black text-neutral-900">Sticky & Blured</h3>
                    <p className="text-sm text-neutral-500 font-medium">Automatically applies backdrop-blur and shadow when the user scrolls past 20px.</p>
                </div>
                <div className="p-6 bg-white border border-neutral-200 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                        <Smartphone size={20} />
                    </div>
                    <h3 className="font-black text-neutral-900">Mobile Optimized</h3>
                    <p className="text-sm text-neutral-500 font-medium">Features a full-screen animated menu for smaller viewports with smooth transitions.</p>
                </div>
                <div className="p-6 bg-white border border-neutral-200 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center text-success">
                        <Badge variant="success" size="sm" className="p-1" />
                    </div>
                    <h3 className="font-black text-neutral-900">Theme Aware</h3>
                    <p className="text-sm text-neutral-500 font-medium">Deeply integrated with the useDarkMode hook for seamless global theme switching.</p>
                </div>
            </section>
        </div>
    );
}
