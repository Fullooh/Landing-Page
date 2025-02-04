import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    base: '/',
    server: {
        open: true
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                manualChunks: undefined,
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'index.css') return 'assets/style-[hash].css';
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    }
});