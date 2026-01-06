// ProgressPage.tsx - Updated for new linear-only Progress component
import { TrendingUp } from 'lucide-react';
import CodeBlock from "../CodeBlock";
import { 
  progressExamples, 
  progressProps,
  variantDetails, 
  sizeDetails,
  usageExamples 
} from "../../../../../constants/progress.data";

import { PageHeader } from '../PageHeader';
import { Progress as ProgressComponent} from '../../../../../components/atoms/ProgressBar';

export default function ProgressPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      {/* Using PageHeader component */}
      <PageHeader
        category="Feedback"
        title="Progress"
        description="Simple linear progress indicators for showing completion status and progress tracking. Clean, accessible, and customizable."
        icon={<TrendingUp className="w-10 h-10 text-primary" />}
        version="v1.0.0"
        badgeVariant="primary"
      />

      {/* PREVIEW SECTION */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Interactive Preview</h2>
        
        {progressExamples.map((example, index) => (
          <div key={index} className="space-y-6">
            <CodeBlock
              title={example.title}
              description={example.description}
              code={example.code}
            >
              <div className="space-y-6">
                {example.examples.map((ex, exIndex) => (
                  <ProgressComponent
                    key={exIndex}
                    {...ex}
                  />
                ))}
              </div>
            </CodeBlock>
          </div>
        ))}
      </section>

      {/* VARIANT DETAILS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Color Variants</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {variantDetails.map((variant, index) => (
            <div key={index} className="p-4 border border-neutral-200 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: variant.color }}
                />
                <div>
                  <div className="font-semibold text-neutral-900 capitalize">{variant.variant}</div>
                  <div className="text-xs text-neutral-500">{variant.semantic}</div>
                </div>
              </div>
              <div className="space-y-3">
                <ProgressComponent
                  value={75}
                  variant={variant.variant as any}
                  size="sm"
                  label={`${variant.variant} Progress`}
                  showValue={false}
                />
                <div className="text-xs text-neutral-600">{variant.usage}</div>
                <code className="text-xs font-mono bg-neutral-100 p-1.5 rounded-lg block">
                  variant="{variant.variant}"
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIZE DETAILS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Size Specifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sizeDetails.map((size, index) => (
            <div key={index} className="p-4 border border-neutral-200 rounded-xl">
              <div className="text-center mb-3">
                <div className="font-bold text-neutral-900">{size.size.toUpperCase()}</div>
                <div className="text-xs text-neutral-500">{size.height}</div>
              </div>
              <div className="space-y-3">
                <ProgressComponent
                  value={65}
                  size={size.size as any}
                  showValue={false}
                />
                <div className="text-xs text-neutral-600 text-center">{size.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USAGE EXAMPLES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Common Use Cases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usageExamples.map((usage, index) => (
            <div key={index} className="p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{usage.title}</div>
                  <div className="text-xs text-neutral-500">{usage.description}</div>
                </div>
              </div>
              <ProgressComponent
                value={usage.value}
                variant={usage.variant as any}
                label={usage.label}
                size="sm"
                showValue={true}
                className="mt-2"
              />
              <div className="mt-3 flex justify-between text-xs text-neutral-500">
                <span>{usage.variant}</span>
                <span>Linear</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REAL-WORLD EXAMPLES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Real World Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-neutral-200 rounded-2xl">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">File Upload Dashboard</h3>
            <div className="space-y-6">
              <ProgressComponent
                value={75}
                label="design-system.zip"
                variant="primary"
                showValue
                striped
              />
              <ProgressComponent
                value={45}
                label="user-avatars.zip"
                variant="info"
                showValue
              />
              <ProgressComponent
                value={100}
                label="backup-data.db"
                variant="success"
                showValue
              />
            </div>
          </div>

          <div className="p-6 border border-neutral-200 rounded-2xl">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">System Status Dashboard</h3>
            <div className="space-y-6">
              <ProgressComponent
                value={85}
                label="CPU Usage"
                variant="warning"
                showValue
                size="lg"
              />
              <ProgressComponent
                value={92}
                label="Storage"
                variant="danger"
                showValue
                size="lg"
              />
              <ProgressComponent
                value={35}
                label="Memory"
                variant="success"
                showValue
                size="lg"
              />
              <ProgressComponent
                value={60}
                label="Network"
                variant="info"
                showValue
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROPS DOCUMENTATION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Props Reference</h2>
        
        <div className="overflow-x-auto rounded-xl border border-neutral-200">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left p-4 font-semibold text-neutral-900">Prop</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Type</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Default</th>
                <th className="text-left p-4 font-semibold text-neutral-900">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {progressProps.map((row, index) => (
                <tr key={index} className="hover:bg-neutral-50/50 transition-colors">
                  <td className="p-4 font-mono text-sm text-primary font-medium">{row.prop}</td>
                  <td className="p-4 font-mono text-sm text-neutral-600">{row.type}</td>
                  <td className="p-4 font-mono text-sm text-neutral-600">{row.default}</td>
                  <td className="p-4 text-neutral-600">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}