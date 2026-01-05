import { useState } from "react";
import { Checkbox, CheckboxGroup } from "../../../../../components/atoms/Checkbox";
import { Badge } from "../../../../../components/atoms/Badge";
import CodeBlock from "../CodeBlock";
import { CheckCircle2, Layout, Layers } from "lucide-react";

export default function CheckboxesPage() {
    const [checkedItems, setCheckedItems] = useState({
        notifications: true,
        newsletter: false,
        marketing: false,
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
                    Checkbox.
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    A multi-selection tool for independent options. Features SVG stroke animations, indeterminate states, and logical grouping.
                </p>
            </header>

            {/* BASIC USAGE */}
            <section className="space-y-8">
                <CodeBlock
                    title="Basic Selection"
                    description="Standard checkbox for single or multiple independent choices."
                    code={`import { Checkbox } from "@/components/atoms/Checkbox";\n\n<Checkbox label="Accept terms and conditions" />\n<Checkbox label="Remember me" defaultChecked />`}
                >
                    <div className="p-4 space-y-4">
                        <Checkbox
                            label="Email Notifications"
                            checked={checkedItems.notifications}
                            onChange={(e) => setCheckedItems({ ...checkedItems, notifications: e.target.checked })}
                            description="Receive daily digest of your activity."
                        />
                        <Checkbox
                            label="Marketing Emails"
                            checked={checkedItems.marketing}
                            onChange={(e) => setCheckedItems({ ...checkedItems, marketing: e.target.checked })}
                            description="New features and product updates."
                        />
                    </div>
                </CodeBlock>
            </section>

            {/* SIZING SECTION */}
            <section className="space-y-8">
                <CodeBlock
                    title="Adaptive Sizing"
                    description="Available in three sizes to accommodate different layout densities."
                    code={`<Checkbox size="sm" label="Small Checkbox" />\n<Checkbox size="md" label="Medium Checkbox" />\n<Checkbox size="lg" label="Large Checkbox" />`}
                >
                    <div className="p-4 space-y-6">
                        <Checkbox size="sm" label="Small Checkbox" name="size-sm" defaultChecked />
                        <Checkbox size="md" label="Medium Checkbox (Default)" name="size-md" defaultChecked />
                        <Checkbox size="lg" label="Large Checkbox" name="size-lg" defaultChecked />
                    </div>
                </CodeBlock>
            </section>

            {/* STATES SECTION */}
            <section className="space-y-8">
                <CodeBlock
                    title="Validation & States"
                    description="Handling errors, disabled states, and indeterminate selections."
                    code={`<Checkbox label="Agree to Terms" error="You must agree" />\n<Checkbox label="Disabled item" disabled />\n<Checkbox label="Parent item" indeterminate />`}
                >
                    <div className="p-4 space-y-8">
                        <Checkbox
                            label="Error State"
                            error="Accepting the license agreement is mandatory."
                            defaultChecked={false}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Checkbox
                                label="Disabled Unchecked"
                                disabled
                                description="This option is currently unavailable."
                            />
                            <Checkbox
                                label="Disabled Checked"
                                disabled
                                defaultChecked
                                description="Successfully configured feature."
                            />
                        </div>
                        <Checkbox
                            label="Indeterminate State"
                            indeterminate
                            description="Indicates a partial selection in a nested group."
                        />
                    </div>
                </CodeBlock>
            </section>

            {/* GROUPING SECTION */}
            <section className="space-y-8">
                <CodeBlock
                    title="Logical Grouping"
                    description="Use the CheckboxGroup to provide a clear label and structure for related options."
                    code={`<CheckboxGroup label="Preferences">\n  <Checkbox label="Item 1" />\n  <Checkbox label="Item 2" />\n</CheckboxGroup>`}
                >
                    <div className="p-4">
                        <CheckboxGroup label="Notification Settings">
                            <Checkbox label="Direct Messages" defaultChecked />
                            <Checkbox label="Mentions" />
                            <Checkbox label="Announcements" defaultChecked />
                        </CheckboxGroup>
                    </div>
                </CodeBlock>
            </section>
        </div>
    );
}
