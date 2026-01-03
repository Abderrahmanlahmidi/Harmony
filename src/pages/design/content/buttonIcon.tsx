import { ButtonIcon } from '../../../components/atoms/ButtonIcon.tsx'
import { Plus, Settings, Trash2, Heart,Edit, Star, Eye, MoreHorizontal, X, ChevronRight, Check } from 'lucide-react'

export default function ButtonIconPage() {
    return (
        <div className="space-y-12 pb-20">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold text-neutral-900 tracking-tight">ButtonIcon</h1>
                <p className="text-xl text-neutral-600 max-w-2xl">
                    Icon-only buttons for compact actions and interfaces. Perfect for toolbars, navigation, and minimalist designs.
                </p>
            </header>

            <section className="space-y-6">
                <div className="border-b border-neutral-200 pb-2">
                    <h2 className="text-2xl font-semibold text-neutral-900">Variants</h2>
                </div>
                <p className="text-neutral-600">Explore the different visual styles of the ButtonIcon component.</p>

                <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-wrap gap-4 items-center">
                    <ButtonIcon variant="primary" icon={<Plus size={20} />} label="Add" />
                    <ButtonIcon variant="secondary" icon={<Settings size={20} />} label="Settings" />
                    <ButtonIcon variant="outline" icon={<Trash2 size={20} />} label="Delete" />
                    <ButtonIcon variant="ghost" icon={<Heart size={20} />} label="Like" />
                </div>
            </section>

            <section className="space-y-6">
                <div className="border-b border-neutral-200 pb-2">
                    <h2 className="text-2xl font-semibold text-neutral-900">Sizes</h2>
                </div>
                <p className="text-neutral-600">ButtonIcon comes in three distinct sizes: Small, Medium (default), and Large.</p>

                <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-wrap gap-4 items-end">
                    <ButtonIcon size="sm" icon={<Eye size={16} />} label="View" />
                    <ButtonIcon size="md" icon={<Settings size={20} />} label="Settings" />
                    <ButtonIcon size="lg" icon={<Plus size={24} />} label="Add" />
                </div>
            </section>

            <section className="space-y-6">
                <div className="border-b border-neutral-200 pb-2">
                    <h2 className="text-2xl font-semibold text-neutral-900">Icon Examples</h2>
                </div>
                <p className="text-neutral-600">Common use cases for icon buttons with appropriate labels.</p>

                <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-wrap gap-4 items-center">
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
            </section>

            <section className="space-y-6">
                <div className="border-b border-neutral-200 pb-2">
                    <h2 className="text-2xl font-semibold text-neutral-900">States</h2>
                </div>
                <p className="text-neutral-600">ButtonIcon can be displayed in loading and disabled states.</p>

                <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-wrap gap-4 items-center">
                    <ButtonIcon isLoading icon={<Star size={20} />} label="Loading" />
                    <ButtonIcon variant="secondary" isLoading icon={<Heart size={20} />} label="Loading" />
                    <ButtonIcon disabled icon={<Trash2 size={20} />} label="Delete" />
                    <ButtonIcon variant="outline" disabled icon={<Settings size={20} />} label="Settings" />
                </div>
            </section>

            <section className="space-y-6">
                <div className="border-b border-neutral-200 pb-2">
                    <h2 className="text-2xl font-semibold text-neutral-900">Example Usage</h2>
                </div>
                <pre className="bg-neutral-900 text-neutral-100 p-6 rounded-2xl overflow-x-auto text-sm font-mono">
{`import { ButtonIcon } from '@/components/atoms/ButtonIcon'
import { Plus, Trash2 } from 'lucide-react'

export const MyComponent = () => (
  <div className="flex gap-2">
    <ButtonIcon 
      variant="primary" 
      size="md" 
      icon={<Plus size={20} />}
      label="Add new item"
      onClick={() => console.log('Add clicked')}
    />
    <ButtonIcon 
      variant="outline" 
      size="sm" 
      icon={<Trash2 size={16} />}
      label="Delete item"
      onClick={() => console.log('Delete clicked')}
    />
  </div>
)`}
        </pre>
            </section>
        </div>
    )
}