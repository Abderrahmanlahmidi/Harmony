import { Input } from "../../../../../components/atoms/Input";
import { Badge } from "../../../../../components/atoms/Badge";
import {
  Mail,
  Search,
  Lock,
  User,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import CodeBlock from "../CodeBlock";

export default function InputPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      <header className="space-y-6 max-w-2xl">
        <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Forms</Badge>
        <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
          Input
        </h1>
        <p className="text-lg text-neutral-500 font-medium leading-relaxed">
          Standardized form controls for text collection, featuring validation states, icon support, and varied size variants.
        </p>
      </header>

      <section className="space-y-6">
        <CodeBlock
          title="Sizes"
          description="Available in three standard sizes: small, medium, and large."
          code={`import { Input } from "@/components/atoms/Input";

export default function SizesExample() {
  return (
    <div className="flex flex-col gap-6 max-w-sm">
      <Input size="sm" placeholder="Small Input" label="Small" />
      <Input size="md" placeholder="Medium Input" label="Medium" />
      <Input size="lg" placeholder="Large Input" label="Large" />
    </div>
  );
}`}
        >
          <div className="flex flex-col gap-6 max-w-sm w-full">
            <Input size="sm" placeholder="Small Input" label="Small" />
            <Input size="md" placeholder="Medium Input" label="Medium" />
            <Input size="lg" placeholder="Large Input" label="Large" />
          </div>
        </CodeBlock>
      </section>

      {/* Variants Section */}
      <section className="space-y-6">
        <CodeBlock
          title="Variants"
          description="Background styles for different contexts."
          code={`import { Input } from "@/components/atoms/Input";

export default function VariantsExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Input variant="default" label="Default" placeholder="Default variant" />
      <Input variant="filled" label="Filled" placeholder="Filled variant" />
    </div>
  );
}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <Input
              variant="default"
              label="Default"
              placeholder="Default variant"
            />
            <Input
              variant="filled"
              label="Filled"
              placeholder="Filled variant"
            />
          </div>
        </CodeBlock>
      </section>

      {/* States Section */}
      <section className="space-y-6">
        <CodeBlock
          title="States & Validation"
          description="Visual feedback for interactions and validation."
          code={`import { Input } from "@/components/atoms/Input";
import { CheckCircle2, AlertCircle, Lock } from "lucide-react";

export default function StatesExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input 
            label="Success State" 
            defaultValue="john.doe@example.com"
            success="Email is available!"
            endIcon={<CheckCircle2 className="text-success" size={18} />}
        />
        <Input 
            label="Error State" 
            defaultValue="not-an-email"
            error="Please enter a valid email address"
            endIcon={<AlertCircle className="text-danger" size={18} />}
        />
        <Input 
            label="Disabled" 
            placeholder="Cannot type here"
            disabled
            startIcon={<Lock size={18} />}
        />
        <Input 
            label="With Helper Text" 
            placeholder="Create a password"
            helperText="Must be at least 8 characters long."
            type="password"
        />
    </div>
  );
}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <Input
              label="Success State"
              defaultValue="john.doe@example.com"
              success="Email is available!"
              endIcon={<CheckCircle2 className="text-success" size={18} />}
            />
            <Input
              label="Error State"
              defaultValue="not-an-email"
              error="Please enter a valid email address"
              endIcon={<AlertCircle className="text-danger" size={18} />}
            />
            <Input
              label="Disabled"
              placeholder="Cannot type here"
              disabled
              startIcon={<Lock size={18} />}
            />
            <Input
              label="With Helper Text"
              placeholder="Create a password"
              helperText="Must be at least 8 characters long."
              type="password"
            />
          </div>
        </CodeBlock>
      </section>

      {/* Icons Section */}
      <section className="space-y-6">
        <CodeBlock
          title="Icons"
          description="Start and end icons for better context."
          code={`import { Input } from "@/components/atoms/Input";
import { Search, User, HelpCircle, Mail } from "lucide-react";

export default function IconsExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input 
            label="Search" 
            placeholder="Search documentation..." 
            startIcon={<Search size={18} />}
        />
        <Input 
            label="Account" 
            placeholder="Username" 
            startIcon={<User size={18} />}
        />
        <Input 
            label="With Tooltip Icon" 
            placeholder="Enter value" 
            endIcon={<HelpCircle size={18} />}
        />
        <Input 
            label="Email" 
            placeholder="your@email.com" 
            startIcon={<Mail size={18} />}
        />
    </div>
  );
}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <Input
              label="Search"
              placeholder="Search documentation..."
              startIcon={<Search size={18} />}
            />
            <Input
              label="Account"
              placeholder="Username"
              startIcon={<User size={18} />}
            />
            <Input
              label="With Tooltip Icon"
              placeholder="Enter value"
              endIcon={<HelpCircle size={18} />}
            />
            <Input
              label="Email"
              placeholder="your@email.com"
              startIcon={<Mail size={18} />}
            />
          </div>
        </CodeBlock>
      </section>
    </div>
  );
}
