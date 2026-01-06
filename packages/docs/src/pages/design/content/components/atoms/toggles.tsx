import { useState } from "react";
import { ToggleLeft } from 'lucide-react';
import CodeBlock from "../CodeBlock";
import {
  toggleExamples,
  toggleProps,
  sizeDetails,
  usageExamples,
} from "../../../../../constants/toggle.data";

import {  Toggle as ToggleComponent  } from "harmony-react-ui";
import { PageHeader } from "../PageHeader";

export default function TogglesPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false,
    twoFactor: true,
  });

  const [accessibility, setAccessibility] = useState({
    highContrast: false,
    reducedMotion: true,
    largeText: false,
    colorBlind: false,
  });

  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      {}
      <PageHeader
        category="Form"
        title="Toggle"
        description="A physical switch for binary actions. Features spring-physics animations, thematic color synchronization, and distinct adaptive sizing."
        icon={<ToggleLeft className="w-10 h-10 text-primary" />}
        version="v1.0.0"
        badgeVariant="primary"
      />

      {}
      <section className="space-y-8">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Interactive Preview</h2>

        {toggleExamples.map((example, index) => (
          <div key={index} className="space-y-6">
            <CodeBlock
              title={example.title}
              description={example.description}
              code={example.code}
            >
              <div className="p-4 space-y-6">
                {example.options.map((option: any, optionIndex) => {
                  if (example.hasState && option.key) {
                    return (
                      <ToggleComponent
                        key={optionIndex}
                        label={option.label}
                        description={option.description}
                        checked={settings[option.key as keyof typeof settings]}
                        onChange={(e) => setSettings({
                          ...settings,
                          [option.key!]: e.target.checked
                        })}
                        size={option.size}
                        error={option.error}
                        disabled={option.disabled}
                      />
                    );
                  }
                  return (
                    <ToggleComponent
                      key={optionIndex}
                      label={option.label}
                      description={option.description}
                      defaultChecked={option.defaultChecked}
                      size={option.size}
                      error={option.error}
                      disabled={option.disabled}
                    />
                  );
                })}
              </div>
            </CodeBlock>
          </div>
        ))}
      </section>

      {}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Size Specifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sizeDetails.map((size, index) => (
            <div key={index} className="p-6 border border-neutral-200 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <ToggleComponent
                  size={size.size as any}
                  label={size.size.toUpperCase()}
                  defaultChecked
                />
                <div className="text-sm font-mono text-neutral-500">
                  {size.track}
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">Dimensions:</div>
                  <div className="text-xs text-neutral-600 grid grid-cols-2 gap-2">
                    <div>Track: {size.track}</div>
                    <div>Thumb: {size.thumb}</div>
                    <div>Travel: {size.translate}</div>
                    <div>Label: {size.label}</div>
                  </div>
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

      {}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Common Use Cases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usageExamples.map((usage, index) => (
            <div key={index} className="p-6 border border-neutral-200 rounded-2xl hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ToggleLeft className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{usage.title}</div>
                  <div className="text-sm text-neutral-500">{usage.example}</div>
                </div>
              </div>
              <div className="space-y-3">
                {usage.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <div className="text-sm text-neutral-600">{item}</div>
                    <div className="text-xs text-neutral-400 px-2 py-1 bg-neutral-100 rounded">
                      {usage.springPhysics ? "Spring physics" : "Standard"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Real World Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-neutral-200 rounded-2xl">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Application Settings</h3>
            <div className="space-y-4">
              <ToggleComponent
                label="Dark Mode"
                checked={settings.darkMode}
                onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
                description="Use dark theme across the application"
              />
              <ToggleComponent
                label="Auto-save Documents"
                checked={settings.autoSave}
                onChange={(e) => setSettings({ ...settings, autoSave: e.target.checked })}
                description="Save changes automatically every 30 seconds"
              />
              <ToggleComponent
                label="Two-factor Authentication"
                checked={settings.twoFactor}
                onChange={(e) => setSettings({ ...settings, twoFactor: e.target.checked })}
                description="Add an extra layer of security to your account"
              />
            </div>
          </div>

          <div className="p-6 border border-neutral-200 rounded-2xl">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Accessibility Settings</h3>
            <div className="space-y-4">
              <ToggleComponent
                label="High Contrast Mode"
                checked={accessibility.highContrast}
                onChange={(e) => setAccessibility({ ...accessibility, highContrast: e.target.checked })}
                description="Increase contrast for better visibility"
              />
              <ToggleComponent
                label="Reduced Motion"
                checked={accessibility.reducedMotion}
                onChange={(e) => setAccessibility({ ...accessibility, reducedMotion: e.target.checked })}
                description="Minimize animations and transitions"
              />
              <ToggleComponent
                label="Large Text"
                checked={accessibility.largeText}
                onChange={(e) => setAccessibility({ ...accessibility, largeText: e.target.checked })}
                description="Increase text size across the interface"
              />
              <ToggleComponent
                label="Color-blind Mode"
                checked={accessibility.colorBlind}
                onChange={(e) => setAccessibility({ ...accessibility, colorBlind: e.target.checked })}
                description="Use color-blind friendly palette"
              />
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
              {toggleProps.map((row, index) => (
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
