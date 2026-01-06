import { Github, BookOpen, Layers } from 'lucide-react';

export default function Usage() {
    return (
        <div className="space-y-12 pb-20">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">How to use</h1>
                <p className="text-xl text-neutral-600 max-w-2xl">
                    Everything you need to know to start building beautiful interfaces with Harmony.
                </p>
            </header>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black/5 rounded-lg flex items-center justify-center">
                        <Github className="w-4 h-4 text-neutral-900" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900">Project Structure</h2>
                </div>

                <div className="bg-neutral-900 dark:bg-black rounded-xl p-6 font-mono text-sm text-neutral-300 dark:text-neutral-400">
                    <div className="text-neutral-500 mb-4">Component Directory Schema</div>
                    <div className="space-y-1">
                        <div>src/</div>
                        <div>└── <span className="text-primary">components/</span></div>
                        <div className="pl-6">├── <span className="text-secondary">atoms/</span> <span className="text-neutral-500 ml-4 font-sans text-xs">Basic elements: Button, Input, Icon</span></div>
                        <div className="pl-6">├── <span className="text-secondary">molecules/</span> <span className="text-neutral-500 ml-4 font-sans text-xs">Compound components: Card, FormField</span></div>
                        <div className="pl-6">└── <span className="text-secondary">layout/</span> <span className="text-neutral-500 ml-4 font-sans text-xs">Structural: Navbar, Footer, Container</span></div>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Layers className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900">Integration Steps</h2>
                </div>

                <div className="overflow-hidden rounded-xl border border-neutral-200">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-neutral-50 dark:bg-neutral-100/50 border-b border-neutral-200">
                                <th className="px-6 py-4 text-sm font-bold text-neutral-900 w-1/4">Step</th>
                                <th className="px-6 py-4 text-sm font-bold text-neutral-900">Action & Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            <tr>
                                <td className="px-6 py-4 align-top">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-200 text-neutral-900">
                                        Step 01
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-bold text-neutral-900 mb-1">Browse Repository</p>
                                    <p className="text-sm text-neutral-600">Navigate to <code>src/components</code> in our GitHub repository to see all available components.</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 align-top">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-200 text-neutral-900">
                                        Step 02
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-bold text-neutral-900 mb-1">Choose Component</p>
                                    <p className="text-sm text-neutral-600">Select the component you need (e.g., <code>Button.tsx</code>). Most components are atomic and self-contained.</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 align-top">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-200 text-neutral-900">
                                        Step 03
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-bold text-neutral-900 mb-1">Copy & Paste</p>
                                    <p className="text-sm text-neutral-600">Copy the code into your project's local component directory. Harmony components are easy to move between projects.</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 align-top">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-200 text-neutral-900">
                                        Step 04
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-bold text-neutral-900 mb-1">Dependencies</p>
                                    <p className="text-sm text-neutral-600 mb-3">Install <code>lucide-react</code> to handle all icons used within the components.</p>
                                    <div className="bg-neutral-900 dark:bg-black rounded-lg p-3 text-neutral-300 dark:text-neutral-400 font-mono text-xs">
                                        npm install lucide-react
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-secondary" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900">Using Components</h2>
                </div>

                <div className="prose prose-neutral max-w-none text-neutral-600">
                    <p>
                        Once you've copied a component into your project, you can import and use it just like any other local file.
                        The components are built with TypeScript, providing full type safety and autocompletion.
                    </p>
                </div>

                <div className="bg-white dark:bg-neutral-100 rounded-xl border border-neutral-200 overflow-hidden">
                    <div className="bg-neutral-50 px-4 py-2 border-b border-neutral-200 flex justify-between items-center">
                        <span className="text-xs font-medium text-neutral-500">MyPage.tsx</span>
                    </div>
                    <pre className="p-6 text-sm font-mono text-neutral-800 dark:text-neutral-900 bg-neutral-50/50">
                        <code>{`import { Button } from '../components/buttons/Button';
import { ArrowRight } from 'lucide-react';

export default function MyPage() {
  return (
    <Button 
      variant="primary" 
      size="lg" 
      rightIcon={<ArrowRight />}
    >
      Get Started
    </Button>
  );
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                        <Layers className="w-4 h-4 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900">Structure</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl border border-neutral-200">
                        <h3 className="font-bold text-neutral-900 mb-2">Atomic Components</h3>
                        <p className="text-sm text-neutral-600">
                            Low-level components like Buttons, Inputs, and Icons that form the basic building blocks.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border border-neutral-200">
                        <h3 className="font-bold text-neutral-900 mb-2">Layout Components</h3>
                        <p className="text-sm text-neutral-600">
                            Structural components used to arrange content, like Grids, Flex containers, and Sections.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}




