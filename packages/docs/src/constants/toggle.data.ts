// toggle.data.ts
export const toggleExamples = [
  {
    title: "Interactive Settings",
    description: "Standard switches for binary preferences like system configurations.",
    code: `import {  Toggle  } from "harmony-react-ui";

<Toggle label="Enable Feature" defaultChecked />
<Toggle label="Notifications" description="Get alerts for activity." />`,
    hasState: true,
    stateKey: "settings",
    options: [
      { 
        label: "Push Notifications", 
        description: "Receive real-time alerts on your device.",
        key: "notifications",
        defaultChecked: true 
      },
      { 
        label: "Auto-save Progress", 
        description: "Continuously save your work to the cloud.",
        key: "autoSave",
        defaultChecked: true 
      }
    ]
  },
  {
    title: "Proportional Sizing",
    description: "Available in three distinct scales to match interface density.",
    code: `<Toggle size="sm" label="Small" />
<Toggle size="md" label="Medium" />
<Toggle size="lg" label="Large" />`,
    hasState: false,
    options: [
      { label: "Small Switch", size: "sm", defaultChecked: true },
      { label: "Medium (Default)", size: "md", defaultChecked: true },
      { label: "Large Switch", size: "lg", defaultChecked: true }
    ]
  },
  {
    title: "System States",
    description: "Visual feedback for validation requirements and administrative restrictions.",
    code: `<Toggle label="Required Toggle" error="Selection required" />
<Toggle label="Locked Setting" disabled />`,
    hasState: false,
    options: [
      { 
        label: "Error Specification", 
        error: "You must enable security protocols.",
        size: "md",
        defaultChecked: false 
      },
      { 
        label: "Disabled Off", 
        disabled: true, 
        description: "This module is not installed." 
      },
      { 
        label: "Disabled On", 
        disabled: true, 
        defaultChecked: true,
        description: "System critical setting." 
      }
    ]
  }
];

export const toggleProps = [
  { prop: "label", type: "string", default: "undefined", description: "Label text displayed next to the toggle" },
  { prop: "description", type: "string", default: "undefined", description: "Additional description text" },
  { prop: "error", type: "string | boolean", default: "undefined", description: "Error message or boolean indicating error state" },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Size of the toggle switch" },
  { prop: "checked", type: "boolean", default: "false", description: "Whether the toggle is checked" },
  { prop: "defaultChecked", type: "boolean", default: "false", description: "Default checked state (uncontrolled)" },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables the toggle" },
  { prop: "onChange", type: "React.ChangeEventHandler<HTMLInputElement>", default: "undefined", description: "Change handler function" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
  { prop: "id", type: "string", default: "auto-generated", description: "HTML id attribute" },
];

export const sizeDetails = [
  { 
    size: "sm", 
    track: "w-8 h-4", 
    thumb: "w-3 h-3",
    translate: "16px",
    label: "text-sm",
    description: "text-xs",
    usage: "Compact interfaces, tables, mobile apps"
  },
  { 
    size: "md", 
    track: "w-10 h-5", 
    thumb: "w-4 h-4",
    translate: "20px",
    label: "text-base",
    description: "text-sm",
    usage: "Standard forms, desktop applications, settings panels"
  },
  { 
    size: "lg", 
    track: "w-12 h-6", 
    thumb: "w-5 h-5",
    translate: "24px",
    label: "text-lg",
    description: "text-base",
    usage: "Accessibility-focused interfaces, touch devices"
  }
];

export const stateDetails = [
  { 
    state: "off", 
    track: "bg-neutral-200",
    thumb: "translate-x-2",
    usage: "Default unselected state" 
  },
  { 
    state: "on", 
    track: "bg-primary",
    thumb: "translate-x-16",
    usage: "Selected/active state" 
  },
  { 
    state: "hover", 
    track: "bg-neutral-300",
    thumb: "translate-x-2",
    usage: "Hover state (track darkens)" 
  },
  { 
    state: "focused", 
    track: "bg-primary ring-4 ring-primary/10",
    thumb: "translate-x-2",
    usage: "Focused state with ring" 
  },
  { 
    state: "error", 
    track: "bg-neutral-200 ring-2 ring-danger/50",
    thumb: "translate-x-2",
    usage: "Error state" 
  },
  { 
    state: "disabled", 
    track: "bg-neutral-200",
    thumb: "translate-x-2",
    usage: "Disabled state (opacity reduced)" 
  }
];

export const usageExamples = [
  { 
    title: "Feature Flags", 
    example: "App configuration, experimental features",
    items: ["Beta features", "Debug mode", "Advanced settings"],
    springPhysics: true
  },
  { 
    title: "Notification Settings", 
    example: "User preferences, alert management",
    items: ["Push notifications", "Email alerts", "Sound effects"],
    springPhysics: true
  },
  { 
    title: "Accessibility", 
    example: "User interface adjustments",
    items: ["High contrast mode", "Reduced motion", "Large text"],
    springPhysics: true
  },
  { 
    title: "Privacy Controls", 
    example: "Data sharing, privacy settings",
    items: ["Analytics tracking", "Data collection", "Personalization"],
    springPhysics: true
  }
];

export const animationDetails = [
  { 
    property: "Spring Physics", 
    value: "stiffness: 500, damping: 30",
    description: "Natural-feeling motion with bounce",
    duration: "300ms"
  },
  { 
    property: "Track Color", 
    value: "transition-colors duration-300",
    description: "Smooth color transition",
    duration: "300ms"
  },
  { 
    property: "Thumb Position", 
    value: "spring animation",
    description: "Physical slider movement",
    duration: "300ms"
  },
  { 
    property: "Focus Ring", 
    value: "transition-all duration-200",
    description: "Accessibility focus indicator",
    duration: "200ms"
  }
];

