import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/components/index.ts'],
    format: ['cjs', 'esm'],
    dts: false,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'class-variance-authority', 'clsx', 'tailwind-merge'],
    treeshake: true,
    minify: false,
    splitting: false,
    outDir: 'dist',
    esbuildOptions(options) {
        options.jsx = 'automatic';
    },
});
