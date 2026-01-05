import { useState } from "react";
import { Toggle } from "../../../../../components/atoms/Toggle";
import { Badge } from "../../../../../components/atoms/Badge";
import CodeBlock from "../CodeBlock";
import { CheckCircle2, Zap, Settings2 } from "lucide-react";

export default function TogglesPage() {
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
        autoSave: true,
    });

    return (
        <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
            {/* HERO SECTION */}
            <header className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-4">
                    <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Atoms</Badge>
                    <Badge variant="neutral" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase italic border-neutral-300">Form</Badge>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
                    Toggle.
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    A physical switch for binary actions. Features spring-physics animations, thematic color synchronization, and distinct adaptive sizing.
                </p>
            </header>

            {/* BASIC USAGE */}
            <section className="space-y-8">
                <CodeBlock
                    title="Interactive Settings"
                    description="Standard switches for binary preferences like system configurations."
                    code={`import { Toggle } from "@/components/atoms/Toggle";\n\n<Toggle label="Enable Feature" defaultChecked />\n<Toggle label="Notifications" description="Get alerts for activity." />`}
                >
                    <div className="p-4 space-y-6">
                        <Toggle
                            label="Push Notifications"
                            checked={settings.notifications}
                            onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                            description="Receive real-time alerts on your device."
                        />
                        <Toggle
                            label="Auto-save Progress"
                            checked={settings.autoSave}
                            onChange={(e) => setSettings({ ...settings, autoSave: e.target.checked })}
                            description="Continuously save your work to the cloud."
                        />
                    </div>
                </CodeBlock>
            </section>

            {/* SIZING SECTION */}
            <section className="space-y-8">
                <CodeBlock
                    title="Proportional Sizing"
                    description="Available in three distinct scales to match interface density."
                    code={`<Toggle size="sm" label="Small" />\n<Toggle size="md" label="Medium" />\n<Toggle size="lg" label="Large" />`}
                >
                    <div className="p-4 space-y-8 italic">
                        <Toggle size="sm" label="Small Switch" defaultChecked />
                        <Toggle size="md" label="Medium (Default)" defaultChecked />
                        <Toggle size="lg" label="Large Switch" defaultChecked />
                    </div>
                </CodeBlock>
            </section>

            {/* ERROR & DISABLED STATES */}
            <section className="space-y-8">
                <CodeBlock
                    title="System States"
                    description="Visual feedback for validation requirements and administrative restrictions."
                    code={`<Toggle label="Required Toggle" error="Selection required" />\n<Toggle label="Locked Setting" disabled />`}
                >
                    <div className="p-4 space-y-8">
                        <Toggle
                            label="Error Specification"
                            error="You must enable security protocols."
                            size="md"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Toggle label="Disabled Off" disabled description="This module is not installed." />
                            <Toggle label="Disabled On" disabled defaultChecked description="System critical setting." />
                        </div>
                    </div>
                </CodeBlock>
            </section>
        </div>
    );
}
