import { Button } from '../../../../../components/atoms/Button.tsx'
import { Badge } from '../../../../../components/atoms/Badge.tsx'
import { Plus, Mail, ArrowRight, Github } from 'lucide-react'
import CodeBlock from '../CodeBlock.tsx';

export default function ButtonsPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      <header className="space-y-6 max-w-2xl">
        <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Components</Badge>
        <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">Button</h1>
        <p className="text-lg text-neutral-500 font-medium leading-relaxed">
          Primary interaction component used to trigger actions, submit forms, and navigate through the application.
        </p>
      </header>

      <section className="space-y-6">
        <CodeBlock
          title="Variants"
          description="Explore the different visual styles of the Button component."
          code={`import { Button } from "@/components/atoms/Button";

export default function VariantsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </CodeBlock>
      </section>

      <section className="space-y-6">
        <CodeBlock
          title="Sizes"
          description="Buttons come in three distinct sizes: Small, Medium (default), and Large."
          code={`import { Button } from "@/components/atoms/Button";

export default function SizesExample() {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`}
        >
          <div className="flex flex-wrap gap-4 items-end justify-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </CodeBlock>
      </section>


      <section className="space-y-6">
        <CodeBlock
          title="With Icons"
          description="Icons can be added to both the left and right sides of the button text."
          code={`import { Button } from "@/components/atoms/Button";
import { Plus, ArrowRight, Mail, Github } from "lucide-react";

export default function IconsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button leftIcon={<Plus size={18} />}>Add Item</Button>
      <Button variant="secondary" rightIcon={<ArrowRight size={18} />}>Continue</Button>
      <Button variant="outline" leftIcon={<Mail size={18} />}>Send Email</Button>
      <Button variant="primary" leftIcon={<Github size={18} />}>GitHub</Button>
    </div>
  );
}`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button leftIcon={<Plus size={18} />}>Add Item</Button>
            <Button variant="secondary" rightIcon={<ArrowRight size={18} />}>Continue</Button>
            <Button variant="outline" leftIcon={<Mail size={18} />}>Send Email</Button>
            <Button variant="primary" leftIcon={<Github size={18} />}>GitHub</Button>
          </div>
        </CodeBlock>
      </section>


      <section className="space-y-6">
        <CodeBlock
          title="States"
          description="Buttons can be displayed in loading and disabled states."
          code={`import { Button } from "@/components/atoms/Button";

export default function StatesExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button isLoading>Loading...</Button>
      <Button variant="secondary" isLoading>Loading...</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>Disabled</Button>
    </div>
  );
}`}
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button isLoading>Loading...</Button>
            <Button variant="secondary" isLoading>Loading...</Button>
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>Disabled</Button>
          </div>
        </CodeBlock>
      </section>
    </div>
  )
}
