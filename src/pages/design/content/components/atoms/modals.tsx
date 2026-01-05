import { useState } from "react";
import { Modal } from "../../../../../components/atoms/Modal";
import type { ModalVariant } from "../../../../../components/atoms/Modal";
import { Button } from "../../../../../components/atoms/Button";
import { Badge } from "../../../../../components/atoms/Badge";
import CodeBlock from "../CodeBlock";
import { Info, CheckCircle2, AlertTriangle, AlertCircle, Layout } from "lucide-react";

export default function ModalsPage() {
    const [activeModal, setActiveModal] = useState<{ isOpen: boolean; variant: ModalVariant } | null>(null);

    const openModal = (variant: ModalVariant) => {
        setActiveModal({ isOpen: true, variant });
    };

    const closeModal = () => {
        setActiveModal(prev => prev ? { ...prev, isOpen: false } : null);
    };

    return (
        <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
            <header className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-4">
                    <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Overlays</Badge>
                    <Badge variant="neutral" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase italic border-neutral-300">Semantic</Badge>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
                    Modals.
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    Polished dialog boxes that provide contextual information or require user interaction without leaving the current flow.
                </p>
            </header>

            {/* Basic Usage */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-black tracking-tighter text-neutral-900">Semantic Triggers</h2>
                    <p className="text-neutral-500 font-medium">Use outline buttons to trigger different semantic modes of the modal.</p>
                </div>

                <CodeBlock
                    title="Modal Implementation"
                    description="Example of how to trigger semantic modals using outline buttons."
                    code={`const [isOpen, setIsOpen] = useState(false);\n\n<Button variant="outline" onClick={() => setIsOpen(true)}>Open Modal</Button>\n\n<Modal \n  isOpen={isOpen} \n  variant="success" \n  title="Action Required" \n  onClose={() => setIsOpen(false)}\n/>`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8 bg-neutral-50 dark:bg-neutral-50 rounded-[1.5rem] border border-neutral-200 dark:border-neutral-200 transition-all duration-300">
                        <Button
                            variant="outline"
                            className="border-success/40 text-success hover:bg-success/10 transition-all font-black dark:border-success/30 dark:text-success dark:hover:bg-success/10"
                            onClick={() => openModal("success")}
                        >
                            <CheckCircle2 size={16} className="mr-2" /> Success
                        </Button>

                        <Button
                            variant="outline"
                            className="border-info/40 text-info hover:bg-info/10 transition-all font-black dark:border-info/30 dark:text-info dark:hover:bg-info/10"
                            onClick={() => openModal("info")}
                        >
                            <Info size={16} className="mr-2" /> Info
                        </Button>

                        <Button
                            variant="outline"
                            className="border-warning/40 text-warning hover:bg-warning/10 transition-all font-black dark:border-warning/30 dark:text-warning dark:hover:bg-warning/10"
                            onClick={() => openModal("warning")}
                        >
                            <AlertTriangle size={16} className="mr-2" /> Warning
                        </Button>

                        <Button
                            variant="outline"
                            className="border-danger/40 text-danger hover:bg-danger/10 transition-all font-black dark:border-danger/30 dark:text-danger dark:hover:bg-danger/10"
                            onClick={() => openModal("danger")}
                        >
                            <AlertCircle size={16} className="mr-2" /> Danger
                        </Button>
                    </div>
                </CodeBlock>
            </section>

            {/* The Modal Renders */}
            <Modal
                isOpen={activeModal?.isOpen || false}
                onClose={closeModal}
                variant={activeModal?.variant || "info"}
                title={activeModal?.variant === "success" ? "Operation Successful" :
                    activeModal?.variant === "warning" ? "Caution Advised" :
                        activeModal?.variant === "danger" ? "Critical Failure" : "System Information"}
                description={activeModal?.variant === "success" ? "All database migrations have been executed correctly." :
                    activeModal?.variant === "warning" ? "Your account is nearing its monthly storage limit." :
                        activeModal?.variant === "danger" ? "Unable to process payment due to an expired card." : "The new system patch is ready for installation."}
            >
                <div className="text-sm leading-relaxed p-4 bg-neutral-100 dark:bg-neutral-100 rounded-2xl border border-neutral-200 dark:border-neutral-200 italic text-neutral-600">
                    "This is an example of custom injection into the modal body, allowing for complex layouts within the dialog."
                </div>
            </Modal>
        </div>
    );
}