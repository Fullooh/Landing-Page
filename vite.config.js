import { defineConfig } from 'vite';

export default defineConfig({
    base: '/',
    server: {
        open: true
    },
    build: {
        outDir: '.',
        emptyOutDir: false,
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                manualChunks: undefined,
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'index.css') return 'assets/style-[hash].css';
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    }
});