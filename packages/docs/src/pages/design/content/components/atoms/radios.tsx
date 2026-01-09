import { useState } from "react";
import { Circle } from 'lucide-react';
import CodeBlock from "../CodeBlock";
import {
  radioExamples,
  radioProps,
  radioGroupProps,
  sizeDetails,
  usageExamples
} from "../../../../../constants/radio.data";

import { Radio as RadioComponent, RadioGroup as RadioGroupComponent } from "harmony-react-ui";
import { PageHeader } from "../PageHeader";
import { HARMONY_VERSION } from "../../../../../constants/common";

export default function RadiosPage() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [selectedSize, setSelectedSize] = useState("md");
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedPayment, setSelectedPayment] = useState("credit");

  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      { }
      <PageHeader
        category="Form"
        title="Radio"
        description="A refined selection tool for mutually exclusive options. Features smooth animations, distinct sizing, and rich labeling."
        icon={<Circle className="w-10 h-10 text-primary" />}
        version={HARMONY_VERSION}
        badgeVariant="primary"
      />

      { }
      <section className="space-y-8">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Interactive Preview</h2>

        {radioExamples.map((example, index) => (
          <div key={index} className="space-y-6">
            <CodeBlock
              title={example.title}
              description={example.description}
              code={example.code}
            >
              {example.hasState ? (
                <div className="p-4">
                  <RadioGroupComponent label={example.title}>
                    {example.options.map((option: any, optionIndex) => (
                      <RadioComponent
                        key={optionIndex}
                        label={option.label}
                        name={example.stateKey || "example"}
                        checked={example.stateKey === "selectedPlan" ? selectedPlan === option.value : selectedSize === option.value}
                        onChange={() => {
                          if (example.stateKey === "selectedPlan") {
                            setSelectedPlan(option.value);
                          } else if (example.stateKey === "selectedSize") {
                            setSelectedSize(option.value);
                          }
                        }}
                        description={option.description}
                        size={option.size}
                        {...option}
                      />
                    ))}
                  </RadioGroupComponent>
                </div>
              ) : (
                <div className="p-4 space-y-8">
                  {example.options.map((option: any, optionIndex) => (
                    <RadioComponent
                      key={optionIndex}
                      {...option}
                    />
                  ))}
                </div>
              )}
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
                <RadioComponent
                  size={size.size as any}
                  label={size.size.toUpperCase()}
                  name="size-demo"
                  checked={selectedSize === size.size}
                  onChange={() => setSelectedSize(size.size)}
                />
                <div className="text-sm font-mono text-neutral-500">
                  {size.outer}
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">Dimensions:</div>
                  <div className="text-xs text-neutral-600 grid grid-cols-2 gap-2">
                    <div>Outer: {size.outer}</div>
                    <div>Inner: {size.inner}</div>
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


      { }
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Common Use Cases</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usageExamples.map((usage, index) => (
            <div key={index} className="p-6 border border-neutral-200 rounded-2xl hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Circle className="w-4 h-4 text-primary" />
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
                  Typically used with RadioGroup
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      { }
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Real World Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-neutral-200 rounded-2xl">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Theme Selection</h3>
            <RadioGroupComponent label="Choose your theme">
              <RadioComponent
                label="Light Theme"
                name="theme"
                value="light"
                checked={selectedTheme === "light"}
                onChange={(e) => setSelectedTheme(e.target.value)}
                description="Clean interface with light backgrounds"
              />
              <RadioComponent
                label="Dark Theme"
                name="theme"
                value="dark"
                checked={selectedTheme === "dark"}
                onChange={(e) => setSelectedTheme(e.target.value)}
                description="Reduced eye strain in low light"
              />
              <RadioComponent
                label="System Default"
                name="theme"
                value="system"
                checked={selectedTheme === "system"}
                onChange={(e) => setSelectedTheme(e.target.value)}
                description="Follows your operating system preference"
              />
            </RadioGroupComponent>
          </div>

          <div className="p-6 border border-neutral-200 rounded-2xl">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Payment Method</h3>
            <RadioGroupComponent label="Select payment method">
              <RadioComponent
                label="Credit Card"
                name="payment"
                value="credit"
                checked={selectedPayment === "credit"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                description="Visa, Mastercard, American Express"
              />
              <RadioComponent
                label="PayPal"
                name="payment"
                value="paypal"
                checked={selectedPayment === "paypal"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                description="Secure online payments"
              />
              <RadioComponent
                label="Bank Transfer"
                name="payment"
                value="bank"
                checked={selectedPayment === "bank"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                description="Direct bank transfer"
              />
              <RadioComponent
                label="Cryptocurrency"
                name="payment"
                value="crypto"
                checked={selectedPayment === "crypto"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                description="Bitcoin, Ethereum, USDC"
              />
            </RadioGroupComponent>
          </div>
        </div>
      </section>

      { }
      <section className="space-y-8">
        { }
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">Radio Props</h2>

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
                {radioProps.map((row, index) => (
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

        { }
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">RadioGroup Props</h2>

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
                {radioGroupProps.map((row, index) => (
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
