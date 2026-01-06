export const typographyExamples = [
    {
        variant: "display" as const,
        title: "Display",
        description: "Reserved for large, impactful headlines and hero sections.",
        code: `<Typography variant="display">\n  Exceptional products start here.\n</Typography>`,
        content: "Exceptional products start here."
    },
    {
        variant: "heading" as const,
        title: "Heading",
        description: "Primary headers for sections and page content.",
        code: `<Typography variant="heading">\n  Section Headline\n</Typography>`,
        content: "Section Headline"
    },
    {
        variant: "bodyLarge" as const,
        title: "Body Large",
        description: "Introductory paragraphs or large lead text.",
        code: `<Typography variant="bodyLarge">\n  Harmony is a system built for speed and clarity.\n</Typography>`,
        content: "Harmony is a system built for speed and clarity."
    },
    {
        variant: "bodyMedium" as const,
        title: "Body Medium",
        description: "Standard body text for descriptions and content.",
        code: `<Typography variant="bodyMedium">\n  This is the foundation for all descriptive elements.\n</Typography>`,
        content: "This is the foundation for all descriptive elements."
    },
    {
        variant: "caption" as const,
        title: "Caption",
        description: "Meta info, labels, and technical data.",
        code: `<Typography variant="caption">\n  Version 1.0.0 • Released 2024\n</Typography>`,
        content: "Version 1.0.0 • Released 2024"
    }
] as const;

export const variantsTableData = [
    { variant: "display", tag: "h1", classes: "text-6xl font-bold text-neutral-900 leading-tight", usage: "Hero sections, page titles" },
    { variant: "heading", tag: "h2", classes: "text-4xl font-semibold text-neutral-900 leading-snug", usage: "Section headers, main headings" },
    { variant: "bodyLarge", tag: "p", classes: "text-xl text-neutral-600 leading-relaxed", usage: "Lead paragraphs, introductions" },
    { variant: "bodyMedium", tag: "p", classes: "text-base text-neutral-600 leading-relaxed font-light", usage: "Body text, descriptions" },
    { variant: "caption", tag: "span", classes: "text-xs font-mono text-neutral-400 uppercase tracking-widest", usage: "Labels, meta info, technical data" }
];

export const codeExamples = [
    {
        title: "Basic Usage",
        code: `import { Typography } from "@/components/atoms/Typography";

export default function Page() {
  return (
    <div>
      <Typography variant="display">Main Title</Typography>
      <Typography variant="heading">Section Title</Typography>
      <Typography variant="bodyMedium">
        This is the main content of your section.
      </Typography>
    </div>
  );
}`
    },
    {
        title: "With Labels",
        code: `import { Typography } from "@/components/atoms/Typography";

export default function Page() {
  return (
    <div>
      <Typography variant="display" showLabel>
        Main Title
      </Typography>
      <Typography variant="heading" showLabel>
        Section Title
      </Typography>
      <Typography variant="bodyLarge" showLabel>
        This text shows its variant label above.
      </Typography>
    </div>
  );
}`
    },
    {
        title: "Custom Styling",
        code: `import { Typography } from "@/components/atoms/Typography";

export default function Page() {
  return (
    <div>
      <Typography 
        variant="heading" 
        className="text-primary text-center"
      >
        Centered Primary Heading
      </Typography>
      
      <Typography 
        variant="bodyMedium"
        className="bg-neutral-50 p-4 rounded-lg"
      >
        Styled paragraph with background.
      </Typography>
    </div>
  );
}`
    },
    {
        title: "Responsive Typography",
        code: `import { Typography } from "@/components/atoms/Typography";

export default function Page() {
  return (
    <div>
      <Typography 
        variant="display"
        className="text-4xl md:text-5xl lg:text-6xl"
      >
        Responsive Display Text
      </Typography>
      
      <Typography 
        variant="bodyMedium"
        className="text-sm md:text-base lg:text-lg"
      >
        This text scales with screen size.
      </Typography>
    </div>
  );
}`
    }
];

export const typographyScale = [
    { size: "6xl (60px)", lineHeight: "1", weight: "bold", example: "Display text for hero sections" },
    { size: "4xl (36px)", lineHeight: "1.25", weight: "semibold", example: "Main section headings" },
    { size: "xl (20px)", lineHeight: "1.75", weight: "normal", example: "Large body text, introductions" },
    { size: "base (16px)", lineHeight: "1.75", weight: "light", example: "Standard body content" },
    { size: "xs (12px)", lineHeight: "1.5", weight: "normal", example: "Captions, labels, meta info" }
];

export const typographyProps = [
    { prop: "variant", type: "'display' | 'heading' | 'bodyLarge' | 'bodyMedium' | 'caption'", default: "'bodyMedium'", description: "Defines the typography style variant" },
    { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes for custom styling" },
    { prop: "children", type: "React.ReactNode", default: "-", description: "Text content to display" },
    { prop: "showLabel", type: "boolean", default: "false", description: "Shows the variant name above the text for documentation purposes" },
    { prop: "ref", type: "React.Ref<HTMLElement>", default: "-", description: "Forwarded ref to the underlying HTML element" }
];