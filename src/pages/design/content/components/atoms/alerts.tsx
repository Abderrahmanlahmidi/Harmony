import { Alert } from "../../../../../components/atoms/Alert";
import CodeBlock from "../CodeBlock";
import { Terminal, ArrowRight } from "lucide-react";
import { Badge } from "../../../../../components/atoms/Badge";

export default function AlertsPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      <header className="space-y-6 max-w-2xl">
        <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Feedback</Badge>
        <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">Alerts</h1>
        <p className="text-lg text-neutral-500 font-medium leading-relaxed">
          Feedback messages for typical user actions, providing context-aware information and alerts.
        </p>
      </header>

      {/* Default / Info Alert */}
      <section className="space-y-6">
        <CodeBlock
          title="Info (Default)"
          description="Standard info alert with iconic branding colors."
          code={`import { Alert } from "@/components/atoms/Alert";

export function AlertDemo() {
  return (
    <Alert variant="info">
      A simple info alert with an <a href="#" className="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
    </Alert>
  )
}`}
        >
          <Alert variant="info">
            A simple info alert with an <a href="#" className="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
          </Alert>
        </CodeBlock>
      </section>

      {/* Variants */}
      <section className="space-y-6">
        <CodeBlock
          title="Variants"
          description="Alerts come in helpful semantic variants: Success, Warning, Danger, and Neutral."
          code={`import { Alert } from "@/components/atoms/Alert";

export function AlertVariants() {
  return (
    <div className="space-y-4">
       <Alert variant="success">
        <span className="font-bold">Success!</span> Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning">
        <span className="font-bold">Caution:</span> Your account is nearing its storage limit.
      </Alert>
      <Alert variant="danger">
        <span className="font-bold">Error:</span> Something went wrong. Please try again.
      </Alert>
    </div>
  )
}`}
        >
          <div className="space-y-4">
            <Alert variant="success">
              <span className="font-bold">Success!</span> Your changes have been saved successfully.
            </Alert>
            <Alert variant="warning">
              <span className="font-bold">Caution:</span> Your account is nearing its storage limit.
            </Alert>
            <Alert variant="danger">
              <span className="font-bold">Error:</span> Something went wrong. Please try again.
            </Alert>
          </div>
        </CodeBlock>
      </section>

      {/* Dismissible */}
      <section className="space-y-6">
        <CodeBlock
          title="Dismissible"
          description="Add an onClose handler to show a dismiss button."
          code={`import { Alert } from "@/components/atoms/Alert";

export function AlertDismissible() {
  return (
    <Alert variant="info" onClose={() => alert('Closed!')}>
      This alert acts as a dismissible notification.
    </Alert>
  )
}`}
        >
          <Alert variant="info" onClose={() => console.log('Close clicked')}>
            This alert acts as a dismissible notification.
          </Alert>
        </CodeBlock>
      </section>

      {/* Custom Icon */}
      <section className="space-y-6">
        <CodeBlock
          title="Custom Icon"
          description="You can override the default icon or hide it entirely."
          code={`import { Alert } from "@/components/atoms/Alert";
import { Terminal } from "lucide-react";

export function AlertCustom() {
  return (
    <Alert variant="info" icon={<Terminal className="w-5 h-5" />}>
      This alert uses a custom Terminal icon.
    </Alert>
  )
}`}
        >
          <Alert variant="info" icon={<Terminal className="w-5 h-5" />}>
            This alert uses a custom Terminal icon.
          </Alert>
        </CodeBlock>
      </section>

      {/* Pill Layout */}
      <section className="space-y-6">
        <CodeBlock
          title="Pill Layout"
          description="Compact pill-shaped alert, useful for announcements."
          code={`import { Alert } from "@/components/atoms/Alert";
import { Badge } from "@/components/atoms/Badge";
import { ArrowRight } from "lucide-react";

export function AlertPill() {
  return (
    <Alert layout="pill" hideIcon variant="info">
        <div className="flex items-center gap-2">
            <Badge variant="primary" rounded="full" size="sm">New</Badge>
            <span className="text-sm">
                Make sure to check out the <a href="#" className="font-semibold underline hover:no-underline">new documentation</a>.
            </span>
             <ArrowRight className="w-4 h-4 ml-1 opacity-50" />
        </div>
    </Alert>
  )
}`}
        >
          <Alert layout="pill" hideIcon variant="info">
            <div className="flex items-center gap-2">
              <Badge variant="primary" rounded="full" size="sm">New</Badge>
              <span className="text-sm">
                Make sure to check out the <a href="#" className="font-semibold underline hover:no-underline">new documentation</a>.
              </span>
              <ArrowRight className="w-4 h-4 ml-1 opacity-50" />
            </div>
          </Alert>
        </CodeBlock>
      </section>

    </div>
  );
}
