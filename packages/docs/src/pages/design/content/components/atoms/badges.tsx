import { Tag } from 'lucide-react';
import CodeBlock from "../CodeBlock";
import {
  badgeExamples,
  badgeProps,
  sizeDetails,
  shapeDetails,
  usageExamples
} from "../../../../../constants/badge.data";

import { Badge as BadgeComponent } from "harmony-react-ui";
import { PageHeader } from '../PageHeader';
import { HARMONY_VERSION } from "../../../../../constants/common";

export default function BadgesPage() {

  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      { }
      <PageHeader
        category="Components"
        title="Badge"
        description="Small status indicators used to highlight scores, counts, or semantic states in a concise format."
        icon={<Tag className="w-10 h-10 text-primary" />}
        version={HARMONY_VERSION}
        badgeVariant="primary"
      />

      { }
      <section className="space-y-8">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Interactive Preview</h2>

        {badgeExamples.map((example, index) => (
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

      { }
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Size Specifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sizeDetails.map((size, index) => (
            <div key={index} className="p-6 border border-neutral-200 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <BadgeComponent
                  size={size.size as any}
                  variant="primary"
                >
                  {size.size.toUpperCase()}
                </BadgeComponent>
                <div className="text-sm font-mono text-neutral-500">
                  {size.padding}
                </div>
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

      { }
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Shape Variations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shapeDetails.map((shape, index) => (
            <div key={index} className="p-6 border border-neutral-200 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <BadgeComponent
                  rounded={shape.shape as any}
                  variant="primary"
                >
                  {shape.shape.toUpperCase()}
                </BadgeComponent>
                <div className="text-sm font-mono text-neutral-500">
                  {shape.radius}
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">CSS Classes:</div>
                  <code className="text-xs font-mono bg-neutral-100 p-2 rounded-lg block">
                    {shape.classes}
                  </code>
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">Usage:</div>
                  <p className="text-sm text-neutral-600">{shape.usage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      { }
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Common Use Cases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usageExamples.map((usage, index) => (
            <div key={index} className="p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <BadgeComponent variant={usage.variant as any} size="sm">
                  {usage.usage}
                </BadgeComponent>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {usage.example.split(' • ').map((item, idx) => (
                    <BadgeComponent
                      key={idx}
                      variant={usage.variant as any}
                      size="sm"
                      className="whitespace-nowrap"
                    >
                      {item}
                    </BadgeComponent>
                  ))}
                </div>
                <p className="text-xs text-neutral-600">{usage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      { }
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Real World Examples</h2>

        <div className="space-y-4">
          <div className="p-6 border border-neutral-200 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-neutral-900">Project Dashboard</div>
              <div className="text-sm text-neutral-500">Showing status indicators</div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-32 text-sm text-neutral-600">Project Status:</div>
                <BadgeComponent variant="success" className="gap-1">
                  Active
                </BadgeComponent>
                <BadgeComponent variant="primary" className="gap-1">
                  3 Members
                </BadgeComponent>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32 text-sm text-neutral-600">Priority:</div>
                <BadgeComponent variant="danger" className="gap-1">
                  High Priority
                </BadgeComponent>
                <BadgeComponent variant="warning" className="gap-1">
                  Deadline: 3 days
                </BadgeComponent>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32 text-sm text-neutral-600">Tags:</div>
                <BadgeComponent variant="secondary" className="gap-1">
                  Design
                </BadgeComponent>
                <BadgeComponent variant="secondary" className="gap-1">
                  Development
                </BadgeComponent>
                <BadgeComponent variant="secondary" className="gap-1">
                  MVP
                </BadgeComponent>
              </div>
            </div>
          </div>

          <div className="p-6 border border-neutral-200 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-neutral-900">User Profile</div>
              <div className="text-sm text-neutral-500">Showing user roles and status</div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-32 text-sm text-neutral-600">Account Status:</div>
                <BadgeComponent variant="success" className="gap-1">
                  Verified
                </BadgeComponent>
                <BadgeComponent variant="neutral" className="gap-1">
                  Pro Member
                </BadgeComponent>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32 text-sm text-neutral-600">Role:</div>
                <BadgeComponent variant="primary" className="gap-1">
                  Administrator
                </BadgeComponent>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32 text-sm text-neutral-600">Notifications:</div>
                <BadgeComponent variant="danger" size="sm" className="gap-1">
                  12 Unread
                </BadgeComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      { }
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
              {badgeProps.map((row, index) => (
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
