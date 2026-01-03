import { Palette, Zap, Code, Shield } from 'lucide-react'

export default function Introduction() {
    return (
        <div className="space-y-12 pb-20">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">Introduction</h1>
                <p className="text-xl text-neutral-600 max-w-2xl">
                    Welcome to the Harmony Design System. A collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Palette className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">Design Tokens</h3>
                    <p className="text-neutral-600 text-sm">
                        Our system is built on top of a robust set of design tokens, ensuring consistency across colors, typography, and spacing.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">Performance</h3>
                    <p className="text-neutral-600 text-sm">
                        Every component is optimized for performance, ensuring minimal bundle size and smooth interactions.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">Accessibility</h3>
                    <p className="text-neutral-600 text-sm">
                        Built with accessibility in mind, following WCAG standards to ensure your application is inclusive to everyone.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-4">
                    <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-neutral-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">Developer Experience</h3>
                    <p className="text-neutral-600 text-sm">
                        Typed with TypeScript and easy to integrate into any React project with minimal setup.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-neutral-900">Guiding Principles</h2>
                <div className="prose prose-neutral max-w-none text-neutral-600">
                    <p>
                        The Harmony Design System is grounded in three core principles that guide our decision-making and component architecture:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Clarity:</strong> Interfaces should be clear and easy to understand at a glance.</li>
                        <li><strong>Efficiency:</strong> Minimize friction and let users achieve their goals faster.</li>
                        <li><strong>Consistency:</strong> Maintain a unified look and feel across all touchpoints.</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
