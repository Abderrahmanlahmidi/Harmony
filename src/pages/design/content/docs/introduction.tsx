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
                <p className="text-neutral-600">
                    The Harmony Design System is grounded in three core principles that guide our decision-making and component architecture:
                </p>

                <div className="overflow-hidden rounded-xl border border-neutral-200">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-neutral-50 border-b border-neutral-200">
                                <th className="px-6 py-4 text-sm font-bold text-neutral-900 w-1/4">Principle</th>
                                <th className="px-6 py-4 text-sm font-bold text-neutral-900">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            <tr>
                                <td className="px-6 py-4">
                                    <span className="font-bold text-primary">Clarity</span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm text-neutral-600">Interfaces should be clear and easy to understand at a glance, reducing cognitive load for users.</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">
                                    <span className="font-bold text-secondary">Efficiency</span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm text-neutral-600">Minimize friction and let users achieve their goals faster through intuitive patterns and optimized interactions.</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">
                                    <span className="font-bold text-neutral-900">Consistency</span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm text-neutral-600">Maintain a unified look and feel across all touchpoints, building trust and familiarity throughout the application.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
