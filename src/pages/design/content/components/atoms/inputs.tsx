import CodeBlock from "../CodeBlock";
import { 
  inputExamples, 
  inputProps, 
} from "../../../../../constants/input.data";

import { PageHeader } from "../PageHeader";
import { TextCursorInput } from "lucide-react";

export default function InputPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      {/* Using PageHeader component */}
      <PageHeader
        category="Forms"
        title="Input"
        description="Standardized form controls for text collection, featuring validation states, icon support, and varied size variants."
        icon={
          <TextCursorInput className="w-10 h-10 text-primary" />
        }
        version="v1.0.0"
        badgeVariant="primary"
      />

      {/* PREVIEW SECTION */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Interactive Preview</h2>
        
        {inputExamples.map((example, index) => (
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
              {inputProps.map((row, index) => (
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