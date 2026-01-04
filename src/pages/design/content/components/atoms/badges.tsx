import { Badge } from "../../../../../components/atoms/Badge";
import CodeBlock from "../CodeBlock";
import { Check, ShieldAlert, AlertTriangle, Info } from "lucide-react";

export default function BadgesPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      <header className="space-y-6 max-w-2xl">
        <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Components</Badge>
        <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">Badge</h1>
        <p className="text-lg text-neutral-500 font-medium leading-relaxed">
          Small status indicators used to highlight scores, counts, or semantic states in a concise format.
        </p>
      </header>

      {/* Variants Section */}
      <section className="space-y-6">
        <CodeBlock
          title="Variants"
          description="Badges come in different variants to denote semantic meaning."
          code={`import { Badge } from "@/components/atoms/Badge";

export default function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`}
        >
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CodeBlock>
      </section>

      {/* Sizes Section */}
      <section className="space-y-6">
        <CodeBlock
          title="Sizes"
          description="Badges are available in three sizes: small, medium (default), and large."
          code={`import { Badge } from "@/components/atoms/Badge";

export default function BadgeSizes() {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="primary" size="sm">Small</Badge>
      <Badge variant="primary" size="md">Medium</Badge>
      <Badge variant="primary" size="lg">Large</Badge>
    </div>
  );
}`}
        >
          <div className="flex items-center gap-4">
            <Badge variant="primary" size="sm">Small</Badge>
            <Badge variant="primary" size="md">Medium</Badge>
            <Badge variant="primary" size="lg">Large</Badge>
          </div>
        </CodeBlock>
      </section>

      {/* Shapes Section */}
      <section className="space-y-6">
        <CodeBlock
          title="Shapes"
          description="Use the rounded prop to control the border radius."
          code={`import { Badge } from "@/components/atoms/Badge";

export default function BadgeShapes() {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="primary" rounded="full">Full (Default)</Badge>
      <Badge variant="primary" rounded="md">Medium</Badge>
      <Badge variant="primary" rounded="sm">Small</Badge>
    </div>
  );
}`}
        >
          <div className="flex items-center gap-4">
            <Badge variant="primary" rounded="full">Full (Default)</Badge>
            <Badge variant="primary" rounded="md">Medium</Badge>
            <Badge variant="primary" rounded="sm">Small</Badge>
          </div>
        </CodeBlock>
      </section>

      {/* With Icons Section */}
      <section className="space-y-6">
        <CodeBlock
          title="With Icons"
          description="You can nest icons inside badges."
          code={`import { Badge } from "@/components/atoms/Badge";
import { Check, ShieldAlert, AlertTriangle, Info } from "lucide-react";

export default function BadgeIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge variant="success" className="gap-1 pl-1.5">
        <Check size={14} /> 
        Verified
      </Badge>
      <Badge variant="danger" className="gap-1 pl-1.5">
        <ShieldAlert size={14} /> 
        Security Risk
      </Badge>
      <Badge variant="warning" className="gap-1 pl-1.5">
        <AlertTriangle size={14} /> 
        Warning
      </Badge>
      <Badge variant="neutral" className="gap-1 pl-1.5">
        <Info size={14} /> 
        Info
      </Badge>
    </div>
  );
}`}
        >
          <div className="flex flex-wrap gap-4">
            <Badge variant="success" className="gap-1 pl-1.5">
              <Check size={14} />
              Verified
            </Badge>
            <Badge variant="danger" className="gap-1 pl-1.5">
              <ShieldAlert size={14} />
              Security Risk
            </Badge>
            <Badge variant="warning" className="gap-1 pl-1.5">
              <AlertTriangle size={14} />
              Warning
            </Badge>
            <Badge variant="neutral" className="gap-1 pl-1.5">
              <Info size={14} />
              Info
            </Badge>
          </div>
        </CodeBlock>
      </section>

    </div>
  );
}
