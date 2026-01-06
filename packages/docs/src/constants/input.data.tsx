// input.data.ts
import { Mail, Search, Lock, User, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";
import {  Input  } from "harmony-react-ui";

export const inputExamples = [
  {
    title: "Sizes",
    description: "Available in three standard sizes: small, medium, and large.",
    code: `import {  Input  } from "harmony-react-ui";

export default function SizesExample() {
  return (
    <div className="flex flex-col gap-6 max-w-sm">
      <Input size="sm" placeholder="Small Input" label="Small" />
      <Input size="md" placeholder="Medium Input" label="Medium" />
      <Input size="lg" placeholder="Large Input" label="Large" />
    </div>
  );
}`,
    children: (
      <div className="flex flex-col gap-6 max-w-sm w-full">
        <Input size="sm" placeholder="Small Input" label="Small" />
        <Input size="md" placeholder="Medium Input" label="Medium" />
        <Input size="lg" placeholder="Large Input" label="Large" />
      </div>
    )
  },
  {
    title: "Variants",
    description: "Background styles for different contexts.",
    code: `import {  Input  } from "harmony-react-ui";

export default function VariantsExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Input variant="default" label="Default" placeholder="Default variant" />
      <Input variant="filled" label="Filled" placeholder="Filled variant" />
    </div>
  );
}`,
    children: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <Input variant="default" label="Default" placeholder="Default variant" />
        <Input variant="filled" label="Filled" placeholder="Filled variant" />
      </div>
    )
  },
  {
    title: "States & Validation",
    description: "Visual feedback for interactions and validation.",
    code: `import {  Input  } from "harmony-react-ui";
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
}`,
    children: (
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
    )
  },
  {
    title: "Icons",
    description: "Start and end icons for better context.",
    code: `import {  Input  } from "harmony-react-ui";
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
}`,
    children: (
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
    )
  }
];

export const inputProps = [
  { prop: "variant", type: "'default' | 'filled'", default: "'default'", description: "Visual style variant of the input" },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Size of the input field" },
  { prop: "label", type: "string", default: "undefined", description: "Label text displayed above the input" },
  { prop: "error", type: "string | boolean", default: "undefined", description: "Error message or boolean indicating error state" },
  { prop: "success", type: "string | boolean", default: "undefined", description: "Success message or boolean indicating success state" },
  { prop: "helperText", type: "string", default: "undefined", description: "Helper text displayed below the input" },
  { prop: "startIcon", type: "React.ReactNode", default: "undefined", description: "Icon displayed at the start of the input" },
  { prop: "endIcon", type: "React.ReactNode", default: "undefined", description: "Icon displayed at the end of the input" },
  { prop: "fullWidth", type: "boolean", default: "false", description: "Makes input take full width of container" },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables the input field" },
  { prop: "placeholder", type: "string", default: "undefined", description: "Placeholder text" },
  { prop: "type", type: "string", default: "'text'", description: "HTML input type (text, password, email, etc.)" },
];




