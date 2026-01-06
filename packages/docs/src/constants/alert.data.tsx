import { Terminal, ArrowRight, Info, CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";
import {  Alert  } from "harmony-react-ui";
import {  Badge  } from "harmony-react-ui";



export const alertExamples = [
  {
    title: "Info (Default)",
    description: "Standard info alert with iconic branding colors.",
    code: `import {  Alert  } from "harmony-react-ui";

export function AlertDemo() {
  return (
    <Alert variant="info">
      A simple info alert with an <a href="#" className="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
    </Alert>
  )
}`,
    children: (
      <Alert variant="info">
        A simple info alert with an <a href="#" className="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
      </Alert>
    )
  },
  {
    title: "Variants",
    description: "Alerts come in helpful semantic variants: Success, Warning, Danger, and Neutral.",
    code: `import {  Alert  } from "harmony-react-ui";

export function AlertVariants() {
  return (
    <div className="space-y-4">
       <Alert variant="success">
        <span className="font-bold">Success!</span> Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning">
        <span className="font-bold">Caution:</span> Your account is nearing its storage limit.
      </Alert>
      <Alert variant="danger">
        <span className="font-bold">Error:</span> Something went wrong. Please try again.
      </Alert>
    </div>
  )
}`,
    children: (
      <div className="space-y-4">
        <Alert variant="success">
          <span className="font-bold">Success!</span> Your changes have been saved successfully.
        </Alert>
        <Alert variant="warning">
          <span className="font-bold">Caution:</span> Your account is nearing its storage limit.
        </Alert>
        <Alert variant="danger">
          <span className="font-bold">Error:</span> Something went wrong. Please try again.
        </Alert>
      </div>
    )
  },
  {
    title: "Dismissible",
    description: "Add an onClose handler to show a dismiss button.",
    code: `import {  Alert  } from "harmony-react-ui";

export function AlertDismissible() {
  return (
    <Alert variant="info" onClose={() => alert('Closed!')}>
      This alert acts as a dismissible notification.
    </Alert>
  )
}`,
    children: (
      <Alert variant="info" onClose={() => console.log('Close clicked')}>
        This alert acts as a dismissible notification.
      </Alert>
    )
  },
  {
    title: "Custom Icon",
    description: "You can override the default icon or hide it entirely.",
    code: `import {  Alert  } from "harmony-react-ui";
import { Terminal } from "lucide-react";

export function AlertCustom() {
  return (
    <Alert variant="info" icon={<Terminal className="w-5 h-5" />}>
      This alert uses a custom Terminal icon.
    </Alert>
  )
}`,
    children: (
      <Alert variant="info" icon={<Terminal className="w-5 h-5" />}>
        This alert uses a custom Terminal icon.
      </Alert>
    )
  },
  {
    title: "Pill Layout",
    description: "Compact pill-shaped alert, useful for announcements.",
    code: `import {  Alert  } from "harmony-react-ui";
import {  Badge  } from "harmony-react-ui";
import { ArrowRight } from "lucide-react";

export function AlertPill() {
  return (
    <Alert layout="pill" hideIcon variant="info">
        <div className="flex items-center gap-2">
            <Badge variant="primary" rounded="full" size="sm">New</Badge>
            <span className="text-sm">
                Make sure to check out the <a href="#" className="font-semibold underline hover:no-underline">new documentation</a>.
            </span>
             <ArrowRight className="w-4 h-4 ml-1 opacity-50" />
        </div>
    </Alert>
  )
}`,
    children: (
      <Alert layout="pill" hideIcon variant="info">
        <div className="flex items-center gap-2">
          <Badge variant="primary" rounded="full" size="sm">New</Badge>
          <span className="text-sm">
            Make sure to check out the <a href="#" className="font-semibold underline hover:no-underline">new documentation</a>.
          </span>
          <ArrowRight className="w-4 h-4 ml-1 opacity-50" />
        </div>
      </Alert>
    )
  }
];

export const alertProps = [
  { prop: "variant", type: "'info' | 'danger' | 'success' | 'warning'", default: "'info'", description: "Semantic variant of the alert" },
  { prop: "layout", type: "'default' | 'pill'", default: "'default'", description: "Layout style of the alert" },
  { prop: "onClose", type: "() => void", default: "undefined", description: "Callback for dismissible alerts" },
  { prop: "icon", type: "React.ReactNode", default: "Default variant icon", description: "Custom icon to override default" },
  { prop: "hideIcon", type: "boolean", default: "false", description: "Hides the icon entirely" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
  { prop: "children", type: "React.ReactNode", default: "-", description: "Alert content" },
];

export const variantDetails = [
  { 
    variant: "info", 
    icon: "Info",
    classes: "bg-primary/10 border-primary/20 text-primary-900",
    semantic: "Informational, updates, general messages",
    defaultIcon: Info
  },
  { 
    variant: "success", 
    icon: "CheckCircle2",
    classes: "bg-success/10 border-success/20 text-success-900",
    semantic: "Success, confirmation, positive outcomes",
    defaultIcon: CheckCircle2
  },
  { 
    variant: "warning", 
    icon: "AlertTriangle",
    classes: "bg-warning/10 border-warning/20 text-warning-900",
    semantic: "Warning, caution, attention needed",
    defaultIcon: AlertTriangle
  },
  { 
    variant: "danger", 
    icon: "AlertCircle",
    classes: "bg-danger/10 border-danger/20 text-danger-900",
    semantic: "Error, critical issues, problems",
    defaultIcon: AlertCircle
  }
];

export const layoutDetails = [
  { 
    layout: "default", 
    classes: "flex w-full items-start sm:items-center p-4 rounded-lg",
    padding: "16px",
    usage: "Standard alerts, important messages, form feedback"
  },
  { 
    layout: "pill", 
    classes: "inline-flex w-auto items-center p-1 pr-2 rounded-full",
    padding: "4px 8px 4px 4px",
    usage: "Compact announcements, inline notifications, banners"
  }
];

export const usageExamples = [
  { 
    title: "Form Validation", 
    variant: "success",
    message: "Profile updated successfully!",
    layout: "default",
    dismissible: true
  },
  { 
    title: "System Status", 
    variant: "info",
    message: "Maintenance scheduled for tomorrow at 2 AM UTC.",
    layout: "default",
    dismissible: false
  },
  { 
    title: "Security Alert", 
    variant: "danger",
    message: "Unusual login activity detected. Please review.",
    layout: "default",
    dismissible: true
  },
  { 
    title: "Feature Announcement", 
    variant: "info",
    message: "New analytics dashboard is now available!",
    layout: "pill",
    dismissible: true
  },
  { 
    title: "Storage Warning", 
    variant: "warning",
    message: "Your storage is 85% full. Upgrade your plan.",
    layout: "default",
    dismissible: false
  },
  { 
    title: "Inline Notification", 
    variant: "success",
    message: "Item added to cart successfully.",
    layout: "pill",
    dismissible: true
  }
];



