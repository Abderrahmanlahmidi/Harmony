// checkbox.data.ts
export const checkboxExamples = [
  {
    title: "Basic Selection",
    description: "Standard checkbox for single or multiple independent choices.",
    code: `import { Checkbox } from "@/components/atoms/Checkbox";

<Checkbox label="Accept terms and conditions" />
<Checkbox label="Remember me" defaultChecked />`,
    hasState: true,
    stateKey: "checkedItems",
    options: [
      { 
        label: "Email Notifications", 
        description: "Receive daily digest of your activity.",
        key: "notifications",
        defaultChecked: true 
      },
      { 
        label: "Marketing Emails", 
        description: "New features and product updates.",
        key: "marketing",
        defaultChecked: false 
      }
    ]
  },
  {
    title: "Adaptive Sizing",
    description: "Available in three sizes to accommodate different layout densities.",
    code: `<Checkbox size="sm" label="Small Checkbox" />
<Checkbox size="md" label="Medium Checkbox" />
<Checkbox size="lg" label="Large Checkbox" />`,
    hasState: false,
    options: [
      { label: "Small Checkbox", size: "sm", name: "size-sm", defaultChecked: true },
      { label: "Medium Checkbox (Default)", size: "md", name: "size-md", defaultChecked: true },
      { label: "Large Checkbox", size: "lg", name: "size-lg", defaultChecked: true }
    ]
  },
  {
    title: "Validation & States",
    description: "Handling errors, disabled states, and indeterminate selections.",
    code: `<Checkbox label="Agree to Terms" error="You must agree" />
<Checkbox label="Disabled item" disabled />
<Checkbox label="Parent item" indeterminate />`,
    hasState: false,
    options: [
      { 
        label: "Error State", 
        error: "Accepting the license agreement is mandatory.",
        defaultChecked: false 
      },
      { 
        label: "Disabled Unchecked", 
        disabled: true, 
        description: "This option is currently unavailable." 
      },
      { 
        label: "Disabled Checked", 
        disabled: true, 
        defaultChecked: true,
        description: "Successfully configured feature." 
      },
      { 
        label: "Indeterminate State", 
        indeterminate: true,
        description: "Indicates a partial selection in a nested group." 
      }
    ]
  },
  {
    title: "Logical Grouping",
    description: "Use the CheckboxGroup to provide a clear label and structure for related options.",
    code: `<CheckboxGroup label="Preferences">
  <Checkbox label="Item 1" />
  <Checkbox label="Item 2" />
</CheckboxGroup>`,
    hasState: false,
    options: [
      { label: "Direct Messages", defaultChecked: true },
      { label: "Mentions", defaultChecked: false },
      { label: "Announcements", defaultChecked: true }
    ],
    groupLabel: "Notification Settings"
  }
];

export const checkboxProps = [
  { prop: "label", type: "string", default: "undefined", description: "Label text displayed next to the checkbox" },
  { prop: "description", type: "string", default: "undefined", description: "Additional description text" },
  { prop: "error", type: "string | boolean", default: "undefined", description: "Error message or boolean indicating error state" },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Size of the checkbox" },
  { prop: "indeterminate", type: "boolean", default: "false", description: "Shows indeterminate state (partial selection)" },
  { prop: "checked", type: "boolean", default: "false", description: "Whether the checkbox is checked" },
  { prop: "defaultChecked", type: "boolean", default: "false", description: "Default checked state (uncontrolled)" },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables the checkbox" },
  { prop: "onChange", type: "React.ChangeEventHandler<HTMLInputElement>", default: "undefined", description: "Change handler function" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
  { prop: "id", type: "string", default: "auto-generated", description: "HTML id attribute" },
];

export const checkboxGroupProps = [
  { prop: "children", type: "React.ReactNode", default: "-", description: "Checkbox components as children" },
  { prop: "label", type: "string", default: "undefined", description: "Group label text" },
  { prop: "error", type: "string", default: "undefined", description: "Group-level error message" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
];

export const sizeDetails = [
  { 
    size: "sm", 
    box: "w-4 h-4 rounded-md", 
    icon: "10px",
    label: "text-sm",
    description: "text-xs",
    usage: "Compact forms, tables, dense interfaces"
  },
  { 
    size: "md", 
    box: "w-5 h-5 rounded-lg", 
    icon: "12px",
    label: "text-base",
    description: "text-sm",
    usage: "Standard forms, general use cases"
  },
  { 
    size: "lg", 
    box: "w-6 h-6 rounded-xl", 
    icon: "14px",
    label: "text-lg",
    description: "text-base",
    usage: "Accessibility-focused interfaces, mobile touch targets"
  }
];

export const stateDetails = [
  { 
    state: "unchecked", 
    border: "border-neutral-300",
    background: "bg-white",
    icon: false,
    usage: "Normal unselected state" 
  },
  { 
    state: "checked", 
    border: "border-primary",
    background: "bg-primary",
    icon: "check",
    usage: "Selected state" 
  },
  { 
    state: "indeterminate", 
    border: "border-primary",
    background: "bg-primary",
    icon: "minus",
    usage: "Partially selected state" 
  },
  { 
    state: "hover", 
    border: "border-primary/50",
    background: "bg-white",
    icon: false,
    usage: "Hover state" 
  },
  { 
    state: "focused", 
    border: "border-primary",
    background: "bg-white",
    icon: false,
    usage: "Focused state with ring" 
  },
  { 
    state: "error", 
    border: "border-danger",
    background: "bg-white",
    icon: false,
    usage: "Error state" 
  },
  { 
    state: "disabled", 
    border: "border-neutral-300",
    background: "bg-neutral-100",
    icon: false,
    usage: "Disabled state" 
  }
];

export const usageExamples = [
  { 
    title: "Form Selection", 
    example: "User registration, preference settings",
    items: ["Terms acceptance", "Newsletter subscription", "Privacy preferences"],
    group: true
  },
  { 
    title: "Filter Options", 
    example: "E-commerce, search results",
    items: ["Category filters", "Price range", "Brand selection"],
    group: true
  },
  { 
    title: "Bulk Actions", 
    example: "Table rows, list items",
    items: ["Select all", "Multiple selection", "Batch operations"],
    group: false
  },
  { 
    title: "Settings Toggle", 
    example: "App configuration, feature flags",
    items: ["Theme options", "Notification types", "Accessibility settings"],
    group: true
  }
];