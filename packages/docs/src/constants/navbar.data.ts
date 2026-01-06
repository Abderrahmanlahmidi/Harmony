import { Layout, Menu, X, Sun, Moon, Github } from "lucide-react";

export const overviewCards = [
  {
    icon: "Zap",
    title: "Key Features",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
    items: [
      "Responsive design with mobile menu",
      "Dark/light mode toggle",
      "Glassmorphism effect on scroll",
      "Smooth Framer Motion animations",
      "GitHub integration"
    ]
  },
  {
    icon: "Smartphone",
    title: "Responsive Behavior",
    bgColor: "bg-neutral-50",
    borderColor: "border-neutral-200",
    items: [
      "Desktop: Full navigation with all features",
      "Tablet: Optimized layout",
      "Mobile: Hamburger menu with drawer",
      "Breakpoints: sm, md, lg, xl"
    ]
  },
  {
    icon: "Palette",
    title: "Theme Support",
    bgColor: "bg-neutral-50",
    borderColor: "border-neutral-200",
    items: [
      "Automatic system preference detection",
      "Manual toggle with persistent state",
      "Dark mode optimized colors",
      "Accessible contrast ratios"
    ]
  }
];

export const codeExamples = [
  {
    title: "Basic Implementation",
    code: `import {  Navbar  } from "harmony-react-ui";

export default function MyPage() {
  return (
    <div>
      <Navbar />
      {}
    </div>
  );
}`
  },
  {
    title: "Custom Navigation Items",
    code: `import {  Navbar  } from "harmony-react-ui";

const customNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function MyPage() {
  return <Navbar navItems={customNavItems} />;
}`
  },
  {
    title: "Custom Logo Component",
    code: `import {  Navbar  } from "harmony-react-ui";

const CustomLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 bg-primary rounded-xl" />
    <span className="text-xl font-black">MyBrand</span>
  </div>
);

export default function MyPage() {
  return <Navbar logo={<CustomLogo />} />;
}`
  },
  {
    title: "Minimal Configuration",
    code: `import {  Navbar  } from "harmony-react-ui";

export default function MyPage() {
  return (
    <Navbar 
      ctaText=""
      showGithub={false}
      showThemeToggle={false}
      glassEffect={false}
    />
  );
}`
  }
];

export const featureCards = [
  {
    icon: Layout,
    title: "Logo & Branding",
    description: "The logo area is fully customizable. By default, it displays the Harmony branding with a layout icon. You can replace it with your own logo component using the logo prop.",
    note: "Default classes: group cursor-pointer"
  },
  {
    icon: Menu,
    secondIcon: X,
    title: "Mobile Navigation",
    description: "On mobile devices, the navigation collapses into a hamburger menu. The mobile drawer includes: navigation items, theme toggle, and CTA button. Uses Framer Motion for smooth animations.",
    note: "Breakpoint: md:hidden"
  },
  {
    icon: Sun,
    secondIcon: Moon,
    title: "Theme Toggle",
    description: "Integrated theme switcher that toggles between light and dark modes. The state is persisted using local storage and respects system preferences. Can be hidden with showThemeToggle prop.",
    note: "Hook used: useDarkMode"
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description: "Includes a GitHub icon link that opens your repository in a new tab. Can be disabled with the showGithub prop. Uses a secure rel='noopener noreferrer' attribute.",
    note: "Default URL: https://github.com"
  }
];

export const stylingExamples = [
  {
    title: "Transparent navbar with border",
    code: `<Navbar 
  className="bg-transparent border-b border-neutral-200/50"
  glassEffect={false}
/>`
  },
  {
    title: "Custom background color",
    code: `<Navbar 
  className="bg-gradient-to-r from-primary/10 to-secondary/10"
/>`
  },
  {
    title: "Different hover effects",
    code: `<Navbar 
  className="[&_a]:hover:text-primary [&_button]:hover:bg-primary/10"
/>`
  },
  {
    title: "Custom positioning",
    code: `<Navbar 
  className="absolute top-4 left-4 right-4 rounded-2xl"
  fixed={false}
/>`
  }
];

export const propsTableData = [
  { prop: "navItems", type: "NavItem[]", default: "Default items", description: "Array of navigation items with label and href" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes for custom styling" },
  { prop: "logo", type: "ReactNode", default: "Harmony logo", description: "Custom logo component" },
  { prop: "ctaText", type: "string", default: "Get Started", description: "Text for the call-to-action button" },
  { prop: "onCtaClick", type: "() => void", default: "undefined", description: "Callback for CTA button click" },
  { prop: "showThemeToggle", type: "boolean", default: "true", description: "Show/hide theme toggle button" },
  { prop: "showGithub", type: "boolean", default: "true", description: "Show/hide GitHub icon link" },
  { prop: "glassEffect", type: "boolean", default: "true", description: "Enable/disable glassmorphism effect on scroll" },
  { prop: "fixed", type: "boolean", default: "true", description: "Fixed positioning at top of page" },
];
