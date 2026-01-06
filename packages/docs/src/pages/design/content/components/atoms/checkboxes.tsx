import { useState } from "react";
import { CheckSquare } from 'lucide-react';
import CodeBlock from "../CodeBlock";

import {
  checkboxExamples,
  checkboxProps,
  checkboxGroupProps,
  sizeDetails,
  usageExamples
} from "../../../../../constants/checkbox.data";

// Import your Checkbox component
import {  Checkbox as CheckboxComponent, CheckboxGroup as CheckboxGroupComponent  } from "harmony-react-ui";
import { PageHeader } from "../PageHeader";

export default function CheckboxesPage() {
  const [checkedItems, setCheckedItems] = useState({
    notifications: true,
    newsletter: false,
    marketing: false,
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [emailPreferences, setEmailPreferences] = useState({
    promotions: true,
    updates: false,
    security: true,
  });

  const categories = ["Technology", "Design", "Business", "Health", "Education", "Entertainment"];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleAllCategories = () => {
    if (selectedCategories.length === categories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([...categories]);
    }
  };

  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      {/* Using PageHeader component */}
      <PageHeader
        category="Form"
        title="Checkbox"
        description="A multi-selection tool for independent options. Features SVG stroke animations, indeterminate states, and logical grouping."
        icon={<CheckSquare className="w-10 h-10 text-primary" />}
        version="v1.0.0"
        badgeVariant="primary"
      />

      {/* PREVIEW SECTION */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Interactive Preview</h2>

        {checkboxExamples.map((example, index) => (
          <div key={index} className="space-y-6">
            <CodeBlock
              title={example.title}
              description={example.description}
              code={example.code}
            >
              {example.groupLabel ? (
                <div className="p-4">
                  <CheckboxGroupComponent label={example.groupLabel}>
                    {example.options.map((option: any, optionIndex) => (
                      <CheckboxComponent
                        key={optionIndex}
                        label={option.label}
                        description={option.description}
                        defaultChecked={option.defaultChecked}
                        size={option.size}
                        error={option.error}
                        disabled={option.disabled}
                        indeterminate={option.indeterminate}
                        name={option.name}
                      />
                    ))}
                  </CheckboxGroupComponent>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {example.options.map((option: any, optionIndex) => {
                    if (example.hasState && option.key) {
                      return (
                        <CheckboxComponent
                          key={optionIndex}
                          label={option.label}
                          description={option.description}
                          checked={checkedItems[option.key as keyof typeof checkedItems]}
                          onChange={(e) => setCheckedItems({
                            ...checkedItems,
                            [option.key!]: e.target.checked
                          })}
                        />
                      );
                    }
                    return (
                      <CheckboxComponent
                        key={optionIndex}
                        label={option.label}
                        description={option.description}
                        defaultChecked={option.defaultChecked}
                        size={option.size as any}
                        error={option.error}
                        disabled={option.disabled}
                        indeterminate={option.indeterminate}
                        name={option.name}
                      />
                    );
                  })}
                </div>
              )}
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
                <CheckboxComponent
                  size={size.size as any}
                  label={size.size.toUpperCase()}
                  defaultChecked
                />
                <div className="text-sm font-mono text-neutral-500">
                  {size.box.split(' ')[0]}
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">Dimensions:</div>
                  <div className="text-xs text-neutral-600 grid grid-cols-2 gap-2">
                    <div>Box: {size.box}</div>
                    <div>Icon: {size.icon}</div>
                    <div>Label: {size.label}</div>
                    <div>Desc: {size.description}</div>
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

      {/* USAGE EXAMPLES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Common Use Cases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usageExamples.map((usage, index) => (
            <div key={index} className="p-6 border border-neutral-200 rounded-2xl hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{usage.title}</div>
                  <div className="text-sm text-neutral-500">{usage.example}</div>
                </div>
              </div>
              <div className="space-y-2">
                {usage.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
              {usage.group && (
                <div className="mt-4 text-xs text-primary font-medium">
                  Typically used with CheckboxGroup
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* REAL-WORLD EXAMPLES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Real World Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-neutral-200 rounded-2xl">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Category Filters</h3>
            <div className="space-y-2">
              <CheckboxComponent
                label="Select All Categories"
                indeterminate={selectedCategories.length > 0 && selectedCategories.length < categories.length}
                checked={selectedCategories.length === categories.length}
                onChange={toggleAllCategories}
              />
              <div className="h-px bg-neutral-200 my-3"></div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <CheckboxComponent
                    key={category}
                    label={category}
                    size="sm"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                ))}
              </div>
              <div className="mt-4 text-sm text-neutral-500">
                {selectedCategories.length} of {categories.length} selected
              </div>
            </div>
          </div>

          <div className="p-6 border border-neutral-200 rounded-2xl">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Email Preferences</h3>
            <CheckboxGroupComponent label="Manage your email notifications">
              <CheckboxComponent
                label="Promotional Offers"
                checked={emailPreferences.promotions}
                onChange={(e) => setEmailPreferences({ ...emailPreferences, promotions: e.target.checked })}
                description="Receive special offers and discounts."
              />
              <CheckboxComponent
                label="Product Updates"
                checked={emailPreferences.updates}
                onChange={(e) => setEmailPreferences({ ...emailPreferences, updates: e.target.checked })}
                description="Get notified about new features."
              />
              <CheckboxComponent
                label="Security Alerts"
                checked={emailPreferences.security}
                onChange={(e) => setEmailPreferences({ ...emailPreferences, security: e.target.checked })}
                description="Important security notifications."
              />
            </CheckboxGroupComponent>
            <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
              <div className="text-sm text-neutral-700">
                <span className="font-semibold">Current selection:</span>{" "}
                {Object.entries(emailPreferences)
                  .filter(([_, value]) => value)
                  .map(([key]) => key)
                  .join(', ') || 'None'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPS DOCUMENTATION */}
      <section className="space-y-8">
        {/* Checkbox Props */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Checkbox Props</h2>

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
                {checkboxProps.map((row, index) => (
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
        </div>

        {/* CheckboxGroup Props */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">CheckboxGroup Props</h2>

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
                {checkboxGroupProps.map((row, index) => (
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
        </div>
      </section>
    </div>
  );
}



