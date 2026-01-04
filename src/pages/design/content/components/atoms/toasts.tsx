import { useToast } from "../../../../../components/atoms/Toast";
import { Button } from "../../../../../components/atoms/Button";
import { Badge } from "../../../../../components/atoms/Badge";
import CodeBlock from "../CodeBlock";
import { CheckCircle2, AlertCircle, Info, AlertTriangle, Bell } from "lucide-react";

export default function ToastsPage() {
    const { toast } = useToast();

    return (
        <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
            {/* --- HERO SECTION --- */}
            <header className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-4">
                    <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Feedback</Badge>
                    <Badge variant="neutral" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Glassmorphism</Badge>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
                    Glass Toasts.
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    Premium translucent notifications with hardware-accelerated backdrop filters and sliding animations.
                </p>
            </header>

            {/* Basic Usage */}
            <section className="space-y-8">
                <CodeBlock
                    title="Push Notifications"
                    description="Trigger glass pulses from anywhere in your app using the toast hook."
                    code={`const { toast } = useToast();\n\ntoast.info("System preferences saved!");`}
                >
                    <div className="flex items-center gap-4 p-4">
                        <Button
                            variant="primary"
                            className="bg-neutral-900 text-white border-none shadow-2xl transition-all font-black px-8 h-14 rounded-2xl"
                            onClick={() => toast.info("System preferences saved!")}
                        >
                            <Bell size={18} className="mr-2" />
                            Launch Glass Pulse
                        </Button>
                    </div>
                </CodeBlock>
            </section>

            {/* Semantic Variants */}
            <section className="space-y-8">
                <CodeBlock
                    title="Glass Feedback"
                    description="Semantic variants for different notification types: Success, Error, Warning, and Info."
                    code={`toast.success("Payment processed!");\ntoast.error("Connection failed.");\ntoast.warning("Storage almost full.");\ntoast.info("New update available.");`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                        <Button
                            variant="primary"
                            className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 font-black h-16 rounded-2xl justify-start px-8 text-lg"
                            onClick={() => toast.success("Payment processed successfully!")}
                        >
                            <CheckCircle2 size={24} className="mr-4" /> Success Glass
                        </Button>

                        <Button
                            variant="primary"
                            className="bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 font-black h-16 rounded-2xl justify-start px-8 text-lg"
                            onClick={() => toast.error("Connection failed. Try again.")}
                        >
                            <AlertCircle size={24} className="mr-4" /> Error Glass
                        </Button>

                        <Button
                            variant="primary"
                            className="bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 font-black h-16 rounded-2xl justify-start px-8 text-lg"
                            onClick={() => toast.warning("Your storage is almost full.")}
                        >
                            <AlertTriangle size={24} className="mr-4" /> Warning Glass
                        </Button>

                        <Button
                            variant="primary"
                            className="bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 font-black h-16 rounded-2xl justify-start px-8 text-lg"
                            onClick={() => toast.info("A new update is available.")}
                        >
                            <Info size={24} className="mr-4" /> Info Glass
                        </Button>
                    </div>
                </CodeBlock>
            </section>
        </div>
    );
}
