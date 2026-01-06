import { Check, ShieldAlert, AlertTriangle, Info } from "lucide-react";
import { Badge } from "../components/atoms/Badge";


export const badgeExamples = [
  {
    title: "Variants",
    description: "Badges come in different variants to denote semantic meaning.",
    code: `import { Badge } from "@/components/atoms/Badge";

export default function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`,
    children: (
      <div className="flex flex-wrap gap-4">
        <Badge variant="default">Default</Badge>
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    )
  },
  {
    title: "Sizes",
    description: "Badges are available in three sizes: small, medium (default), and large.",
    code: `import { Badge } from "@/components/atoms/Badge";

export default function BadgeSizes() {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="primary" size="sm">Small</Badge>
      <Badge variant="primary" size="md">Medium</Badge>
      <Badge variant="primary" size="lg">Large</Badge>
    </div>
  );
}`,
    children: (
      <div className="flex items-center gap-4">
        <Badge variant="primary" size="sm">Small</Badge>
        <Badge variant="primary" size="md">Medium</Badge>
        <Badge variant="primary" size="lg">Large</Badge>
      </div>
    )
  },
  {
    title: "Shapes",
    description: "Use the rounded prop to control the border radius.",
    code: `import { Badge } from "@/components/atoms/Badge";

export default function BadgeShapes() {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="primary" rounded="full">Full (Default)</Badge>
      <Badge variant="primary" rounded="md">Medium</Badge>
      <Badge variant="primary" rounded="sm">Small</Badge>
    </div>
  );
}`,
    children: (
      <div className="flex items-center gap-4">
        <Badge variant="primary" rounded="full">Full (Default)</Badge>
        <Badge variant="primary" rounded="md">Medium</Badge>
        <Badge variant="primary" rounded="sm">Small</Badge>
      </div>
    )
  },
  {
    title: "With Icons",
    description: "You can nest icons inside badges.",
    code: `import { Badge } from "@/components/atoms/Badge";
import { Check, ShieldAlert, AlertTriangle, Info } from "lucide-react";

export default function BadgeIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge variant="success" className="gap-1 pl-1.5">
        <Check size={14} /> 
        Verified
      </Badge>
      <Badge variant="danger" className="gap-1 pl-1.5">
        <ShieldAlert size={14} /> 
        Security Risk
      </Badge>
      <Badge variant="warning" className="gap-1 pl-1.5">
        <AlertTriangle size={14} /> 
        Warning
      </Badge>
      <Badge variant="neutral" className="gap-1 pl-1.5">
        <Info size={14} /> 
        Info
      </Badge>
    </div>
  );
}`,
    children: (
      <div className="flex flex-wrap gap-4">
        <Badge variant="success" className="gap-1 pl-1.5">
          <Check size={14} />
          Verified
        </Badge>
        <Badge variant="danger" className="gap-1 pl-1.5">
          <ShieldAlert size={14} />
          Security Risk
        </Badge>
        <Badge variant="warning" className="gap-1 pl-1.5">
          <AlertTriangle size={14} />
          Warning
        </Badge>
        <Badge variant="neutral" className="gap-1 pl-1.5">
          <Info size={14} />
          Info
        </Badge>
      </div>
    )
  }
];

export const badgeProps = [
  { prop: "variant", type: "'default' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline'", default: "'default'", description: "Visual style variant of the badge" },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Size of the badge" },
  { prop: "rounded", type: "'full' | 'md' | 'sm'", default: "'full'", description: "Border radius of the badge" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
  { prop: "children", type: "React.ReactNode", default: "-", description: "Badge content" },
];

export const sizeDetails = [
  { 
    size: "sm", 
    classes: "text-[10px] px-2 py-0.5", 
    padding: "8px × 2px",
    usage: "Dense interfaces, tables, small spaces"
  },
  { 
    size: "md", 
    classes: "text-xs px-2.5 py-0.5", 
    padding: "10px × 2px",
    usage: "Standard interfaces, general use"
  },
  { 
    size: "lg", 
    classes: "text-sm px-3 py-1", 
    padding: "12px × 4px",
    usage: "Prominent indicators, important statuses"
  }
];

export const shapeDetails = [
  { 
    shape: "full", 
    classes: "rounded-full", 
    usage: "Default shape, for count indicators",
    radius: "9999px"
  },
  { 
    shape: "md", 
    classes: "rounded-md", 
    usage: "Medium radius, for general badges",
    radius: "0.375rem"
  },
  { 
    shape: "sm", 
    classes: "rounded-sm", 
    usage: "Small radius, for subtle indicators",
    radius: "0.125rem"
  }
];

export const usageExamples = [
  { 
    usage: "Status Indicators", 
    example: "Live • Draft • Archived", 
    variant: "success",
    description: "Show current state or status"
  },
  { 
    usage: "Count Indicators", 
    example: "3 notifications • 12 items", 
    variant: "primary",
    description: "Display numerical counts"
  },
  { 
    usage: "Category Tags", 
    example: "Design • Development • Marketing", 
    variant: "secondary",
    description: "Categorize and filter content"
  },
  { 
    usage: "Priority Labels", 
    example: "High Priority • Low Priority", 
    variant: "danger",
    description: "Indicate priority levels"
  },
  { 
    usage: "Feature Flags", 
    example: "New • Beta • Coming Soon", 
    variant: "warning",
    description: "Highlight new or experimental features"
  },
  { 
    usage: "User Roles", 
    example: "Admin • Moderator • Member", 
    variant: "neutral",
    description: "Indicate user permissions or roles"
  }
];