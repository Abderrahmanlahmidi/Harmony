import { useState } from "react";
import { SearchBar } from "../../../../../components/atoms/SearchBar";
import { Badge } from "../../../../../components/atoms/Badge";
import CodeBlock from "../CodeBlock";

export default function SearchPage() {
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        if (e.target.value) {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 800);
        }
    };

    return (
        <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
            {/* HERO SECTION */}
            <header className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-4">
                    <Badge variant="primary" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase">Atoms</Badge>
                    <Badge variant="neutral" className="px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase italic border-neutral-300">Navigation</Badge>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-neutral-900 leading-tight">
                    Search Bar.
                </h1>
                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                    A premium discovery tool. Features hardware-accelerated focus states, glassmorphism variants, and integrated keyboard shortcut indicators.
                </p>
            </header>

            {/* BASIC USAGE */}
            <section className="space-y-8">
                <CodeBlock
                    title="Interactive Search"
                    description="Standard search bar with integrated loading states and clear functionality."
                    code={`import { SearchBar } from "@/components/atoms/SearchBar";\n\n<SearchBar \n  placeholder="Search anything..." \n  isLoading={isLoading} \n  onChange={handleChange} \n/>`}
                >
                    <div className="p-4 w-full max-w-lg mx-auto">
                        <SearchBar
                            placeholder="Explore components, icons, and more..."
                            isLoading={isLoading}
                            value={searchValue}
                            onChange={handleSearch}
                            onClear={() => setSearchValue("")}
                        />
                        {searchValue && !isLoading && (
                            <p className="text-center mt-4 text-sm text-neutral-400 animate-in fade-in slide-in-from-top-2">
                                Searching for: <span className="font-bold text-neutral-900">"{searchValue}"</span>
                            </p>
                        )}
                    </div>
                </CodeBlock>
            </section>

            {/* SCALING */}
            <section className="space-y-8">
                <CodeBlock
                    title="Adaptive Scaling"
                    description="Three distinct sizes for varying layout requirements."
                    code={`<SearchBar size="sm" />\n<SearchBar size="md" />\n<SearchBar size="lg" />`}
                >
                    <div className="p-4 space-y-6 w-full max-w-lg mx-auto">
                        <SearchBar size="sm" placeholder="Small Search" />
                        <SearchBar size="md" placeholder="Medium Search" />
                        <SearchBar size="lg" placeholder="Large Search" />
                    </div>
                </CodeBlock>
            </section>
        </div>
    );
}
