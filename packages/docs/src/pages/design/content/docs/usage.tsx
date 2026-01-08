import { BookOpen, Layers, Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function Usage() {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (id: string, command: string) => {
        navigator.clipboard.writeText(command);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

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
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Layers className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900">Installation</h2>
                </div>

                <div className="max-w-md">
                    <div className="bg-white dark:bg-neutral-100 rounded-xl border border-neutral-200 p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-black uppercase tracking-widest text-neutral-400">npm</span>
                            <button
                                onClick={() => handleCopy('npm', 'npm i harmony-react-ui')}
                                className={`flex items-center gap-2 px-2 py-1 rounded-md transition-all text-xs font-bold ${copiedId === 'npm' ? 'text-success bg-success/10' : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50'
                                    }`}
                            >
                                {copiedId === 'npm' ? (
                                    <>
                                        <Check className="w-3.5 h-3.5" />
                                        <span>Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" />
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                        </div>
                        <code className="block text-sm font-mono text-primary font-bold">
                            npm i harmony-react-ui
                        </code>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-secondary" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900">Quick Start</h2>
                </div>

                <div className="prose prose-neutral max-w-none text-neutral-600">
                    <p>
                        Import and use components directly from the <code>harmony-react-ui</code> package.
                        The library is built with TypeScript, providing full type safety and autocompletion.
                    </p>
                </div>

                <div className="bg-white dark:bg-neutral-100 rounded-xl border border-neutral-200 overflow-hidden">
                    <div className="bg-neutral-50 px-4 py-2 border-b border-neutral-200 flex justify-between items-center">
                        <span className="text-xs font-medium text-neutral-500">App.tsx</span>
                    </div>
                    <pre className="p-6 text-sm font-mono text-neutral-800 dark:text-neutral-900 bg-neutral-50/50">
                        <code>{`import { Button } from 'harmony-react-ui';
import { Sparkles } from 'lucide-react';

export default function App() {
  return (
    <Button 
      variant="primary" 
      size="lg" 
      rightIcon={<Sparkles size={18} />}
    >
      Harmony UI
    </Button>
  );
}`}</code>
                    </pre>
                </div>
            </section>
        </div>
    );
}
