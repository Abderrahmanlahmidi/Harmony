import { Loader2 } from 'lucide-react';

import {  Button  } from "harmony-react-ui";
import {  Card, CardHeader, CardTitle, CardDescription, CardContent  } from "harmony-react-ui";
import CodeBlock from "../CodeBlock";

import { 
  spinnerExamples, 
  spinnerProps, 
  sizeDetails, 
  variantDetails,
  thicknessDetails,
  usageExamples 
} from "../../../../../constants/spinner.data";


import {  Spinner as SpinnerComponent  } from "harmony-react-ui";
import { PageHeader } from '../PageHeader';


export default function SpinnersPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      <PageHeader
        category="Feedback"
        title="Spinners"
        description="Indicate an ongoing process or loading state to keep users informed about system activity."
        icon={<Loader2 className="w-10 h-10 text-primary" />}
        version="v1.0.0"
        badgeVariant="primary"
      />

      {/* PREVIEW SECTION */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Interactive Preview</h2>
        
        {spinnerExamples.map((example, index) => (
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {sizeDetails.map((size, index) => (
            <div key={index} className="p-4 border border-neutral-200 rounded-xl text-center">
              <div className="flex flex-col items-center justify-center gap-3 mb-3">
                <SpinnerComponent 
                  size={size.size as any}
                  thickness="thick"
                />
                <div className="text-lg font-bold text-neutral-900">{size.size.toUpperCase()}</div>
              </div>
              <div className="space-y-2">
                <div className="text-xs font-mono text-neutral-500">{size.dimensions}</div>
                <div className="text-xs text-neutral-600">{size.usage}</div>
                <code className="text-xs font-mono bg-neutral-100 p-1 rounded-lg block">
                  {size.classes}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VARIANTS DETAILS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Color Variants</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {variantDetails.map((variant, index) => (
            <div key={index} className="p-4 border border-neutral-200 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <SpinnerComponent 
                  variant={variant.variant as any}
                  size="lg"
                  thickness="thick"
                />
                <div>
                  <div className="font-semibold text-neutral-900 capitalize">{variant.variant}</div>
                  <div className="text-xs text-neutral-500">{variant.semantic}</div>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="text-xs font-semibold text-neutral-900 mb-1">CSS Classes:</div>
                  <code className="text-xs font-mono bg-neutral-100 p-1.5 rounded-lg block">
                    {variant.classes}
                  </code>
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900 mb-1">Usage:</div>
                  <p className="text-xs text-neutral-600">{variant.usage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THICKNESS DETAILS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Thickness Options</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {thicknessDetails.map((thickness, index) => (
            <div key={index} className="p-6 border border-neutral-200 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <SpinnerComponent 
                  thickness={thickness.thickness as any}
                  size="xl"
                />
                <div className="text-lg font-bold text-neutral-900 capitalize">{thickness.thickness}</div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">CSS Classes:</div>
                  <code className="text-xs font-mono bg-neutral-100 p-2 rounded-lg block">
                    {thickness.classes}
                  </code>
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">Visual:</div>
                  <p className="text-sm text-neutral-600">{thickness.visual}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">Usage:</div>
                  <p className="text-sm text-neutral-600">{thickness.usage}</p>
                </div>
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
                <SpinnerComponent size="sm" thickness="thick" />
                <div className="font-semibold text-neutral-900">{usage.title}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium text-neutral-700">Context:</span> {usage.context}
                </div>
                <div className="text-sm">
                  <span className="font-medium text-neutral-700">Duration:</span> {usage.duration}
                </div>
                <div className="text-sm">
                  <span className="font-medium text-neutral-700">Placement:</span> {usage.placement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REAL-WORLD EXAMPLES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Real World Examples</h2>
        
        <div className="space-y-4">
          <div className="p-6 border border-neutral-200 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-neutral-900">Dashboard Loading</div>
              <div className="text-sm text-neutral-500">Showing multiple loading states</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base text-neutral-900">User Stats</CardTitle>
                  <CardDescription>Loading analytics</CardDescription>
                </CardHeader>
                <CardContent className="h-32 flex items-center justify-center">
                  <SpinnerComponent size="lg" thickness="thick" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base text-neutral-900">Recent Activity</CardTitle>
                  <CardDescription>Fetching data</CardDescription>
                </CardHeader>
                <CardContent className="h-32 flex items-center justify-center">
                  <SpinnerComponent size="lg" variant="secondary" thickness="thick" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base text-neutral-900">Notifications</CardTitle>
                  <CardDescription>Syncing messages</CardDescription>
                </CardHeader>
                <CardContent className="h-32 flex items-center justify-center">
                  <SpinnerComponent size="lg" variant="current" thickness="thick" />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="p-6 border border-neutral-200 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-neutral-900">Form Submission</div>
              <div className="text-sm text-neutral-500">Showing inline and overlay loading</div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-neutral-100 rounded animate-pulse" />
                  <div className="h-10 w-full border border-neutral-200 rounded-lg" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-2/3 bg-neutral-100 rounded animate-pulse" />
                  <div className="h-10 w-full border border-neutral-200 rounded-lg" />
                </div>
              </div>
              <div className="flex gap-4">
                <Button isLoading className="min-w-[120px]">
                  Save Changes
                </Button>
                <Button variant="outline" className="min-w-[120px]">
                  Cancel
                </Button>
              </div>
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
              {spinnerProps.map((row, index) => (
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



