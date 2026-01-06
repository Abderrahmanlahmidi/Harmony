// buttons.data.ts
import { Plus, ArrowRight, Mail, Github } from "lucide-react";
import { Button } from "../components/atoms/Button";


export const buttonExamples = [
  {
    title: "Variants",
    description: "Explore the different visual styles of the Button component.",
    code: `import { Button } from "@/components/atoms/Button";

export default function VariantsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}`,
    children: (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    )
  },
  {
    title: "Sizes",
    description: "Buttons come in three distinct sizes: Small, Medium (default), and Large.",
    code: `import { Button } from "@/components/atoms/Button";

export default function SizesExample() {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`,
    children: (
      <div className="flex flex-wrap gap-4 items-end justify-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    )
  },
  {
    title: "With Icons",
    description: "Icons can be added to both the left and right sides of the button text.",
    code: `import { Button } from "@/components/atoms/Button";
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
}`,
    children: (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Button leftIcon={<Plus size={18} />}>Add Item</Button>
        <Button variant="secondary" rightIcon={<ArrowRight size={18} />}>Continue</Button>
        <Button variant="outline" leftIcon={<Mail size={18} />}>Send Email</Button>
        <Button variant="primary" leftIcon={<Github size={18} />}>GitHub</Button>
      </div>
    )
  },
  {
    title: "States",
    description: "Buttons can be displayed in loading and disabled states.",
    code: `import { Button } from "@/components/atoms/Button";

export default function StatesExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button isLoading>Loading...</Button>
      <Button variant="secondary" isLoading>Loading...</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>Disabled</Button>
    </div>
  );
}`,
    children: (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Button isLoading>Loading...</Button>
        <Button variant="secondary" isLoading>Loading...</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled</Button>
      </div>
    )
  }
];

export const buttonProps = [
  { prop: "variant", type: "'primary' | 'secondary' | 'outline'", default: "'primary'", description: "Visual style variant of the button" },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Size of the button" },
  { prop: "isLoading", type: "boolean", default: "false", description: "Shows loading spinner and disables button" },
  { prop: "fullWidth", type: "boolean", default: "false", description: "Makes button take full width of container" },
  { prop: "leftIcon", type: "React.ReactNode", default: "undefined", description: "Icon displayed on the left side" },
  { prop: "rightIcon", type: "React.ReactNode", default: "undefined", description: "Icon displayed on the right side" },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables the button" },
  { prop: "onClick", type: "React.MouseEventHandler<HTMLButtonElement>", default: "undefined", description: "Click handler function" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
  { prop: "children", type: "React.ReactNode", default: "-", description: "Button content" },
];

export const variantDetails = [
  { 
    variant: "primary", 
    classes: "bg-primary text-white hover:bg-primary-hover shadow-primary/20", 
    usage: "Primary actions, CTAs, main operations",
    aria: "High emphasis action"
  },
  { 
    variant: "secondary", 
    classes: "bg-secondary text-white hover:bg-secondary-hover shadow-secondary/20", 
    usage: "Secondary actions, alternative options",
    aria: "Medium emphasis action"
  },
  { 
    variant: "outline", 
    classes: "border-2 border-neutral-200 bg-transparent hover:bg-neutral-100 text-neutral-700", 
    usage: "Tertiary actions, cancellations, less important",
    aria: "Low emphasis action"
  }
];

export const sizeDetails = [
  { 
    size: "sm", 
    classes: "px-4 py-2 text-sm", 
    padding: "16px × 8px",
    usage: "Inline buttons, tables, compact interfaces"
  },
  { 
    size: "md", 
    classes: "px-6 py-3 text-base", 
    padding: "24px × 12px",
    usage: "Standard buttons, forms, general use"
  },
  { 
    size: "lg", 
    classes: "px-8 py-4 text-lg", 
    padding: "32px × 16px",
    usage: "Hero sections, important CTAs, mobile touch targets"
  }
];