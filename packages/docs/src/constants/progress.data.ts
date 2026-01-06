export const progressExamples = [
  {
    title: "Basic Progress",
    description: "Simple horizontal progress bars for showing completion status.",
    code: `import {  Progress  } from "harmony-react-ui";

<Progress value={75} label="Upload Progress" />
<Progress value={45} variant="success" showValue />
<Progress value={90} variant="danger" size="lg" />`,
    examples: [
      { value: 75, label: "Upload Progress", variant: "primary" },
      { value: 45, variant: "success", showValue: true },
      { value: 90, variant: "danger", size: "lg" },
    ]
  }
];

export const progressProps = [
  { prop: "value", type: "number", default: "0", description: "Current progress value (0-100)" },
  { prop: "max", type: "number", default: "100", description: "Maximum value (defaults to 100)" },
  { prop: "variant", type: "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'", default: "'primary'", description: "Color variant of the progress bar" },
  { prop: "size", type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Size of the progress bar" },
  { prop: "label", type: "string", default: "undefined", description: "Label text displayed above the progress bar" },
  { prop: "showValue", type: "boolean", default: "false", description: "Show percentage value" },
  { prop: "striped", type: "boolean", default: "false", description: "Add striped pattern to progress bar" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
];

export const variantDetails = [
  { 
    variant: "primary", 
    color: "#6366f1",
    usage: "Primary actions, main progress indicators",
    semantic: "Default, primary"
  },
  { 
    variant: "secondary", 
    color: "#0ea5e9",
    usage: "Secondary actions, alternative progress",
    semantic: "Secondary, alternative"
  },
  { 
    variant: "success", 
    color: "#10b981",
    usage: "Success states, completed tasks",
    semantic: "Success, completion"
  },
  { 
    variant: "danger", 
    color: "#ef4444",
    usage: "Error states, critical issues",
    semantic: "Danger, error"
  },
  { 
    variant: "warning", 
    color: "#f59e0b",
    usage: "Warning states, pending actions",
    semantic: "Warning, caution"
  },
  { 
    variant: "info", 
    color: "#3b82f6",
    usage: "Information states, general progress",
    semantic: "Info, neutral"
  }
];

export const sizeDetails = [
  { 
    size: "xs", 
    height: "h-1",
    usage: "Compact spaces, inline progress"
  },
  { 
    size: "sm", 
    height: "h-2",
    usage: "Small interfaces, tables"
  },
  { 
    size: "md", 
    height: "h-3",
    usage: "Standard interfaces, general use"
  },
  { 
    size: "lg", 
    height: "h-4",
    usage: "Prominent indicators, important status"
  },
  { 
    size: "xl", 
    height: "h-6",
    usage: "Large displays, dashboards"
  }
];

export const usageExamples = [
  { 
    title: "File Upload", 
    variant: "primary",
    value: 75,
    label: "Upload Progress",
    description: "Show upload progress with percentage"
  },
  { 
    title: "Form Completion", 
    variant: "success",
    value: 60,
    label: "Form Progress",
    description: "Indicate form completion percentage"
  },
  { 
    title: "Storage Usage", 
    variant: "warning",
    value: 90,
    label: "Storage",
    description: "Show storage capacity usage"
  },
  { 
    title: "Process Status", 
    variant: "info",
    value: 45,
    label: "Processing",
    description: "Indicate background process status"
  },
  { 
    title: "System Load", 
    variant: "danger",
    value: 95,
    label: "CPU Usage",
    description: "Display system resource utilization"
  },
  { 
    title: "Data Sync", 
    variant: "secondary",
    value: 30,
    label: "Sync Progress",
    description: "Show data synchronization status"
  }
];
