import {  ProfileDropdown  } from "harmony-react-ui";
import {  Badge  } from "harmony-react-ui";
import CodeBlock from "../CodeBlock";

export default function ProfileDropdownPage() {
    const mockUser = {
        name: "Abderrahman Lahmidi",
        email: "contact@abderrahman.io",
        
    };

    return (
        <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
            {}
            <header className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-4">
                    <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Navigation</Badge>
                    <Badge variant="neutral" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase italic">Glassmorphism</Badge>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
                    Profile Dropdown.
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    A premium user identity component with interactive navigation and account management actions.
                </p>
            </header>

            {}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-black tracking-tighter text-neutral-900">Push to Expand</h2>
                    <p className="text-neutral-500 font-medium">Test the interactive identity switch and menu system.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <CodeBlock
                        title="Interactive Demo"
                        description="The dropdown features smooth framer-motion transitions and backdrop filters."
                        code={`<ProfileDropdown \n  user={{ \n    name: "Abderrahman", \n    email: "contact@ui.com"\n  }} \n/>`}
                    >
                        <div className="p-12 bg-neutral-900 dark:bg-neutral-50 rounded-[3rem] flex items-center justify-center border border-neutral-800 dark:border-neutral-200 shadow-2xl overflow-hidden relative min-h-[400px]">
                            <div className="absolute top-8 right-8">
                                <ProfileDropdown user={mockUser} />
                            </div>
                            <div className="text-neutral-500 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest">
                                Expand the top right profile
                            </div>
                        </div>
                    </CodeBlock>

                    <CodeBlock
                        title="Configuration"
                        description="Data structure required for the user prop."
                        code={`interface User {\n  name: string;\n  email: string;\n  avatar?: string; \n}`}
                    >
                        <div className="p-12 bg-neutral-50 dark:bg-neutral-900 rounded-[3rem] flex items-center justify-center border border-neutral-200 dark:border-neutral-800 shadow-sm min-h-[400px]">
                            <ProfileDropdown
                                user={{
                                    name: "Harmony Admin",
                                    email: "admin@harmony.design"
                                }}
                            />
                        </div>
                    </CodeBlock>
                </div>
            </section>

            {}
            <section className="space-y-12 pb-20">
                <div className="space-y-2 border-b border-neutral-100 dark:border-neutral-800 pb-8">
                    <h2 className="text-3xl font-black tracking-tighter text-neutral-900 dark:text-white uppercase leading-none">Functional Pillars</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="space-y-4 p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-3xl">
                        <div className="w-12 h-12 bg-neutral-900 dark:bg-neutral-50 rounded-2xl flex items-center justify-center text-white dark:text-neutral-900 font-black">
                            01
                        </div>
                        <h4 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Backdrop Filter</h4>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">Hardware accelerated blur-filters ensure content remains readable over any UI complexity.</p>
                    </div>

                    <div className="space-y-4 p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-3xl">
                        <div className="w-12 h-12 bg-neutral-900 dark:bg-neutral-50 rounded-2xl flex items-center justify-center text-white dark:text-neutral-900 font-black">
                            02
                        </div>
                        <h4 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Spring Motion</h4>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">Dynamic scaling and sliding animations powered by framer-motion create a high-end physical feel.</p>
                    </div>

                    <div className="space-y-4 p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-3xl">
                        <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center text-white font-black">
                            03
                        </div>
                        <h4 className="text-xl font-black text-red-500 uppercase tracking-tighter">Destructive Flow</h4>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed">The Sign Out action is visually separated with destructive color themes to prevent accidental triggers.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
