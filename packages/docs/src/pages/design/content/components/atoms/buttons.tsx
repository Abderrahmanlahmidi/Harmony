import { MousePointer } from 'lucide-react';

import CodeBlock from '../CodeBlock.tsx';
import { 
  buttonExamples, 
  buttonProps, 
  variantDetails, 
  sizeDetails 
} from '../../../../../constants/buttons.data.tsx';
import {  Badge  } from "harmony-react-ui";

// Import your Button component
import {  Button as ButtonComponent  } from "harmony-react-ui";
import { PageHeader } from '../PageHeader.tsx';

export default function ButtonsPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      {/* Using PageHeader component */}
      <PageHeader
        category="Components"
        title="Button"
        description="Primary interaction component used to trigger actions, submit forms, and navigate through the application."
        icon={<MousePointer className="w-10 h-10 text-primary" />}
        version="v1.0.0"
        badgeVariant="primary"
      />

      {/* PREVIEW SECTION */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Interactive Preview</h2>
        
        {buttonExamples.map((example, index) => (
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

      {/* SIZES DETAILS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Size Specifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sizeDetails.map((size, index) => (
            <div key={index} className="p-6 border border-neutral-200 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <ButtonComponent size={size.size as any}>
                  {size.size.toUpperCase()}
                </ButtonComponent>
                <div className="text-sm font-mono text-neutral-500">{size.padding}</div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">CSS Classes:</div>
                  <code className="text-xs font-mono bg-neutral-100 p-2 rounded-lg block">
                    {size.classes}
                  </code>
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">Usage:</div>
                  <p className="text-sm text-neutral-600">{size.usage}</p>
                </div>
              </div>
            </div>
          ))}
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
              {buttonProps.map((row, index) => (
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



