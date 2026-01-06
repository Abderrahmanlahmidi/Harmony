import { Plus, Settings, Trash2, Heart, Eye, Check, Edit, Star, X, MoreHorizontal, ChevronRight } from "lucide-react";
import {  ButtonIcon  } from "harmony-react-ui";



export const buttonIconExamples = [
  {
    title: "Variants",
    description: "Explore the different visual styles of the ButtonIcon component.",
    code: `import {  ButtonIcon  } from "harmony-react-ui";
import { Plus, Settings, Trash2, Heart } from "lucide-react";

export default function VariantsExample() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <ButtonIcon variant="primary" icon={<Plus size={20} />} label="Add" />
      <ButtonIcon variant="secondary" icon={<Settings size={20} />} label="Settings" />
      <ButtonIcon variant="outline" icon={<Trash2 size={20} />} label="Delete" />
      <ButtonIcon variant="ghost" icon={<Heart size={20} />} label="Like" />
    </div>
  );
}`,
    children: (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <ButtonIcon variant="primary" icon={<Plus size={20} />} label="Add" />
        <ButtonIcon variant="secondary" icon={<Settings size={20} />} label="Settings" />
        <ButtonIcon variant="outline" icon={<Trash2 size={20} />} label="Delete" />
        <ButtonIcon variant="ghost" icon={<Heart size={20} />} label="Like" />
      </div>
    )
  },
  {
    title: "Sizes",
    description: "ButtonIcon comes in three distinct sizes: Small, Medium (default), and Large.",
    code: `import {  ButtonIcon  } from "harmony-react-ui";
import { Eye, Settings, Plus } from "lucide-react";

export default function SizesExample() {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      <ButtonIcon size="sm" icon={<Eye size={16} />} label="View" />
      <ButtonIcon size="md" icon={<Settings size={20} />} label="Settings" />
      <ButtonIcon size="lg" icon={<Plus size={24} />} label="Add" />
    </div>
  );
}`,
    children: (
      <div className="flex flex-wrap gap-4 items-end justify-center">
        <ButtonIcon size="sm" icon={<Eye size={16} />} label="View" />
        <ButtonIcon size="md" icon={<Settings size={20} />} label="Settings" />
        <ButtonIcon size="lg" icon={<Plus size={24} />} label="Add" />
      </div>
    )
  },
  {
    title: "Icon Examples",
    description: "Common use cases for icon buttons with appropriate labels.",
    code: `import {  ButtonIcon  } from "harmony-react-ui";
import { Plus, Check, Trash2, Edit, Star, Heart, X, MoreHorizontal, ChevronRight } from "lucide-react";

export default function IconExamples() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <ButtonIcon icon={<Plus size={20} />} label="Add item" />
      <ButtonIcon icon={<Check size={20} />} label="Confirm" />
      <ButtonIcon icon={<Trash2 size={20} />} label="Delete" />
      <ButtonIcon icon={<Edit size={20} />} label="Edit" />
      <ButtonIcon icon={<Star size={20} />} label="Favorite" />
      <ButtonIcon icon={<Heart size={20} />} label="Like" />
      <ButtonIcon icon={<X size={20} />} label="Close" />
      <ButtonIcon icon={<MoreHorizontal size={20} />} label="More options" />
      <ButtonIcon icon={<ChevronRight size={20} />} label="Next" />
    </div>
  );
}`,
    children: (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <ButtonIcon icon={<Plus size={20} />} label="Add item" />
        <ButtonIcon icon={<Check size={20} />} label="Confirm" />
        <ButtonIcon icon={<Trash2 size={20} />} label="Delete" />
        <ButtonIcon icon={<Edit size={20} />} label="Edit" />
        <ButtonIcon icon={<Star size={20} />} label="Favorite" />
        <ButtonIcon icon={<Heart size={20} />} label="Like" />
        <ButtonIcon icon={<X size={20} />} label="Close" />
        <ButtonIcon icon={<MoreHorizontal size={20} />} label="More options" />
        <ButtonIcon icon={<ChevronRight size={20} />} label="Next" />
      </div>
    )
  },
  {
    title: "States",
    description: "ButtonIcon can be displayed in loading and disabled states.",
    code: `import {  ButtonIcon  } from "harmony-react-ui";
import { Star, Heart, Trash2, Settings } from "lucide-react";

export default function StatesExample() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <ButtonIcon isLoading icon={<Star size={20} />} label="Loading" />
      <ButtonIcon variant="secondary" isLoading icon={<Heart size={20} />} label="Loading" />
      <ButtonIcon disabled icon={<Trash2 size={20} />} label="Delete" />
      <ButtonIcon variant="outline" disabled icon={<Settings size={20} />} label="Settings" />
    </div>
  );
}`,
    children: (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <ButtonIcon isLoading icon={<Star size={20} />} label="Loading" />
        <ButtonIcon variant="secondary" isLoading icon={<Heart size={20} />} label="Loading" />
        <ButtonIcon disabled icon={<Trash2 size={20} />} label="Delete" />
        <ButtonIcon variant="outline" disabled icon={<Settings size={20} />} label="Settings" />
      </div>
    )
  }
];

export const buttonIconProps = [
  { prop: "variant", type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'", description: "Visual style variant of the button" },
  { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Size of the icon button" },
  { prop: "icon", type: "React.ReactNode", default: "-", description: "Icon component to display" },
  { prop: "label", type: "string", default: "undefined", description: "Accessible label for screen readers" },
  { prop: "isLoading", type: "boolean", default: "false", description: "Shows loading spinner and disables button" },
  { prop: "disabled", type: "boolean", default: "false", description: "Disables the button" },
  { prop: "onClick", type: "React.MouseEventHandler<HTMLButtonElement>", default: "undefined", description: "Click handler function" },
  { prop: "className", type: "string", default: "undefined", description: "Additional CSS classes" },
];
