import { Palette, Copy, Check } from "lucide-react";
import { useState } from "react";

const ColorBlock = ({ name, variable }: { name: string; variable: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(variable);
      const element = document.createElement("div");
      element.style.cssText = `background-color: var(${variable}); position: absolute; opacity: 0;`;
      document.body.appendChild(element);
      const computedColor = getComputedStyle(element).backgroundColor;
      document.body.removeChild(element);
      const colorText = `CSS Variable: ${variable}
Hex/RGB: ${computedColor}
Name: ${name}`;
      await navigator.clipboard.writeText(colorText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      const textArea = document.createElement("textarea");
      textArea.value = variable;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group relative space-y-2">
      <div
        className={`h-20 rounded-xl shadow-sm border border-black/5 dark:border-white/10 transition-transform group-hover:-translate-y-1 cursor-pointer`}
        style={{ backgroundColor: `var(${variable})` }}
        onClick={handleCopy}
      />
      <div className="flex justify-between items-start px-0.5">
        <div className="min-w-0">
          <p className="text-xs font-bold text-neutral-900 truncate">{name}</p>
          <p className="text-[10px] font-mono text-neutral-400 truncate">
            {variable}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className={`
                        p-1 rounded-md transition-all duration-200 flex-shrink-0
                        ${copied
              ? "bg-green-100 text-green-600"
              : "opacity-0 group-hover:opacity-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            }
                    `}
          title={copied ? "Copied!" : `Copy ${variable}`}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
        </button>
      </div>

      {copied && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 text-xs rounded-md animate-in fade-in slide-in-from-top-1 duration-200">
          Copied!
          <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neutral-900 dark:bg-neutral-50 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default function Colors() {
  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight flex items-center gap-3">
          <Palette className="w-8 h-8 text-primary" />
          Colors
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl">
          A comprehensive guide to the color palette used in the Harmony Design
          System. Click on any color to copy its details.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900 border-b pb-2">
          Brand
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorBlock name="Primary" variable="--color-brand-primary" />
          <ColorBlock
            name="Primary Hover"
            variable="--color-brand-primary-hover"
          />
          <ColorBlock name="Secondary" variable="--color-brand-secondary" />
          <ColorBlock
            name="Secondary Hover"
            variable="--color-brand-secondary-hover"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900 border-b pb-2">
          Semantic
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Success
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ColorBlock name="Success" variable="--color-semantic-success" />
              <ColorBlock
                name="Success Hover"
                variable="--color-semantic-success-hover"
              />
              <ColorBlock
                name="Success Light"
                variable="--color-semantic-success-light"
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Danger
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ColorBlock name="Danger" variable="--color-semantic-danger" />
              <ColorBlock
                name="Danger Hover"
                variable="--color-semantic-danger-hover"
              />
              <ColorBlock
                name="Danger Light"
                variable="--color-semantic-success-light"
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Warning
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ColorBlock name="Warning" variable="--color-semantic-warning" />
              <ColorBlock
                name="Warning Hover"
                variable="--color-semantic-warning-hover"
              />
              <ColorBlock
                name="Warning Light"
                variable="--color-semantic-warning-light"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900 border-b pb-2">
          Neutrals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <ColorBlock name="50" variable="--color-neutral-50" />
          <ColorBlock name="100" variable="--color-neutral-100" />
          <ColorBlock name="200" variable="--color-neutral-200" />
          <ColorBlock name="300" variable="--color-neutral-300" />
          <ColorBlock name="400" variable="--color-neutral-400" />
          <ColorBlock name="500" variable="--color-neutral-500" />
          <ColorBlock name="600" variable="--color-neutral-600" />
          <ColorBlock name="700" variable="--color-neutral-700" />
          <ColorBlock name="800" variable="--color-neutral-800" />
          <ColorBlock name="900" variable="--color-neutral-900" />
        </div>
      </section>
    </div>
  );
}