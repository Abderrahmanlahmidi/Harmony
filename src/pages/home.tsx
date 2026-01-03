import { Github, Sparkles, Palette, Zap, Code, ArrowRight, Layout, ShieldCheck, Cpu } from 'lucide-react';
import {Button} from "../components/buttons/Button"
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col relative overflow-hidden">
      {/* Decorative Background Elements (Restored) */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Simple Top Bar - Very Top */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
            <Layout className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">Harmony<span className="text-primary">.</span></span>
        </div>
        <div className="flex items-center gap-4 md:gap-6 text-sm font-medium text-neutral-500">
          <a href="#" className="hover:text-neutral-900 transition-colors">Docs</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">Components</a>
          <Button variant="outline" size="sm" onClick={() => navigate("/system")}>
            Dashboard
          </Button>
        </div>
      </nav>

      {/* Main Content Space */}
      <main className="flex-1 relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-8 lg:py-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Tailwind CSS 4</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              The foundation for <br />
              <span className="text-primary">
                exceptional
              </span> products.
            </h1>

            <p className="text-lg text-neutral-500 max-w-xl leading-relaxed">
              Harmony is a design system and component library built for speed, accessibility, and absolute consistency. Crafted with React and TypeScript.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight size={20} />}
                onClick={() => navigate("/system")}
              >
                Explore Components
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Github size={20} />}
              >
                Star on GitHub
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><Cpu size={18} /> React 18</div>
              <div className="flex items-center gap-2"><ShieldCheck size={18} /> TypeScript</div>
              <div className="flex items-center gap-2"><Palette size={18} /> Lucide</div>
            </div>
          </div>

          {/* Simple Visual Element */}
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden aspect-video mt-8 md:mt-0">
            <div className="h-10 border-b border-neutral-100 flex items-center px-4 bg-neutral-50 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <div className="ml-4 flex-1 h-5 bg-white rounded border border-neutral-200 px-3 flex items-center">
                <div className="w-24 h-2 bg-neutral-100 rounded-full" />
              </div>
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              <div className="col-span-1 space-y-4">
                <div className="h-32 bg-primary/5 rounded-lg border border-primary/10" />
                <div className="h-24 bg-neutral-50 rounded-lg border border-neutral-100" />
              </div>
              <div className="col-span-2 space-y-4">
                <div className="h-12 bg-neutral-900 rounded-lg flex items-center px-4 gap-3">
                  <div className="w-4 h-4 bg-white/20 rounded-full" />
                  <div className="w-32 h-2 bg-white/20 rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-44 bg-neutral-50 rounded-lg border border-neutral-100 flex flex-col justify-end p-4">
                    <div className="w-full h-2 bg-neutral-200 rounded-full mb-2" />
                    <div className="w-2/3 h-2 bg-neutral-200 rounded-full" />
                  </div>
                  <div className="h-44 bg-secondary/5 rounded-lg border border-secondary/10 flex items-center justify-center">
                    <Zap className="text-secondary opacity-40 w-12 h-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
          {[
            {
              title: 'Design-First',
              desc: 'Premium aesthetics out of the box. No more generic-looking apps.',
              icon: Palette,
              color: 'text-primary',
              bg: 'bg-primary/10'
            },
            {
              title: 'Built for Speed',
              desc: 'Optimized performance with zero-runtime CSS and lightweight components.',
              icon: Zap,
              color: 'text-secondary',
              bg: 'bg-secondary/10'
            },
            {
              title: 'Full Customization',
              desc: 'Atomic design architecture allows for extreme flexibility and tailoring.',
              icon: Code,
              color: 'text-neutral-900',
              bg: 'bg-neutral-100'
            }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-primary/50 transition-colors duration-300">
              <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-neutral-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Simple Footer - Very Bottom */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-400 text-sm">
        <div className="flex items-center gap-2">
          <Layout className="w-5 h-5" />
          <span className="font-medium text-neutral-900">Harmony Design System</span>
        </div>
        <div className="flex gap-4 md:gap-6">
          <a href="#" className="hover:text-neutral-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-neutral-600 transition-colors">License</a>
          <a href="#" className="hover:text-neutral-600 transition-colors">Contact</a>
        </div>
        <p>© 2026 Harmony team.</p>
      </footer>
    </div>
  )
}
