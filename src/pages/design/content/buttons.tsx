import { Button } from '../../../components/atoms/Button.tsx'
import { Plus, Mail, ArrowRight, Github } from 'lucide-react'

export default function Buttons() {
  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">Button</h1>
        <p className="text-xl text-neutral-600 max-w-2xl">
          Buttons are used to trigger actions and events. They come in various sizes, variants, and states to suit different contexts.
        </p>
      </header>

      <section className="space-y-6">
        <div className="border-b border-neutral-200 pb-2">
          <h2 className="text-2xl font-semibold text-neutral-900">Variants</h2>
        </div>
        <p className="text-neutral-600">Explore the different visual styles of the Button component.</p>

        <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-neutral-200 pb-2">
          <h2 className="text-2xl font-semibold text-neutral-900">Sizes</h2>
        </div>
        <p className="text-neutral-600">Buttons come in three distinct sizes: Small, Medium (default), and Large.</p>

        <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-wrap gap-4 items-end">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>


      <section className="space-y-6">
        <div className="border-b border-neutral-200 pb-2">
          <h2 className="text-2xl font-semibold text-neutral-900">With Icons</h2>
        </div>
        <p className="text-neutral-600">Icons can be added to both the left and right sides of the button text.</p>

        <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-wrap gap-4 items-center">
          <Button leftIcon={<Plus size={18} />}>Add Item</Button>
          <Button variant="secondary" rightIcon={<ArrowRight size={18} />}>Continue</Button>
          <Button variant="outline" leftIcon={<Mail size={18} />}>Send Email</Button>
          <Button variant="primary" leftIcon={<Github size={18} />}>GitHub</Button>
        </div>
      </section>


      <section className="space-y-6">
        <div className="border-b border-neutral-200 pb-2">
          <h2 className="text-2xl font-semibold text-neutral-900">States</h2>
        </div>
        <p className="text-neutral-600">Buttons can be displayed in loading and disabled states.</p>

        <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-wrap gap-4 items-center">
          <Button isLoading>Loading...</Button>
          <Button variant="secondary" isLoading>Loading...</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled</Button>
        </div>
      </section>


      <section className="space-y-6">
        <div className="border-b border-neutral-200 pb-2">
          <h2 className="text-2xl font-semibold text-neutral-900">Example Usage</h2>
        </div>
        <pre className="bg-neutral-900 text-neutral-100 p-6 rounded-2xl overflow-x-auto text-sm font-mono">
          {`import { Button } from '@/components/atoms/buttons'
import { Plus } from 'lucide-react'

export const MyComponent = () => (
  <Button 
    variant="primary" 
    size="md" 
    leftIcon={<Plus size={18} />}
  >
    Add Workspace
  </Button>
)`}
        </pre>
      </section>
    </div>
  )
}
