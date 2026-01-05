import { Badge } from "../../../../../components/atoms/Badge";
import { Navigation, Smartphone, Monitor } from "lucide-react";
import { Navbar } from "../../../../../components/layouts/Navbar";

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

                <div className="relative h-[200px]  dark:bg-neutral-50 bg-neutral-50 rounded-3xl border-2 border-dashed dark:border-neutral-300 border-neutral-700 overflow-hidden transform-gpu translate-z-0">
                    <Navbar />
                </div>
            </section>


        </div>
    );
}
