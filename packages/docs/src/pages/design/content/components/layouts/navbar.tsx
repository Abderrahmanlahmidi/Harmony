import { Navigation } from "lucide-react";
import { Navbar } from "../../../../../../../harmony-ui/src/layouts/Navbar";
import {
  overviewCards,
  codeExamples,
  stylingExamples,
  propsTableData,
} from "../../../../../constants/navbar.data";
import {
  Zap,
  Smartphone,
  Palette,
  Layout,
  Menu,
  X,
  Sun,
  Moon,
  Github,
} from "lucide-react";
import { PageHeader } from "../PageHeader";
const IconComponent = ({ name }: { name: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    Zap: <Zap className="w-5 h-5 text-primary" />,
    Smartphone: <Smartphone className="w-5 h-5 text-neutral-600" />,
    Palette: <Palette className="w-5 h-5 text-neutral-600" />,
    Layout: <Layout className="w-5 h-5 text-primary" />,
    Menu: <Menu className="w-5 h-5 text-primary" />,
    X: <X className="w-5 h-5 text-primary absolute opacity-0" />,
    Sun: <Sun className="w-5 h-5 text-primary" />,
    Moon: <Moon className="w-5 h-5 text-primary absolute opacity-0" />,
    Github: <Github className="w-5 h-5 text-primary" />,
  };

  return icons[name] || null;
};

export default function NavbarPage() {
  return (
    <div className="space-y-12 pb-20">
      <PageHeader
        category="Layout"
        title="Navbar"
        description="A responsive, multi-functional navigation bar with theme switching, glassmorphism support, and animated mobile states."
        icon={<Navigation className="w-10 h-10 text-primary" />}
        version="v1.0.0"
      />

      {}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
          <h2 className="text-2xl font-black text-neutral-900 italic uppercase">
            Live Preview
          </h2>
        </div>
        <div className="relative h-[200px] dark:bg-neutral-50 bg-neutral-50 rounded-3xl border-2 border-dashed dark:border-neutral-300 border-neutral-700 overflow-hidden transform-gpu translate-z-0">
          <Navbar />
        </div>
      </section>

      {}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">
          Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {overviewCards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${card.bgColor} border ${card.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <IconComponent name={card.icon} />
                <h3 className="text-lg font-bold text-neutral-900">
                  {card.title}
                </h3>
              </div>
              <ul className="space-y-3 text-neutral-600">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                        card.icon === "Zap" ? "bg-primary" : "bg-neutral-400"
                      }`}
                    ></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">
          Installation & Usage
        </h2>
        {codeExamples.map((example, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">
              {example.title}
            </h3>
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
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">
          Styling & Customization
        </h2>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-neutral-900">
            Custom Styling Examples
          </h3>
          <div className="bg-neutral-900 rounded-xl p-6">
            <pre className="text-sm text-neutral-100 font-mono overflow-x-auto">
              <code>
                {stylingExamples
                  .map((example) => `/* ${example.title} */\n${example.code}`)
                  .join("\n\n")}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-neutral-900 italic uppercase border-b border-neutral-200 pb-2">
          Props Reference
        </h2>
        <div className="overflow-x-auto rounded-xl border border-neutral-200">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="text-left p-4 font-semibold text-neutral-900">
                  Prop
                </th>
                <th className="text-left p-4 font-semibold text-neutral-900">
                  Type
                </th>
                <th className="text-left p-4 font-semibold text-neutral-900">
                  Default
                </th>
                <th className="text-left p-4 font-semibold text-neutral-900">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {propsTableData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-neutral-50/50 transition-colors"
                >
                  <td className="p-4 font-mono text-sm text-primary font-medium">
                    {row.prop}
                  </td>
                  <td className="p-4 font-mono text-sm text-neutral-600">
                    {row.type}
                  </td>
                  <td className="p-4 font-mono text-sm text-neutral-600">
                    {row.default}
                  </td>
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
