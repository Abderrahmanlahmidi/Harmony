// radio.data.ts
export const radioExamples = [
  {
    title: "Basic Selection",
    description: "Simple radio buttons for mutually exclusive choices with descriptive text.",
    code: `import { Radio, RadioGroup } from "@/components/atoms/Radio";

<RadioGroup label="Select your plan">
  <Radio label="Free Plan" name="plan" description="Perfect for hobbyists." />
  <Radio label="Pro Plan" name="plan" checked />
</RadioGroup>`,
    hasState: true,
    stateKey: "selectedPlan",
    options: [
      { label: "Free Plan", value: "free", description: "Perfect for individual hobbyists." },
      { label: "Pro Plan", value: "pro", description: "Best for professional designers." },
      { label: "Enterprise", value: "enterprise", description: "Advanced features for large teams." }
    ]
  },
  {
    title: "Adaptive Sizing",
    description: "Available in three sizes to fit any layout requirement.",
    code: `<Radio size="sm" label="Small" />
<Radio size="md" label="Medium" />
<Radio size="lg" label="Large" />`,
    hasState: true,
    stateKey: "selectedSize",
    options: [
      { label: "Small Radio", value: "sm", size: "sm" },
      { label: "Medium (Default)", value: "md", size: "md" },
      { label: "Large Radio", value: "lg", size: "lg" }
    ]
  },
  {
    title: "Validation States",
    description: "Clear visual feedback for required selections or errors.",
    code: `<Radio label="Error State" error="Field required" />
<Radio label="Disabled" disabled />`,
    hasState: false,
    options: [
      { label: "Error State", error: "You must agree to the terms.", name: "error-demo" },
      { label: "Disabled Option", disabled: true, description: "This choice is currently unavailable.", name: "disabled-demo" }
    ]
  }
];

export const radioProps = [
  { prop: "label", type: "string", default: "undefined", description: "Label text displayed next to the radio" },
  { prop: "description", type: "string", default: "undefined", description: "Additional description text" },
  { prop: "error", type: "string | boolean", default: "undefined", description: "Error message or boolean indicating error state" },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Size of the radio button" },
  { prop: "checked", type: "boolean", default: "false", description: "Whether the radio is checked" },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables the radio button" },
  { prop: "name", type: "string", default: "-", description: "Name attribute for grouping radio buttons" },
  { prop: "value", type: "string", default: "-", description: "Value attribute for the radio button" },
  { prop: "onChange", type: "React.ChangeEventHandler<HTMLInputElement>", default: "undefined", description: "Change handler function" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
  { prop: "id", type: "string", default: "auto-generated", description: "HTML id attribute" },
];

export const radioGroupProps = [
  { prop: "children", type: "React.ReactNode", default: "-", description: "Radio components as children" },
  { prop: "label", type: "string", default: "undefined", description: "Group label text" },
  { prop: "error", type: "string", default: "undefined", description: "Group-level error message" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
];

export const sizeDetails = [
  { 
    size: "sm", 
    outer: "w-4 h-4", 
    inner: "w-1.5 h-1.5",
    label: "text-sm",
    description: "text-xs",
    usage: "Compact forms, tables, dense interfaces"
  },
  { 
    size: "md", 
    outer: "w-5 h-5", 
    inner: "w-2 h-2",
    label: "text-base",
    description: "text-sm",
    usage: "Standard forms, general use cases"
  },
  { 
    size: "lg", 
    outer: "w-6 h-6", 
    inner: "w-2.5 h-2.5",
    label: "text-lg",
    description: "text-base",
    usage: "Accessibility-focused interfaces, mobile touch targets"
  }
];

export const stateDetails = [
  { 
    state: "default", 
    border: "border-neutral-300",
    background: "bg-white",
    usage: "Normal unselected state" 
  },
  { 
    state: "hover", 
    border: "border-primary/50",
    background: "bg-white",
    usage: "Hover state" 
  },
  { 
    state: "checked", 
    border: "border-primary",
    background: "bg-white",
    usage: "Selected state" 
  },
  { 
    state: "focused", 
    border: "border-primary",
    background: "bg-white",
    usage: "Focused state with ring" 
  },
  { 
    state: "error", 
    border: "border-danger",
    background: "bg-white",
    usage: "Error state" 
  },
  { 
    state: "disabled", 
    border: "border-neutral-300",
    background: "bg-neutral-100",
    usage: "Disabled state" 
  }
];

export const usageExamples = [
  { 
    title: "Form Selection", 
    example: "User registration, preference settings",
    items: ["Account type", "Notification preferences", "Privacy settings"],
    group: true
  },
  { 
    title: "Product Options", 
    example: "E-commerce, service selection",
    items: ["Size selection", "Color options", "Shipping method"],
    group: true
  },
  { 
    title: "Survey Questions", 
    example: "Feedback forms, questionnaires",
    items: ["Rating scales", "Multiple choice", "Agreement levels"],
    group: true
  },
  { 
    title: "Settings Toggle", 
    example: "App configuration, user preferences",
    items: ["Theme selection", "Language preference", "Accessibility options"],
    group: true
  }
];