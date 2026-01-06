import { Type } from 'lucide-react';
import {  Typography  } from "harmony-react-ui";
import CodeBlock from "../CodeBlock";
import { 
  typographyExamples, 
  variantsTableData, 
  codeExamples, 
  typographyScale,
  typographyProps 
} from "../../../../../constants/typography.data.ts";
import { PageHeader } from '../PageHeader.tsx';


export default function TypographyPage() {
    return (
        <div className="space-y-16 pb-40">
            <PageHeader
                category="Foundation"
                title="Typography"
                description="A flexible typographic system that provides clear hierarchy and professional readability across all interfaces."
                icon={<Type className="w-10 h-10 text-primary" />}
                version="v1.0.0"
            />

            {}
            <section className="space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                    <h2 className="text-2xl font-black text-neutral-900 italic uppercase">Live Preview</h2>
                </div>

                <div className="space-y-8">
                    {typographyExamples.map((example, index) => (
                        <div key={index} className="space-y-4">
                            <CodeBlock
                                code={example.code}
                            >
                                <Typography variant={example.variant}>
                                    {example.content}
                                </Typography>
                            </CodeBlock>
                        </div>
                    ))}
                </div>
            </section>

            {}
            <section className="space-y-6">
                <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Overview</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                        <h3 className="text-lg font-bold text-neutral-900 mb-4">Typography System</h3>
                        <ul className="space-y-3 text-neutral-600">
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                <span>Five distinct variants for clear hierarchy</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                <span>Poppins font family for modern readability</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                <span>Semantic HTML tags (h1, h2, p, span)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                <span>Built-in label system for documentation</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                        <h3 className="text-lg font-bold text-neutral-900 mb-4">Best Practices</h3>
                        <ul className="space-y-3 text-neutral-600">
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-1.5"></div>
                                <span>Use display variant only once per page</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-1.5"></div>
                                <span>Maintain consistent heading hierarchy</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-1.5"></div>
                                <span>Limit line length to 50-75 characters</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-1.5"></div>
                                <span>Ensure sufficient contrast for accessibility</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {}
            <section className="space-y-6">
                <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Usage Examples</h2>
                
                {codeExamples.map((example, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className="text-lg font-bold text-neutral-900">{example.title}</h3>
                        <div className="bg-neutral-900 rounded-xl p-6">
                            <pre className="text-sm text-neutral-100 font-mono overflow-x-auto">
                                <code>{example.code}</code>
                            </pre>
                        </div>
                    </div>
                ))}
            </section>

            {}
            <section className="space-y-6">
                <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Variants Reference</h2>
                
                <div className="overflow-x-auto rounded-xl border border-neutral-200">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-neutral-50 border-b border-neutral-200">
                                <th className="text-left p-4 font-semibold text-neutral-900">Variant</th>
                                <th className="text-left p-4 font-semibold text-neutral-900">HTML Tag</th>
                                <th className="text-left p-4 font-semibold text-neutral-900">CSS Classes</th>
                                <th className="text-left p-4 font-semibold text-neutral-900">Recommended Usage</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                            {variantsTableData.map((row, index) => (
                                <tr key={index} className="hover:bg-neutral-50/50 transition-colors">
                                    <td className="p-4 font-mono text-sm text-primary font-medium">{row.variant}</td>
                                    <td className="p-4 font-mono text-sm text-neutral-600">{row.tag}</td>
                                    <td className="p-4 font-mono text-sm text-neutral-600">{row.classes}</td>
                                    <td className="p-4 text-neutral-600">{row.usage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {}
            <section className="space-y-6">
                <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Type Scale</h2>
                
                <div className="bg-neutral-50 dark:bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                            {typographyScale.map((scale, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="text-lg font-bold text-neutral-900">{scale.size}</div>
                                    <div className="text-sm text-neutral-500">Line: {scale.lineHeight}</div>
                                    <div className="text-xs text-neutral-400">Weight: {scale.weight}</div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="space-y-4">
                            {typographyScale.map((scale, index) => (
                                <div key={index} className="flex items-center justify-between py-3 border-b border-neutral-200/50 last:border-0">
                                    <div className="text-sm font-medium text-neutral-900">{scale.example}</div>
                                    <div className="text-xs text-neutral-400 font-mono">{scale.size.split(' ')[0]}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {}
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
                            {typographyProps.map((row, index) => (
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
