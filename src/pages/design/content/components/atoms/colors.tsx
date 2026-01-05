import { useState } from "react";
import { Copy, Palette, Check } from "lucide-react";
import { cn } from "../../../../../utils/cn";

const TAILWIND_COLORS = {
  slate: { "50": "#f8fafc", "100": "#f1f5f9", "200": "#e2e8f0", "300": "#cbd5e1", "400": "#94a3b8", "500": "#64748b", "600": "#475569", "700": "#334155", "800": "#1e293b", "900": "#0f172a", "950": "#020617" },
  gray: { "50": "#f9fafb", "100": "#f3f4f6", "200": "#e5e7eb", "300": "#d1d5db", "400": "#9ca3af", "500": "#6b7280", "600": "#4b5563", "700": "#374151", "800": "#1f2937", "900": "#111827", "950": "#030712" },
  zinc: { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "800": "#27272a", "900": "#18181b", "950": "#09090b" },
  neutral: { "50": "#fafafa", "100": "#f5f5f5", "200": "#e5e5e5", "300": "#d4d4d4", "400": "#a3a3a3", "500": "#737373", "600": "#525252", "700": "#404040", "800": "#262626", "900": "#171717", "950": "#0a0a0a" },
  stone: { "50": "#fafaf9", "100": "#f5f5f4", "200": "#e7e5e4", "300": "#d6d3d1", "400": "#a8a29e", "500": "#78716c", "600": "#57534e", "700": "#44403c", "800": "#292524", "900": "#1c1917", "950": "#0c0a09" },
  red: { "50": "#fef2f2", "100": "#fee2e2", "200": "#fecaca", "300": "#fca5a5", "400": "#f87171", "500": "#ef4444", "600": "#dc2626", "700": "#b91c1c", "800": "#991b1b", "900": "#7f1d1d", "950": "#450a0a" },
  orange: { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12", "950": "#431407" },
  amber: { "50": "#fffbeb", "100": "#fef3c7", "200": "#fde68a", "300": "#fcd34d", "400": "#fbbf24", "500": "#f59e0b", "600": "#d97706", "700": "#b45309", "800": "#92400e", "900": "#78350f", "950": "#451a03" },
  yellow: { "50": "#fefce8", "100": "#fef9c3", "200": "#fef08a", "300": "#fde047", "400": "#facc15", "500": "#eab308", "600": "#ca8a04", "700": "#a16207", "800": "#854d0e", "900": "#713f12", "950": "#422006" },
  lime: { "50": "#f7fee7", "100": "#ecfccb", "200": "#d9f99d", "300": "#bef264", "400": "#a3e635", "500": "#84cc16", "600": "#65a30d", "700": "#4d7c0f", "800": "#3f6212", "900": "#365314", "950": "#1a2e05" },
  green: { "50": "#f0fdf4", "100": "#dcfce7", "200": "#bbf7d0", "300": "#86efac", "400": "#4ade80", "500": "#22c55e", "600": "#16a34a", "700": "#15803d", "800": "#166534", "900": "#14532d", "950": "#052e16" },
  emerald: { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b", "950": "#022c22" },
  teal: { "50": "#f0fdfa", "100": "#ccfbf1", "200": "#99f6e4", "300": "#5eead4", "400": "#2dd4bf", "500": "#14b8a6", "600": "#0d9488", "700": "#0f766e", "800": "#115e59", "900": "#134e4a", "950": "#042f2e" },
  cyan: { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63", "950": "#083344" },
  sky: { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e", "950": "#082f49" },
  blue: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
  indigo: { "50": "#eef2ff", "100": "#e0e7ff", "200": "#c7d2fe", "300": "#a5b4fc", "400": "#818cf8", "500": "#6366f1", "600": "#4f46e5", "700": "#4338ca", "800": "#3730a3", "900": "#312e81", "950": "#1e1b4b" },
  violet: { "50": "#f5f3ff", "100": "#ede9fe", "200": "#ddd6fe", "300": "#c4b5fd", "400": "#a78bfa", "500": "#8b5cf6", "600": "#7c3aed", "700": "#6d28d9", "800": "#5b21b6", "900": "#4c1d95", "950": "#2e1065" },
  purple: { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87", "950": "#3b0764" },
  fuchsia: { "50": "#fdf4ff", "100": "#fae8ff", "200": "#f5d0fe", "300": "#f0abfc", "400": "#e879f9", "500": "#d946ef", "600": "#c026d3", "700": "#a21caf", "800": "#86198f", "900": "#701a75", "950": "#4a044e" },
  pink: { "50": "#fdf2f8", "100": "#fce7f3", "200": "#fbcfe8", "300": "#f9a8d4", "400": "#f472b6", "500": "#ec4899", "600": "#db2777", "700": "#be185d", "800": "#9d174d", "900": "#831843", "950": "#500724" },
  rose: { "50": "#fff1f2", "100": "#ffe4e6", "200": "#fecdd3", "300": "#fda4af", "400": "#fb7185", "500": "#f43f5e", "600": "#e11d48", "700": "#be123c", "800": "#9f1239", "900": "#881337", "950": "#4c0519" }
};

const SHADES = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

const ColorSwatch = ({ shade, hex }: { shade: string; hex: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className="group relative flex flex-col gap-1 cursor-pointer transition-transform duration-200 active:scale-95"
      onClick={handleCopy}
    >
      <div
        className="aspect-square w-full rounded-lg  border border-black/5 dark:border-white/10  transition-all duration-200"
        style={{ backgroundColor: hex }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? (
            <Check
              size={16}
              className={cn("text-white drop-shadow-md animate-in zoom-in duration-200", parseInt(shade) < 500 && "text-black/60")}
            />
          ) : (
            <Copy
              size={16}
              className={cn("text-white drop-shadow-md", parseInt(shade) < 500 && "text-black/40")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default function Colors() {
  return (
    <div className="space-y-16 max-w-7xl mx-auto p-12 pb-40">
      <header className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-4">
          <Palette className="w-10 h-10 text-primary" />
          <div className="h-8 w-px bg-neutral-200" />
          <span className="text-sm font-black uppercase tracking-widest text-neutral-400">Design Tokens</span>
        </div>
        <h1 className="text-7xl font-black tracking-tighter text-neutral-900 leading-tight">
          Color Palette.
        </h1>
        <p className="text-xl text-neutral-500 font-medium leading-relaxed">
          The foundation of the Harmony Design System. A curated set of functional colors and a full spectrum of tonal scales for infinite flexibility. Click any swatch to copy its HEX value.
        </p>
      </header>

      <section className="space-y-8 overflow-x-auto pb-8">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-[120px_repeat(11,1fr)] gap-4 mb-4 px-2">
            <div className="flex items-end text-xs font-black uppercase tracking-tighter text-neutral-400">Hue</div>
            {SHADES.map(shade => (
              <div key={shade} className="flex items-end justify-center text-xs font-black text-neutral-400">
                {shade}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {Object.entries(TAILWIND_COLORS).map(([colorName, shades]) => (
              <div key={colorName} className="grid grid-cols-[120px_repeat(11,1fr)] gap-4 items-center group/row">
                <div className="px-2">
                  <span className="text-sm font-black text-neutral-900 capitalize group-hover/row:text-primary transition-colors">
                    {colorName}
                  </span>
                </div>
                {SHADES.map(shade => (
                  <ColorSwatch
                    key={`${colorName}-${shade}`}
                    shade={shade}
                    hex={shades[shade as keyof typeof shades]}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-12 border-t border-neutral-200 pt-16">
        <div className="space-y-2">
          <h2 className="text-3xl font-black tracking-tighter text-neutral-900 italic uppercase">System Defaults</h2>
          <p className="text-neutral-500 font-medium">Core brand and semantic tokens used across components.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400">Brand</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-neutral-100 dark:bg-neutral-100/10 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-primary" />
                <div>
                  <p className="text-sm font-black text-neutral-900">Primary</p>
                  <p className="text-[10px] font-mono text-neutral-400">--color-primary</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-neutral-100 dark:bg-neutral-100/10 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-secondary" />
                <div>
                  <p className="text-sm font-black text-neutral-900">Secondary</p>
                  <p className="text-[10px] font-mono text-neutral-400">--color-secondary</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400">Semantic Success</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-neutral-100 dark:bg-neutral-100/10 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-success" />
                <div>
                  <p className="text-sm font-black text-neutral-900">Success</p>
                  <p className="text-[10px] font-mono text-neutral-400">--color-success</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400">Semantic Danger</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-neutral-100 dark:bg-neutral-100/10 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-danger" />
                <div>
                  <p className="text-sm font-black text-neutral-900">Danger</p>
                  <p className="text-[10px] font-mono text-neutral-400">--color-danger</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-neutral-400">Semantic Warning</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-neutral-100 dark:bg-neutral-100/10 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-warning" />
                <div>
                  <p className="text-sm font-black text-neutral-900">Warning</p>
                  <p className="text-[10px] font-mono text-neutral-400">--color-warning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}