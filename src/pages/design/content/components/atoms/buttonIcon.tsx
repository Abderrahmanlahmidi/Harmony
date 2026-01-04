import { ButtonIcon } from '../../../../../components/atoms/ButtonIcon.tsx'
import { Plus, Settings, Trash2, Heart, Edit, Star, Eye, MoreHorizontal, X, ChevronRight, Check } from 'lucide-react'
import CodeBlock from '../CodeBlock.tsx';

export default function ButtonsIconPage() {
    return (
        <div className="space-y-12 pb-20">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold text-neutral-50 dark:text-neutral-900 tracking-tight">ButtonIcon</h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
                    Icon-only buttons for compact actions and interfaces. Perfect for toolbars, navigation, and minimalist designs.
                </p>
            </header>

            <section className="space-y-6">
                <CodeBlock
                    title="Variants"
                    description="Explore the different visual styles of the ButtonIcon component."
                    code={`import { ButtonIcon } from "@/components/atoms/ButtonIcon";
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
}`}
                >
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        <ButtonIcon variant="primary" icon={<Plus size={20} />} label="Add" />
                        <ButtonIcon variant="secondary" icon={<Settings size={20} />} label="Settings" />
                        <ButtonIcon variant="outline" icon={<Trash2 size={20} />} label="Delete" />
                        <ButtonIcon variant="ghost" icon={<Heart size={20} />} label="Like" />
                    </div>
                </CodeBlock>
            </section>

            <section className="space-y-6">
                <CodeBlock
                    title="Sizes"
                    description="ButtonIcon comes in three distinct sizes: Small, Medium (default), and Large."
                    code={`import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { Eye, Settings, Plus } from "lucide-react";

export default function SizesExample() {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      <ButtonIcon size="sm" icon={<Eye size={16} />} label="View" />
      <ButtonIcon size="md" icon={<Settings size={20} />} label="Settings" />
      <ButtonIcon size="lg" icon={<Plus size={24} />} label="Add" />
    </div>
  );
}`}
                >
                    <div className="flex flex-wrap gap-4 items-end justify-center">
                        <ButtonIcon size="sm" icon={<Eye size={16} />} label="View" />
                        <ButtonIcon size="md" icon={<Settings size={20} />} label="Settings" />
                        <ButtonIcon size="lg" icon={<Plus size={24} />} label="Add" />
                    </div>
                </CodeBlock>
            </section>

            <section className="space-y-6">
                <CodeBlock
                    title="Icon Examples"
                    description="Common use cases for icon buttons with appropriate labels."
                    code={`import { ButtonIcon } from "@/components/atoms/ButtonIcon";
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
}`}
                >
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
                </CodeBlock>
            </section>

            <section className="space-y-6">
                <CodeBlock
                    title="States"
                    description="ButtonIcon can be displayed in loading and disabled states."
                    code={`import { ButtonIcon } from "@/components/atoms/ButtonIcon";
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
}`}
                >
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        <ButtonIcon isLoading icon={<Star size={20} />} label="Loading" />
                        <ButtonIcon variant="secondary" isLoading icon={<Heart size={20} />} label="Loading" />
                        <ButtonIcon disabled icon={<Trash2 size={20} />} label="Delete" />
                        <ButtonIcon variant="outline" disabled icon={<Settings size={20} />} label="Settings" />
                    </div>
                </CodeBlock>
            </section>
        </div>
    )
}