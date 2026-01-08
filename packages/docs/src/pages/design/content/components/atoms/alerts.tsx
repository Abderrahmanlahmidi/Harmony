import { AlertTriangle } from "lucide-react";
import CodeBlock from "../CodeBlock";
import {
  alertExamples,
  alertProps,
  variantDetails,
  layoutDetails,
  usageExamples
} from "../../../../../constants/alert.data";
import { Alert as AlertComponent, Badge } from "harmony-react-ui";
import { PageHeader } from "../PageHeader";

export default function AlertsPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      <PageHeader
        category="Feedback"
        title="Alerts"
        description="Feedback messages for typical user actions, providing context-aware information and alerts."
        icon={<AlertTriangle className="w-10 h-10 text-primary" />}
        version="v1.0.0"
        badgeVariant="primary"
      />

      <section className="space-y-8">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Interactive Preview</h2>

        {alertExamples.map((example, index) => (
          <div key={index} className="space-y-6">
            <CodeBlock
              title={example.title}
              description={example.description}
              code={example.code}
            >
              {example.children}
            </CodeBlock>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Variant Specifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {variantDetails.map((variant, index) => (
            <div key={index} className="p-6 border border-neutral-200 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={variant.variant as any} size="sm" className="uppercase font-black tracking-widest">
                  {variant.variant}
                </Badge>
                <div className="flex items-center gap-2 text-neutral-400">
                  <variant.defaultIcon size={16} />
                  <span className="text-xs font-mono">{variant.icon}</span>
                </div>
              </div>

              <AlertComponent variant={variant.variant as any}>
                This is a <span className="font-bold">{variant.variant}</span> alert used for {variant.semantic.toLowerCase()}.
              </AlertComponent>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-tighter">Usage Context</div>
                <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                  {variant.semantic}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Layout Options</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {layoutDetails.map((layout, index) => (
            <div key={index} className="p-6 border border-neutral-200 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="neutral" size="sm" className="uppercase font-black tracking-widest">
                  {layout.layout}
                </Badge>
                <span className="text-xs font-mono text-neutral-400">{layout.padding}</span>
              </div>

              <div className="min-h-[80px] flex items-center">
                <AlertComponent layout={layout.layout as any} variant="info">
                  {layout.layout === 'pill' ? 'New update available' : 'A new software update is available for your system. Please review the changes.'}
                </AlertComponent>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-tighter">Recommendation</div>
                <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                  {layout.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Common Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usageExamples.map((usage, index) => (
            <div key={index} className="p-5 border border-neutral-200 rounded-2xl hover:bg-neutral-50/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-bold text-neutral-900">{usage.title}</div>
                <Badge variant={usage.variant as any} size="sm" className="scale-75 origin-right">
                  {usage.layout}
                </Badge>
              </div>
              <AlertComponent
                variant={usage.variant as any}
                layout={usage.layout as any}
                onClose={usage.dismissible ? () => { } : undefined}
              >
                {usage.message}
              </AlertComponent>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Props Reference</h2>

        <div className="overflow-x-auto rounded-2xl border border-neutral-200">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="p-4 font-bold text-neutral-900 text-sm">Prop</th>
                <th className="p-4 font-bold text-neutral-900 text-sm">Type</th>
                <th className="p-4 font-bold text-neutral-900 text-sm">Default</th>
                <th className="p-4 font-bold text-neutral-900 text-sm">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {alertProps.map((row, index) => (
                <tr key={index} className="hover:bg-neutral-50/30 transition-colors">
                  <td className="p-4 font-mono text-sm text-primary font-bold">{row.prop}</td>
                  <td className="p-4 font-mono text-xs text-neutral-600 whitespace-nowrap">{row.type}</td>
                  <td className="p-4 font-mono text-xs text-neutral-500">{row.default}</td>
                  <td className="p-4 text-sm text-neutral-600 font-medium">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
