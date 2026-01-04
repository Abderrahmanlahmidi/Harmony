import React from "react";
import { Navbar } from "../../../../../components/layouts/Navbar";
import { Badge } from "../../../../../components/atoms/Badge";
import CodeBlock from "../CodeBlock";
import { Layout, Menu, Smartphone, MousePointer2, SmartphoneIcon } from "lucide-react";

export default function NavbarPage() {
    return (
        <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
            {/* HERO SECTION */}
            <header className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-4">
                    <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Structure</Badge>
                    <Badge variant="neutral" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase italic border-neutral-300">Responsive</Badge>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
                    Navbar.
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    A highly polished, responsive navigation header with Glassmorphism effects, scroll detection, and mobile menu support.
                </p>
            </header>

            {/* LIVE PREVIEW SECTION */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-black tracking-tighter text-neutral-900">Live Preview</h2>
                    <p className="text-neutral-500 font-medium">Interact with the navbar below. Try scrolling to see the glass effect.</p>
                </div>

                <div className="relative h-96 w-full rounded-[3rem] border border-neutral-200 bg-neutral-100 overflow-hidden">
                    <div className="absolute inset-0 overflow-y-auto p-0 pt-0">
                        {/* Mock Scrollable Content */}
                        <div className="h-[1000px] w-full pt-32 px-12 space-y-8">
                            <Navbar />
                            <div className="max-w-3xl space-y-6">
                                <h1 className="text-5xl font-black text-neutral-900">Scroll down to see the magic.</h1>
                                <p className="text-xl text-neutral-500 leading-relaxed font-medium">
                                    The Navbar uses hardware-accelerated Glassmorphism that activates as soon as you start scrolling, creating a premium depth effect.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-40 bg-white rounded-[2rem] border border-neutral-200 shadow-sm" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Perspective Label */}
                    <div className="absolute bottom-8 right-8 px-4 py-2 bg-neutral-900 text-neutral-50 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                        Isolated Preview
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECS */}
            <section className="space-y-8">
                <div className="space-y-2 border-b border-neutral-100 dark:border-neutral-700 pb-8 uppercase">
                    <h2 className="text-3xl font-black tracking-tighter text-neutral-900 leading-none italic">Technical Specs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-8 bg-neutral-50 dark:bg-neutral-50 border border-neutral-200 dark:border-neutral-200 rounded-3xl space-y-4 shadow-sm transition-all duration-300 group hover:border-neutral-300">
                        <Smartphone size={24} className="text-neutral-900" />
                        <h4 className="font-black text-neutral-900 uppercase leading-none text-sm">Responsive Menu</h4>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">Touch-optimized mobile menu with smooth Framer Motion entrance/exit.</p>
                    </div>
                    <div className="p-8 bg-neutral-50 dark:bg-neutral-50 border border-neutral-200 dark:border-neutral-200 rounded-3xl space-y-4 shadow-sm transition-all duration-300 group hover:border-neutral-300">
                        <MousePointer2 size={24} className="text-neutral-900" />
                        <h4 className="font-black text-neutral-900 uppercase leading-none text-sm">Scroll Reactive</h4>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">Automatic background transition from transparent to glass on scroll.</p>
                    </div>
                    <div className="p-8 bg-neutral-50 dark:bg-neutral-50 border border-neutral-200 dark:border-neutral-200 rounded-3xl space-y-4 shadow-sm transition-all duration-300 group hover:border-neutral-300">
                        <Layout size={24} className="text-neutral-900" />
                        <h4 className="font-black text-neutral-900 uppercase leading-none text-sm">Theme Aware</h4>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">Built-in theme toggle support that syncs with the application state.</p>
                    </div>
                </div>
            </section>

            {/* IMPLEMENTATION */}
            <section className="space-y-8 pb-40">
                <div className="space-y-2">
                    <h2 className="text-3xl font-black tracking-tighter text-neutral-900">Implementation</h2>
                    <p className="text-neutral-500 font-medium">Quick copy-paste example for your layout component.</p>
                </div>

                <CodeBlock
                    title="Navbar Usage"
                    description="The navbar is designed to be placed at the root of your layout."
                    code={`import { Navbar } from "@/components/layouts/Navbar";\n\nexport default function RootLayout({ children }) {\n  return (\n    <div className="min-h-screen bg-neutral-50">\n      <Navbar />\n      <main>{children}</main>\n    </div>\n  );\n}`}
                />
            </section>
        </div>
    );
}
