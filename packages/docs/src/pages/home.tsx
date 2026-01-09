import { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Layout,
  Moon,
  Sun,
  Layers,
  Activity,
  Menu,
  X,
  FileText,
  Copy,
  Check,
  Github
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { Button } from "harmony-react-ui";
import { cn } from "harmony-react-ui";
import { github } from "../constants/socialConstants.ts";
import { FEATURE_CARDS, CONTAINER_VARIANTS, ITEM_VARIANTS, TECH_STACK, FAVICON_PATH } from "../constants/home.data";


export default function Home() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm i harmony-react-ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const { isDarkMode, toggleTheme } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-white dark:bg-neutral-50 selection:bg-primary selection:text-white overflow-x-hidden">
      { }
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        { }
        { }
        { }
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      { }
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={cn("p-4 rounded-3xl transition-all duration-500 flex items-center justify-between", scrolled ? "bg-white/90 dark:bg-neutral-50/90 border border-neutral-200 dark:border-neutral-200/20" : "")}>
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigate("/")}>
              <img src={FAVICON_PATH} alt="" className="w-8 h-8" />
              <span className="text-xl font-black tracking-tighter text-neutral-900 transition-colors">
                HARMONY
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate("/system")} className="text-sm font-bold text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-widest">Documentation</button>
              <a href={github} target="_blank" rel="noopener" className="text-sm font-bold text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-widest">Github</a>
              <div className="h-4 w-px bg-neutral-200" />
              <button
                onClick={toggleTheme}
                className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-100/10 text-neutral-600 hover:scale-110 active:scale-95 transition-all"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Button variant="primary" size="md" onClick={() => navigate("/system")} className="rounded-2xl ">
                Get Started
              </Button>
            </div>

            <button
              className="md:hidden p-3 bg-neutral-100 dark:bg-neutral-100/10 rounded-2xl text-neutral-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      { }
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-white dark:bg-neutral-50 pt-32 px-6 pb-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <button onClick={() => { navigate("/system"); setIsMenuOpen(false); }} className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-100/5 text-lg font-bold text-neutral-900">
                <FileText className="text-primary" /> Documentation
              </button>
              <button onClick={() => { setIsMenuOpen(false); }} className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-100/5 text-lg font-bold text-neutral-900">
                <Layers className="text-secondary" /> Components
              </button>
              <a href={github} target="_blank" className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-100/5 text-lg font-bold text-neutral-900">
                <Github className="text-neutral-900" /> GitHub
              </a>
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-100/10 text-neutral-900 font-bold"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <Button variant="primary" size="lg" onClick={() => { navigate("/system"); setIsMenuOpen(false); }} className="w-full justify-center rounded-2xl py-4 text-lg">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      { }
      <section className="relative pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col items-center text-center space-y-12"
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate="visible"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-neutral-100 dark:bg-neutral-100/10 rounded-full border border-neutral-200 dark:border-neutral-200/20 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-black text-neutral-700 uppercase tracking-[0.2em]">Next-Gen Design System</span>
            </div>

            <motion.h1 variants={ITEM_VARIANTS} className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 leading-[0.9] max-w-4xl">
              Architecting the <br />
              <span className="text-primary italic">future</span> of web UI.
            </motion.h1>


            <motion.p variants={ITEM_VARIANTS} className="text-xl md:text-2xl text-neutral-500 max-w-2xl font-medium leading-relaxed">
              Harmony provides a high-fidelity foundation for building modern, accessible, and performant interfaces with absolute consistency.
            </motion.p>

            <motion.div variants={ITEM_VARIANTS} className="flex flex-col sm:flex-row gap-6">
              <Button
                variant="primary"
                size="lg"
                className="h-16 px-10 rounded-2xl text-xl"
                rightIcon={<ArrowRight size={24} />}
                onClick={() => navigate("/system")}
              >
                Start Building
              </Button>
              <button
                className={cn(
                  "h-16 px-10 rounded-2xl text-xl font-black border-2 transition-all flex items-center gap-3 min-w-[280px] justify-center",
                  copied
                    ? "border-success bg-success/10 text-success"
                    : "border-neutral-100 dark:border-neutral-200/10 hover:bg-neutral-100 text-neutral-900"
                )}
                onClick={copyToClipboard}
              >
                {copied ? (
                  <>
                    <Check size={24} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={24} />
                    <span>npm i harmony-react-ui</span>
                  </>
                )}
              </button>
            </motion.div>

            { }
            <motion.div variants={ITEM_VARIANTS} className="pt-12 flex flex-wrap justify-center gap-10 opacity">
              {TECH_STACK.map((tech, index) => (
                <div key={index} className="flex items-center gap-2 font-black text-sm uppercase tracking-widest">
                  {tech.icon} {tech.name}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      { }
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURE_CARDS.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group p-10 bg-neutral-100 dark:bg-neutral-100/10 rounded-[40px] border border-neutral-200 dark:border-neutral-200/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <div className={cn("w-16 h-16 rounded-3xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:rotate-3", feature.bg, feature.color)}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-neutral-900 tracking-tighter mb-4 italic uppercase">{feature.title}</h3>
                <p className="text-neutral-500 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      { }
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-netural-100 dark:bg-neutral-50 border border-neutral-200 rounded-[60px] p-12 md:p-24 text-neutral-900 dark:text-white relative overflow-hidden transition-colors duration-300">
            { }

            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-8">
                <span className="inline-block px-4 py-1.5 bg-neutral-200/50 dark:bg-white/10 rounded-full text-xs font-black uppercase tracking-[0.3em] text-primary">High Fidelity</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none italic uppercase">Interactive <br /> Atomic Core.</h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-xl font-medium leading-relaxed">
                  Every component is a masterpiece of engineering. Pixel-perfect spacing, fluid animations, and robust functionality come as standard.
                </p>
                <Button variant="secondary" size="lg" className="rounded-2xl" rightIcon={<ArrowRight size={20} />} onClick={() => navigate("/system")}>
                  View Component Library
                </Button>
              </div>

              <div className="relative">
                { }
                <div className="grid grid-cols-2 gap-6 scale-110 -rotate-6 transition-transform hover:rotate-0 duration-700">
                  <div className="space-y-6 pt-12">
                    <div className="bg-white dark:bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-neutral-200 dark:border-white/10 space-y-4 shadow-xl dark:shadow-none transition-colors duration-300">
                      <div className="w-12 h-12 bg-primary rounded-xl" />
                      <div className="h-2 w-full bg-neutral-100 dark:bg-white/20 rounded-full" />
                      <div className="h-2 w-2/3 bg-neutral-100 dark:bg-white/20 rounded-full" />
                    </div>
                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-3xl space-y-4 shadow-xl dark:shadow-none border border-neutral-100 dark:border-neutral-700 transition-colors duration-300">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      </div>
                      <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-700 rounded-full" />
                      <Button variant="primary" size="sm" className="w-full">Action</Button>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-secondary/10 dark:bg-secondary/20 p-8 rounded-3xl border border-secondary/20 flex items-center justify-center">
                      <Activity className="w-12 h-12 text-secondary animate-pulse" />
                    </div>
                    <div className="bg-white dark:bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-neutral-200 dark:border-white/10 shadow-xl dark:shadow-none transition-colors duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                        <div className="space-y-1">
                          <div className="h-2 w-20 bg-neutral-200 dark:bg-white/20 rounded-full" />
                          <div className="h-1.5 w-12 bg-neutral-100 dark:bg-white/10 rounded-full" />
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map(x => (
                          <div key={x} className="h-8 bg-neutral-100 dark:bg-white/10 rounded-lg" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      { }
      <section className="py-48 text-center bg-white dark:bg-neutral-50 relative">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 leading-[0.9]">
            Ready to <span className="text-secondary italic">harmonize</span> your app?
          </h2>
          <p className="text-xl md:text-2xl text-neutral-500 font-medium">
            Join the community of developers building the next generation of digital products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Button
              variant="primary"
              size="lg"
              className="h-20 px-12 rounded-3xl text-2xl "
              onClick={() => navigate("/system")}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      { }
      <footer className="py-20 border-t border-neutral-100 dark:border-neutral-200/20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
              <Layout className="w-5 h-5 text-neutral-50" />
            </div>
            <span className="font-black text-neutral-900 tracking-tighter uppercase">Harmony Design</span>
          </div>

          <div className="flex gap-8 text-sm font-bold text-neutral-400 uppercase tracking-widest">
            <button onClick={() => navigate("/system")} className="hover:text-primary transition-colors">Documentation</button>
            <button onClick={() => navigate("/system")} className="hover:text-primary transition-colors">Components</button>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href={github} target="_blank" className="hover:text-primary transition-colors">Github</a>
          </div>

          <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest opacity-40">
            © 2026 Harmony UI. Built with passion.
          </div>
        </div>
      </footer>
    </div>
  );
}
