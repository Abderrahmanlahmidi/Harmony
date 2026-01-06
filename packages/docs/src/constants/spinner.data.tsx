import { Loader2, RefreshCw, Loader, CircleDashed } from "lucide-react";
import {  Spinner  } from "harmony-react-ui";
import {  Button  } from "harmony-react-ui";
import {  Card, CardHeader, CardTitle, CardDescription, CardContent    } from "harmony-react-ui";



export const spinnerExamples = [
  {
    title: "Flexible Sizing",
    description: "From 12px to 48px to fit any context.",
    code: `<Spinner size="xs" />\n<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />\n<Spinner size="xl" />`,
    children: (
      <div className="flex items-center gap-8">
        <Spinner size="xs" thickness="thick" />
        <Spinner size="sm" thickness="thick" />
        <Spinner size="md" thickness="thick" />
        <Spinner size="lg" thickness="thick" />
        <Spinner size="xl" thickness="thick" />
      </div>
    )
  },
  {
    title: "Decorative Loaders",
    description: "Pass any Lucide icon as a prop to maintain size and color consistency.",
    code: `<Spinner icon={<Loader2 />} />\n<Spinner icon={<RefreshCw />} size="lg" />\n<Spinner icon={<CircleDashed />} size="xl" />`,
    children: (
      <div className="flex items-center gap-8">
        <Spinner icon={<Loader2 />} size="sm" />
        <Spinner icon={<Loader />} size="md" />
        <Spinner icon={<RefreshCw />} size="lg" />
        <Spinner icon={<CircleDashed />} size="xl" />
      </div>
    )
  },
  {
    title: "Native Button Support",
    description: "Direct use through the isLoading prop for seamless transitions.",
    code: `<Button isLoading>Processing</Button>\n<Button variant="outline" isLoading>Loading</Button>`,
    children: (
      <div className="flex flex-col gap-4">
        <Button className="min-w-[140px]" isLoading>
          Processing
        </Button>
        <Button variant="outline" className="min-w-[140px]" isLoading>
          Loading
        </Button>
      </div>
    )
  },
  {
    title: "Within Cards",
    description: "Using spinners for asynchronous data loading inside containers.",
    code: `<Card className="p-8 flex justify-center">\n  <Spinner size="lg" />\n</Card>`,
    children: (
      <Card className="w-full max-w-[280px]">
        <CardHeader>
          <CardTitle className="text-lg text-neutral-900">Dashboard Metric</CardTitle>
          <CardDescription>Fetching real-time data</CardDescription>
        </CardHeader>
        <CardContent className="h-24 flex items-center justify-center">
          <Spinner size="lg" thickness="thick" />
        </CardContent>
      </Card>
    )
  },
  {
    title: "Fullscreen Experience",
    description: "Opaque or blurred overlays for critical loading states.",
    code: `<div className="bg-neutral-50/50 backdrop-blur-sm">\n  <Spinner size="xl" thickness="thick" />\n</div>`,
    children: (
      <div className="relative w-full h-[200px] border border-neutral-200 rounded-2xl overflow-hidden bg-white dark:bg-neutral-50">
        <div className="p-6 space-y-4">
          <div className="h-4 w-3/4 bg-neutral-100 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-neutral-100 rounded animate-pulse" />
          <div className="h-20 w-full bg-neutral-50 rounded animate-pulse" />
        </div>
        <div className="absolute inset-0 bg-neutral-50/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
          <Spinner size="xl" thickness="thick" />
          <p className="text-xs font-black uppercase tracking-widest text-neutral-400">Restoring Session</p>
        </div>
      </div>
    )
  }
];

export const spinnerProps = [
  { prop: "size", type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Size of the spinner" },
  { prop: "variant", type: "'primary' | 'secondary' | 'white' | 'current'", default: "'primary'", description: "Color variant of the spinner" },
  { prop: "thickness", type: "'thin' | 'normal' | 'thick'", default: "'normal'", description: "Border thickness of the spinner" },
  { prop: "icon", type: "React.ReactNode", default: "undefined", description: "Custom icon to use instead of default spinner" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
];

export const sizeDetails = [
  { 
    size: "xs", 
    classes: "w-3 h-3", 
    dimensions: "12px × 12px",
    usage: "Micro-interactions, inline text, small buttons"
  },
  { 
    size: "sm", 
    classes: "w-4 h-4", 
    dimensions: "16px × 16px",
    usage: "Table rows, form inputs, small components"
  },
  { 
    size: "md", 
    classes: "w-6 h-6", 
    dimensions: "24px × 24px",
    usage: "Standard buttons, cards, general loading"
  },
  { 
    size: "lg", 
    classes: "w-8 h-8", 
    dimensions: "32px × 32px",
    usage: "Section loading, important actions, medium overlays"
  },
  { 
    size: "xl", 
    classes: "w-12 h-12", 
    dimensions: "48px × 48px",
    usage: "Full page loading, critical operations, large overlays"
  }
];

export const variantDetails = [
  { 
    variant: "primary", 
    classes: "border-primary/20 border-t-primary text-primary",
    usage: "Primary actions, main loading states",
    semantic: "Primary loading indicator"
  },
  { 
    variant: "secondary", 
    classes: "border-secondary/20 border-t-secondary text-secondary",
    usage: "Secondary actions, alternative loading",
    semantic: "Secondary loading indicator"
  },
  { 
    variant: "white", 
    classes: "border-white/20 border-t-white text-white",
    usage: "Dark backgrounds, overlays, high contrast",
    semantic: "Light background loading"
  },
  { 
    variant: "current", 
    classes: "border-current/20 border-t-current text-current",
    usage: "Dynamic contexts, inherits parent color",
    semantic: "Context-aware loading"
  }
];

export const thicknessDetails = [
  { 
    thickness: "thin", 
    classes: "border-2",
    visual: "Subtle, lightweight spinner",
    usage: "Minimal designs, small sizes, subtle feedback"
  },
  { 
    thickness: "normal", 
    classes: "border-[3px]",
    visual: "Standard thickness",
    usage: "General use, balanced visibility"
  },
  { 
    thickness: "thick", 
    classes: "border-4",
    visual: "Bold, prominent spinner",
    usage: "Important actions, high visibility needed"
  }
];

export const usageExamples = [
  { 
    title: "Button Loading", 
    context: "Form submission",
    duration: "2-5 seconds",
    placement: "Inline with button text"
  },
  { 
    title: "Content Loading", 
    context: "Data fetching",
    duration: "1-10 seconds",
    placement: "Center of content area"
  },
  { 
    title: "Page Transition", 
    context: "Route change",
    duration: "0.5-2 seconds",
    placement: "Full screen overlay"
  },
  { 
    title: "Inline Update", 
    context: "Component refresh",
    duration: "0.5-3 seconds",
    placement: "Within component"
  },
  { 
    title: "Initial Load", 
    context: "App startup",
    duration: "1-8 seconds",
    placement: "Full screen with branding"
  },
  { 
    title: "Background Sync", 
    context: "Data synchronization",
    duration: "3-15 seconds",
    placement: "Subtle corner indicator"
  }
];



