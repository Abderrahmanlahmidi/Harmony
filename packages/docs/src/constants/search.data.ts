export const searchExamples = [
  {
    title: "Basic Search",
    description: "Standard search bar with integrated loading states and clear functionality.",
    code: `import {  SearchBar  } from "harmony-react-ui";
import { useState } from "react";

function SearchExample() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 800);
    }
  };

  return (
    <SearchBar
      placeholder="Search anything..."
      isLoading={isLoading}
      value={searchValue}
      onChange={handleSearch}
      onClear={() => setSearchValue("")}
    />
  );
}`,
    examples: [
      {
        placeholder: "Explore components, icons, and more...",
        showLoading: true,
        showClear: true
      }
    ]
  },
  {
    title: "Size Variations",
    description: "Three distinct sizes for varying layout requirements.",
    code: `<SearchBar size="sm" placeholder="Small search..." />
<SearchBar size="md" placeholder="Medium search..." />
<SearchBar size="lg" placeholder="Large search..." />`,
    examples: [
      { size: "sm", placeholder: "Small Search" },
      { size: "md", placeholder: "Medium Search" },
      { size: "lg", placeholder: "Large Search" }
    ]
  },
  {
    title: "Variant Styles",
    description: "Different visual styles for various contexts.",
    code: `<SearchBar variant="default" placeholder="Default style..." />
<SearchBar variant="outline" placeholder="Outline style..." />
<SearchBar variant="filled" placeholder="Filled style..." />`,
    examples: [
      { variant: "default", placeholder: "Default style" },
      { variant: "outline", placeholder: "Outline style" },
      { variant: "filled", placeholder: "Filled style" }
    ]
  }
];

export const searchProps = [
  { prop: "value", type: "string", default: "''", description: "Current search value" },
  { prop: "onChange", type: "(e: React.ChangeEvent<HTMLInputElement>) => void", default: "undefined", description: "Change handler for search input" },
  { prop: "onClear", type: "() => void", default: "undefined", description: "Clear button click handler" },
  { prop: "placeholder", type: "string", default: "'Search...'", description: "Placeholder text" },
  { prop: "isLoading", type: "boolean", default: "false", description: "Show loading spinner" },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Size of the search bar" },
  { prop: "variant", type: "'default' | 'outline' | 'filled'", default: "'default'", description: "Visual style variant" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
  { prop: "autoFocus", type: "boolean", default: "false", description: "Auto-focus on mount" },
  { prop: "disabled", type: "boolean", default: "false", description: "Disable the search input" }
];

export const sizeDetails = [
  { 
    size: "sm", 
    height: "h-9",
    text: "text-sm",
    padding: "px-3",
    icon: "w-4 h-4",
    usage: "Compact spaces, tables, sidebars"
  },
  { 
    size: "md", 
    height: "h-11",
    text: "text-base",
    padding: "px-4",
    icon: "w-5 h-5",
    usage: "Standard interfaces, headers"
  },
  { 
    size: "lg", 
    height: "h-14",
    text: "text-lg",
    padding: "px-5",
    icon: "w-6 h-6",
    usage: "Hero sections, prominent search"
  }
];

export const variantDetails = [
  { 
    variant: "default", 
    background: "bg-white",
    border: "border border-neutral-200",
    focus: "focus:border-primary focus:ring-2 focus:ring-primary/20",
    usage: "Standard interfaces, general use"
  },
  { 
    variant: "outline", 
    background: "bg-transparent",
    border: "border-2 border-neutral-300",
    focus: "focus:border-primary focus:ring-2 focus:ring-primary/20",
    usage: "Minimal designs, cards"
  },
  { 
    variant: "filled", 
    background: "bg-neutral-100",
    border: "border border-transparent",
    focus: "focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20",
    usage: "Content-heavy pages, dashboards"
  }
];

export const usageExamples = [
  { 
    title: "Product Search", 
    variant: "default",
    size: "lg",
    placeholder: "Search products...",
    description: "Main search in e-commerce header"
  },
  { 
    title: "Documentation Search", 
    variant: "outline",
    size: "md",
    placeholder: "Search documentation...",
    description: "Technical documentation search"
  },
  { 
    title: "User Search", 
    variant: "filled",
    size: "sm",
    placeholder: "Search users...",
    description: "Admin panel user search"
  },
  { 
    title: "Filter Search", 
    variant: "default",
    size: "sm",
    placeholder: "Filter items...",
    description: "Inline filtering in tables"
  },
  { 
    title: "Global Search", 
    variant: "filled",
    size: "lg",
    placeholder: "Search everything...",
    description: "Application-wide search"
  },
  { 
    title: "Command Palette", 
    variant: "outline",
    size: "md",
    placeholder: "Type a command...",
    description: "Keyboard command interface"
  }
];
